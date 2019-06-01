import React, { Component } from 'react';
import {
	Button,
	Form,
	FormGroup,
	InputGroup,
	InputGroupAddon,
	Input,
	ListGroup,
	Alert

} from 'reactstrap';
import { connect } from 'react';
import { addStock } from '../actions/stockActions';
import stock from '../data/stock';

class Searchbar extends Component {
	state = {
		visible: false,
		name: ''
	};

	toggle = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};


	filterByCallback = (option, props) => {
		return (
			option.toLowerCase().indexOf(props)
		);
	};

	onSubmit = e => {
		e.preventDefault();
		const code = this.state.name.replace(/\s/g, '').toUpperCase();

		const found = stock.filter(data => data.code === code);
		if (found.length > 0) {
			this.props.addStockConfig(code);
			return;
		}

		this.setState({
			visible: true
		});
	};

    onDismiss = () => {
        this.setState({ visible: false });
    }

	render() {

		return (
			<div>

				<Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
					Stock code Not found.
          		</Alert>

				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<InputGroup className="search">
							<Input
									placeholder="Enter the ticker symbol here..."
									type="text"
									name="name"
									id="stock"
									onChange={this.onChange}
								/>
							<InputGroupAddon addonType="append">
								<Button className="search-btn">
									<i className="fa fa-search" />
								</Button>
							</InputGroupAddon>
						</InputGroup>


					</FormGroup>
				</Form>

				<ListGroup id="search-list" >

				</ListGroup>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stock: state.stock
});

export default connect(
	mapStateToProps,
	{ addStock }
)(Searchbar);
