import React from 'react'
import NavBar from './navbar'
import './css/banner3.css'


const Banner3= ()=>{
    return(
        <div className="banner3-container" style={{background:`url('./assets/bg3.png')`}}>
         
               
                <div className="row">
                    <div className=" col-lg-6 col-xs-12 banner-text banner-text-3">
                        <div className="bold-text-3">Our Mission</div>
                        <div className="light-text-3">We understand that there are so many information out there and just 20% out of the world's population is making it online through their skills. Our mission is to provide a single destination where entrepreneurs and people with high income skills from any place in the world connect with each other, answer questions,
                         access to valuable resources and share personal experience to help them succeed
                         </div>
                        
                         <div className="bold-text-3">Our Vision</div>
                        <div className="light-text-3">Our vision is to create and build products that solves problems in the digital world.
                         </div>
                    </div>

                   
                </div>
         
          
        </div>
    )
}

const appBar = {
    backgroundColor:'unset'
}

export default Banner3