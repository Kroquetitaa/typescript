type Sizes = 'S' | 'M' | 'L';

interface Product {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 1
})

console.log( products )
