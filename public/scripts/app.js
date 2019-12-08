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
			this.setState(function () {
				return {
					options: []
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

			this.setState(function (prevState) {
				return {
					options: prevState.options.concat([option])
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Trust us, when you can trust yourself';

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					hasOption: this.state.options.length > 0,
					handlePickOption: this.handlePickOption
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h2',
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{
						onClick: this.props.handlePickOption,
						disabled: !this.props.hasOption
					},
					'Make A Decision'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
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
					this.props.options.length
				),
				React.createElement(
					'button',
					{ onClick: this.props.handleDeleteOptions },
					'Remove All'
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'Option: ',
				this.props.optionText
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.handleAddOption = _this6.handleAddOption.bind(_this6);
		_this6.state = {
			error: undefined
		};
		return _this6;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			// Prevent default form submission that causes full page reload
			e.preventDefault();
			// Get "option" data off of form
			var option = e.target.elements.option.value.trim();
			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return {
					error: error
				};
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
