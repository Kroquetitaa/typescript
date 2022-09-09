"use strict";
(() => {
    let customerAge = 28;
    customerAge += 1;
    console.log('customerAge', customerAge);
    let productInStock;
    productInStock = 11;
    console.log('productInStock', productInStock);
    if (productInStock > 10)
        console.log('is greater');
    let discount = parseInt('1000');
    (discount <= 200) ? console.log('apply') : console.log('not apply');
    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);
})();
