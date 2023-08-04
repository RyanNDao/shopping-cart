import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { CartItem } from './CartItem';

export function Checkout() {

  const { checkoutContext } = useOutletContext();

  let sum = 0;
  for (let product of Object.keys(checkoutContext.checkout)){
    let productItem = checkoutContext.checkout[product]
    sum += (productItem.count * productItem.product.price)
  }
  sum = sum.toFixed(2);

  return (
    <div className="checkout-container">
      {
        Object.entries(checkoutContext.checkout).map(([itemId, itemInfo])=>{
          return <CartItem key={itemId} itemInfo={itemInfo}/>
        })
      }
      <div className="sum-container">
        <p className="sum">TOTAL PRICE: ${sum}</p>
        {sum > 0 ? <button>Checkout!</button> : null}
      </div>
    </div>
  )
}