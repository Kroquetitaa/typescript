(()=> {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson = ( title: string, createdAt: Date, stock: number, size: Sizes) =>{
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }

  const productOne = createProductToJson('P1', new Date(), 12, 'L');
  console.log( productOne );
  console.log( productOne.title );
  console.log( productOne.stock );
  console.log( productOne.size );
})();
