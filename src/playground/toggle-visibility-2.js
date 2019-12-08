class ToggleVisibility extends React.Component {
	// Component state
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	// Handle the visibility toggle function
	handleToggleVisibility() {
		// alert('working');
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	// Render HTML and JS expressions
	render() {
		return (
			<div>
				<h1>Toggle Visibility App</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>

				{this.state.visibility && (
					<div>
						<p>This is the data being toggle visible</p>
					</div>
				)}
			</div>
		);
	}
};

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'))