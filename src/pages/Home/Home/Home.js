import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import SomeBlogs from '../SomeBlog/SomeBlogs';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <SideBar></SideBar>
           <SomeBlogs></SomeBlogs>
        </div>
    );
};

export default Home;