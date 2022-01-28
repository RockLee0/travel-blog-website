import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';


const Footer = () => {
    return (
        <>
    <Box sx={{ width: '100%' ,mt:3 }}>
      <Grid   sx={{ backgroundColor: '#b9d5ff91' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            ABOUT US 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Contact Us 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Meet the team 
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Write for Us 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Learn more about our community 
      </Typography>
          
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            TRAVEL TIPS 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Start Here 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Travel Blogs 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Destination guide  
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Hicking Hack  
      </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            YOURS SRCURITY 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Terms & Conditions 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Privacy Policy 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Cookie Policy 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Copywrite 
      </Typography>
        </Grid>
        </Grid>
    </Box>
        </>
    );
};

export default Footer;