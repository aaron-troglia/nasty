'use client'

import React, {useContext, useState} from 'react'
import Link from 'next/link'

export default function ProductCard({product}: {product: Product}) {
    return (
        <div className="w-full md:w-1/3">
            <h2 className="text-xl md:text-2xl mb-2 font-bold">{product.title}</h2>
            <div>{product.price}</div>
            <Link href={`/products/${product.id}`}>View Details</Link>
        </div>
    )
}
