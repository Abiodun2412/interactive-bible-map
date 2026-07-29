"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { journeys } from "@/data/journeys";
import { periods } from "@/data/periods";

type JourneyFilterProps = {
  selectedJourneyId: string | null;
  onChange: (journeyId: string | null) => void;
};

export default function JourneyFilter({
  selectedJourneyId,
  onChange,
}: JourneyFilterProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);

  const selectedJourney = journeys.find(
    (journey) => journey.id === selectedJourneyId
  );

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

  const groupedJourneys = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return periods
      .map((period) => {
        const matchingJourneys = journeys.filter((journey) => {
          if (journey.periodId !== period.id) {
            return false;
          }

          if (!normalizedQuery) {
            return true;
          }

          return (
            journey.name.toLowerCase().includes(normalizedQuery) ||
            journey.description.toLowerCase().includes(normalizedQuery)
          );
        });

        return {
          period,
          journeys: matchingJourneys,
        };
      })
      .filter((group) => group.journeys.length > 0);
  }, [query]);

  const handleSelectJourney = (journeyId: string | null) => {
    onChange(journeyId);
    setQuery("");
    setIsOpen(false);
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
            Journey
          </p>

          <p className="mt-1 truncate text-sm text-gray-500">
            {selectedJourney
              ? selectedJourney.name
              : "All journeys"}
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
        <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="border-b border-gray-200 p-3">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search journeys..."
              autoFocus
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-500"
            />
          </div>

          <div className="max-h-80 overflow-y-auto overscroll-contain p-2">
            <button
              type="button"
              onClick={() => handleSelectJourney(null)}
              className={`mb-2 w-full rounded-lg px-3 py-2 text-left text-sm ${selectedJourneyId === null
                ? "bg-gray-900 text-white"
                : "text-gray-900 hover:bg-gray-100"
                }`}
            >
              All journeys
            </button>

            {groupedJourneys.length === 0 ? (
              <p className="px-3 py-4 text-sm text-gray-500">
                No journeys found.
              </p>
            ) : (
              groupedJourneys.map(({ period, journeys: periodJourneys }) => (
                <section key={period.id} className="mb-4">
                  <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {period.name}
                  </p>

                  <div className="space-y-1">
                    {periodJourneys.map((journey) => {
                      const isSelected =
                        selectedJourneyId === journey.id;

                      return (
                        <button
                          key={journey.id}
                          type="button"
                          onClick={() =>
                            handleSelectJourney(journey.id)
                          }
                          className={`w-full rounded-lg px-3 py-2 text-left ${isSelected
                            ? "bg-gray-900 text-white"
                            : "text-gray-900 hover:bg-gray-100"
                            }`}
                        >
                          <p className="text-sm font-medium">
                            {journey.name}
                          </p>

                          <p
                            className={`mt-1 line-clamp-2 text-xs ${isSelected
                              ? "text-gray-300"
                              : "text-gray-500"
                              }`}
                          >
                            {journey.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}