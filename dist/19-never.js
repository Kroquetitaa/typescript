"use strict";
const withoutEnd = () => {
    while (true) {
        console.log('nunca va a parar de aprender');
    }
};
const fail = (message) => {
    throw new Error(message);
};
const example = (input) => {
    if (typeof input === 'string') {
        return 'Es un string';
    }
    else if (Array.isArray(input)) {
        return 'es un array';
    }
    return fail('not match');
};
console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(example(12345));
