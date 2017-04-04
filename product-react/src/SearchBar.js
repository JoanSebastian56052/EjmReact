import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}
	handleInStockInputChange(e) {
		this.props.onInStockInput(e.target.checked);
	}

	handleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value);
	}

	render() {
		return(
				<form>
					<input type="text"
					placeholder="Search... "
					value={this.props.filterText}
					onChange={this.handleFilterTextInputChange}/>
					<p>
						<input type="checkbox"
						checked={this.props.inStockOnly}
						onChange={this.handleInStockInputChange}/>
						{' '}
						Unico producto ....
					</p>
				</form>
			);
	}
}