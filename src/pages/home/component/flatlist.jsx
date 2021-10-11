import * as React from 'react';
import {ListSubheader} from '@material-ui/core';

import { List } from '@material-ui/core';


import {ListItemText} from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
// import Collapse from '@mui/material/Collapse';

import './css/flatlist.css'

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      
        <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor:'white', marginBottom:'10px', padding:'10px'}}>
          What is Next stage Lab
          <span className="justify-content-end float-right pull-right add" data-target="#collapse1">+</span>
        </ListSubheader>
        <div id="collapse1" class="collapse">
          lorem30
        </div>
     
        <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor:'white', marginBottom:'10px', padding:'10px'}}>
        What is Next stage Lab
          <span className="justify-content-end float-right pull-right add">+</span>
        </ListSubheader>
    
        <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor:'white', marginBottom:'10px', padding:'10px'}}>
        What is Next stage Lab
          <span className="justify-content-end float-right pull-right add">+</span>
        </ListSubheader>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         
            <ListItemText primary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero quisquam ullam
             consectetur maxime tenetur necessitatibus
            , repudiandae doloremque voluptas voluptatem." />
           
          
        </List>
      </Collapse>
    </List>
  );
}
