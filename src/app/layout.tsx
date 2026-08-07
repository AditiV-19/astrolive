import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full antialiased" style={{ colorScheme: 'light' }}>
      <body className="min-h-full flex flex-col text-slate-800 font-sans" style={{ background: 'linear-gradient(359.88deg, #e2e4ff 1.49%, #fff5f5 48.78%, #ededed 92.44%)' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
