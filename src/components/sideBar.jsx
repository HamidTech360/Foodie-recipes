import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Drawer } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './css/sidebar.css'

const useStyles = makeStyles({
  paper:{
    paddingTop:'30px',
    width:'240px' ,
    paddingLeft:'50px',
    color:'grey'  
  }
})

const SideNav = ()=>{
    const styles = useStyles()

    const [NavOptions, setNavOptions] =useState(
        [
            {
                id:0,
                name:'Ranking',
                link:'/',
                icon:'fa-bar-chart',
                isActive:true
            },
            {
                id:1,
                name:'Challenge',
                link:'/',
                icon:'fa-dropbox',
                isActive:false
            },
            {
                id:2,
                name:'Party',
                link:'/',
                icon:'fa-angellist',
                isActive:false
            },
            {
                id:3,
                name:'Connect',
                link:'/',
                icon:'fa-paperclip',
                isActive:false
            },
            {
                id:4,
                name:'Parade',
                link:'/',
                icon:'fa-male',
                isActive:false
            },
            {
                id:5,
                name:'Group',
                link:'/',
                icon:'fa-users',
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

        
        <div className="sideBar">
            
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

                <img src="./assets/bluecube.jpg" className="logo" alt="logo" />
                
                <Toolbar />
               
                <List>
                    <ListItem>
                        <i className="fa fa-home sideBarIcons"></i>
                        <span>Home</span>
                    </ListItem>

                    <ListItem>
                        <i className="fa  fa-commenting sideBarIcons"></i>
                        <span>Message</span>
                    </ListItem>

                    <ListItem style={{fontWeight:700, marginTop:'30px', marginBottom:'15px'}}> SHARE</ListItem>

                    {NavOptions.map((item, index) => (
                    <ListItem  onClick={()=>handleNavigation(index)} button key={index} style={{backgroundColor:item.isActive?'rgba(255, 255, 255, 0.15)':''}}>
                        <i className={`fa ${item.icon} sideBarIcons`}></i>
                        <span>{item.name}</span>
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default SideNav