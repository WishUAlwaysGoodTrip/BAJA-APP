"use client";

import { useState } from "react";
import { wines, wineTypes } from "@/data/wines";

export default function WinePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredWines = selectedType
    ? wines.filter((w) => w.type === selectedType)
    : wines;

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-[var(--primary-text)]">Wine</h1>
        <p className="text-[var(--muted-text)] text-sm">Red, White & Rose</p>
      </header>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSelectedType(null)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
            selectedType === null
              ? "bg-[var(--primary-accent)] text-white"
              : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
          }`}
        >
          All
        </button>
        {wineTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type === selectedType ? null : type)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedType === type
                ? "bg-[var(--primary-accent)] text-white"
                : "bg-[var(--card-background)] text-[var(--secondary-text)] border border-[var(--border)]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Wine List - Always Expanded */}
      <div className="space-y-3">
        {filteredWines.map((wine) => (
          <div
            key={wine.id}
            className="bg-[var(--card-background)] rounded-lg border border-[var(--border)] overflow-hidden"
          >
            <div className="p-4">
              <h3 className="font-medium text-[var(--primary-text)]">
                {wine.name}
              </h3>
              <p className="text-xs text-[var(--muted-text)] mb-3">
                {wine.varietal} · {wine.region}
              </p>

              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">Body</span>
                    <p className="text-[var(--secondary-text)] text-sm">{wine.body}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">Acidity</span>
                    <p className="text-[var(--secondary-text)] text-sm">{wine.acidity}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">Tannin</span>
                    <p className="text-[var(--secondary-text)] text-sm">{wine.tannin}</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">Smell</span>
                  <p className="text-[var(--secondary-text)] text-sm">{wine.smell}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">Taste</span>
                  <p className="text-[var(--secondary-text)] text-sm">{wine.taste}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted-text)] uppercase">
                    Food Pairing
                  </span>
                  <p className="text-[var(--secondary-text)] text-sm">
                    {wine.foodPairing}
                  </p>
                </div>
                {wine.staffNotes && (
                  <div>
                    <span className="text-xs text-[var(--muted-text)] uppercase">
                      Staff Note
                    </span>
                    <p className="text-[var(--secondary-text)] text-sm">
                      {wine.staffNotes}
                    </p>
                  </div>
                )}
                <div className="pt-2">
                  <span className="inline-block px-2 py-0.5 bg-[var(--elevated-card)] rounded text-xs text-[var(--muted-text)]">
                    {wine.availability}
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