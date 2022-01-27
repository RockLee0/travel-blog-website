import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const {title,place,img,_id}=props.blog;
    
    return (
        <Grid item xs={4} sm={4} md={4}>

        <Card sx={{ minWidth: 275,boxShadow: 0 , height:'100%'  }}>
        <CardMedia
                component="img"
                style={{width:'100%',height:'200px',margin:'0 auto'}}
                image={img}
                alt="green iguana"
        />
              <CardContent sx={{height:1}}>
                
                <Typography variant="h5" component="div">
              {title}
              <Typography variant="button" display="block" gutterBottom>
        - {place} 
      </Typography>
                </Typography>
               
                
                <Link to={`/Blogs/${_id}`} style={{textDecoration:'none'}}>  <Button  variant="contained" sx={{textDecoration:'none'}}>See blog</Button> 
                </Link>
              
              </CardContent>
              
            </Card>
        
        </Grid>
    );
};

export default Blog;