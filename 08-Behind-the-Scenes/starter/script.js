// 'use strict';
// function calAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(firstName);
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //creating new variable with same name as outer scoper's variable
//       const firstName = 'Steven'; //first look in scoop variable

//       //reassigning
//       output = 'NEW OUTOUT!';

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); // cannot have access
//     console.log(millenial); //var variable are function scoped.
//     // console.log(add(2, 3)); // cannot have access
//     console.log(output); //display new output
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calAge(1991);
// // console.log(age); //cannot have access to age
// //printAge(); also cannot

// //variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) deleteShoppingCart(); // numProducts = undefined, so use const/let to declare variables ,and first declare then use it to make it clear
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //point to window
// };

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); //this keyword is dynamic

// const f = jonas.calcAge; //no error
// // f(); //error: undefined.....year

// var firstName = 'Metilda'; //now jonas.greet() output: Hey Metilda
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }; //this is undefined because const declare

    //solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    }; //arrow function points to parent

    isMillenial();
  },
  // greet: () => console.log(`Hey ${this.firstName}`),
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); //  output: Hey undefined because of arrow function
console.log(this.firstName); // this is the window object

const addExpr = function (a, b) {
  console.log(arguments); //arguments exist only in function
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 5, 13);

const addArrow = (a, b) => {
  console.log(arguments); //does not exist in arrow function
  return a + b;
};

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend); //27
console.log('Me:', me); // me age changed to 27

let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
//reference type
const marriedJessica = jessica;
marriedJessica.lastName = 'Devis';
console.log('Before marrige:', jessica); //Devis
console.log('After marrige:', marriedJessica); //Devis

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Devis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marrige:', jessica2); //Williams but family has 4 members  'deep clone'
console.log('After marrige:', jessicaCopy); //Devis
