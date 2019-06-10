import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Login from '../../components/auth';
import { registerUser, loginUser } from "../../utils/userAPIs";



//import Col from '../components/col';
//import Card from '../components/Card';
//import { removeStock, createNewStock } from '../utils/API';


class Saved extends Component {
  state = {
    firstName: "",
    email: "",
    password: "",
    isLoggedIn: false
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

    return registerUser(this.state);
    
  };

  handleFormlogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    console.log(`Hello  ${this.state.email} ${this.state.password}`);
    this.setState({
      
      email: "",
      password: ""
    });

     loginUser(this.state)
      .then(() => {
        this.setState({
          isLoggedIn: true

        })
      })
  };

  render() {
  if (this.state.isLoggedIn) {
      return <Redirect to={{
        pathname: "/",
        state: {
          isLoggedIn: true
        }
      }} />
    }



    return (
      <React.Fragment>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'SIGN IN/UP'} isLoggedIn={this.state.isLoggedIn}/>
         {/* {this.props.isLoggedIn? 'Logout' : 'Login'} */}
           

           

        <Login 

          name={this.state.firstName}
          email={this.state.email}
          password={this.state.password}
          input={this.handleInputChange}
          submit={this.handleFormSubmit}
          login={this.handleFormlogin}
        />

        
         
      </React.Fragment>
      
      
    );
  }
}

export default Saved;
