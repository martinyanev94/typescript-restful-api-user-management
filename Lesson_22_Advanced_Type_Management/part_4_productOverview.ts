interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}
type ProductOverview = Pick<Product, 'id' | 'name'>;

const product: ProductOverview = {
    id: 1,
    name: 'Laptop'
};
