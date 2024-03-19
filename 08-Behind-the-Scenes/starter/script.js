'use strict';
function calAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scoper's variable
      const firstName = 'Steven'; //first look in scoop variable

      //reassigning
      output = 'NEW OUTOUT!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // cannot have access
    console.log(millenial); //var variable are function scoped.
    // console.log(add(2, 3)); // cannot have access
    console.log(output); //display new output
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calAge(1991);
// console.log(age); //cannot have access to age
//printAge(); also cannot
