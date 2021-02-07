import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SignupForm from './SignupForm';

const styles = {
  paperContainer: {
    height: '100vh',
    backgroundSize: 'cover',
  },

  PaperPro: {
    width: 400,
    height: 515,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.8,
    background: '#02203B',
    padding: 50,
    borderRadius: 10,
  },
};

class Signup extends Component {
  render() {
    return (
      <Paper style={styles.paperContainer}>
        <Paper style={styles.PaperPro}>
            <SignupForm/>
        </Paper>
      </Paper>
    );
  }
}

export default Signup;
