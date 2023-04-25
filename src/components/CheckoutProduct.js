import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ product }) {
  const { productName, price, quantity } = product;
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className='CheckoutProduct'>
      <img alt={productName} src={product.imgLink} />
      <div className='Details'>
        <p>{productName}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default CheckoutProduct;