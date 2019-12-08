'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
    title: 'Indecision',
    subtitle: 'A Decision Making Application built in ReactJS',
    options: []

    // onFormSubmit called with event object aka (e)
};var onFormSubmit = function onFormSubmit(e) {
    // Prevent full page refresh on event object with method
    // preventDefault().
    e.preventDefault();

    // e.target points to the element that the event started on (in this case 'form').
    // .elements contains all the html elements and are indexed by 'name' ('option' in this case).
    // .option (referenced by 'name="option"').
    // .value to get the value of the this form submission.
    var option = e.target.elements.option.value;

    if (option) {
        // Add form value into 'options' array.
        app.options.push(option);
        // Wipe form value by setting input field to empty string.
        e.target.elements.option.value = '';

        // Re-render template
        renderOptionsApp();
    }

    // Log message for testing.
    console.log('New option form submitted');
};

// removeAllOptions wipes the options array and resets the options counter
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderOptionsApp();
    console.log('Removed all options');
};

// onMakeDecision selects a random number based on the length of the options array
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};

// Render app on HTML ID
var appRoot = document.getElementById('app');

// Render function to render new JSX template data
var renderOptionsApp = function renderOptionsApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'h2',
            null,
            app.subtitle
        ),
        React.createElement(
            'h3',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            'You have: ',
            app.options.length,
            ' options'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length === 0 },
            'Make Decision'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All Options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

// Initialize the app.
renderOptionsApp();
