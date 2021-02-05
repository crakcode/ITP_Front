import React,{ Component } from 'react'
import AccountService from '../services/AccountService'

class helloworld extends Component {
    constructor(props) {
        super(props)
        this.state={
            hello:''
        }
    }
    helloworld=()=>{
        AccountService.helloworld().then(res=>{
            let helloword=res.data;
            console.log(helloword);
        })


    }
    
    render() {
        
        return (
            <div>
            {this.helloworld()}

                hello world</div>
        );
    }
}
export default helloworld
            // EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            //     let employee = res.data;
            //     this.setState({firstName: employee.firstName,
            //         lastName: employee.lastName,
            //         emailId : employee.emailId
