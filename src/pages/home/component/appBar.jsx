import * as React from 'react';
import Drawer from './drawe';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import './css/appbar.css'

export default function FixedAppBar() {

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
    
      


  return (
    <div className="appBar">
        <Drawer 
            state={state}
            togggleDrawer={()=>toggleDrawer()}
            onClose={()=>onClose()}
         />
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" style={{backgroundColor:'black'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu onClick={toggleDrawer('buttom', true)} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <img src="./assets/logo2.png"  className="logo float-left" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}