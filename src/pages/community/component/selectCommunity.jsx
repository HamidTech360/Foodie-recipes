import React, {useState} from 'react'
import '../css/select.css'
import SignUpNavBar from '../../signUp/components/navbar'
import { ArrowForwardIos } from '@material-ui/icons'
const SelectOptions = ()=>{

    const [selectOptions, setSelectOptions] = useState([
        {
            id:0,
            thickText:'Cryptocurrency',
            color:'#FF8A48',
            isSelected:true
        },
        {
            id:1,
            thickText:'Forex Trading',
            color:'#2C55BD',
        },
        {
            id:2,
            thickText:'Affiliate Marketing',
            color:'#1CCA76'
        },
        {
            id:3,
            thickText:'Freelancing',
            color:'#632ADE'
            
        }
    ])
    const NavBarOptions= [
        {
            name:'Home',
            link:'/',
            icon:'fa-home'
        },
        {
            name:'about',
            link:'#'
        },
        {
            name:'Contact Us',
            link:'#'
        }
    ]

    const handleSelection = (item)=>{
        const options = [...selectOptions]
        options.map(el=>el.isSelected=false)
        const selectedItem = options[item.id]
        selectedItem.isSelected= true
        console.log(options);
        setSelectOptions(options)
    
    }

    return(
        <div className="right-side-form container">
            <div className="hideOnDesktop">
                <img src="./assets/logo.png" className="form-logo-on-mobile" alt="" />
            </div>

            <SignUpNavBar NavOptions={NavBarOptions} />

            <div className="hideOnDesktop hideBoldText">
                    Your community awaits your arrival
            </div>
            <div className="hideOnDesktop hideLightText">
                Choose your community
            </div>

            <div className="form-container container">
            <div className="sign-up-header" style={{color:'#707070', fontSize:'15px'}}>Choose a community</div>
                {selectOptions.map((item, index)=>
                    <div className="row select-box" key={item.id} onClick={()=>handleSelection(item)} style={{borderColor:item.isSelected?item.color:''}} >
                     <div className="col-10">
                         <div className="thick-text" style={{color:item.color}}>{item.thickText}</div>
                         <div className="tiny-text">Charges start at $5/month</div>
                     </div>
                     <div className="col-2"><ArrowForwardIos style={{color:item.color}} /></div>
                 </div>
                )}
               
                
            </div>
        </div>
    )
}

export default SelectOptions 