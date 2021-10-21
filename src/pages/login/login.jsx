import React, { useEffect } from 'react'
import SideBanner from '../signUp/components/side'
import Form from './components/form'
const Login = ()=>{
     useEffect(()=>{
        window.scrollTo(0,0)
     },[])   

    return(
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-0 hideOnMobile">
                <SideBanner 
                    boldText="Welcome Back"
                    lightText="Let's pick up from where you left off"
                />
            </div>
            <div className="col-lg-5 col-sm-5 col-md-5 col-xs-12">
                <Form/>
                
            </div>

        </div>
    )
}
export default Login