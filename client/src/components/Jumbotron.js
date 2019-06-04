import React from 'react';
import { NavLink } from 'react-router-dom';

// create a function to export a jumbotron component
function Jumbotron(props) {
  return (
    <div className={`
      text-center
      p-5
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