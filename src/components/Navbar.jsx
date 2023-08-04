import { Link } from "react-router-dom"

export function Navbar() {

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="products">Products</Link>
      <Link to="checkout">Checkout</Link>
    </div>
  )
}