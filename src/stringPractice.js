"use strict"

let someString = 'Hello everyone, duck off!';

//Some String functions
console.log('Start With : '+someString.startsWith('Hello'));
console.log('Ends With: '+someString.endsWith('f!'));
console.log('Includes: '+someString.includes('duck'));

//Some Number examples

//hexadecimal
console.log('Hexadecimal 0xFF -> '+ 0xFF);

//Binary
console.log('Binary 0b101010 -> '+ 0b101010);

//Octal
console.log('Octal 0o543 -> '+ 0o54);

//isFinite: NaN -> Not a Number
console.log(Infinity +' is '+Number.isFinite(Infinity));
console.log('3 is '+ Number.isFinite(3));
console.log('NaN is '+ Number.isFinite(NaN));

//isNaN
console.log('NaN String is '+ Number.isNaN('String'));
console.log('NaN 3 is '+ Number.isNaN(3));

//isInteger
console.log('isInteger of 3 is '+ Number.isInteger(3));
console.log('isInteger of Infinity is '+ Number.isInteger(Infinity));
