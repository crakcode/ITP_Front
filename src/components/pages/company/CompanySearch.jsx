import { TableBody, TableCell, TableRow, TextField,Button } from '@material-ui/core'

import React from 'react';
import {getCompanyByDynamic,getCompanyByName, getCompanyList ,getCompanyByLocation} from '../../../lib/company';
import { withRouter } from 'react-router-dom';

class CompanySearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        condition: 'location',
        keyword:'',
        companys: [],
      };

    }
    handleCondition=(e)=> {
      this.setState({condition: e.target.value});
    }
    handleKeyword=(e)=>{
      this.setState({keyword: e.target.value});
    }
    dosearch=async(e)=> {
      const {condition,keyword}=this.state;
      console.log(condition);
      if (condition=='location'){
        const {data}= await getCompanyByLocation(keyword);
        this.setState({companys: data});
        console.log(this.state.companys);


      }else{
        const {data}= await getCompanyByName(keyword);
        this.setState({companys: data});
        console.log(this.state.companys);
      }

    }
    handleList=async()=>{
      let {data}=await getCompanyList();
      this.setState({companys: data});
  }

    render() {
      return (
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.condition} onChange={this.handleCondition}>
              <option value="location">지역</option>
              <option value="name">상호명</option>
            </select>
            <TextField
                variant="standard"
                margin="normal"
                fullWidth
                required
                name="text"
                onChange={this.handleKeyword}
              />

          </label>
          <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.dosearch();
                }}
              >
                검색
          </Button> 

        </form>
        <TableBody>
          {this.state.companys.map((row) => (
            <TableRow key={row.companyId} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.companyId}</TableCell>
              <TableCell component="th" scope="row">
                {row.companyName}
              </TableCell>
              <TableCell align="right">{row.companyLocation}</TableCell>
              <TableCell align="right">{row.companyTel}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        </div>
      );
    }
  }
  export default withRouter (CompanySearch);