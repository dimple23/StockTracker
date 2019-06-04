import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Row from '../components/Row';
import Col from '../components/col';
import Card from '../components/Card';
import { removeStock, createNewStock } from '../utils/API';


class Saved extends Component {
  state = {
    stockList: []
  };

  componentDidMount() {
    this.handleGetSavedStocks();
  }

  handleGetSavedStocks = () => {
    createNewStock()
      .then(({ data: stockList }) => {
        this.setState({ stockList });
      })
      .catch(err => console.log(err));
  };

  handleRemoveStock = stockId => {
    removeStock(stockId)
      .then(this.handleGetSavedStocks)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'Saved Stocks'} />
        <div className="container-fluid">
        
      
          <Row>
            {!this.state.stockList.length ? (
              <h2 className="text-center">No saved stots, yet.</h2>
            ) : (
              this.state.stockList.map(stock => {
                return (
                  <Col key={stock._id} md={4}>
                    <Card title={stock.title} image={stock.image ? stock.image : undefined}>
                      <small className="text-muted">{`By: ${stock.authors.join(', ')}`}</small>
                      <p>{stock.description}</p>
                      <button onClick={() => this.handleRemoveStock(stock._id)} className="btn btn-danger btn-sm">
                        Remove Stock
                      </button>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Saved;
