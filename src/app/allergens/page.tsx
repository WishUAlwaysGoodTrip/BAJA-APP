"use client";

import { useState } from "react";
import { foods, dietaryFilters, allergenExclusions } from "@/data/foods";

export default function AllergensPage() {
  const [selectedType, setSelectedType] = useState<"positive" | "negative">("positive");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filters = selectedType === "positive" ? dietaryFilters : allergenExclusions;

  const filteredFoods = activeFilters.length > 0
    ? foods.filter((food) =>
        activeFilters.every((filterId) => (food as any)[filterId] === true)
      )
    : [];

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-[var(--primary-text)]">Allergen Filter</h1>
        <p className="text-[var(--muted-text)] text-sm">Find suitable options for guests</p>
      </header>

      {/* Filter Type Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setSelectedType("positive"); setActiveFilters([]); }}
          className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
            selectedType === "positive"
              ? "bg-[var(--success)] text-[var(--background)]"
              : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
          }`}
        >
          Show Safe Options
        </button>
        <button
          onClick={() => { setSelectedType("negative"); setActiveFilters([]); }}
          className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
            selectedType === "negative"
              ? "bg-[var(--danger)] text-white"
              : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
          }`}
        >
          Hide Contains
        </button>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              activeFilters.includes(filter.id)
                ? selectedType === "positive"
                  ? "bg-[var(--success)] text-[var(--background)]"
                  : "bg-[var(--danger)] text-white"
                : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {activeFilters.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-[var(--muted-text)]">Select a filter above</p>
        </div>
      ) : (
        <div>
          <p className="text-sm text-[var(--muted-text)] mb-3">
            {filteredFoods.length} suitable items
          </p>
          <div className="space-y-2">
            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className="bg-[var(--card-background)] p-3 rounded-lg border border-[var(--border)]"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[var(--primary-text)]">{food.name}</span>
                  <span className="text-xs text-[var(--muted-text)]">{food.category}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {food.glutenFree && (
                    <span className="px-1.5 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">GF</span>
                  )}
                  {food.coeliacSuitable && (
                    <span className="px-1.5 py-0.5 bg-[var(--primary-accent)] text-white rounded text-xs">Coeliac</span>
                  )}
                  {food.vegan && (
                    <span className="px-1.5 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">Vegan</span>
                  )}
                  {food.vegetarian && !food.vegan && (
                    <span className="px-1.5 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">Veg</span>
                  )}
                  {food.dairyFree && (
                    <span className="px-1.5 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">DF</span>
                  )}
                  {food.nutFree && (
                    <span className="px-1.5 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">NF</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}