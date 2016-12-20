"use strict"

let myName = 'Tiwari';

function makeUppercase(anyWord) {
  return anyWord.toUpperCase();
}

let template = `<h1>${makeUppercase('Welcome, ')} Hello ${myName}</h1>
              <p>Ishan Tiwari</p>`;


document.getElementById('template').innerHTML = template;
