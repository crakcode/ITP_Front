import { Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import {getCompanyByLocation, getCompanyCount} from '../../../lib/company';
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
    goCompanyView=(row)=>{
        console.log(row);
        this.props.history.push(`/company/${row}`);
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
            <TableRow key={row} onClick={()=>this.goCompanyView(row)}>
            <TableCell component="th" scope="row">{row}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
            </TableRow>
          ))}

            
            </div>


        )
      }
}
export default MyList;