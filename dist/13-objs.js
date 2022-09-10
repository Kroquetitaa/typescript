"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'P1',
        createdAt: new Date(),
        stock: 1,
    });
    addProduct({
        title: 'P2',
        createdAt: new Date(),
        stock: 2,
        size: 'L'
    });
    console.log(products);
})();
