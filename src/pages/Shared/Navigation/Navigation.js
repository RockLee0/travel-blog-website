import { AppBar, Avatar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  
  const pages = ['Home','About', 'Tips', 'Blogs','Add Blog'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
        <>
         <AppBar position="static" sx={{ bgcolor: "black", pt:2}}>
         <Container maxWidth="xl">
           <Toolbar disableGutters>
             <Typography
               variant="h6"
               noWrap
               component="div"
               sx={{ mr: 2, display: { xs: 'none', md: 'flex',fontSize: 40 ,fontWeight: 'bold' } }}
             >
               Travelo 
             </Typography>
                             
             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               {pages.map((page) => (
                   <NavLink to={`/${page}`}>
                 <Button
                   key={page}
                   onClick={handleCloseNavMenu}
                   sx={{ my: 2, color: 'white', display: 'block' ,textDecoration: 'none'}}
                 >
                   {page}
                 </Button>
                 </NavLink>
               ))}
             </Box>
   
             <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Open settings">
                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                   <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/yupiramos/yupiramos1811/yupiramos181105195/111553727-avatar-boy-travel-trip-airport-and-vacation-theme-colorful-design-vector-illustration.jpg" />
                 </IconButton>
               </Tooltip>
           
             </Box>
           </Toolbar>
         </Container>
       </AppBar>
       </>
    );
};

export default Navigation;