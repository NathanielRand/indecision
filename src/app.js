class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		// Bind to pass down state to child component
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePickOption = this.handlePickOption.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		};
	}
	// DeleteOptions method
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}
	// PickOption method
	handlePickOption() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		console.log(randomNum);
		alert(option);
	}
	// AddOption method
	handleAddOption(option) {
		// Validations
		if (!option) {
			return 'Enter valid value to add option';
		} else if (this.state.options.indexOf(option) > -1) {
			// Check if index is greater than -1, which tells us the
			// option already exists. 0, 1, etc. are assigned to existing
			// options.
			return 'Option already exists'
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option])
			};
		});
	}
	render() {
		const title = 'Indecision';
		const subtitle = 'Trust us, when you can trust yourself';

		return (
			<div>
				{/* Components and props */}
				<Header title={title} subtitle={subtitle} />
				<Action
					hasOption={this.state.options.length > 0}
					handlePickOption={this.handlePickOption}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.handlePickOption}
					disabled={!this.props.hasOption}
				>Make A Decision</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<h2>Insert time here</h2>
				<h4>Options Count: {this.props.options.length}</h4>
				{/* 
					TODO: Reset option's validations error message when delete options is called 
					Example: send empty value to form, error message called, and then call delete all options
					but the error message remains.
				*/}
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{
					this.props.options.map((option) => <Option key={option} optionText={option} />)
				}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				Option: {this.props.optionText}
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		// Prevent default form submission that causes full page reload
		e.preventDefault();
		// Get "option" data off of form
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return {
				error: error
			};
		});
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));