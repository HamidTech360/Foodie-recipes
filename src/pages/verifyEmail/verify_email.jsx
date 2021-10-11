import React from 'react'
import SideBanner from '../signUp/components/side'
import Form from './components/form'
const VerifyEmail = ()=>{
    return(
        <div className="row">
            <div className="col-lg-5 col-sm-5 col-md-5 col-xs-0 hideOnMobile">
                <SideBanner 
                    boldText="Almost Done"
                    lightText="Enter the 6 digit code sent to you"
                />
            </div>
            <div className="col-lg-6 col-sm-6 col-md-5 col-xs-12">
                <Form/>
                
            </div>

        </div>
    )
}
export default VerifyEmail