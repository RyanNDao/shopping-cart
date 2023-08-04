import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ProductItem } from './components/ProductItem';
import { Loading } from './components/Loading';

export function Products() {
  
  const { productsJson } = useOutletContext();
  return (
    <div className="products-container">
      { 
        productsJson ? 
        (
          productsJson.map((product)=>{
            return <ProductItem key={product.id} product={product}/>
          })
        ) : 
        <Loading/>
      }
    </div>
  )
}

