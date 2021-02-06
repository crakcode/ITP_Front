import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';

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
            </Paper>

        )
    }





}


export default ListView;