import Link from "next/link"
import CartIcon from "./CartIcon"

export default function Header() {
    return (
        <header className="shadow px-4 py-4 flex items-center justify-between">
            <div>
                <Link href="/">NASTY</Link>
            </div>
            <CartIcon />
        </header>
    )
}
