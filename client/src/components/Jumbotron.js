import React from 'react';
//import { NavLink } from 'react-router-dom';
//import './App.css';

// create a function to export a jumbotron component
function Jumbotron(props) {
  
  return (
    
    <div className={`
      text-center
      p-1
      jumbotron 
      ${props.fluid ? "jumbotron-fluid" : ""}
      text-${props.text ? props.text : "light"}
    `}
    style={{  
      backgroundImage: "url(" + "../../../assets/img/footer-bg-swirl.jpg" + ")",
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}
    >
      <h1 className="display-2">{props.pageTitle}</h1>

      
      <button  className="btn btn-outline-dark btn-lg m-2 position:relative">
       Sign In
      </button>

      <button  className="btn btn-outline-warning btn-lg m-2">
        Sign Up
      </button>
      
      
    </div>
  )
}

export default Jumbotron;