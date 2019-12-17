console.log('person.js is running')

// Named Exports:
export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;
// Names Export alternative:
// export { isAdult, canDrink };

// Default Export
const isSenior = (age) => age >= 65;
export default isSenior;

// Named and Default Export alternative:
// export { isAdult, canDrink, isSenior as default};