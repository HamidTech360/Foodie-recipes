import React from 'react'
import { Link } from 'react-router-dom'
import '../css/form.css'

import SignUpNavBar from './navbar'
const Form = ()=>{
    return(
        <div className="right-side-form  container">
           
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar/>

            <div className="hideOnDesktop hideBoldText">
                    Your community awaits your arival
            </div>

         

            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Sign up</div>
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control signup-form " placeholder="user1234" />
                </div>

                <div className="form-group">
                    <label htmlFor="Email Address">Email Address</label>
                    <input type="email" className="form-control signup-form" placeholder="user@example.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input type="number" className="form-control signup-form" placeholder="+234" />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control signup-form" placeholder="*******" />
                </div>

                <div className="form-group">
                    <label htmlFor="Confirm Password">Confirm Password</label>
                    <input type="password" className="form-control signup-form" placeholder="**********" />
                </div>

                <button className="btn btn-signUp form-control">Start your 7-days trial</button>

                <div className="query text-center">
                    Already have an account? <Link to="/login"> Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Form