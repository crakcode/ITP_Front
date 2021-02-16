import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { getComapanyCountByList } from '../../../lib/company';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class PChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';
  constructor(props) {
    super(props)
    this.state = {
        population:0,
    }
}

  dogetComapanyCountByList=async()=>{
    const params=["서울","부산"];
    const {data}=await getComapanyCountByList(params);
    console.log(data["서울"]);
    this.setState({population:data["서울"]});
}
  render() {
    this.dogetComapanyCountByList();
    const data = [
        { name: 'Group A', value: this.state.population },
        { name: 'Group B', value: 111 },
        { name: 'Group C', value: 111 },
        { name: 'Group D', value: 111 },
      ];
      
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
      <hChart/>

      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }
}
export default PChart;