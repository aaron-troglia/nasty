'use client'

import { useState, useContext } from "react"
import { CartContext } from "@/context/CartProvider"

export default function AddToCart() {
    const {cart, setCart} = useContext(CartContext)
    const addToCart = () => {
        const newCart = cart + 1
        setCart(newCart)
    }
    
    return (
        <>
            <div onClick={() => addToCart()} className="btn btn-primary">Add To Cart</div>
        </>
    )
}