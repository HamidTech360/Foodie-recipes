import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Joi, { validate } from 'joi-browser'
import {apiUrl} from '../../../config.json'
import axios from 'axios'
import '../css/form.css'

import SignUpNavBar from './navbar'

const NavBarOptions= [
    {
        name:'Home',
        link:'/',
        icon:'fa-home'
    },
    {
        name:'Login',
        link:'/login',
        icon:'fa-whatsapp'
    },
    {
        name:'SignUp',
        link:'/signup',
        icon:'fa-whatsapp'
    },
    {
        name:'Contact Us',
        link:'#',
        icon:'fa-phone'
    }
]

const Form = ()=>{
    const schema = {
        username: Joi.string().required().label("Username"),
        email:Joi.string().required().email({minDomainSegments:2, tlds:{allow:['com', 'net']}}),
        phone:Joi.string().label('Phone Number').required(),
        password: Joi.string().required().min(8),
        comfirm_password: Joi.ref('password')
        
    }

    
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        phone:'',
        password:'',
        comfirm_password:''
    })
    const [stateErrors, setStateErrors] = useState({})

    const validateField = ({name, value})=>{
        const obj = {[name]:value}
        const fieldSchema = {[name]: schema[name]}
        const {error} = Joi.validate(obj, fieldSchema)

        return error ? error.details[0].message : null
    }
    const handleSelection = (e)=>{

        const data = {...formData}
        data[e.currentTarget.name] = e.currentTarget.value
        setFormData(data)

        const errors = {...stateErrors}
        const errorMessage = validateField(e.currentTarget)
        if(errorMessage) {
            errors[e.currentTarget.name] = errorMessage
        }else{
            delete errors[e.currentTarget.name]
        }  

        setStateErrors(errors)    
    }
    const Validate = ()=>{
        const {error} = Joi.validate(formData, schema, {abortEarly:false})
        if(!error) return null;
       // console.log(error);
        const errors = {}
        for(let item of error.details){
            errors[item.path[0]] = item.message
           
        }
        return errors
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const errors = Validate()
        if(!errors){
            const data= new FormData ()
            data.append('username', formData.username)
            data.append('email', formData.email)
            data.append('phone', formData.phone)
            data.append('password', formData.password)

            try{
                let response = await axios.post(`${apiUrl}/signup`, formData, {headers:{
                    'content-type':'multipart/form-data'
                }})
                console.log(response);
            }catch(error){
                alert('Something went wrong. Please try again')
            }
        }
        setStateErrors(errors||{})
        

        // console.log(stateErrors);

    }

    return(
        <div className="right-side-form  container">
           
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar NavOptions={NavBarOptions} />

            <div className="hideOnDesktop hideBoldText">
                    Your community awaits your arival
            </div>

         

            <div className="form-container container" id="form-container">
                <div className="text-center sign-up-header">Sign up</div>
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input style={{border:stateErrors.username?'1px solid red':''}} name="username" onChange={(e)=>handleSelection(e)} type="text" className="form-control signup-form " placeholder="user1234" />
                    {stateErrors.username? <span className="error_message">{stateErrors.username}</span>:''}
               </div>

                <div className="form-group">
                    <label htmlFor="Email Address">Email Address</label>
                    <input style={{border:stateErrors.email?'1px solid red ':''}} name="email" onChange={(e)=>handleSelection(e)} type="email" className="form-control signup-form" placeholder="user@example.com" />
                    {stateErrors.email? <span className="error_message">{stateErrors.email}</span>:''}
                </div>

                <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                   <div className="row">
                       <div className="flag col-2 signup-form"  style={{backgroundColor:'#EDEDED', marginRight:'-12px',paddingBottom:'0px', paddingTop:'0px' }}> <img src="./assets/man.jpg" alt="" style={{height:'20px', width:'20px'}} /> </div>
                       <div className="col-2 signup-form">
                            <select name="" id="" className="signup-for" style={{backgroundColor:'#EDEDED', overflow:'hide', fontSize:'8px', marginLeft:'0px', border:'0px'}}>
                                <option value=""> +234 </option>
                            </select>
                       </div>
                       <div className="col-8">
                         <input style={{border:stateErrors.phone?'1px solid red':'green'}} name="phone" onChange={(e)=>handleSelection(e)} type="number" className="form-control signup-form" placeholder="+234" />
                        
                       </div>
                   
                    
                   </div>
                   {stateErrors.phone? <span className="error_message">{stateErrors.phone}</span>:''}
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input style={{border:stateErrors.password?'1px solid red':''}} name="password" onChange={(e)=>handleSelection(e)} type="password" className="form-control signup-form" placeholder="*******" />
                    {stateErrors.password? <span className="error_message">{stateErrors.password}</span>:''}
                </div>

                <div className="form-group">
                    <label htmlFor="Confirm Password">Confirm Password</label>
                    <input style={{border:stateErrors.comfirm_password?'1px solid red':''}} name="comfirm_password" onChange={(e)=>handleSelection(e)} type="password" className="form-control signup-form" placeholder="**********" />
                    {stateErrors.comfirm_password? <span className="error_message">{stateErrors.comfirm_password}</span>:''}
                </div>

                <button onClick={(e)=>handleSubmit(e)} className="btn btn-signUp form-control">Start your 7-days trial</button>

                <div className="query text-center">
                    Already have an account? <Link to="/login"> Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Form