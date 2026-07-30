"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { searchBibleMap } from "@/utils/searchBibleMap";

import type { SearchResult } from "@/types/searchResult";

type SearchPanelProps = {
  onSelectResult: (result: SearchResult) => void;
};

export default function SearchPanel({
  onSelectResult,
}: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const stopPropagation = (event: Event) => {
      event.stopPropagation();
    };

    panel.addEventListener("wheel", stopPropagation);
    panel.addEventListener("touchmove", stopPropagation);

    return () => {
      panel.removeEventListener("wheel", stopPropagation);
      panel.removeEventListener("touchmove", stopPropagation);
    };
  }, []);

  const results = useMemo<SearchResult[]>(
    () => searchBibleMap(query),
    [query]
  );

  const handleResultClick = (result: SearchResult) => {
    onSelectResult(result);
    setQuery("");
  };

  return (
    <div
      ref={panelRef}
      className="w-full overscroll-contain rounded-xl bg-white p-3 shadow-xl sm:p-4"
    >
      <label
        htmlFor="bible-search"
        className="mb-1.5 block text-xs font-semibold text-gray-900 sm:mb-2 sm:text-sm"
      >
        Search
      </label>

      <input
        id="bible-search"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Jerusalem, Abraham, Genesis..."
        className="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-900 outline-none focus:border-gray-500 sm:py-2 sm:text-sm"
      />

      {query.trim() && (
        <div className="mt-3 max-h-80 overflow-y-auto overscroll-contain">
          {results.length === 0 ? (
            <p className="py-2 text-sm text-gray-500">
              No results found.
            </p>
          ) : (
            <div className="space-y-1">
              {results.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  type="button"
                  onClick={() => handleResultClick(result)}
                  className="w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
                >
                  <p className="text-sm font-medium text-gray-900">
                    {result.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {result.subtitle}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}