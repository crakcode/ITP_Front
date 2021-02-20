import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { updateCommunity } from '../../../lib/community';
import { CreatePost } from '../../../lib/post';

import { Paper} from '@material-ui/core'


const styles = {
    paper: {
        // width: `750px`,
        height: `580px`,
        textAlign: 'center',
      },  
    
  };
  
class CreatPostModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        title: '',
        content: '',
        createAt: new Date(),
        ucode:'2',
        open: false
}
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this);
}




FormSubmit=async(e)=> {
    this.state.date=new Date();
    console.log(this.state);
    await CreatePost(this.state.ucode,this.state);
    window.location.reload();
}

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


handleClickOpen() {
    this.setState({open: true});
}

handleClose() {
    this.setState({open: false})
}


render() {
    const { classes } = this.props;
    return (

    <div>
    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
        글 작성하기
    </Button>
    <Dialog open={this.state.open} onClose={this.handleClose}>
    <DialogTitle>새글 추가</DialogTitle>
    <DialogContent>
        <TextField label="타이틀" type="text" name="title" onChange={this.handleChange} /><br/>
        <TextField label="내용" type="text" name="content" onChange={this.handleChange} /><br/>
    </DialogContent>
    <Paper>
        sss
    </Paper>
    <DialogActions>
        <Button variant="contained" color="primary" onClick={this.FormSubmit}>추가</Button>
        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
    </DialogActions>
</Dialog>
</div>
)
}
}



export default withStyles(styles)(CreatPostModal)


