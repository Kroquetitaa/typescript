"use strict";
(() => {
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    console.log(myNumber);
    myNumber = 1;
    console.log(myNumber);
    let myNumber2 = undefined;
    console.log(myNumber2);
    myNumber2 = 2;
    console.log(myNumber2);
    const hi = (name) => {
        let hello = 'hola ';
        (name) ? console.log(hello += name) : console.log(hello += 'nobody');
    };
    hi('nicolas');
    hi(null);
    const hiV2 = (name) => {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) || 'nobody';
        console.log(hello);
    };
    hiV2('Nico');
    hiV2(null);
})();
