(()=>{
  const login = (data: {email: string, password: number}) => {
    console.log( data );
  }

  login({
    email: 'example@example.es',
    password: 123,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const product: any[] = []

  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
    product.push(data)
  }

  addProduct({
    title: 'P1',
    createdAt: new Date(),
    stock: 1,
  })

  console.log( product )
})();
