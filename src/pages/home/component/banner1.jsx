import React from 'react'
import NavBar from './navbar'
import './css/banner1.css'


const Banner1= ()=>{
    return(
        <div className="banner1-container" style={{background:`url('./assets/background.jpg')`}}>
            <div className="overlay ">
                <NavBar/>
                <div className="row">
                    <div className=" col-lg-6 col-sm-7 col-xs-8 banner-text">
                        <div className="bold-text">Are you ready to join our network?</div>
                        <div className="light-text">Learn network and have access to exclusive contents to increase their income and sharpen their skils
                         </div>
                         <button className="trial btn btn-primary" style={{backgroundColor:'rgb(39, 39, 192)'}}>Start your 7-days free trial</button>
                    </div>

                   
                </div>
            </div>
          
        </div>
    )
}

const appBar = {
    backgroundColor:'unset'
}

export default Banner1