import Link from "next/link";
import { AiOutlineShoppingCart, AiFillInstagram, AiFillTwitterCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="relative bg-linear-to-b from-[#0B0B0F] to-[#07070A] py-20 px-6">
            <div className="absolute inset-0 opacity-20">
                <div className="bg-[radial-gradient(circle_at_top,#ff7a18_0%,transparent_55%)] h-full w-full"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10 shadow-2xl backdrop-blur">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        <div className="text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <AiOutlineShoppingCart className="text-orange-500 text-3xl" />
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Ready to Start Shopping?
                                </h2>
                            </div>

                            <p className="text-gray-400 mb-6">
                                Browse products and enjoy the ultimate shopping experience.
                            </p>

                            {/* Contact Us Section */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <AiOutlinePhone className="text-orange-500" />
                                    <span>+880 1234 567890</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <AiOutlineMail className="text-orange-500" />
                                    <span>support@nextshop.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-xl transition transform hover:-translate-y-0.5 shadow-lg"
                            >
                                Shop Now <AiOutlineShoppingCart />
                            </Link>

                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 px-10 py-3 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-orange-500 transition"
                            >
                                Contact Us <AiOutlineMail />
                            </Link>

                            <div className="text-gray-500 text-sm">Follow us</div>

                            <div className="flex gap-3">
                                <Link href="https://www.facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition">
                                    <FaFacebookF className="text-gray-300" />
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition">
                                    <AiFillInstagram className="text-gray-300" />
                                </Link>
                                <Link href="https://x.com/" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition">
                                    <AiFillTwitterCircle className="text-gray-300" />
                                </Link>
                                <Link href="https://www.youtube.com" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition">
                                    <FaYoutube className="text-gray-300" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
