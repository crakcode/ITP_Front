import { TextField } from '@material-ui/core'
import { addCommunity } from '../../../lib/community';
import {Component} from './react'

class ListView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '22',
            content: '222',
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
    handleapi=async()=>{
        const hel=await addCommunity(this.state);
        console.log(hel);

    }
    rander(){
        return(
            <div>

            </div>

        )
    }





}


export default ListView;