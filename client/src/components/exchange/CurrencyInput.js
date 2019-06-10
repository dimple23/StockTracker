import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import './CurrencyInput.css';

class CurrencyInput extends PureComponent {
    render() {
        return (
            <div className="currency-input-container">
                <label for="inputHeader">{this.props.inputHeader}</label>
                <div className="input-group">
                    <span className="input-group-addon">
                        {this.props.moneyObject.symbol}
                    </span>
                    <input
                        className="form-control"
                        onChange={this.props.currencyConvertCB}
                        onBlur={this.props.currencyConvertCB}
                        type="number" 
                        placeholder={this.props.placeholderAmount}
                        value={this.props.amount}
                    />
                    <span className="input-group-addon">
                        {this.props.moneyObject.code}
                    </span>
                </div>
            </div>
        )
    }
}

export default CurrencyInput;

// CurrencyInput.propTypes = {
//     inputHeader: Proptypes.String,
//     moneyObject: Proptypes.object
// }