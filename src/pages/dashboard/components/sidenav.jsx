import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'

import 'bootstrap/dist/css/bootstrap.css'
import { Drawer } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  paper:{
    background:'black',
    color:'whitesmoke',
    paddingTop:'30px',
    width:'240px',
    
   
  }
})

const SideNav = ()=>{
    const styles = useStyles()

    const [NavOptions, setNavOptions] =useState(
        [
            {
                id:0,
                name:'dashboard',
                link:'/',
                icon:'fa-whatsapp',
                isActive:true
            },
            {
                id:1,
                name:'Communities',
                link:'/',
                icon:'fa-whatsapp',
                isActive:false
            },
            {
                id:2,
                name:'Jobs',
                link:'/',
                icon:'fa-whatsapp',
                isActive:false
            },
            {
                id:3,
                name:'Tasks',
                link:'/',
                icon:'fa-whatsapp',
                isActive:false
            },
            {
                id:4,
                name:'Referrals',
                link:'/',
                icon:'fa-whatsapp',
                isActive:false
            },
            {
                id:5,
                name:'Settings',
                link:'/',
                icon:'fa-whatsapp',
                isActive:false
            }
        ]
    ) 

    const handleNavigation = (index)=>{
        const options = [...NavOptions]
         options.map(el=>el.isActive=false)
        const selectedItem = NavOptions[index]
        selectedItem.isActive= true
        setNavOptions(options)

    }
    return(

        
        <div>
            
            <Drawer
                sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
                classes={{paper:styles.paper}}
            >
                <img src="./assets/logo2.png" alt="tnsl" className="logo float-left" />
                <Toolbar />
               
                <List>
                {NavOptions.map((item, index) => (
                    <ListItem onClick={()=>handleNavigation(index)} button key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':'', paddingLeft:'50px'}}>
                    {/* <ListItemIcon style={{color:'lightgrey'}} color="white" size={10}>
                        <i className="fa fa-home"></i>
                    </ListItemIcon> */}
                    <ListItemText style={{fontSize:'7px'}} primary={item.name} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </div>
    )
}

export default SideNav
