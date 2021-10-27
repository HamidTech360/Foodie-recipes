import React, {useState, useEffect} from 'react'
import SideNav from '../home/components/sideBar'
import Header from '../home/components/header'
import Elevation from '../home/components/papers'
import 'bootstrap/dist/css/bootstrap.css'
 import '../home/components/css/home.css'
 import Details from './components/details'
import API from '../../seedData/recImagesFullest.json'
const Product = (props)=>{
    const [data , setData] = useState([])
    useEffect(()=>{
        setData(API)
        console.log(props.match.params.id);
    },[])

   
    // const handleClick = ()=>{
        
    // }
    return(
        <div className="row master-container">
           <div className="nav-box col-lg-3 col-md-2 col-sm-2 col-xs-0">
             <SideNav/>
           </div>
           <div className="col-12 col-lg-9 col-md-10 col-sm-10 col-xs-12 col-12 big-box">
               <div className="header-box">
                   <Header/>
               </div>
               <div className="">
                   <Elevation/>
               </div>
               <div className="details">
                   <Details id={props.match.params.id}/>
               </div>
              
           </div>
       
        </div>
    )
}
export default Product