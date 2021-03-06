import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Alert, AlertTitle, Button, CircularProgress, TextField, Tooltip, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';

const Register = () => {


    const [loginData,setLoginData]=useState({});

    // useAuth
      const {registerUser,isLoading,authError,user}=useAuth();
      const history = useHistory();

      const handleOnchange=e=>{

        const feild=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[feild]=value;
        setLoginData(newLoginData);
        e.preventDefault();
    } 

    const handleLoginSubmit=e=>{
        if(loginData.password !== loginData.password2)
        {
            alert('did not match the password');
            e.preventDefault();
            return 
        }
        alert('submitted');
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    };
                  

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Tooltip title="Home" arrow>
           <Link to="/" style={{textDecoration:'none'}}><Button >Go Back </Button></Link>
</Tooltip>
        <Grid  container spacing={2}>
          <Grid sx={{my:'auto'}} item xs={12} md={6}>
          <Typography sx={{mb:2 ,fontSize:"25px"}} variant="body1" gutterBottom>
        REGISTER 
      </Typography>
      {!isLoading && <form  onSubmit={handleLoginSubmit}>
      <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnchange}
                            variant="standard" />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Email"
        name="email"  
        onChange={handleOnchange}                    
        variant ="standard" />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Password"
        onChange={handleOnchange}                    
        name="password"
        type="password"
        variant="standard" />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="RE-TYPE Your Password"
        onChange={handleOnchange}                    
        name="password2"
        type="password"
        variant="standard" />
        <Button  sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign Up </Button>
        
        <NavLink to="/login" style={{textDecoration:'none'}}><Button  sx={{ width: '75%', m: 1 }} variant="text">Already Have Account ?</Button></NavLink>

      </form>}
      {isLoading && <CircularProgress />}
      {user.email && <Alert severity="success">
  <AlertTitle>Successfully</AlertTitle>
  <strong>User Added</strong>
</Alert>}
      {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="https://image.shutterstock.com/image-photo/group-happy-hiker-jumping-on-260nw-1369451180.jpg" alt="Cycolo is here for you" />

          </Grid>
        </Grid>
      </Box>
    );
};

export default Register;