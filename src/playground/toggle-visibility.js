let visibility = false;

const toggleVisibility = () => {
    // '!' flips the current value of var (Ex: true to false, false to true)
    visibility = !visibility
    renderVisibilityApp();
};

// Render app on HTML ID
const appRoot = document.getElementById('app');

// Re-render when data changes 
const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>Toggle Visibility</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>This is a hidden paragraph.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderVisibilityApp();