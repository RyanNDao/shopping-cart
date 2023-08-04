import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './components/Root'
import { Products } from './Products'
import { ProductItem } from './components/ProductItem'
import { Home } from './Home'
import { ErrorPage } from './ErrorPage'
import { Checkout } from './components/Checkout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductItemPage from './components/ProductItemPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'products/:productId',
        element: <ProductItemPage/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
