import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { getAllStocks, getApiData, getAllNews, quandlStock } from '../utils/API';
import Image from '../components/image/Index'
import Chart from "../components/Chart";
import moment from "moment";
import StockNews from '../components/StockNews';

class Stocks extends Component {
  state = {
    stocklist: [],
    stockapikeys: [],
    newsapikeys: [],
    quandlapikeys: [],
    yesterdaystock: []
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
    quandlStock().then(({ data }) => this.setState({ quandlapikeys: data }))
  }

  handleGetApiData = () => {
    let m = moment().format('YYYY-MM-DD');
    let yesterday = moment().subtract(1, "days").format('YYYY-MM-DD');

    console.log(m);
    getApiData().then(({data}) => this.setState({
      stockapikeys: data["Time Series (Daily)"][m],
      yesterdaystock: data["Time Series (Daily)"][yesterday]
    }));
  }

  // handleGetApiData = () => {
  //   getApiData().then(({ data }) => {
  //     data = Object.keys(data).map(function (key) {
  //       return [Number(key), data[key]];
  //     });
  //     this.setState({ stockapikeys: data })
  //   } )


  // }

  getNews = () => {
    getAllNews().then(({ data }) => this.setState({ newsapikeys: data }))
  }

  getStocks = () => {
    getAllStocks().then(({ data: dbStockData }) => this.setState({ stocklist: dbStockData })).catch(err => console.log(err));

  }


  render() {
    return (
      <React.Fragment>
        <Jumbotron
          fluid
          text={"light"}
          pageTitle={"Stocks Tracker"} />
        {/* <h1> {Object.keys(this.state.stockapikeys).length ? this.state.stockapikeys["Time Series (Daily)"]["1. Information"] : ""} </h1> */}
        {/* {console.log(this.state.stockapikeys)} */}

        <Image />
        <Chart data={{
          labels: ["open", "high", "low", "close", "adjusted"],
          datasets: [
          {
            label: "MSFT (Today)" ,
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: [this.state.stockapikeys["1. open"], this.state.stockapikeys["2. high"], this.state.stockapikeys["3. low"], this.state.stockapikeys["4. close"], this.state.stockapikeys["5. adjusted close"]]
          },
          {
            label: "MSFT (Yesterday)",
            backgroundColor: "rgba(22, 235, 128, 1)",
            data: [this.state.yesterdaystock["1. open"], this.state.yesterdaystock["2. high"], this.state.yesterdaystock["3. low"], this.state.yesterdaystock["4. close"], this.state.yesterdaystock["5. adjusted close"]]
          }
          // {
          //   label: "Subscriptions",
          //   backgroundColor: "rgba(0, 255, 0, 0.75)",
          //   data: [14, 15, 21, 0, 12, 4, 2]

          // }
        ]}} />
        <StockNews/>
      </React.Fragment>
    )
  }
}

export default Stocks;