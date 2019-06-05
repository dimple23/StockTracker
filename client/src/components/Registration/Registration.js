import React from 'react';
import SignUpWindow from '../SignUpWindow/SignUpWindow';
import './Registration.css';



function Registration(props) {

    
    return (
        <React.Fragment>

            

                <div className="row container-fluid ">
                    <div className="col-8">
                        
                    </div>

                    <div 
                        className="col-4 mt-4 float-right" 
                        style={{ visibility: !props.userLoggedIn ? 'visible' : 'hidden' }}
                    >
                       
                        <SignUpWindow 
                            regStatus={props.regStatus}
                            handleInputChange={props.onChange}
                            handleFormSubmit={props.handleFormSubmit}
                        />

                    </div>
                </div>






          

        </React.Fragment>
    )
}


export default Registration;