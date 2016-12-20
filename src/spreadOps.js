"use strict";

/* Tutorial for Default params and spread operators
Spread operator: represented as 3 dots to allow an expression to be expanded in places where multiple arguments are expected
*/

function talk($speak = 'Blabla') {
  console.log('Speaking '+$speak);
}

talk();

talk('Now I\'m talking in senses');


let args = [1,2,3];
let args1 = [4,5,6];
let args2 = [7,8,9];

function test() {
  console.log(args);
  console.log(args1 + ',' + args2);
}

//Usual method
test.apply(null, args);

//with spread operator
test(...args);

//with multiple arguments
test(...args1, ...args2);
