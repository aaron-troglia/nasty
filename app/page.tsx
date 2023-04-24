'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import CartContext from './Cart'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

// const products = [
//   {
//     id: 0,
//     title: 'Product 1',
//     price: 10
//   },
//   {
//     id: 1,
//     title: 'Product 2',
//     price: 8
//   },
//   {
//     id: 2,
//     title: 'Product 3',
//     price: 12
//   }
// ]

async function getProducts() {
  const res = await fetch('/api/hello')
  return res.json()
}

export default async function Home() {
  
  const [cart, setCart] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    const fetchedProducts = getProducts()
    setProducts(fetchedProducts)
  }, [])
  
  return (
    <>
      <Header cart={cart} />
      <main>
        <div className="container mx-auto px-4 py-4 md:py-12">          
          <CartContext.Provider value={{cart, setCart}}>
            <div className="flex flex-wrap -mx-4">
              {products && products.map(product => (
                <ProductCard product={product} />
              ))}
            </div>
          </CartContext.Provider>
        </div>
      </main>
    </>
  )
}
