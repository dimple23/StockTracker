import React from 'react';
import { NavLink } from 'react-router-dom';

//import './App.css';

// create a function to export a jumbotron component
function Jumbotron(props) {
  
  return (
    
    <div className={`
      text-center
      mb-0
      sticky-top
      p-1
      jumbotron 
      ${props.fluid ? "jumbotron-fluid" : ""}
      text-${props.text ? props.text : "light"}
    `}
    style={{  
      backgroundImage: "url(../../../assets/img/footer-bg-swirl.jpg)",
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
      
      
    }}
    >
      <h1 className="display-2">{props.pageTitle}</h1>

      {/* <NavLink to="/" className="btn btn-outline-dark btn-lg m-2">
        View All Stocks
      </NavLink>
      <NavLink to="/add" className="btn btn-outline-warning btn-lg m-2">
        Add A New Stock
      </NavLink>
      <NavLink to="/signin" className="btn btn-outline-dark btn-lg m-2">
       Sign In
      </NavLink> */}

      <NavLink to="/add" className="btn btn-outline-primary btn-lg m-2"  >
        Join
      </NavLink>

      {/* <Link to="/saved/profile">Profile</Link>
      <Logout updateUser={this.props.updateUser} /> */}

     

      { props.isLoggedIn ? (<NavLink to="/saved" className="btn btn-outline-primary btn-lg m-2"
      // style={{ 'display:none' }}
      >
        Saved News
      </NavLink> )  : "" }

        <button class="fab fa-github btn btn-outline-primary btn-lg m-2"> <a href="https://github.com/dimple23/StockTracker">
							
					 
             github
               </a>
             </button>
     
    </div>
  )
}

export default Jumbotron;