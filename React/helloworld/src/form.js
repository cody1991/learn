import React, {
	Component
} from 'react'

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			selectVal: 'coconut'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectVal = this.handleSelectVal.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value.toUpperCase()
		});
	}

	handleSelectVal(event) {
		this.setState({
			selectVal: event.target.value
		})
	}

	handleSubmit(event) {
		console.log(`A name was submitted: ${this.state.value}
You select: ${this.state.selectVal}`);
		event.preventDefault();
	}

	render() {
		return (
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" value={this.state.value} onChange={this.handleChange}/>
					<select value={this.state.selectVal} onChange={this.handleSelectVal}>
						<option value="grapefruit">Grapefruit</option>
			            <option value="lime">Lime</option>
			            <option value="coconut">Coconut</option>
			            <option value="mango">Mango</option>
					</select>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export default Form;