"use strict";
(() => {
    const login = (data) => {
        console.log(data);
    };
    login({
        email: 'example@example.es',
        password: 123,
    });
    const product = [];
    const addProduct = (data) => {
        product.push(data);
    };
    addProduct({
        title: 'P1',
        createdAt: new Date(),
        stock: 1,
    });
    console.log(product);
})();
