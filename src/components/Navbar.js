// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const BrandTypography = styled(Typography)({
  fontFamily: 'Signature Mango, Arial, sans-serif',
  color: '#84E174',
  flexGrow: 1,
});

const NavLink = styled(Button)({
  fontFamily: 'Roie, Arial, sans-serif',
  color: '#FFFFFF',
  textTransform: 'none',
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: '#0C0C0C',
    color: '#FFFFFF',
    width: '80%',
  },
}));

const ListItemLink = styled(ListItem)({
  fontFamily: 'Roie, Arial, sans-serif',
  justifyContent: 'flex-start',
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'white',
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', onClick: () => {/* Handle navigation */} },
    { text: 'How It Works', onClick: () => {/* Handle navigation */} },
    { text: 'Sign Up Now', onClick: () => {/* Handle navigation */} },
  ];

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <CloseButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </CloseButton>
        {menuItems.map((item, index) => (
          <ListItemLink button key={index} onClick={item.onClick}>
            <ListItemText primary={item.text} />
          </ListItemLink>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <BrandTypography variant="h6">
          Flourish
        </BrandTypography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ marginLeft: theme.spacing(1) }} // Adjust the icon position here
            >
              <MenuIcon />
            </IconButton>
            <StyledDrawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </StyledDrawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
            <NavLink>{menuItems[0].text}</NavLink>
            <NavLink>{menuItems[1].text}</NavLink>
            <NavLink>{menuItems[2].text}</NavLink>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
