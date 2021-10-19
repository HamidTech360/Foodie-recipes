import React, { useEffect } from 'react'
import SideBanner from './components/side'
import Form from './components/form'
import './css/signup.css'

const SignUp = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-5  side-banner-container col-xs-0">
                <SideBanner 
                    boldText="Your community awaits your arival"
                    lightText="Start your 7 days free trial"
                />
              
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 side-form-container">
                
                <Form/>
              
            </div>

        </div>
    )
}
export default SignUp