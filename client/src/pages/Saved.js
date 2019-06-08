import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron1';

import Row from '../components/Row1';
import Col from '../components/Col1';
import Card from '../components/Card1';
// import {
//     ListGroup,
//     ListGroupItem
// } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

//import Save from '../pages/save';
import { removenews, createSavednews } from '../utils/API';



//import axios from 'axios';





class Saved extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.handleGetSavednews();
  }

  handleGetSavednews = (article) => {
    console.log("article: --------");
    console.log(article);

    createSavednews(article)
      .then(({data: dbNews}) => {
        
        console.log(dbNews)
      })
     
  };

  handleRemovenews = newsid => {
    console.log("delete function--------");
    console.log(newsid);
  removenews(newsid)
    .then(this.handleGetSavednews)
    .catch(err => console.log(err));
};

render() {
  return (
    <React.Fragment>
      <Jumbotron fluid bg={'dark'} color={'info'} pageTitle={'Viewing Saved News'} />
      <div className="container-fluid">
        <Row>
          {!this.state.news.length ? (
            <h2 className="text-center">No saved News , yet.</h2>
          ) : (
            this.state.news.map(article => {
              return (
                <Col key={article.title}  md={4}>
                  <Card url={article.url} >
                    <small className="text-muted">{`By: ${article.author.join(', ')}`}</small>
                    <p>{article.description}</p>
                    <button onClick={() => this.handleRemovenews(article._id)} className="btn btn-info btn-sm">
                                        Remove news
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