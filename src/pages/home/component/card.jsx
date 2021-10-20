import React from 'react'
import {Link} from 'react-router-dom'
import { Fab } from '@material-ui/core'
import { ArrowRightAlt } from '@material-ui/icons'
import './css/card.css'
import 'font-awesome/css/font-awesome.css'
const Card = ({headingText, subText, icon, iconColor, floatActionColor, isBtn, link})=>{
    return(
        <div className="card">
            <div className="icon">
                <i className={`fa ${icon} fa-2x`} style={{color:iconColor}}>

                </i>
            </div>
            <div className="heading-text">
               {headingText}
            </div>
            <div className="sub-texts">
               {subText}
            </div>
            {
                !isBtn?<div className="justify-content-end">
                <Fab style={{backgroundColor:floatActionColor}}>
                    <ArrowRightAlt style={{ color:iconColor}}/>
                </Fab>
            </div>:''
            }
            {
                isBtn? <div className="join-now">
                <Link to ={"/"} style={{fontSize:'10px'}}>Learn more</Link>
                <Link to={link}>
                    <button className="btn float-right pull-right" style={{backgroundColor:iconColor, color:'white'}}>Join Now</button>
                </Link>
            </div>:''
            }
            
        </div>
    )
}

export default Card