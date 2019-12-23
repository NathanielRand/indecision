import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    // Prevent default form submission that causes full page reload
    e.preventDefault();
    // Get "option" data off of form
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // Implicit return of error object using short-hand arrow function.
    this.setState(() => ({ error: error }));

    // Clear data from input if no error returned
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}