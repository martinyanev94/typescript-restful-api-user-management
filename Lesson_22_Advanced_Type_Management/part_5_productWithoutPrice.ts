type ProductWithoutPrice = Omit<Product, 'price'>;

const productWithoutPrice: ProductWithoutPrice = {
    id: 2,
    name: 'Tablet',
    stock: 150
};
