'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    // Bind to pass down state to child component
    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handlePickOption = _this.handlePickOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }
  // DeleteOptions method


  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      // Arrow function to implicitly return the object and
      // set the object state to an empty options array. 
      this.setState(function () {
        return { options: [] };
      });
    }
    // DeleteOption method (singular)

  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
    // PickOption method

  }, {
    key: 'handlePickOption',
    value: function handlePickOption() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(randomNum);
      alert(option);
    }
    // AddOption method

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      // Validations
      if (!option) {
        return 'Enter valid value to add option';
      } else if (this.state.options.indexOf(option) > -1) {
        // Check if index is greater than -1, which tells us the
        // option already exists. 0, 1, etc. are assigned to existing
        // options.
        return 'Option already exists';
      }
      // Arrow function implicitly returning an object.
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
    // Render class component

  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'We help you decide';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOption: this.state.options.length > 0,
          handlePickOption: this.handlePickOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// Default Header props
Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePickOption,
        disabled: !props.hasOption
      },
      'Make A Decision'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Insert time here'
    ),
    React.createElement(
      'h4',
      null,
      'Options Count: ',
      props.options.length
    ),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        // Prop: Pass an in-line arrow function with "e" argument when
        // the button gets clicked and call props.handleDeleteOption and 
        // call it with props.optionText or else event object 
        // will be returned instead of actual option text.
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Delete Option'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      // Prevent default form submission that causes full page reload
      e.preventDefault();
      // Get "option" data off of form
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      // Implicit return of error object using short-hand arrow function.
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
