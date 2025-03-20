import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import {Link, useLocation} from 'react-router';


export default function ShortMenu() {

const location = useLocation();
const path = location.pathname;
console.log(path);

  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <ListItemButton component={Link} to="/" selected={path === "/"} sx={{display: 'flex', justifyContent: 'center'}}>
            <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
              < SportsSoccerIcon />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton component={Link} to="/create" selected={path === "/create"} sx={{display: 'flex', justifyContent: 'center'}}> 
          <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
            < AddBoxIcon />
          </ListItemIcon>
        </ListItemButton>
    </List>
    </>
  );
}
