import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div className='CheckoutProduct'>
      <img alt="Product Thumbnail"></img>
      <div className='Details'>
        <p>Product Title</p>
        <p>Product Price</p>
        <p>Product Quantity</p>
      </div>
      <p>Total Price</p>
    </div>
  )
}

export default CheckoutProduct