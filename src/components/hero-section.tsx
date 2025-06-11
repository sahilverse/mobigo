"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Star, Phone, MapPin, ArrowRight, ChevronDown, Smartphone, Wrench } from "lucide-react"

interface HeroSectionProps {
    scrollY: number
    onSectionClick: (section: string) => void
}

export function HeroSection({ scrollY, onSectionClick }: HeroSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with Parallax Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#d85d3b]/5"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-20 h-20 bg-[#d85d3b]/10 rounded-full"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                    className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-40 left-20 w-16 h-16 bg-green-500/10 rounded-full"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 lg:space-y-8 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center space-x-2 bg-[#d85d3b]/10 px-4 py-2 rounded-full text-[#d85d3b] font-medium text-sm"
                            >
                                <Star className="w-4 h-4 fill-current" />
                                <span>Trusted by 5000+ Customers</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight font-poppins"
                            >
                                <span className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] bg-clip-text text-transparent">
                                    Mobigo
                                </span>
                                <br />
                                <span className="text-gray-800">International</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
                                Your Mobile Destination
                            </motion.p>

                            <motion.p variants={itemVariants} className="text-lg text-gray-500 max-w-xl leading-relaxed">
                                Complete mobile solutions including sales, service, exchange, repair, and accessories. Your trusted
                                partner for all mobile needs in Nepal with over 8 years of experience.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(216, 93, 59, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onSectionClick("services")}
                                className="group bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center cursor-pointer justify-center space-x-2 text-sm sm:text-base"
                            >
                                <span>Explore Services</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onSectionClick("contact")}
                                className="group border-2 border-[#d85d3b] text-[#d85d3b] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-[#d85d3b] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 text-sm sm:text-base"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Contact Us</span>
                            </motion.button>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-8 cursor-pointer">
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-[#d85d3b]/10 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#d85d3b]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Call Us</div>
                                    <div className="text-sm text-gray-600 whitespace-nowrap">+977 9851371769</div>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-[#d85d3b]/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[#d85d3b]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Visit Us</div>
                                    <div className="text-sm text-gray-600">Itahari, Nepal</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <Image
                                    src="/images/storefront-1.png"
                                    alt="Mobigo International Storefront - Your Mobile Destination"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500" />

                                {/* Floating Cards */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    variants={floatingVariants}
                                    whileInView="animate"
                                    className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <Smartphone className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-sm font-semibold">Latest Models</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    variants={floatingVariants}
                                    whileInView="animate"
                                    className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Wrench className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-sm font-semibold">Expert Repair</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        onClick={() => onSectionClick("about")}
                        className="flex flex-col items-center space-y-2 text-gray-400 hover:text-[#d85d3b] transition-colors duration-300 cursor-pointer"
                    >
                        <span className="text-sm font-medium">Scroll Down</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
