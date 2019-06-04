import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';


import axios from 'axios';


class StockNews extends Component {
    state = {
        news: []
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
                const articles = news.data.articles.slice(0, 8);
                this.addHeadlines(articles)
            })
            .catch(err => console.log(err));

    }


    render() {

        const { news } = this.state;

        if (news.length <= 0) {
            this.getNews(news);
        }

        return (
                    <ListGroup id="news" className="stock-chart">
                        {news.map((article) => (
                            <ListGroupItem key={article.title} className="news-item">
                                <a href={article.url}>
                                    {article.title} -  {article.author} </a>
                                    <small>{article.description} </small>
                            </ListGroupItem>
                        ))
                        }
                    </ListGroup>

        );
    }
}

export default StockNews;