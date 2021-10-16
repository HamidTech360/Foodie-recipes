import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import {apiUrl} from '../../../config.json'
import SignUpNavBar from '../../signUp/components/navbar'


const Form = ()=>{
    const NavBarOptions= [
        {
            name:'Home',
            link:'/',
            icon:'fa-home'
        },
        {
            name:'signUp',
            link:'/signup'
        },
        {
            name:'Contact Us',
            link:'/community'
        }
    ]

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const [progress, setProgress] = useState(false)
    // const [errorMessage, setErrorMessage] = useState(false)

    const handleChange = (e)=>{
        const data = {...formData}
        data[e.currentTarget.name] = e.currentTarget.value
        setFormData(data)
        console.log(formData);
    }

    const handleSubmit = async (e)=>{
        setProgress(true)
        const data = new FormData()
        data.append('username', formData.username)
        data.append('password', formData.password)
        try{

            const response = await axios.post(`${apiUrl}/login`,formData, {
                headers:{
                    'content-type':'application/json'
                }
            } )
            console.log(response);
        }catch(error){
            console.log(error);
            alert('something went wrong. please try again')
            setProgress(false)
        }
    }

    return(
        <div className="right-side-form  container">
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar NavOptions={NavBarOptions} />

            <div className="hideOnDesktop hideBoldText">
                    Welcome Back
            </div>
            <div className="hideOnDesktop hideLightText">
                Let's pick up from where you left off
            </div>

            
            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Login</div>
                <div className="alert alert-danger">OOps, account not found!!! <i className="fa fa-window-close fa-1x pull-right"></i></div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={(e)=>handleChange(e)} name="username" type="text" className="form-control signup-form " placeholder="user1234" />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input onChange={(e)=>handleChange(e)} name="password" type="password" className="form-control signup-form" placeholder="user@example.com" />
                </div>

                <button onClick={()=>handleSubmit()} className="btn btn-signUp btn-lg btn-block" style={{width:'100%'}}>  {progress?<CircularProgress size={20} />:'Login'}</button>
                <div className="query text-center">
                    Don't have an account? <Link to="/login"> sign up</Link>
                </div>
            </div>
        </div>
    )
}
export default Form