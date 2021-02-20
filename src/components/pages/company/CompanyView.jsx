import { Paper, TableBody, TableCell, TableRow, TextField, withStyles } from '@material-ui/core'
import {  deleteCommunity, getCommunityById } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
// import SimpleModal from './SimpleModal';
import { withRouter } from 'react-router-dom';
import { getComapanyInfoFromBlind, getCompanyByName } from '../../../lib/company';
import { createMyCompanyList } from '../../../lib/user';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // Marker 추가
import NaverMap_Company from './NaverMap';
import Grid from '@material-ui/core/Grid';
import { createReview, getCompanyId ,getReviewByCompanyId} from '../../../lib/review';
import { TransferWithinAStationSharp } from '@material-ui/icons';

const styles = {
    paper: {
        // width: `750px`,
        // height: `580px`
        textAlign: 'center',
      },
      list:{
        height: `350px`
      }

    }  

class CompanyView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            content:'',
            company:[],
            reviews:[],
            latitude:0,
            longitude:0,
            score:0,
            review:'',
            description:''
        }
    }
    componentDidMount=()=>{ 
        this.handleView();
        this.handelReview();
        this.handleDesc();
      }
    componentWillUnmount=()=>{
        window.location.reload();
    }  
    handleView=async()=>{
        const {data}=await getCompanyByName(this.state.id);
        this.setState({company:data[0]});
        this.setState({longitude:data[0].longitude});
        this.setState({latitude:data[0].latitude});
    }
    handleDesc=async()=>{
        const {id}=this.state;
        let {data}=await getComapanyInfoFromBlind(id);
        console.log(data.length);
        if(data.length!==0){
            this.setState({description:data})
        }
        else{
            this.setState({description:"데이터가 없습니다."})
        }
        console.log(this.state.description);
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addCompany=async()=>{
        let name=this.state.id
        const ucode=1
        await createMyCompanyList(ucode,name);
    }
    
    crateReview=async()=>{
        const {id} =this.state;
        let {data}=await getCompanyId(id);
        let review={review:this.state.review,score:this.state.score};
        await createReview(data,1,review);
      }

    handelReview=async()=>{
        const {id} =this.state;
        let company=await getCompanyId(id);
        console.log(company.data);
      }
  
    render(){
        const { classes,state } = this.props;
        const {longitude}=this.state.company;
        return(
    <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Grid>

    <Grid container spacing={3}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
                회사명<br/>
                {this.state.company.companyName}
                <br/><br/><br/>
                위치<br/>
                {this.state.company.companyLocation}
                <br/><br/><br/>
                회사 전화번호<br/>
                {this.state.company.companyTel}
                <br/><br/><br/>
                회사정보<br/>
                {this.state.description}
                <br/>
            <Button
                margin="normal"
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.addCompany();
                }}
              >
                  회사 추가하기
            </Button>
          </Paper>
        </Grid>
    
        <Grid item xs={6}>
          <Paper className={classes.paper}><NaverMap_Company data={this.state} /></Paper>
        </Grid>
    
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.list}>
        <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.crateReview();
                }}
              >
                  댓글달기
                  </Button>
            <TextField
              variant="standard"
              margin="normal"
              mask="9"
              label="점수"
              required
              name="score"
              onChange={this.handleChange}
            />

            <TextField
              variant="standard"
              margin="normal"
              label="내용"
              required
              name="review"
              onChange={this.handleChange}
            />


        <TableBody>
          {this.state.reviews.map((row) => (
            <TableRow key={row.id} onClick={()=>this.handleDelete(row)}>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.review}</TableCell>
              <TableCell align="right">{row.user.name}</TableCell>
              <Button onClick={()=>this.handleDelete(row)}>삭제</Button>

            </TableRow>
          ))}
            </TableBody>


        </Paper>
        </Grid>
    

    </Grid>


        </div>
        )
    }





}


export default withRouter (withStyles(styles)(CompanyView));