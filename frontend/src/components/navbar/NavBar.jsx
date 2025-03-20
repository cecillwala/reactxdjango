import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Typography from '@mui/material/Typography';
import Menu from './Menu'
import ShortMenu from "./ShMenu"

const drawerWidth = 240;
const ShortDrawerWidth = 80;

export default function NavBar({content}) {

  const [isBigMenu, setBigMenu] = useState(false);
  const changeMenu = () => {
    setBigMenu(!isBigMenu);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton sx={{marginRight: '25px', color: 'white'}} onClick={changeMenu}>
            {isBigMenu? <MenuOpenIcon/> : <MenuIcon/>}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{marginRight: '40px'}}>
            Football
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu? drawerWidth : ShortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu? drawerWidth : ShortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isBigMenu? <Menu/> : <ShortMenu/>}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
