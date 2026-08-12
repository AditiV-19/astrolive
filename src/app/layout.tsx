import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import GlobalBackground from "@/components/GlobalBackground";

export const metadata: Metadata = {
  title: "Astro Live - Talk to Astrologers",
  description: "Astrolive: India's trusted astrology app. Get personalized predictions, live consultations, and cosmic guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <LanguageProvider>
          <ThemeProvider>
            <GlobalBackground />
            <div className="relative" style={{ zIndex: 1 }}>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

