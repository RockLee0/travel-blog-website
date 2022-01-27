import { CardMedia, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <div>
           <Typography variant="h4"  gutterBottom component="div" sx={{fontWeight: 'bold',m:3 ,display:'block'}}>
             WELCOME TO TRAVELO 
            </Typography>
            <CardMedia
        component="img"
        style={{width:'90%',height:'400px',margin:'0 auto'}}
        image='https://wondersoftibet.com/wp-content/uploads/2020/01/Group-tour-with-Wonders-of-Tibet.jpeg'
        alt="green iguana"
/>
       
<Typography style={{width:'70%',height:'400px',margin:'5 '}} variant="h6"  gutterBottom component="div" sx={{mt:5}}>
      Looking to get more out of your travels? Join our NM+ and get you travel stories  tips not shared on the blog, regular QAs with me, access to all our virtual event replays, free copies of our guidebooks, free access to our blogging  writing courses, autographed copies of my books, member’s only travel discounts, and so much more!
            </Typography>
        </div>
       
    );
};

export default About;