
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import { Box } from '@material-ui/core'

import '../../home/component/css/navbar.css'
import 'bootstrap/dist/css/bootstrap.css'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  paper:{
    background:'black',
    color:'whitesmoke',
    paddingTop:'30px'
  }
})

const NavBar = ({NavOptions})=>{

  

     

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          
        >
          <List >
            {NavOptions.map((item, index) => {
              
                return(
               
                <ListItem button key={index}  >
                  <ListItemIcon>
                      {/* <i className={`fa ${item.icon} fa-1x`}  style={{color:'white'}}></i> */}
                  </ListItemIcon>
                  <Link to ={item.link}  style={{color:'white', textDecorationLine:'none'}}>
                    <ListItemText primary={item.name}/>
                  </Link>
                
                  {/* <hr style= {{border:'2px solid grey'}} /> */}
              </ListItem>
              
               
                )
              
              } )}
          </List>
         <hr/>
        
        </Box>
      );
    
     const styles = useStyles() 
    return(
        <div className="navBar">
            {/* <Drawer 
                state={state}
                togggleDrawer={()=>toggleDrawer()}
                onClose={()=>onClose()}
            /> */}

        <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
            classes={{paper:styles.paper}}
          >
               {list()}
          </SwipeableDrawer>
           
            
            <i className="fa fa-align-left justify-content-end float-right pull-right menuIcon fa-1x hideOnDesktop" style={{color:'white', marginTop:'-20px'}} onClick={toggleDrawer('right', true)}></i>
            <ul className="nav home-nav justify-content-end hideOnMobile" style={{marginTop:'20px'}}>
                <li className="nav-item"><Link to="/" className="nav-link" style={{color:'rgb(59, 57, 57)', fontSize:'12px', fontWeight:'700'}}>Home</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link" style={{color:'rgb(59, 57, 57)', fontSize:'12px', fontWeight:'700'}}> Login</Link></li>
                <li className="nav-item"><Link to="/signup" className="nav-link" style={{color:'rgb(59, 57, 57)', fontSize:'12px', fontWeight:'700'}}> SignUp</Link></li>
                
            </ul>

        </div>
    )
}

export default NavBar