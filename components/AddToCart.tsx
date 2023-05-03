'use client'

import { useState, useContext } from "react"
import { CartContext } from "@/context/CartProvider"
import { Products } from "@prisma/client"

export default function AddToCart({product}: {product: Products}) {
    const {cart, setCart} = useContext(CartContext)
    const addToCart = () => {
        setCart([...cart, product])
    }
    
    return (
        <>
            <div onClick={() => addToCart()} className="btn btn-primary">Add To Cart</div>
        </>
    )
}