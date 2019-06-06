import React, { Component } from 'react';

import './Image.css';


// create a function to export a AppHeader component
function Image() {

    // console.log("props.userLoggedIn= " + props.userLoggedIn);

    return (
       

            <div className="d-flex flex-wrap align-content-center cBgImage"
                style={{
                    backgroundImage: `url("../../assets/img/diary-new.jpeg")`
                }}
            >

            </div>

       
    )
}


export default Image;