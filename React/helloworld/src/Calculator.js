import React, {
	Component
} from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

class Temperature extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		// this.setState({
		// 	value: e.target.value
		// })

		this.props.onChange(e.target.value);
	}

	render() {
		const value = this.props.value;
		const scale = this.props.scale;
		return (
			<div className="calculator">
				<fieldset>
					<legend>Enter temperature in {scaleNames[scale]}</legend>
					<input type="text" value={value} onChange={this.handleChange}/>
				</fieldset>
				
			</div>
		)
	}
}

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

		this.state = {
			value: '',
			scale: 'c'
		}
	}

	handleCelsiusChange(value) {
		this.setState({
			scale: 'c',
			value
		});
	}

	handleFahrenheitChange(value) {
		this.setState({
			scale: 'f',
			value
		});
	}

	render() {
		const scale = this.state.scale;
		const value = this.state.value;
		const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
		const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
		return (
			<div>
				<Temperature scale="c" value={celsius} onChange={this.handleCelsiusChange}/>
				<Temperature scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange}/>
				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
	const input = parseFloat(value);
	if (Number.isNaN(input)) {
		return '';
	}

	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000
	return rounded.toString();
}

function BoilingVerdict(props) {
	var celsius = props.celsius;
	if (celsius >= 100) {
		return (
			<p>The water would boil</p>
		)
	} else {
		return (
			<p>The water would not boil</p>
		)
	}
}

export default Calculator