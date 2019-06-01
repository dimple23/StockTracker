import React from 'react';
import { NavLink } from 'react-router-dom';

// create a function to export a jumbotron component
function Jumbotron(props) {
  return (
    <div>

<nav className="navbar navbar-dark bg-dark">
<a className="navbar-brand" href="/"><i className="fas fa-chart-line mr-2"></i>STOCKTRACKER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link"href="https://github.com/" target="_blank">GitHub<span class="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="">Sign in</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign up</a>
      </li>
    </ul>
  </div>
</nav>

   
    <div className={`
      text-center
      p-5
      jumbotron 
      ${props.fluid ? "jumbotron-fluid" : ""} 
      bg-${props.bg ? props.bg : "dark"}
      text-${props.text ? props.text : "light"}
    `}>
      <h1 className="display-2">{props.pageTitle}</h1>

      <NavLink to="/" className="btn btn-outline-dark btn-lg m-2">
        View All Stocks
      </NavLink>

      <NavLink to="/add" className="btn btn-outline-warning btn-lg m-2">
        Add A New Stock
      </NavLink>

    </div>
    </div>
  )
}

export default Jumbotron;
