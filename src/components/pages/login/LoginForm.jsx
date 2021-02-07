import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {
  Typography,
  withStyles,
} from '@material-ui/core';
import { login } from '../../../lib/user';

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
    width: '350px',
    height: '50px',
    color: '#F8F8F8',
  },
  '&.MuiTypography-body1': {
    color: '#fff',
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleLogin = async () => {
    console.log(this.state);
    let bol=await login(this.state);
    console.log(bol);
  };

  render() {
    const { languageSet, style } = this.props;
    return (
      <div>
        <Grid>
          <center>
            <h2 style={styles.h2}>LOGIN</h2>
          </center>
          <h4 style={styles.h4}>
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              required
              name="email"
              onChange={this.handleChange}
            />
          </h4>
          <div>
            <h4 style={styles.h4}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                required
                name="password"
                onChange={this.handleChange}
                type="password"
              />
            </h4>
            <h4 style={styles.h4}>
              <Button
                margin="normal"
                style={styles.Button}
                fullWidth
                required
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleLogin();
                }}
              >
              </Button>
            </h4>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
