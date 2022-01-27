import { Box, Grid, Typography } from '@mui/material';
import React , { useEffect,useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    
   
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
console.log(blogs);
    return (
        <div>
            <Typography variant="h4"  gutterBottom component="div" sx={{fontWeight: 'bold',m:3}}>
            BLOG POSTS 
            </Typography>
            {/* all the blogs grid */}
    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
       {
              blogs.map(blog=><Blog
              key={blog._id}
              blog={blog}
              ></Blog>)
          }

        </Grid>
    </Box>

        </div>
    );
};

export default Blogs;