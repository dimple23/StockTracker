import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';


import axios from 'axios';


class StockData extends Component {
    state = {
     data: []
    };

    addHeadlines = (data) => {
      data.forEach((data) => {

            let newData = {
                column_names: data.column_names,
                data: data.data

            }

            this.setState(state => ({
              data: [...state.data, newData]
            }));

        })
    };

    getAllStock = (data) => {
        const link ='https://www.quandl.com/api/v3/datasets/WIKI/${stock.code}.json?limit=30&collapse=weekly&api_key=y_B-aU-YykoRPGgTuTpG';
        ;
        axios
            .get(link)
            .then(data => {
                const NewStockdata =data.data;
                this.addHeadlines( NewStockdata)
            })
            .catch(err => console.log(err));

    }


    render() {

        const {data} = this.state;

        if (data.length <= 0) {
            this.getAllStock(data);
        }

        return (
                    <ListGroup id="stock" className="stock-chart">
                      <div style={{  position: "absolute", width: 800, height: 450}}></div>
                      <h1 className="text-center tab- table-info "> StockData</h1>
                      <table class="table table-striped table-info ">
  <thead>
    <tr>
      <th scope="col">#</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      
    </tr>
  </tbody>
</table>
                      
                        {data.map((data) => (
                            <ListGroupItem key={data.data} className="stock-item">
                                
                                    
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>
             
        );
    }
}

export default StockData;