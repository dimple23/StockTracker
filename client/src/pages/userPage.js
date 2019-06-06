import React, { Component } from 'react';

//import { Redirect } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';

// Importing custom Components
import AppHeader from '../components/AppHeader/AppHeader';
import Navbar from '../components/Navbar/Navbar';
import Registration from '../components/Registration/Registration';
//import Jumbotron from '../components/Jumbotron';



// Importing APIs
                
  import { registerUser, loginUser, getAllUsers} from '../utils/userAPIs';
//import Jumbotron from '../components/Jumbotron';



class userPage extends Component {

    state = {
        showLogin: false,
        userLoggedIn: false,

        searchQuestion: "", // Will store the question to be searched by the user

        // Inputs for form registration
        firstName: "",
        lastName: "",
        nickName: "",
        email: "",
        password: "",
        questionAsked: false,

        alertMessage: "" // Stores the alert message
    };


    // handleInputChange
    handleInputChange = event => {

        // console.log("Inside HomePage -> handleInputChange()");

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    // Switch state to show different form (login vs registration)
    handleFormSwitch = (formName) => {

        const showLogin = (formName === "login") ? true : false;

        this.setState({
            showLogin
        });

    } //End of handleFormSwitch()


    // This will trigger when user logs in to the app
    handleUserLogin = userInfo => {

        console.log("Inside userPage -> handleUserLogin()");
        console.log("userInfo: "); console.log(userInfo);

        loginUser(userInfo)
            .then(({ data: accessToken }) => {

                console.log("User profile -> accessToken: " + accessToken);
                localStorage.setItem('accessToken', accessToken);


                // Get user information from user table----  ??????
                getAllUsers()
                    .then(({ data: userData }) => {
                        console.log("getUserProfile -> userData -> ");
                        console.log(userData);

                        // Update state with user data
                        this.setState({
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            nickName: userData.nickName,
                            email: userData.email,
                            password: userData.password,
                            userLoggedIn: true,
                            // alertMessage: "User logged in successfully"
                        });

                    })
                    .catch(err => {
                        console.log(err);
                    });



                // alert("User logged in successfully");

            })
            .catch(err => {
                console.log(err);
                this.setState({
                    userLoggedIn: false,
                    alertMessage: "Incorrect user credentials !!"
                });
                // alert("Incorrect user credentials !!");
            });

    } // End of handleUserLogin()

    // method for creating(POST) a new user
    handleCreateNewUser = newUserInfo => {

        console.log("Inside userpage -> handleCreateNewUser()");
        

        registerUser(newUserInfo)
            .then(() => {

                
                this.handleUserLogin({
                    email: this.state.email,
                    password: this.state.password
                });

            })
            .catch(err => console.log(err));

    } // End of handleCreateNewUser()



    
    handleFormSubmit = (formType, event) => {

        event.preventDefault();

        console.log("Inside HomePage -> handleFormSubmit()");

        if (formType) {
            console.log("Log-In form submitted");

            // Check to see if even a single field is absent, show alert and return
            let email = this.state.email; email.trim();
            let password = this.state.password; password.trim();

            if (!email || !password) {
                return this.setState({
                    userRegistered: false,
                    alertMessage: "All fields are mandatory!"
                });
            }

            this.handleUserLogin({
                email: email,
                password: password
            });

        }
        else {
            console.log("Sign-Up form submitted");

            // Check to see if even a single field is absent, show alert and return
            let firstName = this.state.firstName; firstName.trim();
            let lastName = this.state.lastName; lastName.trim();
            let nickName = this.state.nickName; nickName.trim();
            let email = this.state.email; email.trim();
            let password = this.state.password; password.trim();

            if (!firstName || !lastName || !nickName || !email || !password) {
                return this.setState({
                    userRegistered: false,
                    alertMessage: "All fields are mandatory!"
                });
            }

            this.handleCreateNewUser({
                firstName: firstName,
                lastName: lastName,
                nickName: nickName,
                email: email,
                password: password
            });
        }


    } // End of handleFormSubmit()



  


    render() {
        console.log("Inside UserPage -> render()");
        
        console.log("this.state-----");
        console.log(this.state);


        return (
            <React.Fragment>
                <div>
                    <AppHeader
                        handleFormSwitch={this.handleFormSwitch}
                        userLoggedIn={this.state.userLoggedIn}
                        fullName={`${this.state.firstName} ${this.state.lastName}`}
                        nickName={this.state.nickName}
                        email={this.state.email}
                    />


                    <Registration
                        regStatus={this.state.showLogin}
                        userLoggedIn={this.state.userLoggedIn}
                        onChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />

                   
                    <div className="row container-fluid">

                        
                            
                            

                        </div>
                      <Navbar/>

                        

                    </div>

                
            </React.Fragment>
        )
    }
  }

export default userPage;
