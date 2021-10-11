import React from 'react'
import { Link } from 'react-router-dom'
// import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.css'

const SignUpNavBar = ()=>{
    return(
        <div className="navBa">
           
               
            <i className="fa fa-align-left fa-1x justify-content-end pull-right" style={{color:'white', marginTop:'-30px'}}></i>
            <ul className="nav signup-nav justify-content-end hideOnMobile">
                <li className="nav-item"><Link to="#" className="nav-link" style={{ color:'rgb(80, 71, 71)',fontSize:'12px'}}>Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link" style={{ color:'rgb(80, 71, 71)',fontSize:'12px'}}> Contact US</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link" style={{ color:'rgb(80, 71, 71)',fontSize:'12px'}}> About US</Link></li>
            </ul>
        </div>
    )
}

export default SignUpNavBar