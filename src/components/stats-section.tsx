"use client"

import { Users, Award, Clock, Shield } from "lucide-react"

const stats = [
    { number: "5000+", label: "Happy Customers", icon: Users },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Genuine Products", icon: Shield },
]

export function StatsSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm  transition-transform duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-poppins">{stat.number}</div>
                            <div className="text-white/90 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
