// App #1
const app = {
    title: 'Indecision',
    subtitle: 'A Decision Making Web Application in ReactJS',
    tagline: 'What will you decide?'
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <h3>{app.tagline}</h3>
    </div>
);

// App #2
const user = {
    name: 'Nathaniel Rand',
    age: '26',
    location: 'Charleston, SC, USA',
};

const template2 = (
    <div>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <h3>Location: {user.location.toUpperCase()}</h3>
    </div>
);

// App #3
const userProfile = {
    name: 'Nathaniel Rand',
    age: 26,
    location: 'Charleston, SC',
};

function getLocation(location) {
    if (location) {
        return <h3>Location: {location}</h3>;
    }
}

const template3 = (
    <div>
        {/* Ternary operator is good for doing 1 of 2 things */}
        <h1>Name: {userProfile.name ? userProfile.name.toUpperCase() : 'Anonymous'}</h1>
        {/* Logical And operator is good for doing 1 nothing at all */}
        {(userProfile.age && userProfile.age >= 18) && <h2>Age: {userProfile.age}</h2>}
        {getLocation(userProfile.location)}
    </div>
);

ReactDOM.render(template5, appRoot);

// Render app on HTML ID
const appRoot = document.getElementById('app');