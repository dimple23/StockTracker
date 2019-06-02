import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Row from '../components/Row';
import Col from '../components/collom/col';
import Card from '../components/Card';
import { removeStock, createNewStock } from '../utils/API';

class Saved extends Component {
  state = {
    bookList: []
  };

  componentDidMount() {
    this.handleGetSavedBooks();
  }

  handleGetSavedBooks = () => {
    createNewStock()
      .then(({ data: bookList }) => {
        this.setState({ bookList });
      })
      .catch(err => console.log(err));
  };

  handleRemoveBook = bookId => {
    removeStock(bookId)
      .then(this.handleGetSavedBooks)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'Viewing Saved Stocks'} />
        <div className="container-fluid">
          <Row>
            {!this.state.bookList.length ? (
              <h2 className="text-center">No saved stots, yet.</h2>
            ) : (
              this.state.bookList.map(book => {
                return (
                  <Col key={book._id} md={4}>
                    <Card title={book.title} image={book.image ? book.image : undefined}>
                      <small className="text-muted">{`By: ${book.authors.join(', ')}`}</small>
                      <p>{book.description}</p>
                      <button onClick={() => this.handleRemoveBook(book._id)} className="btn btn-danger btn-sm">
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
