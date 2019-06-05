import React from 'react';
import './SignUpWindow.css';




// Function that triggers when user clicks on 'LogIn' button
function handleUserLogIn(props) {

   
    {/* Log-In form */ }
    return (
        <div className="mt-5 float-right">
            <form>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="email-input">
                                Email
                        </label>
                        </div>
                        <input 
                            type="text"
                            value={props.email}
                            name="email"
                            placeholder="email@email.com" 
                            className="form-control" 
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="password-input">
                                Password
                        </label>
                        </div>
                        <input 
                            type="password" 
                            value={props.password}
                            name="password"
                            placeholder="password" 
                            className="form-control"
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-block btn-dark"
                    onClick={(e) => props.handleFormSubmit(props.regStatus, e)}
                >
                    <strong>Log In</strong>
                </button>
            </form>
        </div>
    );


} // End of handleUserLogIn()


// Function that triggers when user clicks on 'Sign Up' button
function handleNewUserSignUp(props) {

    

    {/* Sign-Up form */ }
    return (
        <div className="float-right">
            <form>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="first-name-input">
                                First Name
                            </label>
                        </div>
                        <input
                            type="text"
                            value={props.firstName}
                            name="firstName"
                            placeholder="John"
                            className="form-control"
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="last-name-input">
                                Last Name
                            </label>
                        </div>
                        <input 
                            type="text"
                            value={props.lastName}
                            name="lastName"
                            placeholder="Doe" 
                            className="form-control" 
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="nick-name-input">
                                Nick Name
                            </label>
                        </div>
                        <input 
                            type="text" 
                            value={props.nickName}
                            name="nickName"
                            placeholder="nicky" 
                            className="form-control" 
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="email-input">
                                Email
                            </label>
                        </div>
                        <input 
                            type="text"
                            value={props.email}
                            name="email"
                            placeholder="email@email.com" 
                            className="form-control" 
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group cInputBox">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="bg-dark text-light p-2 cSignUpLabel" htmlFor="password-input">
                                Password
                             </label>
                        </div>
                        <input 
                            type="password"
                            value={props.password}
                            name="password"
                            placeholder="password" 
                            className="form-control" 
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-block btn-dark cInputBox"
                    onClick={(e) => props.handleFormSubmit(props.regStatus, e)}
                >
                    <strong>Sign Up</strong>
                </button>
            </form>
        </div>
    );

} // End of handleNewUserSignUp()



// create a function to export a AppHeader component
function SignUpWindow(props) {
    return (
        <React.Fragment>
            {/* Log In/Sign Up Window within bg image*/}
            <div>

                {/* props.regStatus = true => Log In window */}
                {/* props.regStatus = false => Sign Up window */}
                {props.regStatus === true ?
                    handleUserLogIn(props) :
                    handleNewUserSignUp(props)
                }

            </div>
            {/* End of Log In/Sign Up Window within bg image*/}
        </React.Fragment>
    )
}

export default SignUpWindow;
