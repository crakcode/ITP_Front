import { Button, Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getComapanyCountByList, getCompanyByLocation, getCompanyCount} from '../../../lib/company';
import ReactPaginate from 'react-paginate';
import LineCha from './LineChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
      display: 'flex',
    },
      menuButton: {
    marginRight: 'auto'
  },
  paper: {
      // width: `750px`,
      // height: `580px`
      textAlign: 'center',
    },  
  paperList: {
      width: `750px`,
      height: `580px`,
      textAlign: 'center',
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


    clickLocationButton=async(location)=>{
      let data2=[];
      const {data} =await getCompanyByLocation(location);
      if (data.length<10){
        this.setState({companys:data});
    }
    else{
        for(let i=0;i<11;i++){
            data2.push(data[i])
        }
        this.setState({companys:data2});
    }
    }

    getCompanyCount=async()=>{
        let params=["서울","경기","강원","광주","부산"];
        let {data} = await getComapanyCountByList(params);
        console.log(data);
    }
    handleClick=(e)=>{
        this.setState({keyword:e.value});
        this.handleCompanyList(this.state.keyword)
    }
    clickView=async(row)=>{
      this.props.history.push(`/company/${row.companyName}`);
    }
  
    render() {
      const { classes } = this.props;
      const {count}=this.state;
        return (
          <div>
            <Grid>

                <br/>
                <br/>
                <br/>
                <br/>
        <Button variant="contained" onClick={()=>this.clickLocationButton("서울")}>서울</Button>
        <Button variant="contained" onClick={()=>this.clickLocationButton("경기도")}>경기도</Button>
        <Button variant="contained" onClick={()=>this.clickLocationButton("강원")}>강원</Button>
        <Button variant="contained" onClick={()=>this.clickLocationButton("광주")}>광주</Button>
        <Button variant="contained" onClick={()=>this.clickLocationButton("부산")}>부산</Button>
        </Grid>
      <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paperList}>        
        <TableBody>
          {this.state.companys.map((row) => (
            <TableRow key={row.companyId} onClick={()=>{this.clickView(row)}}>
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
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>

      </Grid>
    </div>

        )
      }
}
export default withStyles(styles)(Dashboard);