import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { getAllStocks, getApiData, getAllNews, quandlStock } from '../utils/API';

class Stocks extends Component {
  state = {
    stocklist: [],
    stockapikeys: [],
    newsapikeys: [],
    quandlapikeys: []

  };

  // use component did mount to get all stocks on load
  componentDidMount() {
    this.getStocks();
    this.handleGetApiData();
    this.getNews();
    this.handleOldData();
  }
  
  //create method to get all 
  handleOldData = () => {
    quandlStock().then(({data}) => this.setState({quandlapikeys: data}))
  }

  handleGetApiData = () => {
    getApiData().then(({data}) => this.setState({stockapikeys: data}))
  }

  getNews = () => {
    getAllNews().then(({data}) => this.setState({newsapikeys: data}))
  }
  
  getStocks = () => {
    getAllStocks().then(({data: dbStockData}) => this.setState({stocklist: dbStockData})).catch(err => console.log(err));

  }


  render() {
    return (
      <React.Fragment>
        <Jumbotron 
          fluid 
          bg={"danger"} 
          text={"dark"} 
          pageTitle={"Viev All Stocks"} />
      </React.Fragment>
    )
  }
}

export default Stocks;