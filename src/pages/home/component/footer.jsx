import React from 'react'
import { Divider } from '@material-ui/core';
import './css/footer.css'

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-6">
                        <div className="heading-text">
                            Don't Hesitate
                        </div>
                        <div className="light-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, magni.
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <button className="btn footer-btn">Start your 7 days free trial</button>
                    </div>
                </div>
                <hr className="divider" />
                <div className="row footer-row">
                    <div className="col-6">
                        <div>
                            <img src="./assets/logo.png" className="footer-logo" alt="" />
                        </div>
                        <div className="footer-text footer-text-1">
                           &copy;The Next stage lab
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="row">
                            <div className="col-4 footer-text">
                               Community Guidelines <br/> Affiliate Program
                            </div>
                            <div className="col-4 footer-text">
                            Privacy policy <br/> Contact us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Footer;