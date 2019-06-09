import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

//import Save from '../pages/save';
import { removenews, createSavednews } from '../utils/API';



import axios from 'axios';





class StockNews extends Component {
    state = {
        news: [],
        getNews:[]
    };


    getAllNews = (NewsId) => {
        console.log("hello: --------");
        console.log(NewsId);

        createSavednews(NewsId)
          .then(({data: dbNews}) => {
            
            console.log(dbNews)
          })
         
      };

    handleGetSavednews = (NewsId) => {
        console.log("article: --------");
        console.log(NewsId);

        createSavednews(NewsId)
          .then(({data: dbNews}) => {
            
            console.log(dbNews)
          })
         
      };
    
    
      handleRemovenews = (NewsId) => {
          console.log("delete function--------");
          console.log(NewsId);
        removenews(NewsId)
          .then(this.handleGetSavednews)
          .catch(err => console.log(err));
      };

    addHeadlines = (NewsId) => {
        NewsId.forEach((article) => {

            let newArticle = {
                source: article.source.name,
                author: article.author,
                title: article.title,
                description: article.description,
                url: article.url
            }

            this.setState(state => ({
                news: [...state.news, newArticle]
            }));

        })
    };

    getNews = (news) => {
        const link = `https://newsapi.org/v2/top-headlines?sources=financial-post&apiKey=77d49b61a4fc4cae9b982357ef3468e5`;
        axios
            .get(link)
            .then(news => {
                const articles = news.data.articles.slice(0, 5);
                this.addHeadlines(articles)
            })
            .catch(err => console.log(err));

    }


    render() {
        console.log(this.state)
        const { news } = this.state;

        if (news.length <= 0) {
            this.getNews(news);
        }

        return (
          
                    <ListGroup id="news" className="stock-chart">
                        
                          <h1 className="text-center tab- table-info "> Business-News </h1>
                        {
                            news.map((news) => (
                            <ListGroupItem key={news.id} className="news-item"><br/>
                                <a href={news.url}><br/>
                                    {news.title} - <br/> {news.author} </a><br/>
                                    <p>{news.description} </p>
                                    <button onClick={() => this.handleRemovenews(news._id)} className="btn btn-info btn-sm">
                                        Remove news
                                    </button>
                                    <button onClick={() => this.handleGetSavednews(news)} className="btn btn-info btn-sm">
                                        Save news
                                    </button>
                            </ListGroupItem>
                            
                        ))
                        
                        }
                    </ListGroup>
                
        );
        
    }
}

export default StockNews;