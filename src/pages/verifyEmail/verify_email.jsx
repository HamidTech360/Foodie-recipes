import React, {useEffect} from 'react'
import SideBanner from '../signUp/components/side'
import Form from './components/form'
const VerifyEmail = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1 hideOnMobile">
                <SideBanner 
                    boldText="Almost Done"
                    lightText={`Enter the 6 digit code sent to ${localStorage.getItem('user_email')? localStorage.getItem('user_email'):'you'}`}
                />
            </div>
            <div className="col-lg-5 col-sm-10 col-md-5 col-xs-12">
                <Form/>
                
            </div>

        </div>
    )
}
export default VerifyEmail