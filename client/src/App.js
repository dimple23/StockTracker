import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stocks from './pages/Stocks';
import User from './pages/User/User';
import Saved from './pages/Saved';
import './App.css';
//import Save from './pages/save';
//import StockNews from './components/StockNews';
//import StockData from './components/StockData';
//import userPage from './pages/userPage';




function App() {
  return (
    <Router>
      <div>
        <Switch>
       
          <Route exact path="/" component={Stocks} />
          <Route exact path="/add" component={User} />
          <Route exact path="/update/:id" component={User} />
          <Route exact path="/saved" component={Saved} />


          <Route render={() => <h1> 404 Error</h1>} />
        </Switch>
        
       
        
      </div>
    </Router>
  );
}

export default App;
