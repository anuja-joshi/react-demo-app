import React from 'react';
import products from './../products';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="col-md-6 offset-md-3">
      { products.map((product) => <ProductCard product={product} key={product.id}/>) }
    </div>
  )
}

export default ProductList;