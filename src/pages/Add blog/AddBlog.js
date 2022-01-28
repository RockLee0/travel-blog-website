import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://stormy-taiga-43973.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <Typography sx={{m:3}} variant="h4" component="div">
            Share your experience through Blog 
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} >
                <TextField {...register("title")} id="outlined-basic" label="Heading" variant="outlined" />
                <TextField {...register("name")} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField {...register("time")} id="outlined-basic" label="Time" variant="outlined" />
                <TextField {...register("date")} id="outlined-basic" label="Date" variant="outlined" />
                <TextField {...register("place")} id="outlined-basic" label="Place" variant="outlined" />
                <TextField {...register("img")} id="outlined-basic" label="Image link" variant="outlined" />
                <TextField sx={{m:3 , width:'50%' , height:'20%'}} {...register("description")} id="outlined-basic" label="Description" variant="outlined" />
                <br />
                <Button  sx={{m:3}} variant="contained" type="submit"> Post Your Blog </Button>
            </form>

        </div>
    );
};

export default AddBlog;