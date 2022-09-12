import React from 'react';
import Product from './Product';

export default function Products(props) {
  const { products } = props;

  return (
    <div className="grid_layout">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
