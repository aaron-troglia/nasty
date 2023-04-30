import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import ProductCard from './ProductCard'
import CartContext from './Cart'
import Header from '@/components/Header'
import prisma from "@/utils/prisma";

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  
  const products = await prisma.products.findMany()
  
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-4 md:py-12">          
          <div className="flex flex-wrap -mx-4">
            {products && products.map((product, index) => (
              <ProductCard key={`product-${index}`} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
