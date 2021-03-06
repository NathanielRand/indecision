class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    // Bind to pass down state to child component
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
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
  // DeleteOptions method
  handleDeleteOptions() {
    // Arrow function to implicitly return the object and
    // set the object state to an empty options array. 
    this.setState(() => ({ options: [] }));
  }
  // DeleteOption method (singular)
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
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
    // Arrow function implicitly returning an object.
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
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
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* Conditional rendering if subtitle exists/passed */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// Default Header props
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOption}
      >Make A Decision</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <h2>Insert time here</h2>
      <h4>Options Count: {props.options.length}</h4>
      {/* 
				TODO: Reset option's validations error message when delete options is called 
				Example: send empty value to form, error message called, and then call delete all options
				but the error message remains.
			*/}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add options to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      {/* 
        Todo: Add % chance of option being picked next to each option.
        Sudo: 1 divided by options.length returns % chance of option being picked.
       */}
      <button
        // Prop: Pass an in-line arrow function with "e" argument when
        // the button gets clicked and call props.handleDeleteOption and 
        // call it with props.optionText or else event object 
        // will be returned instead of actual option text.
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >Delete Option
      </button>
    </div>
  );
};

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

    // Implicit return of error object using short-hand arrow function.
    this.setState(() => ({ error: error }));

    // Clear data from input if no error returned
    if (!error) {
      e.target.elements.option.value = '';
    }
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

// * REFERENCES
// Stateless Functional Component
  // const User = (props) => {
  // 	return (
  // 		<div>
  // 			<p>Name: {props.name}</p>
  // 			<p>Age: </p>
  // 		</div>
  // 	);
  // };

// * REFERENCE  
// Class based component that can be a stateless function component
  // class Header extends React.Component {
  // 	render() {
  // 		return (
  // 			<div>
  // 				<h1>{this.props.title}</h1>
  // 				<h2>{this.props.subtitle}</h2>
  // 			</div>
  // 		);
  // 	}
  // }

// * REFERENCE
// Arrow functions: Implicitly returning object vs explicitly returning object
// Saves line space compared to explicitly returning object
    // explicitly returning the object.
    // Implicit return of object using arrow function 
    // (does the same as below with less code).
    // this.setState((prevState) => ({
    //   options: prevState.options.concat([option])
    // }));

    // Explicit return of object using arrow function 
    // (does the same as above with more code).
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat([option])
    //   };
    // });