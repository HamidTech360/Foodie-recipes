import React, {useState, useEffect} from 'react'
import SideNav from './components/sideBar'
import Header from './components/header'
import Elevation from './components/papers'
import Images from './components/imageGrid'
import 'bootstrap/dist/css/bootstrap.css'
import './components/css/home.css'
import API from '../../seedData/recImagesFullest.json'
const Home = ()=>{
    const [data , setData] = useState([])
    useEffect(()=>{
        setData(API)
    },[])

    const handleSearch = (e)=>{
        console.log(e.currentTarget.value);
       const filteredData = data.filter(item=>item.title.indexOf(e.currentTarget.value) > -1)
       setData(filteredData.length===0?API:filteredData)
    //    if(filteredData.length ===0){
    //        setData(API)
    //    }else{
    //        setData(filteredData)
    //    }
    //    console.log(filteredData);
    }
    // const handleClick = ()=>{
        
    // }
    return(
        <div className="row master-container">
           <div className="nav-box col-lg-3 col-md-2 col-sm-2 col-xs-0">
             <SideNav/>
           </div>
           <div className="col-12 col-lg-9 col-md-10 col-sm-10 col-xs-12 col-12 big-box">
               <div className="header-box">
                   <Header onChangeHandler = {handleSearch} />
               </div>
               <div className="">
                   <Elevation/>
               </div>
               <div className="images">
                   <Images data={data}/>
               </div>
           </div>
       
        </div>
    )
}
export default Home