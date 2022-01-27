import { Typography,CardMedia } from '@mui/material';
import React from 'react';

const Tips = () => {
    return (
        <div>
             <Typography variant="h4"  gutterBottom component="div" sx={{fontWeight: 'bold',m:3 ,display:'block'}}>
             START PLANNING YOUR NEXT ADVENTURE HERE
            </Typography>
            <CardMedia
                component="img"
                style={{width:'90%',height:'400px',margin:'0 auto'}}
                image='https://media.nomadicmatt.com/2021/getstarted1.jpg'
                alt="green iguana"
        />
        <Typography style={{width:'70%',height:'400px',margin:'0 auto'}} variant="h6"  gutterBottom component="div" sx={{m:3}}>
        It can be hard to know where to start when planning your dream trip.

What’s the first step? What’s the second? Third? Fourth?

Travel can seem like a daunting subject with so much information available and, the longer you go away, the more things you seem to have to think about.

I want to make planning your next gap year, family vacation, around the world, or backpacking trip simple and easy.
<br />
On this page, you’ll find a curated list of the best articles on this site related to planning a trip – whether it’s a two week vacation to Italy, or a year-long trip around the world. The tips are broken down into categories so you can find the information you need fast and effectively.
            </Typography>
        </div>
    );
};

export default Tips;