import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import {  getCommunityById } from '../../../lib/community';
import React from 'react';
import Button from '@material-ui/core/Button';

class ListView extends React.Component{
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
    
    render(){
        
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
                
                <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                  글수정하기
                  </Button>                  <br/>
                  <br/>

                  <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                  글삭제하기
                  </Button>

            </Paper>
        )
    }





}


export default ListView;