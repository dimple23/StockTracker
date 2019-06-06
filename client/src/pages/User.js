import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Login from '../components/auth';


import Col from '../components/col';
import Card from '../components/Card';
import { removeStock, createNewStock } from '../utils/API';


class Saved extends Component {
  state = {
    firstName: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

  }
  

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    console.log(`Hello ${this.state.firstName} ${this.state.email} ${this.state.password}`);
    this.setState({
      firstName: "",
      email: "",
      password: ""
    });
  };


  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'Saved Stocks'} />
        

        <Login 

        name={this.state.firstName}
        email={this.state.email}
        password={this.state.password}
        input={this.handleInputChange}
        submit={this.handleFormSubmit}
        
        />
        
       
      </React.Fragment>
    );
  }
}

export default Saved;
