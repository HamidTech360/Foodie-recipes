import React from 'react'
import { Fab } from '@material-ui/core'
import { ArrowRightAlt } from '@material-ui/icons'
import './css/card.css'
import 'font-awesome/css/font-awesome.css'
const Card = ({headingText, subText, icon, iconColor, floatActionColor})=>{
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
            <div className="justify-content-end">
                <Fab style={{backgroundColor:floatActionColor}}>
                    <ArrowRightAlt color={'red'} style={{ color:iconColor}}/>
                </Fab>
            </div>
        </div>
    )
}

export default Card