import React from 'react';
//import { Link } from 'react-router-dom';
//import Saved from '../pages/User';

import '../pages/User/User.css'

// create a function to export a jumbotron component
function Login({
  name,
  email,
  password,
  input,
  submit,
 login
}) {
  

  return (
   <div>
     <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1>Create Account</h1>
                  <div className="social-container">
                    {/* <Link to={'/'} className="social"><i className="fab fa-facebook-f"></i></Link>
                    <Link to={'/'} className="social"><i className="fab fa-google-plus-g"></i></Link>
                    <Link to={'/'} className="social"><i className="fab fa-linkedin-in"></i></Link> */}
                  </div>
                  <span>or use your email for registration</span>
                  <input
                    value={name}
                    name="firstName"
                    onChange={input}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    value={email}
                    name="email"
                    onChange={input}
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    value={password}
                    name="password"
                    onChange={input}
                    type="text"
                    placeholder="Password"
                  />
                  <button
                  onClick={submit}
                  >Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="#">
                  <h1>Sign in</h1>
                  {/* <div className="social-container">
                    <Link to={''} className="social"><i className="fab fa-facebook-f"></i></Link>
                    <Link to={''} className="social"><i className="fab fa-google-plus-g"></i></Link>
                    <Link to={''} className="social"><i className="fab fa-linkedin-in"></i></Link>
                  </div> */}
                  <span>or use your account</span>
                  <input
                    value={email}
                    name="email"
                    onChange={input}
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    value={password}
                    name="password"
                    onChange={input}
                    type="text"
                    placeholder="Password"
                  />
                  {/* <a href="#">Forgot your password?</a> */}
                  <button
                  onClick={login}
                  >Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button 
                    onClick={login}
                    
                    className="ghost" id="signIn">Sign In</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>





   </div>
  )
}




export default Login;