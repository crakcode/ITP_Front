import { Grid, TableBody,Paper, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
import { getPostList } from '../../../lib/post';
import CreatPostModal from './CreatPostModal';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      display: 'flex',
    },
      menuButton: {
    marginRight: 'auto'
  },
  paper: {
      // width: `750px`,
      height: `580px`,
      textAlign: 'center',
    },  
  
};
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
      const { classes } = this.props;
        return(

          <div>
          <br/>
          <br/>
          <br/>
          <CreatPostModal/>

      <Grid item xs={10}>
      <Paper className={classes.paper} >
        <TableBody>
          {this.state.posts.map((row) => (
            <TableRow key={row.id} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left" >{row.content}</TableCell>
              <TableCell align="left">{row.writer}</TableCell>
              <TableCell align="left">{row.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Paper>
        </Grid>
            </div>

        )
    }

}


export default withStyles(styles)(PostBoard);