import React from 'react'
import '../css/side.css'
const SideBanner = ({boldText, lightText})=>{
    return(
        <div className="side-banner" style={{background:`url('./assets/images-15.jpeg')`}}>
            <div className="overlay side-overlay">
                 <img src="./assets/logo2.png"  className="logo float-left" />
                 <div className="side-text">
                    <div className="side-bold-text">
                        {boldText}
                    </div>
                    <div className="side-light-text">
                        {lightText}
                    </div>
                  
                 </div>
            </div>
        </div>
    )
}
export default SideBanner