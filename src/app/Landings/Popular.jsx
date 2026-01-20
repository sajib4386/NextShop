"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality sound, long battery life.",
        price: 99.99,
        image: "/img1.avif",
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Track your fitness and notifications.",
        price: 149.99,
        image: "/img2.jpg",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        description: "Ergonomic design with RGB lighting.",
        price: 59.99,
        image: "/img3.jpg",
    },
    {
        id: 4,
        name: "Laptop Backpack",
        description: "Stylish and spacious for everyday use.",
        price: 79.99,
        image: "/img4.jpeg",
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        description: "Portable with deep bass.",
        price: 89.99,
        image: "/img5.webp",
    },
    {
        id: 6,
        name: "Fitness Band",
        description: "Track your daily activity & sleep.",
        price: 39.99,
        image: "/img6.png",
    },
    {
        id: 7,
        name: "Wireless Charger",
        description: "Fast charging with sleek design.",
        price: 29.99,
        image: "/img7.jpg",
    },
    {
        id: 8,
        name: "VR Headset",
        description: "Immersive virtual reality experience.",
        price: 199.99,
        image: "/img8.jpg",
    },
];

export default function PopularProducts() {
    return (
        <section className="bg-[#0B0B0F] py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-white mb-14 text-center">
                    <FaFire className="inline-block mr-2 text-orange-400" /> Popular Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {products.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-b from-gray-900 to-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/30 transition"
                        >
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-full h-52"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                />
                            </motion.div>

                            <div className="p-5 text-center">
                                <h3 className="text-white font-semibold text-lg mb-2">
                                    {item?.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    {item?.description}
                                </p>
                                <p className="text-orange-400 font-bold text-xl mb-4">
                                    ${item?.price}
                                </p>

                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link
                                        href="#"
                                        className="inline-block px-4 py-2 text-sm rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
                                    >
                                        View Product
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
