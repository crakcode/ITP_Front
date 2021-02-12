import { Button, Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getCompanyByLocation, getCompanyCount} from '../../../lib/company';
import ReactPaginate from 'react-paginate';
import LineCha from './LineChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      display: 'flex',
    },
      menuButton: {
    marginRight: 'auto'
  },
  paper: {
      width: `750px`,
    },  
  
  
};
class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            count:[],
            keyword:'',
            companys:[],
            name:["서울","경기도","강원도","충청북도","충청남도"]
        };
    }
    componentDidMount() {
        this.getCompanyCount();
    }

    getCompanyCount=async()=>{
        let {data} = await getCompanyCount();
        this.setState({count:data});
        console.log(data);
    }
    handleClick=(e)=>{
        this.setState({keyword:e.value});
        this.handleCompanyList(this.state.keyword)
    }
    handleCompanyList=async(keyword)=>{
        let data2=[];
        const {data}= await getCompanyByLocation(keyword);
        console.log(data[0]);
        if (data.length<10){
            this.setState({companys:data});
        }
        else{
            for(let i=0;i<11;i++){
                data2.push(data[i])
            }
            this.setState({companys:data2});
        }
        this.setState({keyword:''});

    }
  
    render() {
      const { classes } = this.props;
      const {count}=this.state;
        const data = [
            {
              "name": "서울",
              "count": count[0]
            },
            {
                "name": "경기도",
                "count": count[1]
            },
              {
                "name": "강원도",
                "count": count[2]
            },
              {
                "name": "충청북도",
                "count": count[3]
            },
              {
                "name": "충청남도",
                "count": count[4]
            },
            ]
        
        return (
            <div>
              <Paper className={classes.paper}> 
                <br/>
                <br/>
                <br/>
                <br/>
            지역명을 클릭하면 리스트가 나옵니다.
            <LineChart width={730} height={250} data={data} 
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" onClick={(i)=>this.handleClick(i)}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
            
        <TableBody>
          {this.state.companys.map((row) => (
            <TableRow key={row.companyId} >
            <TableCell component="th" scope="row">{row.companyId}</TableCell>
              <TableCell component="th" scope="row">
                {row.companyName}
              </TableCell>
              <TableCell align="right">{row.companyLocation}</TableCell>
              <TableCell align="right">{row.companyTel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Paper>
            
            </div>


        )
      }
}
export default withStyles(styles)(Dashboard);