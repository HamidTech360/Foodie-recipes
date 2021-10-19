import React , {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Popover } from '@material-ui/core'
import Joi from 'joi-browser'
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


const Form = (props)=>{
    let history =  useHistory()

        //                        axnkjnvkihnvjgvjegjemcountryCode: "+234"
        // createdAt: "2021-10-07T19:21:44.751Z"
        // flag: "https://res.cloudinary.com/devtenotea/image/upload/v1633634504/lxerqaq7mq1qeixbzokr.png"
        // id: "country_2f599c3022"
        // length: 10
        // name: "Nigeria"
        // regionalCode: "NG"
    const [countries, setCountries]= useState([])
    const [selectedCountry, setSelectedCountry] = useState({})
    const [BackendError, setBackendError] = useState(null)
    useEffect(()=>{
        
      try{
            async function getCountries (){
                const response = await axios.get(`${apiUrl}/meta/countries`)
                //console.log(response.data.data);
                setCountries(response.data.data)
                // setSelectedCountry(response.data.data[0])
             
            }
            getCountries()
            
      }catch(error){
          console.log(error);
          alert('something is wrong')
      }
      
     
    })

    const schema = {
        username: Joi.string().required().label("Username"),
        email:Joi.string().required().email({minDomainSegments:2, tlds:{allow:['com', 'net']}}),
        phone:Joi.string().label('Phone Number').required(),
        password: Joi.string().required().min(8),
        confirmPassword: Joi.ref('password'),
     
    }

   
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:''    
    })

   
    const [stateErrors, setStateErrors] = useState({})
    const [showProgress, setShowProgress] = useState(false)



    const validateField = ({name, value})=>{
       
        try{
            const obj = {[name]:value}
            const fieldSchema = {[name]: schema[name]}
            const {error} = Joi.validate(obj, fieldSchema)

            return error ? error.details[0].message : null
        }catch(error){
            console.log('unable to validate');
        }
        
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
    const handlePhoneNumber = (e)=>{
       
        const data = {...formData}
        data[e.currentTarget.name] =  (e.currentTarget.value).replace(/^0+/, '')
        setFormData(data)
    }

    const Validate = ()=>{
      try{
        const {error} = Joi.validate(formData, schema, {abortEarly:false})
        if(!error) return null;
       // console.log(error);
        const errors = {}
        for(let item of error.details){
            errors[item.path[0]] = item.message
           
        }
        return errors
      }catch(error){
          console.log(error);
      }
    }
    
    const handleSubmit = async (e)=>{
        
        e.preventDefault()
       
     
        console.log(formData);
        const errors = Validate()
        let countryId = selectedCountry.id? selectedCountry.id:'country_2f599c3022'
        if(!errors){
            setShowProgress(true)
      

            try{
                let response = await axios.post(`${apiUrl}/signup`,{...formData, 'country':countryId})
                
                console.log(response.data.success);
                if(response.data.success){
                    history.push('/verify_email')
                }
            }catch(error){
                alert('Something went wrong. Please try again')
                setBackendError(error.response?.data)
                console.log(error.response?.data);
                setShowProgress(false)
            }
        }
        setStateErrors(errors||{})
        

        // console.log(stateErrors);

    }


    //Country Selection 

    const handleSelectCountry=(item)=>{
        console.log(item);
        setSelectedCountry(item)
        console.log(selectedCountry);
        setAnchorEl(null);
    }


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


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
                {BackendError?  <div className="alert alert-danger">{BackendError.message} <i className="fa fa-window-close fa-1x pull-right"></i></div>:''}
                <form method="post" onSubmit={(e)=>handleSubmit(e)}>
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
                            <div className="flag col-4" onClick={handleClick} aria-describedby={id}>
                                
                                 <img src={selectedCountry.flag? selectedCountry.flag:'./assets/nigeriaflag.png'} alt="flag" className="flag-img" /> 
                                 <i className="fa fa-caret-down" style={{marginRight:'5px', marginLeft:'5px'}}></i>
                                 <span className="country_name">{selectedCountry.countryCode? selectedCountry.countryCode:'+234'}</span>


                               
                            </div>

                            <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                >
                                    <ul className="list-group select-country">
                                        {countries.map((el, index)=>
                                                <li className="list-group-item country-options" onClick={()=>handleSelectCountry(el)} key={index}>
                                                    <img src={el.flag? el.flag:''} className="flag-img" alt="" />
                                                    <span className="pull-right">{el.name? el.name:''}</span>
                                                </li>
                                        )}
                                    </ul>
                             </Popover>
                           
                            <div className="col-7">
                                <input style={{border:stateErrors.phone?'1px solid red':'green'}} name="phone" onChange={(e)=>handlePhoneNumber(e)} type="number" className="form-control signup-form"/>
                                
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
                            <input style={{border:stateErrors.confirmPassword?'1px solid red':''}} name="confirmPassword" onChange={(e)=>handleSelection(e)} type="password" className="form-control signup-form" placeholder="**********" />
                            {stateErrors.confirmPassword? <span className="error_message">{stateErrors.confirmPassword}</span>:''}
                        </div>

                        
                        {BackendError?  <div className="alert alert-danger">{BackendError.message} <i className="fa fa-window-close fa-1x pull-right"></i></div>:''}
                        <button  className=" btn-signUp btn btn-lg btn-block" style={{width:'100%'}}>{showProgress? <CircularProgress size={20} /> :'Start your 7-days trial '}</button>
                </form>

                <div className="query text-center">
                    Already have an account? <Link to="/login"> Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Form