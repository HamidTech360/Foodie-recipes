import React,{useState} from 'react';
import { Badge } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import { Popover } from '@material-ui/core'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 17,
    padding: '0 4px',
  },
}));








export default function CustomizedBadges() {
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (
    <div className="avatar-img">
        <IconButton aria-label="cart" onMouseOver={handleClick}>
        <StyledBadge badgeContent={4} style={{height:'1px'}} color="secondary">
            <Notifications style={{color:'rgb(94, 17, 94)'}} size={15} />
        </StyledBadge>
        </IconButton>

        <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left' }}
          >
              <ul className="list-group notification-list">                    
                  <li className="list-group-item notification-options">
                     <span><img src="./assets/images-15.jpeg" alt="image" className="notification-imgs" /></span>
                     <span className="pull-right">Your Accounnt is live</span>
                   </li> 
                   <li className="list-group-item notification-options">
                     <span><img src="./assets/images-15.jpeg" alt="image" className="notification-imgs" /></span>
                     <span className="pull-right">Your Accounnt is live</span>
                   </li> 
                   <li className="list-group-item notification-options">
                     <span><img src="./assets/images-15.jpeg" alt="image" className="notification-imgs" /></span>
                     <span className="pull-right">Your Accounnt is live</span>
                   </li>                    
              </ul>
          </Popover>
                           
    </div>
  );
}
