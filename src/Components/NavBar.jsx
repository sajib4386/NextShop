"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { isAuthenticated, removeAuthCookie } from "@/utils/auth";
import { useEffect, useState } from "react";


export default function Navbar() {
    const router = useRouter();


    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(isAuthenticated());


        const handleAuthChange = () => {
            setAuth(isAuthenticated());
        };

        window.addEventListener("authChange", handleAuthChange);

        return () => {
            window.removeEventListener("authChange", handleAuthChange);
        };
    }, []);

    const handleLogout = () => {
        removeAuthCookie();
        setAuth(false);
        router.push("/login");
    };

    return (
        <header className="sticky top-0 z-50 bg-black border-b border-white/10">
            <nav className="max-w-7xl mx-auto flex justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-white">
                    Next<span className="text-indigo-500">Shop</span>
                </Link>

                <div className="flex gap-6 items-center">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>

                    <Link href="/items" className="text-gray-300 hover:text-white">
                        Products
                    </Link>

                    {auth ? (
                        <>
                            <Link href="/add-item" className="text-gray-300 hover:text-white">
                                Add Item
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-2xl"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="px-4 py-2 bg-indigo-600 rounded-2xl text-white"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}
