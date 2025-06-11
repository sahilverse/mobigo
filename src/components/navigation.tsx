"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Phone, Smartphone, Menu, X } from "lucide-react"

interface NavigationProps {
    activeSection: string
    scrollY: number
    onSectionClick: (section: string) => void
}

export function Navigation({ activeSection, scrollY, onSectionClick }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSectionClick = (section: string) => {
        setIsMenuOpen(false)
        onSectionClick(section)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-xl py-2" : "bg-white/90 backdrop-blur-sm shadow-lg py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-3 group cursor-pointer"
                        onClick={() => handleSectionClick("home")}
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 bg-gradient-to-br from-[#d85d3b] to-[#c54d2b] rounded-xl flex items-center justify-center shadow-lg"
                        >
                            <Smartphone className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                            <span className="text-xl font-bold text-gray-800 font-poppins">Mobigo</span>
                            <div className="text-xs text-gray-500 -mt-1">International</div>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {["home", "about", "services", "contact"].map((section, index) => (
                            <motion.button
                                key={section}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSectionClick(section)}
                                className={`relative capitalize font-medium transition-all duration-300 py-2 px-4 rounded-lg ${activeSection === section
                                    ? "text-[#d85d3b] bg-[#d85d3b]/10"
                                    : "text-gray-600 hover:text-[#d85d3b] hover:bg-gray-50"
                                    }`}
                            >
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#d85d3b] rounded-full"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:block"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(216, 93, 59, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+9779851371769"
                            className="bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                        </motion.a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl mx-4 sm:mx-0 overflow-hidden"
                        >
                            <div className="px-4 pt-4 pb-6 space-y-3">
                                {["home", "about", "services", "contact"].map((section, index) => (
                                    <motion.button
                                        key={section}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleSectionClick(section)}
                                        className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#d85d3b] hover:bg-[#d85d3b]/10 capitalize font-medium rounded-lg transition-all duration-300"
                                    >
                                        {section}
                                    </motion.button>
                                ))}
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    href="tel:+9779851371769"
                                    className="block w-full bg-gradient-to-r from-[#d85d3b] to-[#c54d2b] text-white px-4 py-3 rounded-lg font-semibold text-center mt-4"
                                >
                                    Call Now
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}
