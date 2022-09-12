"use strict";
//solo funciona con las funciones function
function parseStr(input) {
    if (Array.isArray(input)) {
        return input.join('');
    }
    else {
        return input.split('');
    }
}
const rtaArray = parseStr('nico');
console.log(rtaArray);
const rtaStr = parseStr(['n', 'i', 'c', 'o']);
console.log(rtaStr);
