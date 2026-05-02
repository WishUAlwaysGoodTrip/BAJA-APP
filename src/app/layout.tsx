import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import BottomNav from "@/components/BottomNav";

const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "BAJA CANTINA Staff App",
  description: "Staff reference app for bar recipes, wine, and food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${BebasNeue.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--primary-text)]">
        <main className="flex-1 pb-16 overflow-auto">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}