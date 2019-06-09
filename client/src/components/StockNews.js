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
        news: []
    };


    handleGetSavednews = (article) => {
        console.log("article: --------");
        console.log(article);

        createSavednews(article)
          .then(({data: dbNews}) => {
            
            console.log(dbNews)
          })
         
      };
    
    
      handleRemovenews = (articleId) => {
          console.log("delete function--------");
          console.log(articleId);
        removenews(articleId)
          .then(this.handleGetSavednews)
          .catch(err => console.log(err));
      };

    addHeadlines = (articles) => {
        articles.forEach((article) => {

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

        console.log(this.state)
        const{ button } =this.state;

        if(this.state.islogin){
            return true;
        }

        return (
          
                    <ListGroup id="news" className="stock-chart">
                        
                          <h1 className="text-center tab- table-info "> Business-News </h1>
                        {
                            news.map((article) => (
                            <ListGroupItem key={article.title} className="news-item"><br/>
                                <a href={article.url}><br/>
                                    {article.title} - <br/> {article.author} </a><br/>
                                    <p>{article.description} </p>
                                    
                                    <button id="button" onClick={() => this.handleGetSavednews(article)}   className="btn btn-info btn-sm"  >
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