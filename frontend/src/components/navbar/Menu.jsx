import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Football clubs
            </ListSubheader>
        }
        >
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            < SportsSoccerIcon />
            </ListItemIcon>
            <ListItemText primary="All clubs" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="England" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="Netherlands" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="Italy" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="France" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="Spain" />
            </ListItemButton>
            </List>
        </Collapse>
        </List>

        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Creating records
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          < AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Create clubs" />
      </ListItemButton>
    </List>
    </>
  );
}
