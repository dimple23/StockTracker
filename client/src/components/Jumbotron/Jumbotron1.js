import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout';

function Jumbotron(props) {
  return (
    <div
      className={`
        jumbotron
       
        bg-${props.bg || 'default'}
        text-${props.color || 'light'}
        text-center
        `}>
     
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
        
          
          
          <div >

            <NavLink to="/" className="fas fa-chart-line fa-3x float-left  ">
            </NavLink>

            {/* <i className="fas fa-chart-line"></i> */}
          <Logout />
          </div>
        </div>
      
   
  );
}

export default Jumbotron;
