import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-[#0B0B0F] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                        Smart Shopping <br />
                        <span className="text-orange-400">Starts Here</span>
                    </h1>

                    <p className="text-gray-400 max-w-lg mb-8 text-sm sm:text-base">
                        Explore a modern e-commerce experience. Discover products,
                        compare prices, and manage your shopping journey effortlessly
                        with NextShop.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Link
                            href="#"
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-lg transition text-center"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="#"
                            className="px-6 py-3 border border-white/20 rounded-lg text-white hover:border-orange-400 transition text-center"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs sm:text-sm">
                        <span>• Fast Delivery</span>
                        <span>• Secure Platform</span>
                        <span>• Modern UI</span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative max-w-sm sm:max-w-md md:max-w-none mx-auto">
                    <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full border-2 border-orange-400 z-0" />
                    <div className="relative z-10">
                        <Image
                            src="/hero.png"
                            alt="E-commerce shopping banner"
                            width={520}
                            height={520}
                            className="object-cover w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute bottom-10 left-10 hidden md:grid grid-cols-4 gap-2 opacity-30">
                {[...Array(16)].map((_, i) => (
                    <span
                        key={i}
                        className="w-2 h-2 bg-orange-400 rounded-full"
                    />
                ))}
            </div>
        </section>
    );
}
