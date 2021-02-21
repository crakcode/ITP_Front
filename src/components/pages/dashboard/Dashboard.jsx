import { Button, Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getComapanyCountByList, getCompanyByLocation, getCompanyCount} from '../../../lib/company';
import ReactPaginate from 'react-paginate';
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getPostList } from '../../../lib/post';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



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
      height: `320px`,
      textAlign: 'center',
    },  
    post: {
      textAlign: 'center',
    },  
    notification: {
      height: `320px`,
      textAlign: 'center',
    },  


  
};
class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            posts: [],
            count:[],
            keyword:'',
            companys:[],
            countlist:[],
            name:["서울","경기도","강원도","충청북도","충청남도"]
        };
    }
    componentDidMount() {
        this.getCompanyCount();
        this.doLocationDefualt();
        this.handleList();
    }
    doLocationDefualt=async()=>{
      let data2=[];
      const {data} =await getCompanyByLocation("서울");
      if (data.length<5){
        this.setState({companys:data});
    }
    else{
        for(let i=0;i<6;i++){
            data2.push(data[i])
        }
        this.setState({companys:data2});
    }
    }

    clickLocationButton=async(location)=>{
      let data2=[];
      const {data} =await getCompanyByLocation(location);
      if (data.length<5){
        this.setState({companys:data});
    }
    else{
        for(let i=0;i<6;i++){
            data2.push(data[i])
        }
        this.setState({companys:data2});
    }
    }

    getCompanyCount=async()=>{
        let params=["서울","경기","강원","광주","부산"];
        let {data} = await getComapanyCountByList(params);
        this.setState({countlist:data});
        console.log(typeof data);
        let h=Object.values(data);
        var str = JSON.stringify(data);
        this.countlist=JSON.stringify(data);
    }
    handleClick=(e)=>{
        this.setState({keyword:e.value});
        this.handleCompanyList(this.state.keyword)
    }
    clickView=async(row)=>{
      this.props.history.push(`/company/${row.companyName}`);
    }
    handleList=async()=>{
      let {data}=await getPostList();
      this.setState({posts: data});
      console.log(data);
  }
  handleView=async(row)=>{
    let id=row.id;
    console.log(id);
    this.props.history.push(`/post/${id}`);
}  

    render() {
      const { classes } = this.props;
      const {count,countlist}=this.state;
      const data = [
        { name: "서울", value: countlist["서울"] },
        { name: "경기도", value: countlist["경기"] },
        { name: "강원도", value: countlist["강원"] },
        { name: "부산광역시", value: countlist["부산"] },
        { name: "광주광역시", value: countlist["광주"] }
      ];
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
        <Paper className={classes.paper}>
          회사 지역별 건수

        <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={160}
        cy={150}
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
      <Tooltip />
    </PieChart>
      </Paper>
      </Grid>
      <Grid item xs={6}> 
          <Paper className={classes.post}>
          커뮤니티
          <TableBody>
          {this.state.posts.map((row) => (
            <TableRow key={row.id} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.content}</TableCell>
              <TableCell align="left">{row.writer}</TableCell>
              <TableCell align="left">{row.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.notification}>공지사항</Paper>
        </Grid>

      </Grid>
    </div>

        )
      }
}
export default withStyles(styles)(Dashboard);