// Never use var
var nameVar = 'Nathaniel';
nameVar = 'John';
console.log('nameVar', nameVar);

// Only use let when needed
let nameLet = 'Jude';
nameLet = 'Mamie';
console.log('nameLet', nameLet);

// Use const first
const nameConst = 'Alex';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Halo';
    return petName
}

const petName = getPetName();
console.log(petName)

// Block scoping
const fullName = 'Nathaniel Rand';
let firstName;
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);