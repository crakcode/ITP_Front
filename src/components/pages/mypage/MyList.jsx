import { Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {deleteMyCompany, getCompanyByLocation, getCompanyCount} from '../../../lib/company';
import ReactPaginate from 'react-paginate';
import { getPostByUserId } from '../../../lib/post';
import { getMyCompanyList } from '../../../lib/user';

class MyList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            count:[],
            keyword:'',
            post:[],
            companys:[]
        };
    }
    goPostView=(row)=>{
        this.props.history.push(`/post/${row.id}`);
    }
    goCompanyView=(company)=>{
        console.log(company);
        this.props.history.push(`/company/${company.companyName}`);
    }
    componentDidMount() {
        this.getPostByUcode();
        this.getComapnyByUcode();
    }

    getPostByUcode=async()=>{
        let {data} = await getPostByUserId(1);
        this.setState({post:data.slice(0,4)});
    }

    getComapnyByUcode=async()=>{
        let {data} = await getMyCompanyList(1);
        console.log(data);
        this.setState({companys:data});
    }

    handleClick=(e)=>{
        this.setState({keyword:e.value});
        this.handleCompanyList(this.state.keyword)
    }
    deleteCompany=async(company)=>{
        await deleteMyCompany(1,company.companyId);
        window.location.reload();
    }

    render() {
      
        
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
        <TableBody>
            내가쓴글: Post 게시판
          {this.state.post.map((row) => (
            <TableRow key={row.id} onClick={()=>this.goPostView(row)}>
            <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            내가 찜한 회사
            {this.state.companys.map((row) => (
            <TableRow key={row.companyId} >
            <TableCell component="th" scope="row" >{row.companyId}</TableCell>
            <TableCell component="th" scope="row"  onClick={()=>this.goCompanyView(row)}>{row.companyName}</TableCell>
            <Button component="th" color="secondary" className="btn btn-danger" scope="row" onClick={()=>this.deleteCompany(row)}>삭제하기</Button>
            </TableRow>
          ))}

            
            </div>


        )
      }
}
export default MyList;