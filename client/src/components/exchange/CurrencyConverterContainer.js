import React, { Component } from 'react';
import Proptypes from 'prop-types';
import CurrencyInput from './CurrencyInput';
import Money from 'js-money';

// Hard-coded values that would normally be dynamically passed in
// as props to CurrencyConverterContainer
const USD_TO_EUR = 1.1333;
const EUR_TO_USD = 1 / 1.1333;
const HEADER_TEXT_PROP = 'CURRENCY';
const COUNTRY_TEXT = '-EXCHANGE';

class CurrencyConverterContainer extends Component {
    constructor() {
        super();
        this.state = {
            toAmount: 0,
            fromAmount: 0
        }

        this.currencyConvertTo = this.currencyConvertTo.bind(this);
        this.currencyConvertFrom = this.currencyConvertFrom.bind(this);
    }

    /**
     * Callback function that is passed as a prop to the To CurrencyInput that
     * updates the amount prop of the from CurrencyInput through changing
     * the CurrencyConverterContainer's state
     * @param {Event} e - Event object that is passed from the onChange event 
     * within CurrencyInput
     */
    currencyConvertTo(e) {
        e.preventDefault();
        const newFromAmount = (e.target.value * USD_TO_EUR).toFixed(2);
        this.setState({
            toAmount: e.target.value,
            fromAmount: newFromAmount
        });
    }

    /**
     * Callback function that is passed as a prop to the From CurrencyInput that
     * updates the amount prop of the To CurrencyInput through changing
     * the CurrencyConverterContainer's state
     * @param {Event} e - Event object that is passed from the onChange event 
     * within CurrencyInput
     */
    currencyConvertFrom(e) {
        e.preventDefault();
        const newToAmount = (e.target.value * EUR_TO_USD).toFixed(2);
        this.setState({
            toAmount: newToAmount,
            fromAmount: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form className="currency-convert-form">
                    <h2>{HEADER_TEXT_PROP} {COUNTRY_TEXT}</h2>

                    <div className="form-group row">
                        <CurrencyInput
                            currencyConvertCB={this.currencyConvertTo}
                            placeholderAmount={0.00}
                            moneyObject={Money.USD}
                            amount={this.state.toAmount || ''}
                        />
                    </div>
                    <div className="form-group row">
                        <CurrencyInput 
                            currencyConvertCB={this.currencyConvertFrom}
                            placeholderAmount={0.00}
                            moneyObject={Money.EUR}
                            amount={this.state.fromAmount || ''}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

// Commented out Proptypes object because compilation will fail
// but wanted to illustrate what the propTypes object would look
// like in a fully working example

// CurrencyConverterContainer.propTypes = {
//     toRate: PropTypes.number,
//     fromRate: PropTypes.number,
//     HeaderText: PropTypes.string,
//     CountryText: PropTypes.string
// }

export default CurrencyConverterContainer;