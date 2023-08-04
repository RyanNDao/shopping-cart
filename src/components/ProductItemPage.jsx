import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductItemPage() {
  let { productId } = useParams();
  return (
    <>
      Cryptojuif {productId}
    </>
  )
}