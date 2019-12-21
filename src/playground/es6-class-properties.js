// ES6 Class Properties: Old syntax vs New syntax

// Old syntax with constructor function
class OldSyntax {
  constructor() {
    this.name = 'Nathaniel';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ------------------------

// New syntax without constructor function
class NewSyntax {
  name = 'Alexandria';
  getGreeting = () => {
    return `Hi. My name is ${this.name}.`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());