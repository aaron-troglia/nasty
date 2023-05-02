'use client'

import { useState } from "react"

export default function AddToCart() {
    const [cart, setCart] = useState(0)

    const addToCart = () => {
        const newCart = cart + 1
        setCart(newCart)
    }
    
    return (
        <>
            <div onClick={() => addToCart()} className="btn btn-primary">Add To Cart</div>
            Cart count: {cart}
        </>
    )
}