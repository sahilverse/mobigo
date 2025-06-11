import { Smartphone, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12 animate-fade-in-up">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6 hover:scale-105 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                                <Smartphone className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold font-poppins">Mobigo International</span>
                                <div className="text-sm text-gray-400">Your Mobile Destination</div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            Your trusted mobile destination for sales, service, repair, and accessories. Serving customers with
                            excellence for over 8 years in Nepal.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="tel:+9779851371769"
                                className="bg-[#d85d3b]/20 p-3 rounded-xl hover:bg-[#d85d3b]/30 hover:scale-110 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="bg-[#d85d3b]/20 p-3 rounded-xl hover:bg-[#d85d3b]/30 hover:scale-110 transition-all duration-300"
                            >
                                <MapPin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="animate-fade-in-up animation-delay-200">
                        <h3 className="text-lg font-bold mb-6 font-poppins">Our Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            {["Mobile Sales", "Repair Service", "Exchange Offers", "EMI Options", "Mobile Accessories"].map(
                                (service) => (
                                    <li
                                        key={service}
                                        className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                                    >
                                        {service}
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="animate-fade-in-up animation-delay-300">
                        <h3 className="text-lg font-bold mb-6 font-poppins">Contact Info</h3>
                        <div className="space-y-3 text-gray-400">
                            <a
                                href="tel:+9779851371769"
                                className="block hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                +977 9851371769
                            </a>
                            <a
                                href="tel:+9779860541373"
                                className="block hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                +977 9860541373
                            </a>
                            <p>National Galli, Itahari</p>
                            <p>Sunsari, Nepal</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up animation-delay-400">
                    <p className="text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Mobigo International. All rights reserved.
                    </p>
                </div>

                {/* Attribution */}
                <div className="mt-8 text-center animate-fade-in-up animation-delay-500">
                    <a
                        href="https://github.com/sahilverse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-[#d85d3b] hover:scale-105 transition-all duration-300"
                    >
                        <span>Crafted in Sahilverse</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
