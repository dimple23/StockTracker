import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { getAllStocks, getApiData } from '../utils/API';

class Stocks extends Component {
  state = {
    stocklist: [],
    stockapikeys: []

  };

  // use component did mount to get all stocks on load
  componentDidMount() {
    this.getStocks();
    this.handeGetApiData();
  }
  
  //create method to get all 

  handeGetApiData = () => {
    getApiData().then(({data}) => this.setState({stockapikeys: data}))
  }
  getStocks = () => {
    getAllStocks().then(({data: dbStockData}) => this.setState({stocklist: dbStockData})).catch(err => console.log(err));

  }


  render() {
    return (
      
      <React.Fragment>
        <Jumbotron 
          fluid 
          bg={"success"} 
          text={"dark"} 
          pageTitle={"View All Stocks"} />
      </React.Fragment>
    )
  }
}

export default Stocks;