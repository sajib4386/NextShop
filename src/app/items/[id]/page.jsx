"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";


export default function ItemDetailsPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch("/items.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find(
                    (product) => product.id === parseInt(id)
                );
                setItem(found);
            })
            .catch(console.error);
    }, [id]);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white">
                Loading...
            </div>
        );
    }

    return (
        <section className="bg-[#0B0B0F] min-h-screen flex items-center justify-center px-6">

            {/* Centered Card */}
            <div className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-lg p-8">

                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

                    {/* Left: Image */}
                    <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
                        <img
                            src={item?.image}
                            alt=""
                            className="w-full h-full"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-white mb-3">
                            {item?.name}
                        </h1>

                        <p className="text-sm text-gray-400 mb-1">
                            Brand: <span className="text-white">{item?.brand}</span>
                        </p>

                        <p className="text-sm text-gray-400 mb-4">
                            Category: <span className="text-white">{item?.category}</span>
                        </p>

                        <p className="text-gray-400 mb-6">
                            {item?.description}
                        </p>

                        <p className="text-orange-400 text-2xl font-semibold mb-4">
                            ${item?.price}
                        </p>
                        <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                            <span>Rating:</span>
                            <FaStar className="text-yellow-400" />
                            <span className="text-white">{item?.rating}</span>
                            <span>/ 5</span>
                        </p>



                        <p className="text-sm text-gray-400 mb-6">
                            Stock:{" "}
                            <span className={item?.stock > 0 ? "text-green-400" : "text-red-400"}>
                                {item.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </p>

                        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-1">
                            {item.features.map((f, idx) => (
                                <li key={idx}>{f}</li>
                            ))}
                        </ul>

                        <div className="flex gap-4 flex-wrap">
                            <button className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition">
                                Add to Cart
                            </button>

                            <a
                                href="/items"
                                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-orange-400 transition"
                            >
                                Back to Items
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
