"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/bar", label: "Bar", icon: "🍸" },
  { href: "/wine", label: "Wine", icon: "🍷" },
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/food", label: "Food", icon: "🍽️" },
  { href: "/search", label: "Search", icon: "🔍" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed bottom-14 left-0 right-0 bg-[var(--card-background)] border-t border-[var(--border)] z-50">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-3 px-4 flex-1 text-center transition-colors ${
                  isActive
                    ? "text-[var(--primary-accent)]"
                    : "text-[var(--muted-text)]"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <footer className="fixed bottom-0 left-0 right-0 bg-[var(--elevated-card)] border-t border-[var(--border)] z-50 py-2">
        <div className="text-center text-xs text-[var(--muted-text)]">
          Baja Cantina Recipe · by Yifan Geng · 2026
        </div>
      </footer>
    </>
  );
}