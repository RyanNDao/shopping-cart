import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import '../App.css'

export function Root(){
    const [productsJson, setProductsJson] = useState(null);
    const [cart, setCart] = useState([]);

    const [checkout, setCheckout] = useState({})

    useEffect(()=>{
        console.log(cart)
        function flattenCart(cartList){
            let flattenedCart = cartList.reduce((prevCart, currentItem)=>{
                if (!Object.prototype.hasOwnProperty.call(prevCart, currentItem.id)){
                return {
                    ...prevCart, [currentItem.id]: {
                    "count": 1,
                    "product": currentItem
                    }
                }
                } else {
                prevCart[currentItem.id]["count"] += 1
                return prevCart
                }
            }, {})
            return flattenedCart
        }
        let flattenedCart = flattenCart(cart)
        setCheckout(flattenedCart)
    }, [cart])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then((response)=>{
            if (!response.ok){
                throw new Error;
            }
            return response.json();
        }).then((json)=>{
            setProductsJson(json);
        }).catch(
            ()=>{
            console.error('An error occurred while fetching product data')
            }
        );
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="section-padding">
                <Outlet context={{
                    productsJson: productsJson,
                    cartContext: {cart, setCart},
                    checkoutContext: {checkout, setCheckout }
                }}/>
            </div>

        </div>
    );
}