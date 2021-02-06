import { TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React from 'react';

class ListView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            coummunitys: [],
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
        let id=row.bcode;
        console.log(id);
        this.props.history.push(`/community/view/${id}`);
    }  

    handleList=async()=>{
        let {data}=await getCommunitys();
        this.setState({coummunitys: data});
        console.log(data);
    }
    render(){
        
        return(
            <div>
        <TableBody>
          {this.state.coummunitys.map((row) => (
            <TableRow key={row.bcode} onClick={()=>this.handleView(row)}>
            <TableCell component="th" scope="row">{row.bcode}</TableCell>

              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.recommand}</TableCell>
            </TableRow>
          ))}
        </TableBody>

            </div>

        )
    }





}


export default ListView;