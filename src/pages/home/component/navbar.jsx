import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import Drawer from './drawe'

const NavBar = ()=>{

    const [state, setState] = React.useState({
   
        bottom: false,
        
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const onClose = ()=>{
          setState({...state, ['buttom']:false})
      }

    return(
        <div className="navBar">
            <Drawer 
                state={state}
                togggleDrawer={()=>toggleDrawer()}
                onClose={()=>onClose()}
            />
           
            <img src="./assets/logo2.png"  className="home-logo float-left" />
            <i className="fa fa-align-left justify-content-end float-right pull-right menuIcon fa-1x hideOnDesktop"></i>
            <ul className="nav home-nav justify-content-end hideOnMobile">
                <li className="nav-item"><Link to="#" className="nav-link" style={{color:'white', fontSize:'12px'}}>Home</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link" style={{color:'white', fontSize:'12px'}}> Contact US</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link" style={{color:'white', fontSize:'12px'}}> About US</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link" style={{color:'white', fontSize:'12px'}}> <button className="btn btn-primary" style={{borderRadius:'50px'}}>Get started</button></Link></li>
            </ul>

        </div>
    )
}

export default NavBar