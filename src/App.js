import logo from './logo.svg';
import './App.css';
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
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
        <Route exact path="/login">
              <Login></Login>
        </Route>
        <Route exact path="/register">
              <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
