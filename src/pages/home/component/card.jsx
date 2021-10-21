import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Fab } from '@material-ui/core'
import { ArrowRightAlt } from '@material-ui/icons'
import './css/card.css'
import 'font-awesome/css/font-awesome.css'
const Card = ({headingText, subText, icon, iconColor, floatActionColor, isBtn, link})=>{
    const [bgColor, setBgColor] = useState(null)
    const handleHover = (e)=>{
        setBgColor(iconColor)
    }
    const handleMouseLeave = ()=>{
        setBgColor(null)
    }
    return(
        <div onMouseOver={()=>handleHover()} onMouseLeave={()=>handleMouseLeave()} onTouchMove={()=>handleHover()} onTouchEnd={()=>handleMouseLeave()}  className="card" style={{backgroundColor:bgColor, transform:'scale(1.001'}}>
            <div className="icon">
                <i className={`fa ${icon} fa-2x`} style={{color:bgColor?floatActionColor:iconColor}}>

                </i>
            </div>
            <div className="heading-text" style={{color:bgColor?floatActionColor:''}}>
               {headingText}
            </div>
            <div className="sub-texts" style={{color:bgColor?floatActionColor:''}}>
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