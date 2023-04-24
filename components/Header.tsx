'use client'

export default function Header({cart}: {cart: Product[]}) {
    return (
        <header className="shadow px-4 py-4 flex items-center justify-between">
            <div>
                Aaron's Shop
            </div>
            <div className="relative">
                <div>
                    Cart
                </div>
                <div className="absolute top-0 -right-4 rounded-full bg-red-500 w-4 h-4 flex items-center justify-center text-white text-xs">{cart.length}</div>
            </div>
        </header>
    )
}
