'use client'

import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext(0)

export default function CartProvider({children}: {
    children: ReactNode
}) {
    const [cart, setCart] = useState(0)
    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}