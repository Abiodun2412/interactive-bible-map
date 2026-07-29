"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { people } from "@/data/people";
import { places } from "@/data/places";

type SearchPanelProps = {
  onSelectPlace: (placeId: string) => void;
  onSelectJourney: (journeyId: string) => void;
  onSelectPerson: (personId: string) => void;
};

type SearchResult =
  | {
      type: "place";
      id: string;
      title: string;
      subtitle: string;
    }
  | {
      type: "person";
      id: string;
      title: string;
      subtitle: string;
    }
  | {
      type: "journey";
      id: string;
      title: string;
      subtitle: string;
    }
  | {
      type: "event";
      id: string;
      title: string;
      subtitle: string;
      placeId: string;
    };

export default function SearchPanel({
  onSelectPlace,
  onSelectJourney,
  onSelectPerson,
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

  const results = useMemo<SearchResult[]>(() => {
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      return [];
    }

    const placeResults: SearchResult[] = places
      .filter(
        (place) =>
          place.name.toLowerCase().includes(trimmedQuery) ||
          place.modernName.toLowerCase().includes(trimmedQuery) ||
          place.region.toLowerCase().includes(trimmedQuery)
      )
      .map((place) => ({
        type: "place",
        id: place.id,
        title: place.name,
        subtitle: `${place.type} · ${place.region}`,
      }));

    const personResults: SearchResult[] = people
      .filter(
        (person) =>
          person.name.toLowerCase().includes(trimmedQuery) ||
          person.description.toLowerCase().includes(trimmedQuery)
      )
      .map((person) => ({
        type: "person",
        id: person.id,
        title: person.name,
        subtitle: "Person",
      }));

    const journeyResults: SearchResult[] = journeys
      .filter(
        (journey) =>
          journey.name.toLowerCase().includes(trimmedQuery) ||
          journey.description.toLowerCase().includes(trimmedQuery)
      )
      .map((journey) => ({
        type: "journey",
        id: journey.id,
        title: journey.name,
        subtitle: "Journey",
      }));

    const eventResults: SearchResult[] = events
      .filter((event) => {
        const referenceText = event.references
          .map((reference) => `${reference.book} ${reference.chapter}`)
          .join(" ")
          .toLowerCase();

        return (
          event.title.toLowerCase().includes(trimmedQuery) ||
          event.description.toLowerCase().includes(trimmedQuery) ||
          referenceText.includes(trimmedQuery)
        );
      })
      .filter(
        (event): event is typeof event & { placeId: string } =>
          event.placeId !== undefined
      )
      .map((event) => {
        const place = places.find((place) => place.id === event.placeId);

        return {
          type: "event",
          id: event.id,
          title: event.title,
          subtitle: place ? `Event · ${place.name}` : "Event",
          placeId: event.placeId,
        };
      });

    return [
      ...placeResults,
      ...personResults,
      ...journeyResults,
      ...eventResults,
    ].slice(0, 10);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === "place") {
      onSelectPlace(result.id);
    }

    if (result.type === "person") {
      onSelectPerson(result.id);
    }

    if (result.type === "journey") {
      onSelectJourney(result.id);
    }

    if (result.type === "event") {
      onSelectPlace(result.placeId);
    }

    setQuery("");
  };

  return (
    <div
      ref={panelRef}
      className="absolute left-4 top-52 z-[1000] w-72 overscroll-contain rounded-xl bg-white p-4 shadow-xl"
    >
      <label
        htmlFor="bible-search"
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        Search
      </label>

      <input
        id="bible-search"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Jerusalem, Abraham, Genesis..."
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-500"
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