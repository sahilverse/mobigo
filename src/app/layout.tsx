import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mobigointernational.com"),
  title: "Mobigo International - Your Mobile Destination | Mobile Sales, Repair & Accessories in Nepal",
  description:
    "Mobigo International offers comprehensive mobile solutions in Itahari, Nepal. Mobile sales, expert repair services, exchange offers, EMI options, and genuine accessories. Your trusted mobile destination.",
  keywords:
    "mobile shop Nepal, mobile repair Itahari, smartphone sales, mobile accessories, EMI mobile, mobile exchange, Mobigo International",
  authors: [{ name: "Mobigo International" }],
  creator: "Mobigo International",
  publisher: "Mobigo International",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mobigointernational.com",
    title: "Mobigo International - Your Mobile Destination",
    description:
      "Complete mobile solutions including sales, service, exchange, repair, and accessories in Itahari, Nepal.",
    siteName: "Mobigo International",
    images: [
      {
        url: "/images/storefront-1.png",
        width: 1200,
        height: 630,
        alt: "Mobigo International Mobile Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobigo International - Your Mobile Destination",
    description:
      "Complete mobile solutions including sales, service, exchange, repair, and accessories in Itahari, Nepal.",
    images: ["/images/storefront-1.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d85d3b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mobigointernational.com" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Itahari" />
        <meta name="geo.position" content="26.659822;87.265669" />
        <meta name="ICBM" content="26.659822, 87.265669" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mobigo International",
              description:
                "Your Mobile Destination - Complete mobile solutions including sales, service, exchange, repair, and accessories",
              url: "https://mobigointernational.com",
              telephone: ["+977-9851371769", "+977-9860541373"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "National Galli",
                addressLocality: "Itahari",
                addressCountry: "Nepal",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.659822",
                longitude: "87.265669",
              },
              openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00"],
              priceRange: "$$",
              image: "/images/storefront-1.jpg",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
