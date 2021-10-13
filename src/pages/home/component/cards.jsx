import React from 'react'
import Card from './card'
const CARDS = ()=>{
    return(
       <div className="container">
            <div className="grid  row">
        <div className="col-lg-4 col-md-5 col-sm-5 tab">
            <Card 
                headingText="Advanced Learning"
                subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam voluptatem reprehenderit 
                doloribus doloremque officia sint veritatis maiores ex, obcaecati enim ullam temporibus iusto quae!"
                icon="fa-anchor"
                iconColor="#FF8A48"
                floatActionColor="#FFECE1"
            />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-5 tab">
            <Card 
                headingText="Access to experts"
                subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam voluptatem reprehenderit 
                doloribus doloremque officia sint veritatis maiores ex, obcaecati enim ullam temporibus iusto quae!"
                icon="fa-dropbox"
                iconColor="#2C55BD"
                floatActionColor="#F2F4FA"
            />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-5 tab">
            <Card 
                headingText="Guidance"
                subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam voluptatem reprehenderit 
                doloribus doloremque officia sint veritatis maiores ex, obcaecati enim ullam temporibus iusto quae!"
                icon="fa-slideshare"
                iconColor="#1CCA76"
                floatActionColor="#E4F7EE"
            />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-5 tab">
            <Card 
                headingText="Increase your Income"
                subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam voluptatem reprehenderit 
                doloribus doloremque officia sint veritatis maiores ex, obcaecati enim ullam temporibus iusto quae!"
                icon="fa-usd"
                iconColor="#632ADE"
                floatActionColor="#EFEAFC"
            />
        </div>

    </div>
       </div>
    )
}

export default CARDS