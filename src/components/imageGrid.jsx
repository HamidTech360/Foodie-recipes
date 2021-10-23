import React, {useEffect, useState} from 'react'
import {apiUrl} from '../config.json'
import axios from 'axios'
import './css/images.css'



const Images = ()=>{

    useEffect(()=>{
        try{
            async function getImages(){
                let response = await axios.get(`${apiUrl}/photos/random/`, {headers:{
                    'Authorization': 'Client-ID QHdAE0nmsDPguG1Ocwh98h-WMMtCigdHgQGjNX7WoNQ'
                }})
                //console.log(response.data);
                setAllImages(response.data)
               // console.log(allImages);
            }
        
            getImages()
        }catch(error){
            console.log(error);
        }
    })
    
    const [allImages, setAllImages] = useState(null)
    return(
        <div className="images-container row">
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                <img src={allImages?allImages.urls.raw:''} alt="images" className="api-images" />
            </div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
            <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3"></div>
        </div>
    )
}
export default Images