'use client'

import CartProvider from "@/context/CartProvider"
import {useContext} from 'react'
import { CartContext } from "@/context/CartProvider"

export default function CartBasket() {

    const {cart, setCart} = useContext(CartContext)
    
    return (
        <div>
            Cart Basket

            {cart && cart.map(product => (
                <div>{product.title}</div>
            ))}
        </div>
    )
}
