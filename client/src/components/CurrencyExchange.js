import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
//import {
   // EXCHANGE_API_KEY
//} from '../config/keys';
import axios from 'axios';
import { parseCurrencyData } from '../data/dataParser';

class CurrencyExchanger extends Component {
    state = {
        info: null
    };

    addItem = (item) => {
        this.setState(state => ({
            info: item
        }));
    };

    getExchangeRate = () => {

const link = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CAD&apikey=LBAFBC4R3B2ZH8G0`;
        axios
            .get(link)
            .then(rate => {
                const info = parseCurrencyData(rate.data);
                this.addItem(info);

            })
            .catch(err => console.log(err));
    }

    displayInfo = () => {
        console.log("hello");
        const { info } = this.state;
        if(info){
            return (
                <ListGroupItem className="currency">
                    {info.from_currency_code} - {info.to_currency_code}
                    <br />
                    {info.refreshed_at} {info.time_zone}
                    <br />
                    {info.exchange_rate}
                </ListGroupItem>
            )

        }
    }


    render() {

        const { info } = this.state;

        if (!info) {
            this.getExchangeRate();
        }


        return (
            <div className="currency_exchange">
                <Container>
                    <ListGroup id="news">
                        {this.displayInfo()}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default CurrencyExchanger;
