'use client'

import { Products } from '@prisma/client'
import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext<Products[]>([])

export default function CartProvider({children}: {
    children: ReactNode
}) {
    const [cart, setCart] = useState<Products[]>([])
    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}