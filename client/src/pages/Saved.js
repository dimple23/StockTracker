import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron1';

//import Row from '../components/Row/Row1';
//import Col from '../components/Col/Col1';
//import Card from '../components/Card/Card1';
import {
    
    ListGroupItem
} from 'reactstrap';
// import { NavLink } from 'react-router-dom';

//import Save from '../pages/save';
import { removenews, getSavednews} from '../utils/API';



//import axios from 'axios';





class Saved extends Component {
  state = {
    savednewsArray: []
  };

  componentDidMount() {
    this.handleGetSavednews();
  }

  handleGetSavednews = () => {
    getSavednews()
      .then(({ data:savednewsArray }) => {
        this.setState({ savednewsArray });
      })
      .catch(err => console.log(err));
  };

  handleRemovenews = articleId => {
    removenews(articleId)
      .then(this.handleGetSavednews)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid bg={'dark'} color={'light'} pageTitle={'Viewing Saved Books'} />
        <div className="container-fluid">
          
            {!this.state.savednewsArray.length ? (
              <h2 className="text-center">No saved News, yet.</h2>
            ) : (
              this.state.savednewsArray.map(article => {
                return (
                 
                    
                    <ListGroupItem className="news-item"><br/>
                                <a href={article.url}><br/>
                                    {article.title} - <br/> {article.author} </a><br/>
                                    <p>{article.description} </p>
                                    
                                    <button onClick={() => this.handleGetSavednews(article)} className="btn btn-info btn-sm">
                                        Delete news
                                    </button>
                            </ListGroupItem>
                            
                 
                );
              })
            )}
        
        </div>
      </React.Fragment>
    );
  }
}

export default Saved;