"use client";

import ProtectedRoute from "@/Components/ProtectedRoute";

function AddItemPage() {
    return (
        <section className="min-h-screen">
            <form className="bg-gray-900 p-8 rounded-xl max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Add New Product
                </h1>

                <input
                    name="name"
                    placeholder="Product Name"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="brand"
                    placeholder="Brand"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="category"
                    placeholder="Category"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="rating"
                    type="number"
                    step="0.1"
                    placeholder="Rating"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="stock"
                    type="number"
                    placeholder="Stock"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="features"
                    placeholder="Features"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                />

                <input
                    name="image"
                    placeholder="Image URL"
                    className="w-full p-3 mb-6 rounded bg-gray-800 text-white"
                />

                <button
                    className="w-full bg-orange-500 hover:bg-orange-400 text-black font-semibold py-3 rounded">
                    Add Item
                </button>
            </form>
        </section>
    );
}

export default function AddItemWrapper() {
    return (
        <ProtectedRoute>
            <AddItemPage />
        </ProtectedRoute>
    );
}
