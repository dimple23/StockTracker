import React, { Component } from 'react';
//import Jumbotron from '../components/Jumbotron';

import { removenews, getSavednews } from '../utils/API';
import {
  ListGroup,
  
} from 'reactstrap';

class Saved extends Component {
  state = {
    newsList: []
  };

  componentDidMount() {
    this.handleGetSavednews();
  }

  handleGetSavednews = () => {
    getSavednews()
      .then(({ data: newsList }) => {
        this.setState({ newsList });
      })
      .catch(err => console.log(err));
  };

  handleRemovenews = newsId => {
    removenews(newsId)
      .then(this.handleGetSavednews)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        
        <ListGroup 
                newslist={this.state.newslist} 
                removenews={this.removenews}
              /> 
          
      </React.Fragment>
    );
  }
}

export default Saved;
