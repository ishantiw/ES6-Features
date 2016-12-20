"use strict";

/* Set/Map Tutorial
Set: lets you store uniques values of any type can be primitive type or an object.
Map: <key, value> pairs
*/


//Sets
let array1 = [1,2,3,4,5,6];
let set1 = new Set(array1);

console.log(set1);
set1.add(81);
console.log(set1);
set1.add('haha');
console.log(set1);
set1.add({a: 21, b:31})
console.log(set1);
set1.delete(81);
console.log(set1);
//set1.clear();
set1.add(1001);

console.log('Size is '+set1.size);

//looping using for each
let i = 0;
set1.forEach(function(values) {
  i++;
  console.log('value at '+i+' is '+values);
});

//Maps
let map1 = new Map([['1','yellow'],['2', 'red'], ['3', 'black']]);
console.log('Printing Map...');
console.log(map1);

//adding values to Map
map1.set('4', 'blue');
console.log('Adding blue color...');
console.log(map1);
console.log('Size is '+map1.size);

//Weak set: usually to deal with objects

let laptopWeakSet = new WeakSet();

let laptop1 = {
  brand : 'HP',
  processor : 'Quad'
};

laptopWeakSet.add(laptop1);

let laptop2 = {
  brand : 'Apple',
  processor : 'Dual'
};

laptopWeakSet.add(laptop2);

console.log(laptopWeakSet);


//Weak Maps: usually to deal with objects

let laptopWeakMap = new WeakMap();

let key1 = {
  productID : 1234
};

let laptop3 = {
  brand : 'Acer',
  processor : 'single'
};

laptopWeakMap.set(key1, laptop3);

let key2 = {
  productID : 5678
}

let laptop4 = {
  brand : 'lenovo',
  processor : 'Octa'
};

laptopWeakMap.set(key2, laptop4);

console.log(laptopWeakMap);

laptopWeakMap.delete(key2);
console.log('After deleting entry for key1...');
console.log(laptopWeakMap);
