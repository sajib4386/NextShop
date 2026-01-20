import { FaSearch, FaListUl, FaInfoCircle, FaShoppingBag } from "react-icons/fa";
import Image from "next/image";

export default function HowItWorks() {
    return (
        <section className="bg-[#0B0B0F] py-20 px-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                How NextShop Works
            </h2>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

                {/* Left */}
                <div className="flex-1">
                    {/* Step 1 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold text-lg">
                            1
                        </div>
                        <div>
                            <div className="text-orange-400 text-3xl mb-2"><FaSearch /></div>
                            <h3 className="text-white font-semibold mb-1">Explore Products</h3>
                            <p className="text-gray-400 text-sm">
                                Browse our product collection and discover what you need.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold text-lg">
                            2
                        </div>
                        <div>
                            <div className="text-orange-400 text-3xl mb-2"><FaListUl /></div>
                            <h3 className="text-white font-semibold mb-1">View Product List</h3>
                            <p className="text-gray-400 text-sm">
                                See all available items with price and short details.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold text-lg">
                            3
                        </div>
                        <div>
                            <div className="text-orange-400 text-3xl mb-2"><FaInfoCircle /></div>
                            <h3 className="text-white font-semibold mb-1">Check Product Details</h3>
                            <p className="text-gray-400 text-sm">
                                Open a product to view full description and information.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold text-lg">
                            4
                        </div>
                        <div>
                            <div className="text-orange-400 text-3xl mb-2"><FaShoppingBag /></div>
                            <h3 className="text-white font-semibold mb-1">Start Shopping</h3>
                            <p className="text-gray-400 text-sm">
                                Choose products and begin your shopping journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Images */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="relative w-full h-48 rounded-lg">
                        <Image src="/explore.avif" alt="Product 1" fill />
                    </div>
                    <div className="relative w-full h-48 rounded-lg">
                        <Image src="/view.webp" alt="Product 2" fill />
                    </div>
                    <div className="relative w-full h-48 rounded-lg">
                        <Image src="/details.jpg" alt="Product 3" fill />
                    </div>
                    <div className="relative w-full h-48 rounded-lg">
                        <Image src="/start.webp" alt="Product 4" fill />
                    </div>
                </div>

            </div>
        </section>
    );
}
