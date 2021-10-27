import React from 'react'
import CustomizedBadges from './badge'
import NavBar from './navbar'
import './css/header.css'
import { ExpandMore } from '@material-ui/icons';

const Header = ({onChangeHandler})=>{
    return(
        <div className="header">
            <div className="input-group showOnDesktop" id="input-box">
                <div className="input-group-prepend">
                    <i className="fa fa-search"></i>
                </div>
                <input onChange={(e)=>onChangeHandler(e)} type="text" className="form-control" id="search-box" placeholder="Find Something..."/>
                <div className="input-group-prepend">
                    <button className="btn btn-search">Search</button>
                </div>
            </div>

            <div className="showOnMobile">
                <NavBar/>
            </div>

           <div className="header-options pull-right">
                    <CustomizedBadges/>
                    <img src="./assets/avatar.png" alt="profile-pics" className="profile-img" />
                    <div className="name">Abigail</div>
                    <ExpandMore sx={{fontSize:5}} style={{marginTop:'10px'}}/>
           </div>


            <div className="input-group showOnMobile" id="input-box">
                <div className="input-group-prepend">
                    <i className="fa fa-search"></i>
                </div>
                <input type="text" className="form-control" id="search-box" placeholder="Find Something..."/>
                <div className="input-group-prepend">
                    <button className="btn btn-search">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header