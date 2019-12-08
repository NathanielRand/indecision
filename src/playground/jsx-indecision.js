console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision',
    subtitle: 'A Decision Making Application built in ReactJS',
    options: []
}

// onFormSubmit called with event object aka (e)
const onFormSubmit = (e) => {
    // Prevent full page refresh on event object with method
    // preventDefault().
    e.preventDefault();

    // e.target points to the element that the event started on (in this case 'form').
    // .elements contains all the html elements and are indexed by 'name' ('option' in this case).
    // .option (referenced by 'name="option"').
    // .value to get the value of the this form submission.
    const option = e.target.elements.option.value;

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
}

// removeAllOptions wipes the options array and resets the options counter
const onRemoveAll = () => {
    app.options = [];
    renderOptionsApp();
    console.log('Removed all options');
};

// onMakeDecision selects a random number based on the length of the options array
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};

// Render app on HTML ID
const appRoot = document.getElementById('app');

// Render function to render new JSX template data
const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <h3>{app.options.length > 0 ? 'Here are your options' : 'No options'}</h3>
            <p>You have: {app.options.length} options</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>Make Decision</button>
            <button onClick={onRemoveAll}>Remove All Options</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            {/* Reference onFormSubmit, do not call it. */}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div >
    );

    ReactDOM.render(template, appRoot);
};

// Initialize the app.
renderOptionsApp();