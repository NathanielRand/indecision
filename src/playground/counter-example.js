// App #5 - Counter
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);
}
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
const reset = () => {
    count = 0
    renderCounterApp();
    console.log('reset', count);
};

// Render app on HTML ID
const appRoot = document.getElementById('app');

// Re-render when data changes
const renderCounterApp = () => {
    const template5 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> Reset </button>
        </div>
    );

    ReactDOM.render(template5, appRoot);
};

// Initialize our CounterApp
renderCounterApp();