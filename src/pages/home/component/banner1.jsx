import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './navbar'
import './css/banner1.css'


const Banner1= ()=>{
    const NavBarOptions= [
        {
            name:'Home',
            link:'/',
            icon:'fa-home'
        },
        {
            name:'Sign up',
            link:'/signup'
        },
        {
            name:'Login',
            link:'/login'
        },
        {
            name:'Contact us',
            link:'#'
        }
    ]
    return(
        <div className="banner1-container" style={{}}>
            <div className="overlay ">
            <NavBar NavOptions={NavBarOptions} />
                <div className="row">
                    <div className=" col-lg-6 col-sm-7 col-xs-8 banner-text">
                        <div className="bold-text">Are you ready to join our network?</div>
                        <div className="light-text">Learn network and have access to exclusive contents to increase their income and sharpen their skils
                         </div>
                        <Link to ="/signup">
                            <button className="trial btn btn-primary" style={{backgroundColor:'rgb(39, 39, 192)'}}>Start your 7-days free trial</button>
                        </Link>
                    </div>

                   
                </div>
            </div>
          
        </div>
    )
}



export default Banner1