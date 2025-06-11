import Image from "next/image"
import { Award, Users, Shield, Zap } from "lucide-react"

const features = [
    {
        icon: Users,
        title: "Expert Technicians",
        description: "Certified professionals with years of experience in mobile repair and service.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "100% genuine mobile phones and accessories from authorized dealers.",
    },
    {
        icon: Zap,
        title: "Fast Service",
        description: "Quick turnaround time with same-day repair service for most issues.",
    },
    {
        icon: Award,
        title: "Customer Satisfaction",
        description: "Dedicated to providing exceptional customer service and lifetime support.",
    },
]

export function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-32 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-[#d85d3b]/10 px-4 py-2 rounded-full text-[#d85d3b] font-medium text-sm mb-6">
                        <Award className="w-4 h-4" />
                        <span>About Our Company</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] bg-clip-text text-transparent">
                            Mobigo International
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted mobile destination providing comprehensive solutions for all your mobile needs with over 8
                        years of experience and 5000+ satisfied customers.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-left animation-delay-200">
                        <div className="space-y-6">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-poppins">
                                Excellence in Mobile Solutions
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed ">
                                At Mobigo International, we understand that your mobile device is more than just a phone - it&apos;s your
                                connection to the world. That&apos;s why we offer comprehensive services to keep you connected with the
                                latest technology and expert support.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300 animate-fade-in-up animation-delay-${(index + 3) * 100}`}
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 animate-fade-in-right animation-delay-300">
                        <div className="space-y-6">
                            <div className="group rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/images/repair.jpg"
                                    alt="Mobigo International Interior - Professional Mobile Service"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="group rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/images/storefront-2.jpg"
                                    alt="Mobigo International Store Interior - Wide Range of Mobile Accessories"
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="pt-12">
                            <div className="group rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/images/emi.jpg"
                                    alt="Mobigo International Store - Your Trusted Mobile Partner"
                                    width={300}
                                    height={400}
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
