"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { periods } from "@/data/periods";

type PeriodFilterProps = {
  selectedPeriodId: string | null;
  onChange: (periodId: string | null) => void;
};

export default function PeriodFilter({
  selectedPeriodId,
  onChange,
}: PeriodFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
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

  const selectedPeriod = periods.find(
    (period) => period.id === selectedPeriodId
  );

  const filteredPeriods = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return periods;
    }

    return periods.filter(
      (period) =>
        period.name.toLowerCase().includes(normalizedQuery) ||
        period.description.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  const handleSelect = (periodId: string | null) => {
    onChange(periodId);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div
      ref={panelRef}
      className="relative w-full"
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-xl bg-white p-4 text-left shadow-xl"
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">
            Historical Period
          </p>

          <p className="mt-1 truncate text-sm text-gray-500">
            {selectedPeriod
              ? selectedPeriod.name
              : "All periods"}
          </p>
        </div>

        <span
          className={`ml-4 text-sm text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-[1200] mt-2 w-full overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="border-b border-gray-200 p-3">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search periods..."
              autoFocus
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </div>

          <div className="max-h-80 overflow-y-auto overscroll-contain p-2">
            <button
              type="button"
              onClick={() => handleSelect(null)}
              className={`mb-2 w-full rounded-lg px-3 py-2 text-left text-sm ${selectedPeriodId === null
                ? "bg-gray-900 text-white"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              All periods
            </button>

            <div className="space-y-1">
              {filteredPeriods.map((period) => {
                const isSelected =
                  selectedPeriodId === period.id;

                return (
                  <button
                    key={period.id}
                    type="button"
                    onClick={() => handleSelect(period.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left ${isSelected
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    <p className="text-sm font-medium">
                      {period.name}
                    </p>

                    <p
                      className={`mt-1 line-clamp-2 text-xs ${isSelected
                        ? "text-gray-300"
                        : "text-gray-500"
                        }`}
                    >
                      {period.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}