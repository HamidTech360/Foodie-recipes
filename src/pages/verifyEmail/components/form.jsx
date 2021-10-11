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
                    Almost Done
            </div>
            <div className="hideOnDesktop hideLightText">
                Enter the 6 digit code sent to you
            </div>

            
            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Verification</div>
                <div className="form-group input-group-lg">
                    <label htmlFor="username">code</label>
                    <input type="text" placeholder="*****" className="form-control   signup-form" style={{fontSize:'12px', padding:'20px'}} />
                </div>

            
                <button className="btn btn-signUp form-control">login</button>

                <div className="query text-center">
                    Didn't get a code? <Link to="/login"> Resend</Link>
                </div>
               
            </div>
        </div>
    )
}
export default Form