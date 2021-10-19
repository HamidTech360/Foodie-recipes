import React, {useEffect} from 'react'
import SideBanner from '../signUp/components/side'
import SelectOptions from './component/selectCommunity'

const Community = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5  side-banner-container col-xs-0">
                <SideBanner 
                    boldText="Your community awaits your arival"
                    lightText="get started with 7 days free trial"
                />
              
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12 side-form-container">
                
                <SelectOptions/>
              
            </div>

        </div>
    )
}
export default Community