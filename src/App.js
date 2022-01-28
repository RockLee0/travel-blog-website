import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Shared/Navigation/Navigation';
import About from './pages/About/About';
import Tips from './pages/Tips/Tips';
import Blogs from './pages/Blogs/Blogs';
import AddBlog from './pages/Add blog/AddBlog';
import SideBar from './pages/Home/SideBar/SideBar';
import Details from './pages/Details/Details';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/About">
         <About></About>
        </Route>
        
        <Route exact path="/blogs/:id">
         <Details></Details>
        </Route>
        
        <Route path="/Blogs">
         <Blogs></Blogs>
        </Route>
        <Route path="/Tips">
         <Tips></Tips>
        </Route>
        <Route path="/Add Blog">
         <AddBlog></AddBlog>
        </Route>
        <Route path="/SideBar">
         <SideBar></SideBar>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
