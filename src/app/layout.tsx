import "./globals.css";
import type { Metadata } from "next";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "BAJA Staff App",
  description: "Staff reference app for bar recipes, wine, and food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--primary-text)]">
        <main className="flex-1 pb-20 overflow-auto">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}