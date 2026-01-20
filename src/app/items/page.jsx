"use client";

import { useEffect, useState } from "react";

export default function ItemsPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/items.json")
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="bg-[#0B0B0F] min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-12 text-center">Our Items</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            <div className="relative w-full h-48">
                                <img
                                    src={item?.image}
                                    alt=""
                                    className="w-full h-full bg-gray-800"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-white font-semibold mb-2">{item?.name}</h3>
                                <p className="text-gray-400 text-sm mb-2">{item?.description}</p>
                                <p className="text-orange-400 font-bold mb-2">${item?.price}</p>
                                <a
                                    href={`/items/${item?.id}`}
                                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
