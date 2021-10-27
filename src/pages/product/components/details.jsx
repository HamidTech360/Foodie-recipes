import React, {useEffect, useState} from 'react'
import API from '../../../seedData/recImagesFullest.json'
import './css/details.css'
const Details = ({id})=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        
        const product = API[id]
        console.log(product);
        setData(product)
    }, [])
    return(
        <div>
            <div className="product-image" style={{backgroundImage:`url(${data.imageURL})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
            <div className="title">
                <div className="details-header">Tilte</div>
                <div className="title-detils">
                   {data.title}
                </div>
            </div>
            <div className="ingredients">
                <div className="details-header">Ingredients</div>
                <div className="ingred-detils">
                    {data.ingredients}
                </div>
            </div>

            <div className="directions">
                <div className="details-header">Direction</div>
                <div className="dir-detils">
                   {data.directions}
                </div>
            </div>
        </div>
    )
}

export default Details;