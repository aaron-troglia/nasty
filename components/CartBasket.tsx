'use client'

import {useContext} from 'react'
import { CartContext } from "@/context/CartProvider"
import { Products } from '@prisma/client'

type CartStateContext = {
    cart: Products[],
    setCart: (p: Products[]) => void
}

export default function CartBasket() {

    const {cart} = useContext<CartStateContext>(CartContext)
    
    return (
        <div>
            Cart Basket

            {cart && cart.map(product => (
                <div>{product.title}</div>
            ))}
        </div>
    )
}
