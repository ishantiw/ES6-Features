"use strict";
/*
Generators: they are basically functions that can be paused/resumed and that can be set to yield values at each pause
*/

function *generators() {
  console.log('hello');
  yield 'Yield Run 1..';
  console.log('World');
  yield 'Yield Run 2..';
  return 'finished';
}

var g = generators();
/*console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());
*/
for (let val of g) {
  console.log(val);
}
