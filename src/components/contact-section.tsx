import { MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-[#d85d3b]/10 px-4 py-2 rounded-full text-[#d85d3b] font-medium text-sm mb-6">
                        <MapPin className="w-4 h-4" />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Visit Our{" "}
                        <span className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] bg-clip-text text-transparent">Store</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Come visit us at our store or get in touch for any mobile-related queries. We're here to help!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8 animate-fade-in-left animation-delay-200">
                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                                        <Phone className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg mb-2">Phone Numbers</p>
                                        <a
                                            href="tel:+9779851371769"
                                            className=" text-gray-600 hover:text-[#d85d3b] transition-colors duration-300 text-md hover:scale-105 inline-block mr-4"
                                        >
                                            +977 9851371769
                                        </a>
                                        <a
                                            href="tel:+9779860541373"
                                            className=" text-gray-600 hover:text-[#d85d3b] transition-colors duration-300 text-md hover:scale-105 inline-block"
                                        >
                                            +977 9860541373
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-md mb-2">Our Location</p>
                                        <p className="text-gray-600 text-md">National Galli, Itahari</p>
                                        <p className="text-gray-600 text-md">Sunsari, Nepal</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-2xl flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                                        <Clock className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg mb-2">Store Hours</p>
                                        <div className="space-y-1 text-gray-600">
                                            <div className="flex justify-between gap-4">
                                                <span className="font-medium">9:00 AM - 8:00 PM</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] p-8 rounded-3xl text-white hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                            <p className="mb-6 opacity-90">Need immediate assistance? Call us now!</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+9779851371769"
                                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 text-center"
                                >
                                    Call Primary
                                </a>
                                <a
                                    href="tel:+9779860541373"
                                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 text-center"
                                >
                                    Call Secondary
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300 animate-fade-in-right animation-delay-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14866.539549209534!2d87.26566898189506!3d26.659822114555315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0034ebc86d%3A0x767fb123f4fc7522!2sMobigo%20International!5e0!3m2!1sen!2snp!4v1749609321528!5m2!1sen!2snp"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-96 lg:h-[650px]"
                            title="Mobigo International Location Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
