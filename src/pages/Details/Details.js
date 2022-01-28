import { CardMedia, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Details = () => {
    const { id } = useParams();
const [blog,setBlog]=useState({});
const [value, setValue] = React.useState(3);
console.log(id);
    
    useEffect(() => {
        fetch(`https://stormy-taiga-43973.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    },[]);

    return (
        <div>
             <Typography variant="h4"  gutterBottom component="div" sx={{fontWeight: 'bold',m:3}}>
             {blog.title}  <Typography variant="button" display="block" gutterBottom>
        -by  {blog.name} 
      </Typography>
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
        POSTED AT: {blog.time},{blog.date}
        <br />
        Place:{blog.place}
      </Typography>
      <CardMedia
                component="img"
                style={{width:'70%',height:'300px',margin:'0 auto'}}
                image={blog.img}
                alt="green iguana"
        />
        <Typography component="legend">Review</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <Typography variant="body2" gutterBottom>
          {blog.description}
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
        </div>
    );
};

export default Details;