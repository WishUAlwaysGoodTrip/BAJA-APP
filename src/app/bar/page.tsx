"use client";

import { useState } from "react";
import { cocktails, cocktailCategories } from "@/data/cocktails";

export default function BarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCocktails = selectedCategory
    ? cocktails.filter((c) => c.category === selectedCategory)
    : cocktails;

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-[var(--primary-text)]">Bar</h1>
        <p className="text-[var(--muted-text)] text-sm">Cocktails & Drinks</p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
            selectedCategory === null
              ? "bg-[var(--primary-accent)] text-white"
              : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
          }`}
        >
          All
        </button>
        {cocktailCategories.slice(0, 8).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedCategory === cat
                ? "bg-[var(--primary-accent)] text-white"
                : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cocktail List - Always Expanded */}
      <div className="space-y-3">
        {filteredCocktails.map((cocktail) => (
          <div
            key={cocktail.id}
            className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden"
          >
            <div className="p-4">
              <h3 className="font-medium text-[var(--primary-text)]">
                {cocktail.name}
              </h3>
              <p className="text-xs text-[var(--muted-text)] mb-3">
                {cocktail.category}
              </p>

              <div className="space-y-3">
                {cocktail.tasteProfile && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Taste Profile
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {cocktail.tasteProfile}
                    </p>
                  </div>
                )}
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">
                    Ingredients
                  </span>
                  <div className="space-y-1">
                    {cocktail.ingredients.split(", ").map((ing, i) => (
                      <p key={i} className="text-[var(--secondary-text)] text-sm">{ing}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">
                    Measurements
                  </span>
                  <div className="space-y-1">
                    {cocktail.measurements.split(";").filter(m => m.trim()).map((m, i) => (
                      <p key={i} className="text-[var(--secondary-text)] text-sm">{m.trim()}</p>
                    ))}
                    {cocktail.measurements.split(";").filter(m => m.trim()).length === 0 && (
                      <p className="text-[var(--muted-text)] text-sm">—</p>
                    )}
                  </div>
                </div>
                {cocktail.rim && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Rim
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {cocktail.rim}
                    </p>
                  </div>
                )}
                {cocktail.method && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Method
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {cocktail.method}
                    </p>
                  </div>
                )}
                {cocktail.garnish && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Garnish
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {cocktail.garnish}
                    </p>
                  </div>
                )}
                <div className="pt-2">
                  <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">
                    {cocktail.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}