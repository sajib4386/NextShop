export default function Testimonials() {
    return (
        <section className="bg-linear-to-b from-[#07070A] to-[#0B0B0F] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-gray-400 mb-12">
                    Trusted by thousands of shoppers. Here’s what they love about NextShop.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-7 rounded-2xl border-2 border-amber-200">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/jack.jpg"
                                    alt=""
                                    className="w-12 h-12 rounded-full border border-gray-700"
                                />
                                <div className="text-left">
                                    <h3 className="text-white font-semibold">Jack</h3>
                                    <p className="text-gray-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>
                            <span className="text-yellow-400 font-bold">★★★★★</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            “NextShop made shopping so easy! The checkout process was smooth and
                            fast.”
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-7 rounded-2xl border-2 border-amber-200">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/john.jpeg"
                                    alt=""
                                    className="w-12 h-12 rounded-full border border-gray-700"
                                />
                                <div className="text-left">
                                    <h3 className="text-white font-semibold">John</h3>
                                    <p className="text-gray-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>
                            <span className="text-yellow-400 font-bold">★★★★★</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            “Fast delivery and secure payments. I always feel safe ordering here.”
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-7 rounded-2xl border-2 border-amber-200">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/watson.jpg"
                                    alt=""
                                    className="w-12 h-12 rounded-full border border-gray-700"
                                />
                                <div className="text-left">
                                    <h3 className="text-white font-semibold">Watson</h3>
                                    <p className="text-gray-400 text-sm">Verified Buyer</p>
                                </div>
                            </div>
                            <span className="text-yellow-400 font-bold">★★★★★</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            “I love the product selection! So many options and great prices.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
