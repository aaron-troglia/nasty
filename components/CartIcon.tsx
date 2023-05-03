'use client'

import { useContext } from 'react'
import { CartContext } from '@/context/CartProvider'

export default function CartIcon() {

    const {cart, setCart} = useContext(CartContext)

    return (
        <div className="relative">
            <div>
                Cart
            </div>
            <div className="absolute top-0 -right-4 rounded-full bg-red-500 w-4 h-4 flex items-center justify-center text-white text-xs">
                {cart.length}
            </div>
        </div>
    )
}