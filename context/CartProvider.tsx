'use client'

import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext([])

export default function CartProvider({children}: {
    children: ReactNode
}) {
    const [cart, setCart] = useState([])
    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}