import React, { Component } from 'react';
//import Jumbotron from '../components/Jumbotron';
import { NavLink } from 'react-router-dom';
class User extends Component {
  state = {

  }

  render() {
    return (
      <div className='btn-outline-info'>
      <h1 className="display-2 text-center ">Welcome </h1>
      <div className='align-center  '>
      <NavLink to="/" className="btn btn-outline-dark btn-lg m-2 ">
              Sign in
      </NavLink>

      <NavLink to="/add" className="btn btn-outline-warning btn-lg m-2">
       Sign up
      </NavLink>
      </div>
      </div>
    )
  }
}

export default User;