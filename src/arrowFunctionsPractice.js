"use strict"
/*
Credits: https://github.com/bradtraversy/youtube_es2015_source
Arrow function
Benefits:
shorter syntax
allow you to bind lexically

<<What is arrow function?>>
They are a more concise syntax for writing function expressions. They utilize a new token, =>, that looks like a fat arrow.
Arrow functions are anonymous and change the way this binds in functions.

<<Difference between function statement and function expressions>>
The main difference between a function expression and a function statement is
the function name, which can be omitted in function expressions to create anonymous functions.
A function expression can be used as a IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
*/


//Traditional
/*
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
let self = this; //<---------We have to use this line in order to recognize this: prefixing each element
  return arr.map(function(x) {
    console.log(self.prefix + x); //this is undefined
  })
}

let pref = new Prefixer('hello');
pref.prefixArray(['Ragnar', 'vikings']);
*/


//By arrow function

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
//let self = this; //<---------We have to use this line in order to recognize this: prefixing each element
  return arr.map((x) => {
    console.log(this.prefix + x); //this is undefined
  })
}

let pref = new Prefixer('With Array prefixer ');
pref.prefixArray(['Ragnar', 'vikings']);

//other example
let add = function(a,b) {
  let sum = a+b;
  console.log(sum);
  return false;
}
add(3,4);

let addArrow = (a,b) => {
  let sum = a+b;
  console.log(sum);
  return false;
}
addArrow(3,4);
