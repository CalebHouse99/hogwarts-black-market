import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout({ onClose }) {
  return (
    <div className='Checkout'>
      <div className='CheckoutNav'>
        <h1>My Cart</h1>
        <button onClick={onClose}>X</button>
      </div>
      <CheckoutProduct />
      <CheckoutProduct />
    </div>
  )
}

export default Checkout