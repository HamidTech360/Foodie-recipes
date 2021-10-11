import * as React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function Drawer({toggleDrawer, state, onClose}) {
    const list = (anchor) => (
        <div
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={()=>toggleDrawer(anchor, false)}
          onKeyDown={()=>toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </div>
      );

  return (
    <div>
     
        <React.Fragment >
         
          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={()=>onClose()}
            
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    
    </div>
  );
}
