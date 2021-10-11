import React from 'react'
import { Link } from 'react-router-dom'
import SignUpNavBar from '../../signUp/components/navbar'


const Form = ()=>{
    return(
        <div className="right-side-form  container">
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar/>

            <div className="hideOnDesktop hideBoldText">
                    Welcome Back
            </div>
            <div className="hideOnDesktop hideLightText">
                Let's pick up from where you left off
            </div>

            
            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Login</div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control signup-form " placeholder="user1234" />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control signup-form" placeholder="user@example.com" />
                </div>

                <button className="btn btn-signUp form-control">login</button>
                <div className="query text-center">
                    Don't have an account? <Link to="/login"> sign up</Link>
                </div>
            </div>
        </div>
    )
}
export default Form