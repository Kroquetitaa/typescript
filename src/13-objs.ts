(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'P1',
    createdAt: new Date(),
    stock: 1,
  })
  addProduct({
    title: 'P2',
    createdAt: new Date(),
    stock: 2,
    size: 'L'
  })

  console.log( products )
})();
