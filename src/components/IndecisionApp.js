import React from 'react';
import Header from './Header'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  // Delete Options state class property
  handleDeleteOptions = () => {
    // Arrow function to implicitly return the object and
    // set the object state to an empty options array. 
    this.setState(() => ({ options: [] }));
  };
  // Clear selected Option state class property
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: '' }));
  }
  // DeleteOption class property
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  // PickOption class property
  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };
  // AddOption class property
  handleAddOption = (option) => {
    // Validations
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      // Check if index is greater than -1, which tells us the
      // option already exists. 0, 1, etc. are assigned to existing
      // options.
      return 'Option already exists'
    }
    // Arrow function implicitly returning an object.
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };

  // Built in React Method - componentDidMount method. Rendered if parent 
  // component is mounted in application. In this case, IndecisionApp 
  // is mounted with ReactDOM.render below.
  componentDidMount() {
    // Try our catch and catch any errors so app doesn't crash.
    // Ex: invalid JSON data/format
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // Fall back to empty array aka do nothing at all
    }
  }
  // Built in React Method - fired once the component changes, 
  // such as the state value or prop values changes.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data to local storage');
    }
  }
  // Built in React Method - fired before the component goes away
  // such as a page change.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // Render class component
  render() {
    const subtitle = 'We help you decide';

    return (
      <div>
        {/* Components and props */}
        <Header subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}