import { FaTruck, FaShoppingBag, FaGem } from "react-icons/fa";

export default function Features() {

    const features = [
        { title: "Fast Delivery", desc: "Get your products delivered quickly.", icon: <FaTruck /> },
        { title: "Wide Selection", desc: "Thousands of products to choose from.", icon: <FaShoppingBag /> },
        { title: "Modern UI", desc: "Enjoy a clean and smooth shopping experience.", icon: <FaGem /> },
    ];

    return (
        <section className="bg-[#0B0B0F] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Why Choose NextShop?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, idx) => (
                        <div key={idx} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition">
                            <div className="flex justify-center mb-4 text-orange-400 text-4xl">{f?.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2 text-center">{f?.title}</h3>
                            <p className="text-gray-400 text-sm text-center">{f?.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
