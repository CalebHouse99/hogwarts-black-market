import React from 'react';
import './Product.css';

function Product({ product, onAddToCart }) {
  const { productName, description, price, imgLink } = product;

  return (
    <div className="Product">
      <img src={imgLink} alt={productName} />
      <h2>{productName}</h2>
      <p>{description}</p>
      <p className="Price">Price: ${price}</p>
      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default Product;
