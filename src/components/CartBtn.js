import React from 'react'
import './CartBtn.css'

function CartBtn({ onViewCartClick }) {
  return (
    <div className='CartBtn'>
      <button onClick={onViewCartClick}>View Cart</button>
    </div>
  )
}

export default CartBtn