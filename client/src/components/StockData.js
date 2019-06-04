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

    addData= (data) => {
        console.log(data.dataset_data.column_names[0]);
        data.forEach((dataset_data) => {

            let newData = {
                source: dataset_data,
                
            }
            

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