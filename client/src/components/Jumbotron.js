import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

// create a function to export a jumbotron component
function Jumbotron(props) {
  return (
    
    <div className={`
      text-center
      p-1
      jumbotron 
      
      ${props.fluid ? "jumbotron-fluid" : ""} 
      bg-${props.bg ? props.bg : "dark"}
      text-${props.text ? props.text : "light"
       }
    `}>
     <div className={' disply-1 p-5 navbar bg-dark  sticky-top text-light'} />
    
      <h1 className="display-2">{props.pageTitle}</h1>

      <NavLink to="/" className="btn btn-outline-dark btn-lg m-2">
        View All Stocks
      </NavLink>

      <NavLink to="/add" className="btn btn-outline-warning btn-lg m-2">
        Add A New Stock
      </NavLink>
      
      
    </div>
  )
}

export default Jumbotron;