import React from 'react';
import './Product.css';

function Product({ product }) {
  const { name, description, price, imgLink } = product;

  return (
    <div className="Product">
      <img src={imgLink} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="Price">Price: ${price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
