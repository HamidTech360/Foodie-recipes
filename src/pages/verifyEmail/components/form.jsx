import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {apiUrl} from '../../../config.json'
import SignUpNavBar from '../../signUp/components/navbar'
import { CircularProgress } from '@material-ui/core'

const Form = ()=>{
    let history = useHistory()

    const NavBarOptions= [
        {
            name:'Home',
            link:'/',
            icon:'fa-whatsapp'
        },
        {
            name:'SignUp',
            link:'/signup'
        },
        {
            name:'Contact Us',
            link:'#'
        }
    ]
  

    
    const [BackendError, setBackendError] = useState(null)
    const [showProgress, setShowProgress] = useState(false)
    const [Token, setToken] = useState('')
    const [showWaitMessage, setShowWaitMessage] = useState(false)
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)

    const handleSubmit = async ()=>{
        setShowProgress(true)
        try{
            let response = await axios.post(`${apiUrl}/verification/email`,{token:Token},{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('Auth_token')}`
                }
            })
                
            console.log(response.data);
            if(response.data.success){
                history.push('/community')
            }
         
        }catch(error){
                setBackendError(error.response?.data)
                console.log(error.response?.data);
                if( error.response?.data.message === 'Email already verified'){
                    alert('verified')
                    history.push('/community')
                }
                setShowProgress(false)
        }
    }


    const handleChange = (e)=>{
        setToken(e.currentTarget.value)
        console.log(Token);
    }


    const handleResend = async ()=>{
        setTimeout(()=>{
            setShowWaitMessage(true)
        },500)
       try{
        let response = await axios.get(`${apiUrl}/verification/email`, {
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('Auth_token')}`
                }
        })
        if(response.data.success){
            setShowWaitMessage(false)
            setShowSuccessMsg(true)
            
        }
        // if(response.data.message == 'Email already verified'){

        // }

        console.log(response.data);
       }catch(error){
        setBackendError(error.response?.data)
        console.log(error.response?.data);
        
       }
    }

    

    return(
        <div className="right-side-form  container">
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar NavOptions={NavBarOptions} />

            <div className="hideOnDesktop hideBoldText">
                    Almost Done
            </div>
            <div className="hideOnDesktop hideLightText">
                Enter the 6 digit code sent to {localStorage.getItem('user_email')? localStorage.getItem('user_email'):'you'}
            </div>

            
            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Verification</div>
                {BackendError?  <div className="alert alert-danger">{BackendError.message} <i className="fa fa-window-close fa-1x pull-right"></i></div>:''}
                <div className="form-group input-group-lg">
                    <label htmlFor="username">code</label>
                    <input onChange={(e)=>handleChange(e)} type="text" placeholder="*****" className="form-control   signup-form" style={{fontSize:'12px', padding:'20px'}} />
                </div>

            
                <button onClick={()=>handleSubmit()} className="btn btn-signUp btn-lg btn-block" style={{width:'100%'}}>{showProgress?<CircularProgress size={20} />:'Verify Email'}</button>

                <div className="query text-center">
                    Didn't get a code? <Link to="#" onClick={()=>handleResend()}> Resend</Link>
                </div>
                {showWaitMessage && <div className="alert alert-warning text-center">Please wait...</div>}
                {showSuccessMsg && <div className="alert alert-success text-center">Token has been sent to your mail</div>}
            </div>
        </div>
    )
}
export default Form
