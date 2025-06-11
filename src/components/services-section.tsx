"use client"

import { ShoppingCart, Wrench, RefreshCw, CreditCard } from "lucide-react"

const services = [
    {
        icon: ShoppingCart,
        title: "Mobile Sales",
        description: "Latest smartphones and mobile devices from top brands at competitive prices with warranty.",
        features: ["Latest Models", "Second Hands", "Competitive Prices", "Official Warranty", "Trade-in Options"],
    },
    {
        icon: Wrench,
        title: "Repair Service",
        description: "Professional repair services for all mobile brands with genuine parts and expert technicians.",
        features: ["Same Day Service", "Genuine Parts", "Expert Technicians", "Service Warranty"],
    },
    {
        icon: RefreshCw,
        title: "Exchange Offers",
        description: "Trade in your old device for a new one with attractive exchange offers and instant evaluation.",
        features: ["Instant Evaluation", "Best Exchange Value", "All Brands Accepted", "Hassle-free Process"],
    },
    {
        icon: CreditCard,
        title: "EMI Options",
        description: "Flexible EMI plans to make your dream phone affordable with easy monthly payment options.",
        features: ["0% Interest", "Flexible Terms", "Quick Approval", "No Hidden Charges"],
    },
]

const accessories = [
    {
        emoji: "📱",
        title: "Cases & Covers",
        description: "Protective cases, stylish covers, and screen protectors for all mobile models.",
        items: ["Protective Cases", "Designer Covers", "Screen Guards", "Tempered Glass"],
    },
    {
        emoji: "🔌",
        title: "Chargers & Cables",
        description: "Original and compatible chargers, cables, power banks, and wireless chargers.",
        items: ["Fast Chargers", "USB Cables", "Power Banks", "Wireless Chargers"],
    },
    {
        emoji: "🎧",
        title: "Audio Accessories",
        description: "Premium headphones, earphones, Bluetooth speakers, and audio accessories.",
        items: ["Bluetooth Earphones", "Wired Headphones", "Speakers", "Audio Adapters"],
    },
]

export function ServicesSection() {
    return (
        <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d85d3b' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-[#d85d3b]/10 px-4 py-2 rounded-full text-[#d85d3b] font-medium text-sm mb-6">
                        <Wrench className="w-4 h-4" />
                        <span>Our Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Complete{" "}
                        <span className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] bg-clip-text text-transparent">
                            Mobile Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From sales to repair, we provide comprehensive mobile services to meet all your needs with expert care and
                        genuine products.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#d85d3b]/10 to-[#d85d3b]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#d85d3b] group-hover:to-[#c54d2b] transition-all duration-300">
                                <service.icon className="w-8 h-8 text-[#d85d3b] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-[#d85d3b] rounded-full" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100 animate-fade-in-up animation-delay-500">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-poppins">Mobile Accessories</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Complete range of mobile accessories to enhance and protect your device
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {accessories.map((category, index) => (
                            <div
                                key={index}
                                className={`text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-${(index + 6) * 100}`}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-[#d85d3b]/10 to-[#d85d3b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                                    <span className="text-3xl">{category.emoji}</span>
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg mb-3 font-poppins">{category.title}</h4>
                                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                                <ul className="space-y-1 text-sm text-gray-500">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
