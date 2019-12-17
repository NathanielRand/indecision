// import './utils.js';
import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

const person = 26

// Utils.js variables
console.log('app.js is running');
console.log(square(4));
console.log(add(120, 4));
console.log(subtract(100, 81));

// Person.js variables
console.log(isAdult(person));
console.log(canDrink(person));
console.log(isSenior(person));