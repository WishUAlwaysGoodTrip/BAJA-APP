"use client";

import { useState, useMemo } from "react";
import { cocktails } from "@/data/cocktails";
import { wines } from "@/data/wines";
import { foods } from "@/data/foods";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Track which item is expanded
  const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);
  const [expandedWine, setExpandedWine] = useState<string | null>(null);
  const [expandedFood, setExpandedFood] = useState<string | null>(null);

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
          onChange={(e) => {
            setQuery(e.target.value);
            // Clear expansions when typing new search
            setExpandedCocktail(null);
            setExpandedWine(null);
            setExpandedFood(null);
          }}
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

      {/* Results */}
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
          {/* Cocktails - Click to expand details */}
          {searchResults.cocktails.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍸 Bar ({searchResults.cocktails.length})</h2>
              <div className="space-y-2">
                {searchResults.cocktails.map((c) => (
                  <div key={c.id} className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden">
                    <button
                      onClick={() => setExpandedCocktail(expandedCocktail === c.id ? null : c.id)}
                      className="w-full p-3 text-left"
                    >
                      <span className="text-[var(--primary-text)]">{c.name}</span>
                      <span className="text-xs text-[var(--muted-text)] ml-2">{c.category}</span>
                    </button>
                    {/* Expanded details */}
                    {expandedCocktail === c.id && (
                      <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] space-y-2">
                        {c.tasteProfile && (
                          <div>
                            <span className="text-xs text-[var(--muted-text)] uppercase">Taste</span>
                            <p className="text-[var(--secondary-text)] text-sm">{c.tasteProfile}</p>
                          </div>
                        )}
                        <div>
                          <span className="text-xs text-[var(--muted-text)] uppercase">Ingredients</span>
                          <div className="space-y-1">
                            {c.ingredients.split(", ").map((ing, i) => (
                              <p key={i} className="text-[var(--secondary-text)] text-sm">{ing}</p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs text-[var(--muted-text)] uppercase">Measurements</span>
                          <div className="space-y-1">
                            {c.measurements.split(";").filter(m => m.trim()).map((m, i) => (
                              <p key={i} className="text-[var(--secondary-text)] text-sm">{m.trim()}</p>
                            ))}
                          </div>
                        </div>
                        {c.rim && (<p className="text-xs text-[var(--secondary-text)]">Rim: {c.rim}</p>)}
                        {c.method && (<p className="text-xs text-[var(--secondary-text)]">Method: {c.method}</p>)}
                        {c.garnish && (<p className="text-xs text-[var(--secondary-text)]">Garnish: {c.garnish}</p>)}
                        <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">{c.availability}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wines - Click to expand details */}
          {searchResults.wines.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍷 Wine ({searchResults.wines.length})</h2>
              <div className="space-y-2">
                {searchResults.wines.map((w) => (
                  <div key={w.id} className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden">
                    <button
                      onClick={() => setExpandedWine(expandedWine === w.id ? null : w.id)}
                      className="w-full p-3 text-left"
                    >
                      <span className="text-[var(--primary-text)]">{w.name}</span>
                      <span className="text-xs text-[var(--muted-text)] ml-2">{w.varietal}</span>
                    </button>
                    {expandedWine === w.id && (
                      <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] space-y-2">
                        <div className="grid grid-cols-3 gap-2">
                          <div><span className="text-xs text-[var(--muted-text)] uppercase">Body</span><p className="text-[var(--secondary-text)] text-sm">{w.body}</p></div>
                          <div><span className="text-xs text-[var(--muted-text)] uppercase">Acidity</span><p className="text-[var(--secondary-text)] text-sm">{w.acidity}</p></div>
                          <div><span className="text-xs text-[var(--muted-text)] uppercase">Tannin</span><p className="text-[var(--secondary-text)] text-sm">{w.tannin}</p></div>
                        </div>
                        <div><span className="text-xs text-[var(--muted-text)] uppercase">Smell</span><p className="text-[var(--secondary-text)] text-sm">{w.smell}</p></div>
                        <div><span className="text-xs text-[var(--muted-text)] uppercase">Taste</span><p className="text-[var(--secondary-text)] text-sm">{w.taste}</p></div>
                        <div><span className="text-xs text-[var(--muted-text)] uppercase">Food Pairing</span><p className="text-[var(--secondary-text)] text-sm">{w.foodPairing}</p></div>
                        {w.staffNotes && (<div><span className="text-xs text-[var(--muted-text)] uppercase">Staff Note</span><p className="text-[var(--secondary-text)] text-sm">{w.staffNotes}</p></div>)}
                        <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">{w.availability}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Foods - Click to expand details */}
          {searchResults.foods.length > 0 && (
            <div>
              <h2 className="text-lg font-medium text-[var(--primary-text)] mb-3">🍽️ Food ({searchResults.foods.length})</h2>
              <div className="space-y-2">
                {searchResults.foods.map((f) => (
                  <div key={f.id} className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden">
                    <button
                      onClick={() => setExpandedFood(expandedFood === f.id ? null : f.id)}
                      className="w-full p-3 text-left"
                    >
                      <span className="text-[var(--primary-text)]">{f.name}</span>
                      <span className="text-xs text-[var(--muted-text)] ml-2">{f.category}</span>
                    </button>
                    {expandedFood === f.id && (
                      <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] space-y-2">
                        <div><span className="text-xs text-[var(--muted-text)] uppercase">Description</span><p className="text-[var(--secondary-text)] text-sm">{f.description}</p></div>
                        {f.keyIngredients && (<div><span className="text-xs text-[var(--muted-text)] uppercase">Ingredients</span><p className="text-[var(--secondary-text)] text-sm">{f.keyIngredients}</p></div>)}
                        {f.serversWith && (<div><span className="text-xs text-[var(--muted-text)] uppercase">Served With</span><p className="text-[var(--secondary-text)] text-sm">{f.serversWith}</p></div>)}
                        <div className="flex gap-1 flex-wrap">
                          {f.glutenFree && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">GF</span>}
                          {f.coeliacSuitable && <span className="px-1 bg-[var(--primary-accent)] text-white rounded text-xs">Coeliac</span>}
                          {f.vegan && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">Vegan</span>}
                          {f.vegetarian && !f.vegan && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">Veg</span>}
                          {f.dairyFree && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">DF</span>}
                          {f.nutFree && <span className="px-1 bg-[var(--success)] text-[var(--background)] rounded text-xs">NF</span>}
                        </div>
                        <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">{f.venueAvailability}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}