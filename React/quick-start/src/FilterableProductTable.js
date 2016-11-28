import React, {
	Component
} from 'react';

class ProductCategoryRow extends Component {
	render() {
		return (<tr>
			<th colSpan="2">{this.props.category}</th>
		</tr>)
	}
}

class ProductRow extends Component {
	render() {
		var name = this.props.product.stocked ?
			this.props.product.name : <span style={{color:'red'}}>
				{this.props.product.name}
			</span>

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		)
	}
}

class ProductTable extends Component {
	render() {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach((product, index) => {

			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}

			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
			}

			rows.push(<ProductRow product={product} key={product.name}/>);

			lastCategory = product.category;
		})
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.onUserInput(
			this.filterTextInput.value,
			this.inStockOnlyInput.checked
		)
	}

	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.filterText}
					onChange={this.handleChange}
					ref={(input)=> this.filterTextInput = input}/>
				<p>
					<input 
						type="checkbox" 
						checked={this.props.inStockOnly}
						onChange={this.handleChange}
						ref={(input)=> this.inStockOnlyInput = input}/>
					{' '}
					Only show products in stock
				</p>
			</form>
		)
	}
}

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText,
			inStockOnly
		});
	}

	render() {
		return (
			<div className="filterableProductTable">
				<SearchBar 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput}/>
				<ProductTable 
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}/>
			</div>
		)
	}
}

export default FilterableProductTable;