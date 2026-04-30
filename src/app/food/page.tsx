"use client";

import { useState } from "react";
import { foods, foodCategories, dietaryFilters } from "@/data/foods";

export default function FoodPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<string[]>([]);

  const toggleDietaryFilter = (filterId: string) => {
    setActiveDietaryFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  let filteredFoods = selectedCategory
    ? foods.filter((f) => f.category === selectedCategory)
    : foods;

  // Apply dietary filters (show only items that meet ALL selected criteria)
  if (activeDietaryFilters.length > 0) {
    filteredFoods = filteredFoods.filter((food) =>
      activeDietaryFilters.every((filterId) => {
        const filter = dietaryFilters.find((f) => f.id === filterId);
        if (!filter) return true;
        return (food as any)[filterId] === true;
      })
    );
  }

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-[var(--primary-text)]">Food</h1>
        <p className="text-[var(--muted-text)] text-sm">Menu Items</p>
      </header>

      {/* Show Filter Toggle */}
      <button
        onClick={() => setActiveDietaryFilters(activeDietaryFilters.length > 0 ? [] : [])}
        className={`w-full mb-3 p-2 rounded-lg border text-sm text-left flex justify-between items-center ${
          activeDietaryFilters.length > 0
            ? "bg-[var(--elevated-card)] border-[var(--primary-accent)] text-[var(--primary-accent)]"
            : "bg-[var(--card-background)] border-[var(--border)] text-[var(--secondary-text)]"
        }`}
      >
        <span>🍽️ Dietary Filters</span>
        <span className="text-sm">
          {activeDietaryFilters.length > 0
            ? `${activeDietaryFilters.length} active`
            : "+"}
        </span>
      </button>

      {/* Dietary Filter Options */}
      {activeDietaryFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 p-3 bg-[var(--elevated-card)] rounded-lg">
          {dietaryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleDietaryFilter(filter.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                activeDietaryFilters.includes(filter.id)
                  ? "bg-[var(--success)] text-[var(--background)]"
                  : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

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
        {foodCategories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setSelectedCategory(cat === selectedCategory ? null : cat)
            }
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

      {/* Results count */}
      <p className="text-xs text-[var(--muted-text)] mb-3">
        {filteredFoods.length} items
        {activeDietaryFilters.length > 0 && ` (filtered)`}
      </p>

      {/* Food List - Always Expanded */}
      <div className="space-y-3">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden"
          >
            <div className="p-4">
              <h3 className="font-medium text-[var(--primary-text)]">
                {food.name}
              </h3>
              <p className="text-xs text-[var(--muted-text)] mb-3">
                {food.category} · {food.region}
              </p>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">
                    Description
                  </span>
                  <p className="text-[var(--secondary-text)] text-sm">
                    {food.description}
                  </p>
                </div>
                {food.keyIngredients && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Key Ingredients
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {food.keyIngredients}
                    </p>
                  </div>
                )}
                {food.serversWith && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Served With
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {food.serversWith}
                    </p>
                  </div>
                )}
                {food.staffNotes && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Staff Note
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {food.staffNotes}
                    </p>
                  </div>
                )}

                {/* Dietary Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {food.glutenFree && (
                    <span className="px-2 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">
                      GF
                    </span>
                  )}
                  {food.coeliacSuitable && (
                    <span className="px-2 py-0.5 bg-[var(--primary-accent)] text-white rounded text-xs">
                      Coeliac
                    </span>
                  )}
                  {food.vegan && (
                    <span className="px-2 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">
                      Vegan
                    </span>
                  )}
                  {food.vegetarian && !food.vegan && (
                    <span className="px-2 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">
                      Veg
                    </span>
                  )}
                  {food.dairyFree && (
                    <span className="px-2 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">
                      DF
                    </span>
                  )}
                  {food.nutFree && (
                    <span className="px-2 py-0.5 bg-[var(--success)] text-[var(--background)] rounded text-xs">
                      NF
                    </span>
                  )}
                  {food.containsGluten && (
                    <span className="px-2 py-0.5 bg-[var(--warning)] text-[var(--background)] rounded text-xs">
                      Gluten
                    </span>
                  )}
                  {food.containsDairy && (
                    <span className="px-2 py-0.5 bg-[var(--warning)] text-[var(--background)] rounded text-xs">
                      Dairy
                    </span>
                  )}
                  {food.containsSeafood && (
                    <span className="px-2 py-0.5 bg-[var(--warning)] text-[var(--background)] rounded text-xs">
                      Seafood
                    </span>
                  )}
                  {food.containsNuts && (
                    <span className="px-2 py-0.5 bg-[var(--danger)] text-white rounded text-xs">
                      Nuts
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">
                    {food.venueAvailability}
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