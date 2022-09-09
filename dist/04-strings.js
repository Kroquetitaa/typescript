"use strict";
(() => {
    const productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);
    const productDescription = "I'm bla bla bla";
    console.log('productDescription', productDescription);
    const productPrice = 10;
    const isNew = true;
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log('summary', summary);
})();
