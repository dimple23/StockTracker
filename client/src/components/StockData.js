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

    addData = (data) => {
        data.forEach((data) => {

            let newData = {
                source: data.data[0],
                
            }
            console.log(data.data);

            this.setState(state => ({
                stock: [...state.stock, newData]
            }));

        })
    };

    getstock = (stock) => {
        const link = `https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=y_B-aU-YykoRPGgTuTpG`;
        axios
            .get(link)
            .then(stock => {
                const data = stock.data.data;
                this.addData(data)
            })
            .catch(err => console.log(err));

    }


    render() {

        const { stock } = this.state;

        if (stock.length <= 0) {
            this.getstock(stock);
        }

        return (
                    <ListGroup id="stock" className="stock-chart">
                        {stock.map((data) => (
                            <ListGroupItem key={data.data} className="data-item">
                                    
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>

        );
    }
}

export default StockData;