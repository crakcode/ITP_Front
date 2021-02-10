import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import {  deleteCommunity, getCommunityById } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';
// import SimpleModal from './SimpleModal';
import UpdateModal from './UpdateModal';
import { withRouter } from 'react-router-dom';

class CommunityView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            coummunity: {},
        }
    }
    componentDidMount=()=>{
        this.handleView();
    }
    handleView=async()=>{
        const {id} =this.state;
        let params={bcode:id}
        let {data}=await getCommunityById(params);
        console.log("hellowrold");
        console.log(data);
        this.setState({coummunity:data})

    }
    handleDelete=async()=>{
        const {id} =this.state;
        let params={bcode:id}
        await deleteCommunity(params);
        this.props.history.push(`/community/list`);

    }

    render(){
        const{id}=this.state;
        return(
            <Paper>
                제목<br/>
                {this.state.coummunity.title}
                <br/><br/><br/>
                내용<br/>
                {this.state.coummunity.content}
                <br/><br/><br/>
                날짜<br/>
                {this.state.coummunity.date}
                <br/><br/><br/>
                
                <UpdateModal id={id}/>
                  <br/>
                  <br/>
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
        )
    }


}

export default withRouter (CommunityView);