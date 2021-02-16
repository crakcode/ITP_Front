import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { getComapanyCountByList } from '../../../lib/company';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class hChart extends PureComponent {


componentDidMount=()=>{
  console.log(this.state.id);
  this.handleView();
}
handleView=()=>{
  window.location.reload();
}

  render() {
    return (
      <div>hellossworld</div>
    );
  }
}
export default hChart;