"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import { Smartphone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function MobigoWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Immediate loading for better performance
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Throttled scroll for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Add a small delay to ensure the mobile menu closes first
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate position with offset for the fixed header
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Minimal Loading Animation */}
      <AnimatePresence>
        {!isLoaded && (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d85d3b] rounded-full flex items-center justify-center mb-4 animate-pulse">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-semibold text-gray-800">Loading...</div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollY={scrollY} onSectionClick={scrollToSection} />

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} onSectionClick={scrollToSection} />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
