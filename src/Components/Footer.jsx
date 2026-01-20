export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm">
                {/* Brand */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-2">
                        Next<span className="text-indigo-500">Shop</span>
                    </h2>
                    <p>
                        Your one-stop shop to explore products, view details,
                        and discover great deals with ease.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-medium mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/items" className="hover:text-white transition">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="hover:text-white transition">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="md:text-right">
                    <p>
                        © {new Date().getFullYear()} NextShop. All rights reserved.
                    </p>
                    <p className="mt-2 text-xs">
                        Simple e-commerce platform built with modern web technologies.
                    </p>
                </div>
            </div>
        </footer>
    );
}
