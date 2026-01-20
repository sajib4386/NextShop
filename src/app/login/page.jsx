"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAuthCookie } from "@/utils/auth";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "123456") {
            setAuthCookie();

            // Navbar update করার জন্য event dispatch
            window.dispatchEvent(new Event("authChange"));

            router.push("/items");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <section className="max-w-3xl mx-auto min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="bg-gray-900 p-8 rounded-xl max-w-md"
            >
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Login
                </h1>

                {error && <p className="text-red-400 mb-4">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 rounded bg-gray-800 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded text-white font-semibold">
                    Login
                </button>
            </form>
        </section>
    );
}
