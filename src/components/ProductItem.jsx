import { useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export function ProductItem({product}) {
  const {checkoutContext} = useOutletContext();
  
  function addToCart(event){
    let deepCopyCheckout = {...checkoutContext.checkout}
    let quantity = Number(event.target.parentNode.children[0].children[1].children[1].value)
    console.log(deepCopyCheckout, product)
    if (deepCopyCheckout[product.id]){
      deepCopyCheckout[product.id].count += quantity;
      if (deepCopyCheckout[product.id].count <= 0){
        delete deepCopyCheckout[product.id]
      }
    } else if (quantity > 0){
      console.log(quantity, typeof(quantity))
      deepCopyCheckout[product.id] = {
        'count': quantity,
        'product': product
      }
    }
    checkoutContext.setCheckout(deepCopyCheckout)
    event.target.parentNode.children[0].children[1].children[1].value = 0;
    /*
    let quantity = event.target.parentNode.children[0].children[1].children[1].value
    let products = []
    for (let i=0; i<quantity; i++ ){
        products.push(product)
    }
    cartContext.setCart([...cartContext.cart, products].flat())
    event.target.parentNode.children[0].children[1].children[1].value = 0;
    */
  }

  return (
    <div className={`product-container-${product.id}`}>
      <h2 className="product-title">{product.title}</h2>
      <img className="product-image" src={product.image}></img>
      <p className="product-description" data-testid="product-description">{product.description}</p>
      <div className="add-to-cart-container">
        <div className="quantity-container">
          <span>${product.price.toFixed(2)}</span>
          <div className="input-container">
            <label>Quantity: </label>
            <input min="0" type="number" defaultValue="0"></input>
          </div>
        </div>
        <button onClick={addToCart} className="buy">Add To Cart!</button>
      </div>
    </div>
  )
}