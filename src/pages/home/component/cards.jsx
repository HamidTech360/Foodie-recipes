import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Card from './card'
class CARDS extends Component{

    render(){
        return(
            <div className="container">
               
                 <div className="grid  row">
                     < Zoom clear duration={2000}>
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
                     </Zoom>
                    

                    <Fade left  duration={2000}>
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
                    </Fade>

                    <Fade right  duration={2000}>
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
                    </Fade>

                    <Fade bottom duration={2000}>
                        
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
        
                    </Fade>

                    
                 </div>
             </div>
         )
    }
   
}

export default CARDS