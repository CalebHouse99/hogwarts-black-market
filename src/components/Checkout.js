import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout({ cart, onClose, onClearCart }) {
  const clearCart = () => {
    onClearCart();
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  ).toFixed(2);


  return (
    <div className='Checkout'>
      <div className='CheckoutNav'>
        <h1>My Cart</h1>
        <button onClick={onClose}>X</button>
      </div>
      <div className='items-container'>
        {cart.map((product, index) => (
          <CheckoutProduct key={index} product={product} />
        ))}
      </div>
      <p>Total Cart Price: ${totalPrice}</p>
      <div className='buttons-container'>
        <button onClick={clearCart}>Clear Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
