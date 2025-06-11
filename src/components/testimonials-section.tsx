"use client"

import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Rajesh Kumar",
        rating: 5,
        comment: "Excellent service! They repaired my phone quickly and the price was very reasonable. Highly recommended!",
        location: "Itahari",
    },
    {
        name: "Priya Sharma",
        rating: 5,
        comment: "Best mobile shop in the area. Great collection of phones and accessories. Staff is very helpful.",
        location: "Dharan",
    },
    {
        name: "Amit Thapa",
        rating: 5,
        comment: "Got my dream phone with easy EMI. No hidden charges and transparent dealing. Thank you Mobigo!",
        location: "Biratnagar",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-[#d85d3b]/10 px-4 py-2 rounded-full text-[#d85d3b] font-medium text-sm mb-6">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Customer Reviews</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] bg-clip-text text-transparent">
                            Customers Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                        >
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
