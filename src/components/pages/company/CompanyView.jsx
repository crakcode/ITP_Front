import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import {  deleteCommunity, getCommunityById } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
// import SimpleModal from './SimpleModal';
import { withRouter } from 'react-router-dom';
import { getCompanyByName } from '../../../lib/company';

class CompanyView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            content:'',
            company:[]
        }
    }
    componentDidMount=()=>{
        console.log(this.state.id);
        this.handleView();
    }
    handleView=async()=>{
        const {data}=await getCompanyByName(this.state.id);
        this.setState({company:data[0]});
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render(){
        return(
    <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <Paper>
                회사명<br/>
                {this.state.company.companyName}
                <br/><br/><br/>
                위치<br/>
                {this.state.company.companyLocation}
                <br/><br/><br/>
                회사 전화번호<br/>
                {this.state.company.companyTel}
                <br/><br/><br/>

                  <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleDelete();
                }}
              >
                  글삭제하기
                  </Button>

            </Paper>
        </div>
        )
    }





}


export default withRouter (CompanyView);