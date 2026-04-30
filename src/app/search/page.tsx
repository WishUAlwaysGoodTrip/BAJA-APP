"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cocktails } from "@/data/cocktails";
import { wines } from "@/data/wines";
import { foods } from "@/data/foods";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const router = useRouter();

  const searchResults = useMemo(() => {
    if (!query.trim() && activeFilters.length === 0) {
      return { cocktails: [], wines: [], foods: [] };
    }

    const q = query.toLowerCase();

    const filterFoods = (filters: string[]) => (items: any[]) => {
      if (filters.length === 0) return items;
      return items.filter((item) =>
        filters.every((filterId) => (item as any)[filterId] === true)
      );
    };

    return {
      cocktails: cocktails.filter((c) => {
        if (q && !c.name.toLowerCase().includes(q) && !c.category.toLowerCase().includes(q) && !c.ingredients.toLowerCase().includes(q)) {
          return false;
        }
        return true;
      }),
      wines: wines.filter((w) => {
        if (q && !w.name.toLowerCase().includes(q) && !w.varietal.toLowerCase().includes(q) && !w.region.toLowerCase().includes(q) && !w.type.toLowerCase().includes(q)) {
          return false;
        }
        return true;
      }),
      foods: filterFoods(activeFilters)(foods.filter((f) => {
        if (q && !f.name.toLowerCase().includes(q) && !f.category.toLowerCase().includes(q) && !f.keyIngredients.toLowerCase().includes(q) && !f.description.toLowerCase().includes(q)) {
          return false;
        }
        return true;
      })),
    };
  }, [query, activeFilters]);

  const hasFilters = activeFilters.length > 0;
  const hasResults = searchResults.cocktails.length > 0 || searchResults.wines.length > 0 || searchResults.foods.length > 0;

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-[var(--primary-text)]">Search</h1>
        <p className="text-[var(--muted-text)] text-sm">Cocktails, Wine & Food</p>
      </header>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search drinks, wine, food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 bg-[var(--card-background)] border border-[var(--border)] rounded-lg text-[var(--primary-text)] placeholder-[var(--muted-text)] focus:outline-none focus:border-[var(--primary-accent)]"
          autoFocus
        />
      </div>

      {/* Quick Filters */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className={`w-full mb-3 p-2 rounded-lg border text-sm text-left flex justify-between items-center ${
          showFilters || hasFilters
            ? "bg-[var(--elevated-card)] border-[var(--primary-accent)] text-[var(--primary-accent)]"
            : "bg-[var(--card-background)] border-[var(--border)] text-[var(--secondary-text)]"
        }`}
      >
        <span>🥗 Dietary Filters</span>
        <span className="text-sm">
          {hasFilters ? `${activeFilters.length} active` : showFilters ? "−" : "+"}
        </span>
      </button>

      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-4 p-3 bg-[var(--elevated-card)] rounded-lg">
          {[
            { id: "glutenFree", label: "Gluten Free" },
            { id: "vegan", label: "Vegan" },
            { id: "vegetarian", label: "Vegetarian" },
            { id: "dairyFree", label: "Dairy Free" },
            { id: "nutFree", label: "Nut Free" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilters((prev) =>
                  prev.includes(filter.id)
                    ? prev.filter((f) => f !== filter.id)
                    : [...prev, filter.id]
                );
              }}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                activeFilters.includes(filter.id)
                  ? "bg-[var(--success)] text-[var(--background)]"
                  : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* Results - Clickable to navigate */}
      {!query && !hasFilters ? (
        <div className="text-center py-8 text-[var(--muted-text)]">
          <p>Enter a search term or select a filter</p>
        </div>
      ) : !hasResults ? (
        <div className="text-center py-8 text-[var(--muted-text)]">
          <p>No results found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cocktails */}
          {searchResults.cocktails.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍸 Bar ({searchResults.cocktails.length})</h2>
              <div className="space-y-2">
                {searchResults.cocktails.slice(0, 10).map((c) => (
                  <div
                    key={c.id}
                    onClick={() => router.push("/bar")}
                    className="block bg-[var(--card-background)] p-3 rounded-lg border border-[var(--border)] cursor-pointer active:bg-[var(--elevated-card)]"
                  >
                    <span className="text-[var(--primary-text)]">{c.name}</span>
                    <span className="text-xs text-[var(--muted-text)] ml-2">{c.category}</span>
                    {c.tasteProfile && (
                      <p className="text-xs text-[var(--secondary-text)] mt-1">{c.tasteProfile}</p>
                    )}
                    <p className="text-xs text-[var(--primary-accent)] mt-1">Tap to see full recipe →</p>
                  </div>
                ))}
                {searchResults.cocktails.length > 10 && (
                  <p className="text-xs text-[var(--muted-text)]">+{searchResults.cocktails.length - 10} more</p>
                )}
              </div>
            </div>
          )}

          {/* Wines */}
          {searchResults.wines.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍷 Wine ({searchResults.wines.length})</h2>
              <div className="space-y-2">
                {searchResults.wines.slice(0, 10).map((w) => (
                  <div
                    key={w.id}
                    onClick={() => router.push("/wine")}
                    className="block bg-[var(--card-background)] p-3 rounded-lg border border-[var(--border)] cursor-pointer active:bg-[var(--elevated-card)]"
                  >
                    <span className="text-[var(--primary-text)]">{w.name}</span>
                    <span className="text-xs text-[var(--muted-text)] ml-2">{w.varietal}</span>
                    <p className="text-xs text-[var(--secondary-text)] mt-1">{w.taste}</p>
                    <p className="text-xs text-[var(--primary-accent)] mt-1">Tap to see full details →</p>
                  </div>
                ))}
                {searchResults.wines.length > 10 && (
                  <p className="text-xs text-[var(--muted-text)]">+{searchResults.wines.length - 10} more</p>
                )}
              </div>
            </div>
          )}

          {/* Foods */}
          {searchResults.foods.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍽️ Food ({searchResults.foods.length})</h2>
              <div className="space-y-2">
                {searchResults.foods.slice(0, 10).map((f) => (
                  <div
                    key={f.id}
                    onClick={() => router.push("/food")}
                    className="block bg-[var(--card-background)] p-3 rounded-lg border border-[var(--border)] cursor-pointer active:bg-[var(--elevated-card)]"
                  >
                    <span className="text-[var(--primary-text)]">{f.name}</span>
                    <span className="text-xs text-[var(--muted-text)] ml-2">{f.category}</span>
                    <p className="text-xs text-[var(--secondary-text)] mt-1">{f.description}</p>
                    <div className="flex gap-1 mt-1">
                      {f.glutenFree && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">GF</span>}
                      {f.vegan && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">Vegan</span>}
                      {f.vegetarian && !f.vegan && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">Veg</span>}
                    </div>
                    <p className="text-xs text-[var(--primary-accent)] mt-1">Tap to see full details →</p>
                  </div>
                ))}
                {searchResults.foods.length > 10 && (
                  <p className="text-xs text-[var(--muted-text)]">+{searchResults.foods.length - 10} more</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}