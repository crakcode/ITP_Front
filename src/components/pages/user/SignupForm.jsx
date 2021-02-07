import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {
  Typography,
  withStyles,
} from '@material-ui/core';
import e from 'cors';
import { createUser, getUsers } from '../../../lib/user';
import { withRouter } from 'react-router-dom';

const styles= {
  h2: {
    margin: '2em',
    align: 'center',
    color: '#F8F8F8',
    size: '20',
    weight: 'bold',
  },
  h3: {
    fontSize: 10,
  },
  h4: {
    color: '#F8F8F8',
    fontColor: '#F8F8F8',
    fontSize: 16,
    '& .MuiInputBase-root': {
      borderBottom: '1px solid #ccc',
      background: 'transparent',
    },
    '& .MuiTypography-root': {
      color: '#D5D5D5',
    },
    '& input': {
      color: '#fff',
    },
  },
  Button: {
    width: '300px',
    height: '50px',
    color: '#F8F8F8',
  },
  '&.MuiTypography-body1': {
    color: '#fff',
  },
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      password: '',
    };
  }


  handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }

  handleSignup=async()=>{
      await createUser(this.state);

      let data=await getUsers();
      console.log(data);
      this.props.history.push(`/`);

  }
  render() {
    return (
      <div>
        <Grid>
            이메일
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="email"
              onChange={this.handleChange}
            />
            이름
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="name"
              onChange={this.handleChange}
            />
            전화번호
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="phone"
              onChange={this.handleChange}
            />
            비밀번호
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="password"
              onChange={this.handleChange}
            />
              <Button
                margin="normal"
                fullWidth
                required
                variant="contained"
                style={styles.Button}
                color="primary"
                onClick={() => {
                  this.handleSignup();
                }}
              >
              </Button>
              </Grid>
      </div>
    );
  }
}

export default withRouter (SignupForm);
