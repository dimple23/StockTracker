import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Logout extends Component {
  constructor(props){
    super(props);
     this.state= {
      redirect: false
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    //Delete token from local storage
    localStorage.removeItem('mernToken');
    //Go back to home page
    // this.props.updateUser();
    // this.props.history.push('/')
    this.setState({ redirect: true });
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to='/' />);
    }
    else {
      return (<Link className="btn btn-warning" to='/' onClick={this.handleLogout}
      
      >Logout</Link>);
    }
  }
}

export default Logout;
