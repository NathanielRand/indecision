class Person {
    // Use 'Anonymous' as a function default for undefined instances 
    constructor(name = 'Anonymous', age = 'Unknown') {
        this.name = name;
        this.age = age;
    }
    // getGreeting method
    getGreeting() {
        // return 'Hello. I am ' + this.name + '!';
        return `Hello. I am ${this.name}!`
    }
    // getDescription method
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// Subclass Student for parent class Person
class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        // Refers to the parent class (Ex: Person is parent class of Student subclass)
        super(name, age);
        this.major = major;
    }
    // hasMajor method
    hasMajor() {
        return !!this.major;
    }
    // Redefine getDescription method
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

// Subclass Traveler for parent class Person
class Traveler extends Person {
    constructor(name, age, homeLocation = 'a secret location') {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    // Redefine getGreeting method
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` Their home location is ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Nathaniel Rand', 26, 'Charleston, SC');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());