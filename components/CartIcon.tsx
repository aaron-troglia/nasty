'use client'

import { useContext } from 'react'
import { CartContext } from '@/context/CartProvider'
import Link from 'next/link'

export default function CartIcon() {

    const {cart, setCart} = useContext(CartContext)

    return (
        <div className="relative">
            <Link href="/cart">
                Cart
            </Link>
            <div className="absolute top-0 -right-4 rounded-full bg-red-500 w-4 h-4 flex items-center justify-center text-white text-xs">
                {cart.length}
            </div>
        </div>
    )
}