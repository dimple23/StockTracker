import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';


import axios from 'axios';


class StockData extends Component {
    state = {
      Stockdata: []
    };

    addHeadlines = (Stockdata) => {
      Stockdata.forEach(() => {

            let newData = {
                
            }

            this.setState(state => ({
              Stockdata: [...state.Stockdata, newData]
            }));

        })
    };

    getStock = (Stockdata) => {
        const link = 'https://www.quandl.com/api/v3/datasets/WIKI/${stock.code}.json?limit=30&collapse=weekly&api_key=y_B-aU-YykoRPGgTuTpG';
        ;
        axios
            .get(link)
            .then(Stockdata => {
                const Stockdata = Stockdata.data;
                this.addHeadlines(Stockdata)
            })
            .catch(err => console.log(err));

    }


    render() {

        const { Stockdata} = this.state;

        if (Stockdata.length <= 0) {
            this.getStock(Stockdata);
        }

        return (
                    <ListGroup id="stock" className="stock-chart">
                        {Stockdata.map((Stockdata) => (
                            <ListGroupItem key={Stockdata.data} className="stock-item">
                                
                                    
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>

        );
    }
}

export default StockData;