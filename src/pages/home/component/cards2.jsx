import React from 'react'
import Fade from 'react-reveal/Fade'
import Card from './card'
const CARDS2 = ()=>{
    return(
       <div className="container">
        <div className="grid-2  row">
        <Fade duration={2000} bootom>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-2">
                <Card 
                    headingText="Crypto Currency"
                    subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                    icon="fa-anchor"
                    iconColor="#FF8A48"
                    floatActionColor="#FFECE1"
                    isBtn
                    link="/signup"
                />
            </div>
        </Fade>
        <Fade duration={2000} bottom>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-2">
                <Card 
                    headingText="Forex Trading"
                    subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                    icon="fa-dropbox"
                    iconColor="#2C55BD"
                    floatActionColor="#F2F4FA"
                    isBtn
                    link="/signup"
                />
            </div>
        </Fade>

        
        <Fade duration={2000} bottom>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-2">
                <Card 
                    headingText="Afiliate Marketing"
                    subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                    icon="fa-slideshare"
                    iconColor="#1CCA76"
                    floatActionColor="#E4F7EE"
                    isBtn
                    link="/signup"
                />
            </div>
        </Fade>
        <Fade duration={2000} bottom>   
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 tab-2">
                <Card 
                    headingText="Freelancing"
                    subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                    icon="fa-usd"
                    iconColor="#632ADE"
                    floatActionColor="#EFEAFC"
                    isBtn
                    link="/signup"
                />
            </div>
        </Fade>

    </div>
       </div>
    )
}

export default CARDS2