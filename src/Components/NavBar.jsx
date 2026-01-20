import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-black backdrop-blur border-b border-white/10">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white">
                    Next<span className="text-indigo-500">Shop</span>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="/items"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Items
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}
