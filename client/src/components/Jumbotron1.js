import React from 'react';
import { NavLink } from 'react-router-dom';

function Jumbotron(props) {
  return (
    <div
      className={`
        jumbotron
       
        bg-${props.bg || 'default'}
        text-${props.color || 'dark'}
        text-center
        `}>
     
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
        
          
          
          <div >
            <NavLink to="/" className="btn btn-warning btn-lg">
              Home
            </NavLink>
          </div>
        </div>
      
   
  );
}

export default Jumbotron;
