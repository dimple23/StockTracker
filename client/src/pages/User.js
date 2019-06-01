import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { getAllStocks, getApiData } from '../utils/API';
class User extends Component {
  state = {

  }
  componentDidMount() {
    this.getStocks();
    this.handeGetApiData();
  }

  handeGetApiData = () => {
    getApiData().then(({data}) => this.setState({stockapikeys: data}))
  }
  getStocks = () => {
    getAllStocks().then(({data: dbStockData}) => this.setState({stocklist: dbStockData})).catch(err => console.log(err));

  }
  render() {
    return (
      
        <Jumbotron 
          fluid 
          bg={"info"} 
          text={"dark"} 
          pageTitle={"Viev All Stocks"} />
     
    )
    }
  }

export default User;