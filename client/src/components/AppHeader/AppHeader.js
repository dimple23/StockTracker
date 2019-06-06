import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//import './AppHeader.css';
//import { showToastifyAlert } from '../../utils/alertAPI';



class AppHeader extends Component {

 


  // handleInputChange
  handleInputChange = event => {

    // console.log("Inside AppHeader -> handleInputChange()");

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  // This function triggers when user searches for a question
   render() {

    console.log("Inside AppHeader -> render()");


    

    return (
      
      <React.Fragment>

<div className="container-fluid sticky-top">

<div className="row p-0 jumbotron jumbotron-fluid bg-dark text-dark cJumbotron"
style={{  
  backgroundImage: "url(" + "../../../assets/img/footer-bg-swirl.jpg" + ")",
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
  
}}>


            {/* -------- Go Smart App Icon ---------- */}
            <div className="col-2 ">
              <img className="btn STOCKTRACKER"
                src='../../../public/assets/img/logo1.png'
                alt="stocktracker"
                onClick={() => <Redirect to="/" />}
              />
            </div>



            {/* -------- Search Input box and button ---------- */}
            <div className="col-6 mt-3">

              
            
            <div 
              className={this.props.userLoggedIn ? "dropdown open btn btn-info" : ""}
              
            >

                {/* -------- LogIn Button ---------- */}
                <button
                  type="button"
                  className="btn btn-outline-info m-3"
                  onClick={() => this.props.handleFormSwitch("login")}
                  style={{ visibility: !this.props.userLoggedIn ? 'visible' : 'hidden' }}
                >
                  <strong>Log In</strong>
                </button>


                {/* -------- Sign Up Button ---------- */}
                <button
                  type="button"
                  // className={this.props.userLoggedIn ? "dropdown open btn btn-info" : "btn btn-info"}
                  className="btn btn-info m-3"
                  onClick={() => this.props.handleFormSwitch("registration")}
                  style={{ visibility: !this.props.userLoggedIn ? 'visible' : 'hidden' }}
                >
                  <strong>Sign Up</strong>
                </button>


                {/* After user login show a button with label of user name and dropdown menu */}
                <button
                  className="btn btn-outline-info dropdown-toggle m-3"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"
                  
                  style={{ visibility: this.props.userLoggedIn ? 'visible' : 'hidden' }}
                >
                  <span className="text-light">{this.props.fullName}</span>
                </button>

                <div className="dropdown-menu">
                  <h6 className="dropdown-header">{this.props.email}</h6>
                  <h6 className="dropdown-header">({this.props.nickName})</h6>
                  <a className="dropdown-item" href="#!">User Profile</a>
                  <a className="dropdown-item" href="#!">Logout</a>
                </div>

            </div>
            {/* -------- End of Sign Up Button ---------- */}

          </div>
          {/* End of Row + Jumbotron */}


</div>
</div>
       
        {/* End of container-fluid */}

      </React.Fragment >
     
    )
  }
}

export default AppHeader;
