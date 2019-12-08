const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(26, 25));

const add2 = (a, b) => {
    return a + b;
};
console.log(add2(25, 26));

// "this" keyword - no longer bond
const user = {
    name: 'Nathaniel',
    cities: ['Charleston', 'Phoenix', 'James Island'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    // numbers - arrays of numbers 
    numbers: [10, 20, 30],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied 
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());