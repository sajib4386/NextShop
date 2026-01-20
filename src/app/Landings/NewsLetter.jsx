import { FiMail } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";

export default function NewsLetter() {
    return (
        <section className="bg-linear-to-b from-[#0B0B0F] to-[#07070A] py-20 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-xl">

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FiMail className="text-orange-500 text-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Subscribe to Our Newsletter
                        </h2>
                    </div>

                    <p className="text-gray-400 mb-6">
                        Get updates on new products, deals, and exclusive offers.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="relative w-full sm:w-auto flex-1">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <FiMail />
                            </span>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 pl-12 rounded-xl text-white border border-gray-600 focus:outline focus:border-amber-200"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-400 rounded-xl text-black font-semibold flex items-center gap-2 transition-transform transform hover:-translate-y-0.5"
                        >
                            Subscribe <AiOutlineSend />
                        </button>
                    </form>

                    <p className="text-gray-500 mt-4 text-sm flex items-center justify-center gap-2">
                        <RiShieldCheckLine className="text-green-400" />
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
}
