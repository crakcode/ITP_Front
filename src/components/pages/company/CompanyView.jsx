import { TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getCompanyByDynamic,getCompanyByName, getCompanyList ,getCompanyByLocation} from '../../../lib/company';

class CompanyView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            companys: [],
        }
    }
    componentDidMount(){
        this.handleList();
        let params = { "location":"대전", "name":"포"}

        this.SearchName(params.name);

        this.SearchLocation(params.location);

        let params2 = {'location':'대전'};
        this.SearchDynamic(params2);

    }

    handleView=async(row)=>{
        let id=row.bcode;
        console.log(id);
        this.props.history.push(`/community/view/${id}`);
    }  
    SearchDynamic=async(params)=>{
        let data= await getCompanyByDynamic(params);
        console.log(data);
    }

    SearchLocation=async(params)=>{
        let data= await getCompanyByLocation(params);
        console.log(data);
    }
    SearchName=async(params)=>{
        let data= await getCompanyByName(params);
        console.log(data);
    }

    handleList=async()=>{
        let {data}=await getCompanyList();
        this.setState({companys: data});
    }
    render(){
        return(
            <div>
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

        )
    }





}


export default CompanyView;