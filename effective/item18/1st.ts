interface Product {
  id: number,
  name: string,
}

function logProduct1(product: Product) {
  const id = product.id;
  const name = product.name;
}

function logProduct2(product: Product) {
  const {id, name} = product;
}



export {}