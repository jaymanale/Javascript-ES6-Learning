console.log('########## Start : Data Types #############');
// Primitive data tpes

const name = 'Jay manale';

const age = 23;

const isPossible = true;

const bugatti = null;

let future;

const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof isPossible);
console.log(typeof bugatti);
console.log(typeof future);
console.log(typeof sym);

// NON-PRIMITIVE -> Reference type

// array

const interest = [2, 5, 3];

// object literal

const address = {
  city: 'pune',
  pincode: 454121
};

const persons = [
  {
    name: 'sam',
    age: 26
  },
  {
    name: 'raj',
    age: 28
  }
];

const today = new Date();

console.log(typeof interest);
console.log(typeof address);
console.log(typeof persons);
console.log(typeof today);
console.log(today);

console.log('########## End : Data Types #############');
