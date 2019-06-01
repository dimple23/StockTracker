import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stocks from './pages/Stocks';
import User from './pages/User';
import AppNavbar from './components/AppNavbar';
//import StockChart from './components/StockChart';
import StockNews from './components/StockNews';

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
      <div className="App">
					<header className="App-header">
						<AppNavbar />
					</header>
					<section className="stock-panel">
					
						<section className="info-section">
							<StockNews />
						</section>
					</section>
				</div>
    </Router>
  );
}

export default App;
