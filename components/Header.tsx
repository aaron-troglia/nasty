import Link from "next/link"

export default function Header() {
    return (
        <header className="shadow px-4 py-4 flex items-center justify-between">
            <div>
                <Link href="/">Aaron's Shop</Link>
            </div>
            <div className="relative">
                <div>
                    Cart
                </div>
                <div className="absolute top-0 -right-4 rounded-full bg-red-500 w-4 h-4 flex items-center justify-center text-white text-xs">
                    1
                </div>
            </div>
        </header>
    )
}
