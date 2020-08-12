import React from 'react';
import products from './../products';
import ProductCard from './ProductCard';

const ProductList = () => {
  return products.map((product) => <ProductCard product={product}/>)
}

export default ProductList;