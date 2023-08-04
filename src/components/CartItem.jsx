import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Trash from '../assets/trash-bin-3.svg/'

export function CartItem({itemInfo}) {
  const { checkoutContext } = useOutletContext();

  function addOneItem(){
    let deepCopyCheckout = {...checkoutContext.checkout}
    deepCopyCheckout[itemInfo.product.id].count += 1
    checkoutContext.setCheckout(deepCopyCheckout)
  }

  function removeOneItem(){
    let deepCopyCheckout = {...checkoutContext.checkout}
    deepCopyCheckout[itemInfo.product.id].count -= 1
    if (deepCopyCheckout[itemInfo.product.id].count <= 0){
      delete deepCopyCheckout[itemInfo.product.id]
    }
    checkoutContext.setCheckout(deepCopyCheckout)
  }

  function deleteItem(){
    let deepCopyCheckout = {...checkoutContext.checkout}
    delete deepCopyCheckout[itemInfo.product.id]
    checkoutContext.setCheckout(deepCopyCheckout)
  }

  return (
    <div className="checkout-item-container">
      <div className="checkout-image-container">
        <img src={itemInfo.product.image}></img>
      </div>
      <div className="checkout-info-container">
        <h3>{itemInfo.product.title}</h3>
        <h4>${itemInfo.product.price.toFixed(2)}</h4>
      </div>
      <div className="checkout-quantity-container">
        <div className="adjust-quantity">
          <button onClick={removeOneItem} className="minus-button">-</button>
          <input disabled={true} value={itemInfo.count}></input>
          <button onClick={addOneItem} className="plus-button">+</button>
          <div className="trash-container">
            <img onClick={deleteItem} className="trash" src={Trash}/>
          </div>
        </div>
      </div>
    </div>
  )
}