(()=> {
  const productTitle: string = 'My amazing product changed';
  console.log('productTitle', productTitle);
  const productDescription: string = "I'm bla bla bla";
  console.log('productDescription', productDescription);

  const productPrice: number = 10;
  const isNew: boolean = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('summary', summary)
})();
