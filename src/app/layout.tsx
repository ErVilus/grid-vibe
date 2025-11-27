import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Importiamo la Sidebar
import DesktopSidebar from "@/components/navigation/DesktopSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grid Vibe | Pro Dashboard",
  description: "F1 Telemetry & News Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#F0F0F0] min-h-screen selection:bg-primary-neon selection:text-background-deep overflow-x-hidden`}
      >
        <div className="flex min-h-screen">
            {/* Sidebar Fissa */}
            <DesktopSidebar />

            {/* Contenuto Principale (Spostato a destra di 64px = 16rem) */}
            <main className="flex-1 ml-64 p-8 relative">
                {children}
            </main>
        </div>
      </body>
    </html>
  );
}