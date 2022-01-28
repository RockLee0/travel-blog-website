import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const SomeBlogs = () => {
    const [blogs,setBlogs]=useState([]);
    
   
    useEffect(() => {
        fetch('https://stormy-taiga-43973.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    const limitedData=blogs.slice(0,10);
    return (
        <div>
            <Typography variant="h4"  gutterBottom component="div" sx={{fontWeight: 'bold',m:3}}>
            LATEST TRAVELAR'S BLOGS 
            </Typography>
            {/* all the blogs grid */}
    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
       {
              limitedData.map(blog=><Blog
              key={blog._id}
              blog={blog}
              ></Blog>)
          }

        </Grid>
    </Box>
            
        </div>
    );
};

export default SomeBlogs;