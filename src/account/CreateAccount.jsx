import React, { Component } from 'react'
import AccountService from '../services/AccountService';

class CreateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: this.props.match.params.id,
            accountid: '',
            name: '',
            password: ''
        }
        this.saveAccount = this.saveAccount.bind(this);

    }

    onChange=(e)=>{
        this.setState(
            {[e.target.name]:e.target.value}
        );
    }
    saveAccount=(e)=>{
        console.log(this.state.accountid);
        e.preventDefault();
        let account={
            accountid:this.state.accountid,
            name:this.state.name,
            password:this.state.password,
        }
        console.log("save Account 시작전");
        AccountService.createAccount(account).then(res =>{
            this.props.history.push('/employees');
        });

    }

    render() {
        return (
            <form>
            <div>
           이메일: <input type="text" name="accountid" onChange={this.onChange}/>
           이름: <input type="text" name="name"onChange={this.onChange}/>
           비밀번호: <input type="text" name="password"onChange={this.onChange}/>
           <button type="submit" onClick={this.saveAccount}>Save</button>
            </div>

            </form>

        )
    }
}

export default CreateAccount
