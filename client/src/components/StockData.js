import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';


import axios from 'axios';


class StockData extends Component {
    state = {
     stock: []
    };

    addHeadlines = (Metadata) => {
      Metadata.forEach((MetaData) => {

            let newData = {

                Information: Metadata.Metadata.Information,
                FromSymbol:
                Metadata. MetaData.FromSymbol,
                ToSymbol : 
                MetaData.ToSymbol,
                LastRefreshed: MetaData.LastRefreshed

            }

            this.setState(state => ({
             stock: [...state.stock, newData]
            }));

        })
    };

    getAllStock = (stock) => {
        const link ='https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=LBAFBC4R3B2ZH8G0';
        ;
        axios
            .get(link)
            .then(stock => {
                const metaData =stock.MetaData.information;
                this.addHeadlines( metaData)
            })
            .catch(err => console.log(err));

    }


    render() {

        const { stock } = this.state;

        if (stock.length <= 0) {
            this.getAllStock(stock);
        }

        return (
                    <ListGroup id="stock" className="stock-chart">
                      <div style={{  position: "absolute", width: 800, height: 450}}></div>
                      <h1 className="text-center tab- table-info "> StockData</h1>
                      
                      
                        {stock.map((MetaData) => (
                            <ListGroupItem key={MetaData.information} className="stock-item">
                              <small>
                                {MetaData.FromSymbol}
                                {MetaData.ToSymbol}
                                {
                                  MetaData.LastRefreshed
                                }
                                </small>
                                
                                    
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>
             
        );
    }
}

export default StockData;