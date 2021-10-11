import React from 'react'
import Card from './card'
const CARDS2 = ()=>{
    return(
       <div className="container">
        <div className="grid-2  row">
        <div className="col-lg-5 col-xs-12 tab-2">
            <Card 
                headingText="Crypto Currency"
                subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                icon="fa-anchor"
                iconColor="#FF8A48"
                floatActionColor="#FFECE1"
            />
        </div>
        <div className="col-lg-5 col-xs-12 tab-2">
            <Card 
                headingText="Forex Trading"
                subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                icon="fa-dropbox"
                iconColor="#2C55BD"
                floatActionColor="#F2F4FA"
            />
        </div>
        <div className="col-lg-5 col-xs-12 tab-2">
            <Card 
                headingText="Afiliate Marketing"
                subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                icon="fa-slideshare"
                iconColor="#1CCA76"
                floatActionColor="#E4F7EE"
            />
        </div>
        <div className="col-lg-5 col-xs-12 tab-2">
            <Card 
                headingText="Freelancing"
                subText="The next stage lab gives you an opportunity to learn at a rate that exceeds the normal standards."
                icon="fa-usd"
                iconColor="#632ADE"
                floatActionColor="#EFEAFC"
            />
        </div>

    </div>
       </div>
    )
}

export default CARDS2