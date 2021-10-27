import React from 'react'
import {Link} from 'react-router-dom'
import './css/images.css'



const Images = ({data})=>{

   
    
    return(
        <div className="images-container container row">
            <div style={{backgroundImage:`url(${'./assets/man.jpg'})`, backgroundPosition:'center', backgroundSize:'cover'}} className="image-box col-5 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div className="info container">
                    Banita pizza <span className="pull-right">3.978</span>
                    <div className="ingredient"> <i className="fa fa-spoon"></i> ingredient</div>
                </div>
                
            </div>
            {data.map((el, index)=>
              
                <div style={{backgroundImage:`url(${el.imageURL})`, backgroundPosition:'center', backgroundSize:'cover'}} className="image-box col-5 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                 <Link to ={`/product/${index}`} style={{textDecoration:'none'}}>
                <div className="info container">
                    {el.title} <span className="pull-right">{el.rating}</span>
                    <div className="ingredient"> <i className="fa fa-spoon"></i> {el.ingredients[0]}</div>
                </div>
                </Link>
            </div>
                
            )}
            {/* <div className="image-box col-5 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                <img src={allImages?allImages.urls.raw:''} alt="images" className="api-images" />
            </div> */}
           
        </div>
    )
}
export default Images