import { TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
import { getPostList } from '../../../lib/post';

class PostBoard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            title: '22',
            content: '222',
        }
    }
    componentDidMount(){
        this.handleList();
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
     
    handle=async(row)=>{
        console.log(row);
        let {data}=await getCommunityById(row);
        console.log(data);
        console.log("helloworld");
    }  
    handleView=async(row)=>{
        let id=row.id;
        console.log(id);
        this.props.history.push(`/post/${id}`);
    }  

    handleList=async()=>{
        let {data}=await getPostList();
        this.setState({posts: data});
        console.log(data);

    }
    render(){
        
        return(

            <div>
                        <br/>
          <br/>
          <br/>
                  <Button
                margin="normal"
                required
                label="hellworld"
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleDelete();
                }}
              >
                새로 등록하기
              </Button>
        <TableBody>
          {this.state.posts.map((row) => (
            <TableRow key={row.id} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.writer}</TableCell>
            </TableRow>
          ))}
        </TableBody>

            </div>

        )
    }

}


export default PostBoard;