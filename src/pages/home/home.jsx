import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './component/css/home.css'

import FixedAppBar from './component/appBar'
import Banner1 from './component/banner1'
import CARDS from './component/cards'
import Banner2 from './component/banner2'
import CARDS2 from './component/cards2'
import Banner3 from './component/banner3'
import NestedList from './component/flatlist'
import Footer from './component/footer'

const Home = ()=>{
    return(
        <div className="containe">
         
           <Banner1/>
           <div className=" bold-text text-center" id="what-we-offer">
                Frequently asked Questions
            </div>
            <CARDS/>
            <Banner2/>
            <CARDS2/>
            <Banner3/>
            <div className="text-center who-we-are">What we Offer</div>
            <div className="container" style={{marginTop:'10px'}}>
                <NestedList/>
            </div>
            <Footer/>
        </div>
    )
}

const appBar = {
    backgroundColor:'unset'
}

export default Home