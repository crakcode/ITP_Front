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



const styles = theme => ({
hidden: {
display: 'none'
}
});

class UpdateModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        bcode: this.props.id,
        title: '',
        content: '',
        date: '',
        open: false
}
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this);
}




handleFormSubmit=async(e)=> {
    this.state.date=new Date();
    console.log(this.state);
    await updateCommunity(this.state);

//     this.props.stateRefresh();

//     this.setState({
//         file: null,
//         userName: '',
//         birthday: '',
//         gender: '',
//         job: '',
//         fileName: '',
//         open: false
// })

}

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


handleClickOpen() {
    const {bcode}=this.state;
    console.log(bcode);
    this.setState({open: true});
}

handleClose() {
    this.setState({userName: '',birthday: '', gender: '', job: '', fileName: '',open: false
})
}


render() {
    const { classes } = this.props;
    return (

    <div>
    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
        고객 추가하기
    </Button>
    <Dialog open={this.state.open} onClose={this.handleClose}>
    <DialogTitle>고객 추가</DialogTitle>
    <DialogContent>
        <TextField label="타이틀" type="text" name="title" onChange={this.handleChange} /><br/>
        <TextField label="내용" type="text" name="content" onChange={this.handleChange} /><br/>
    </DialogContent>
    <DialogActions>
        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
    </DialogActions>
</Dialog>
</div>

)

}

}



export default withStyles(styles)(UpdateModal)


