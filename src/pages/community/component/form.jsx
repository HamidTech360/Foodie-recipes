import React from 'react'
import { Link } from 'react-router-dom'
import SignUpNavBar from '../../signUp/components/navbar'
import SelectOptions from './selectCommunity'

const Form = ()=>{

    const NavBarOptions= [
        {
            name:'Home',
            link:'/',
            icon:'fa-whatsapp'
        },
        {
            name:'about',
            link:'#'
        },
        {
            name:'Contact Us',
            link:'#'
        }
    ]

    return(
        <div className="right-side-form  container">
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar NavOptions={NavBarOptions} />

            <div className="hideOnDesktop hideBoldText">
                    Choose your community
            </div>
            <div className="hideOnDesktop hideLightText">
                Your community awaits your arrival
            </div>

            
            <div className="form-container container" id="form-container">
                <SelectOptions/>
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