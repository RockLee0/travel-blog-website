import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contaikned</Button>
      <BrowserRouter>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
