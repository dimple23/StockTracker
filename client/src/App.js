import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stocks from './pages/Stocks';
import User from './pages/User';
<<<<<<< HEAD

=======
//import StockNews from './components/StockNews';
>>>>>>> 440ea8f8788f23707b4749263748ed165007469d
//import StockData from './components/StockData';
//import userPage from './pages/userPage';

//import Login from "./containers/login";



function App() {
  return (
    <Router>
      <div>
        <Switch>
       
          <Route exact path="/" component={Stocks} />
          <Route exact path="/add" component={User} />
          <Route exact path="/update/:id" component={User} />
          



          <Route render={() => <h1> 404 Error</h1>} />
        </Switch>
        
       
        
      </div>
    </Router>
  );
}

export default App;
