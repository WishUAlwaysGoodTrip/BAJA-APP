import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-[var(--primary-accent)] font-[family-name:var(--font-bebas)] tracking-wider">BAJA CANTINA</h1>
        <p className="text-[var(--muted-text)] mt-2">Staff Reference App</p>
      </header>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <Link href="/bar" className="block">
          <div className="bg-[var(--card-background)] p-6 rounded-lg text-center border border-[var(--border)]">
            <span className="text-4xl block mb-2">🍸</span>
            <span className="text-[var(--primary-text)] font-medium">Bar</span>
          </div>
        </Link>

        <Link href="/wine" className="block">
          <div className="bg-[var(--card-background)] p-6 rounded-lg text-center border border-[var(--border)]">
            <span className="text-4xl block mb-2">🍷</span>
            <span className="text-[var(--primary-text)] font-medium">Wine</span>
          </div>
        </Link>

        <Link href="/food" className="block">
          <div className="bg-[var(--card-background)] p-6 rounded-lg text-center border border-[var(--border)]">
            <span className="text-4xl block mb-2">🍽️</span>
            <span className="text-[var(--primary-text)] font-medium">Food</span>
          </div>
        </Link>

        <Link href="/search" className="block">
          <div className="bg-[var(--card-background)] p-6 rounded-lg text-center border border-[var(--border)]">
            <span className="text-4xl block mb-2">🔍</span>
            <span className="text-[var(--primary-text)] font-medium">Search</span>
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <Link href="/allergens" className="block">
          <div className="bg-[var(--card-background)] p-4 rounded-lg border border-[var(--border)] flex justify-between items-center">
            <span className="text-[var(--warning)] font-medium">⚠️ Allergen Filter</span>
            <span className="text-[var(--muted-text)]">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
}