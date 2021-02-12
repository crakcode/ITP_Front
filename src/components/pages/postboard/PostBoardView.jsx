import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import {  deleteCommunity, getCommunityById } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
// import SimpleModal from './SimpleModal';
import { withRouter } from 'react-router-dom';
import { getPostById } from '../../../lib/post';
import { getUserById } from '../../../lib/user';
import { createComment,getComments} from '../../../lib/comment';

class PostBoardView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            content:'',
            post: {},
            comments:[]
        }
    }
    componentDidMount=()=>{
        this.handleView();
        this.Comment();
    }
    handleView=async()=>{
        const {id} =this.state;
        let {data}=await getPostById(id);
        console.log("hellowrold");
        console.log("데이터입니다",data);
        this.setState({post:data})

        let hel=await getUserById('1');
        console.log("회원정보",hel);

    }
    handleDelete=async()=>{
        const {id} =this.state;
        let params={bcode:id}
        await deleteCommunity(params);
        this.props.history.push(`/community/list`);

    }

    Comment=async()=>{
      const {id} =this.state;
      let {data} =await getComments(id);
      this.setState({comments:data})
      console.log(data);
    }

    handleComment=async()=>{
      const {id} =this.state;
      let params={"content":this.state.content};
      console.log(id);
      await createComment(id,1,params);
      window.location.reload();
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


    render(){
        const{id}=this.state;
        return(

    <div>
          <br/>
          <br/>
          <br/>
          <br/>
            <Paper>
                제목<br/>
                {this.state.post.title}
                <br/><br/><br/>
                내용<br/>
                {this.state.post.content}
                <br/><br/><br/>
                이름<br/>
                {this.state.post.writer}
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

                  <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleComment();
                }}
              >
                  댓글달기
                  </Button>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="content"
              onChange={this.handleChange}
            />
                    <TableBody>

          {this.state.comments.map((row) => (
            <TableRow key={row.id} onClick={()=>this.handleView(row)}>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.writer}</TableCell>
            </TableRow>
          ))}
            </TableBody>
            </Paper>
</div>
        )
    }





}


export default withRouter (PostBoardView);