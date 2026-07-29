"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { people } from "@/data/people";
import { periods } from "@/data/periods";

import type { BibleReference } from "@/types/bibleReference";
import type { Place } from "@/types/place";

type LocationPanelProps = {
  place: Place;
  onClose: () => void;
  onBack?: () => void;
  onSelectJourney: (journeyId: string) => void;
  onSelectEvent: (eventId: string) => void;
  onSelectPerson: (personId: string) => void;
};

function formatReference(reference: BibleReference) {
  const { book, chapter, startVerse, endVerse } = reference;

  if (startVerse === undefined) {
    return `${book} ${chapter}`;
  }

  if (endVerse === undefined || endVerse === startVerse) {
    return `${book} ${chapter}:${startVerse}`;
  }

  return `${book} ${chapter}:${startVerse}-${endVerse}`;
}

function formatIdentificationStatus(status: Place["identificationStatus"]) {
  switch (status) {
    case "well-established":
      return "Well established";
    case "probable":
      return "Probable identification";
    case "traditional":
      return "Traditional identification";
    case "disputed":
      return "Disputed identification";
    case "unknown":
      return "Identification unknown";
  }
}

function formatDatePrecision(
  precision:
    | "exact"
    | "approximate"
    | "range"
    | "traditional"
    | "unknown"
) {
  switch (precision) {
    case "exact":
      return "Exact date";
    case "approximate":
      return "Approximate date";
    case "range":
      return "Date range";
    case "traditional":
      return "Traditional date";
    case "unknown":
      return "Date uncertain";
  }
}

export default function LocationPanel({
  place,
  onClose,
  onBack,
  onSelectJourney,
  onSelectEvent,
  onSelectPerson,
}: LocationPanelProps) {
  const panelRef = useRef<HTMLElement | null>(null);

  const [openPeriods, setOpenPeriods] = useState<Set<string>>(
    new Set()
  );

  const [openJourneyPeriods, setOpenJourneyPeriods] = useState<Set<string>>(
    new Set()
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

  const placeEvents = events.filter(
    (event) => event.placeId === place.id
  );

  const placeJourneyStops = journeyStops
    .filter((stop) => stop.placeId === place.id)
    .sort((a, b) => a.order - b.order);

  const groupedEvents = useMemo(() => {
    return periods
      .map((period) => {
        const periodEvents = placeEvents.filter(
          (event) => event.periodId === period.id
        );

        return {
          period,
          events: periodEvents,
        };
      })
      .filter((group) => group.events.length > 0);
  }, [placeEvents]);

  const groupedJourneyStops = useMemo(() => {
    return periods
      .map((period) => {
        const periodJourneys = placeJourneyStops
          .map((stop) => {
            const journey = journeys.find(
              (journey) => journey.id === stop.journeyId
            );

            if (!journey || journey.periodId !== period.id) {
              return null;
            }

            return {
              stop,
              journey,
            };
          })
          .filter(
            (
              item
            ): item is {
              stop: (typeof placeJourneyStops)[number];
              journey: (typeof journeys)[number];
            } => item !== null
          );

        return {
          period,
          journeys: periodJourneys,
        };
      })
      .filter((group) => group.journeys.length > 0);
  }, [placeJourneyStops]);

  const toggleJourneyPeriod = (periodId: string) => {
    setOpenJourneyPeriods((current) => {
      const next = new Set(current);

      if (next.has(periodId)) {
        next.delete(periodId);
      } else {
        next.add(periodId);
      }

      return next;
    });
  };

  const togglePeriod = (periodId: string) => {
    setOpenPeriods((current) => {
      const next = new Set(current);

      if (next.has(periodId)) {
        next.delete(periodId);
      } else {
        next.add(periodId);
      }

      return next;
    });
  };

  return (
    <aside
      ref={panelRef}
      className="absolute right-4 top-4 z-[1000] max-h-[calc(100vh-2rem)] w-96 overflow-y-auto overscroll-contain rounded-xl bg-white p-6 shadow-xl"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mt-1 text-lg text-gray-500 hover:text-gray-900"
              aria-label="Go back"
            >
              ←
            </button>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Biblical Place
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              {place.name}
            </h2>

            <p className="text-sm text-gray-500">
              {place.modernName}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-xl text-gray-500 hover:text-gray-900"
          aria-label="Close location panel"
        >
          ×
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {place.type}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {place.region}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {formatIdentificationStatus(place.identificationStatus)}
        </span>
      </div>

      <p className="mb-4 leading-7 text-gray-700">
        {place.description}
      </p>

      {place.identificationNote && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Modern identification
          </p>

          <p className="mt-1 text-sm leading-6 text-gray-700">
            {place.identificationNote}
          </p>
        </div>
      )}

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Key Events
          </h3>

          <span className="text-xs text-gray-500">
            {placeEvents.length} event
            {placeEvents.length === 1 ? "" : "s"}
          </span>
        </div>

        {groupedEvents.length === 0 ? (
          <p className="text-sm text-gray-500">
            No events added yet.
          </p>
        ) : (
          <div className="space-y-3">
            {groupedEvents.map(({ period, events: periodEvents }) => {
              const isOpen = openPeriods.has(period.id);

              return (
                <div
                  key={period.id}
                  className="overflow-hidden rounded-lg border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => togglePeriod(period.id)}
                    className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {period.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {periodEvents.length} event
                        {periodEvents.length === 1 ? "" : "s"}
                      </p>
                    </div>

                    <span
                      className={`text-sm text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-3 p-3">
                      {periodEvents.map((event) => {
                        const eventPeople = people.filter((person) =>
                          event.personIds.includes(person.id)
                        );

                        return (
                          <div
                            key={event.id}
                            className="w-full rounded-lg border border-gray-200 p-4 text-left transition hover:border-gray-400 hover:bg-gray-50"
                          >

                            <h4 className="font-semibold text-gray-900">
                              {event.title}
                            </h4>

                            <div className="mt-2 flex flex-wrap gap-2">
                              {event.approximateDate && (
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {event.approximateDate}
                                </span>
                              )}

                              {event.datePrecision && (
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {formatDatePrecision(
                                    event.datePrecision
                                  )}
                                </span>
                              )}
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-700">
                              {event.description}
                            </p>

                            {eventPeople.length > 0 && (
                              <div className="mt-3">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                  People
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {eventPeople.map((person) => (
                                    <button
                                      key={person.id}
                                      type="button"
                                      onClick={(clickEvent) => {
                                        onSelectPerson(person.id);
                                      }}
                                      className="rounded-full bg-gray-900 px-2 py-1 text-xs text-white transition hover:bg-gray-700"
                                    >
                                      {person.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="mt-3 flex flex-wrap gap-2">
                              {event.references.map(
                                (reference, index) => (
                                  <span
                                    key={`${event.id}-${index}`}
                                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                                  >
                                    {formatReference(reference)}
                                  </span>
                                )
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => onSelectEvent(event.id)}
                              className="mt-3 text-xs font-semibold text-gray-500 transition hover:text-gray-900"
                            >
                              Explore event →
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {groupedJourneyStops.length > 0 && (
        <section className="mt-6 border-t border-gray-200 pt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Journeys
            </h3>

            <span className="text-xs text-gray-500">
              {placeJourneyStops.length} stop
              {placeJourneyStops.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="space-y-3">
            {groupedJourneyStops.map(({ period, journeys: periodJourneys }) => {
              const isOpen = openJourneyPeriods.has(period.id);

              return (
                <div
                  key={period.id}
                  className="overflow-hidden rounded-lg border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleJourneyPeriod(period.id)}
                    className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {period.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {periodJourneys.length} journey
                        {periodJourneys.length === 1 ? "" : "s"}
                      </p>
                    </div>

                    <span
                      className={`text-sm text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-3 p-3">
                      {periodJourneys.map(({ stop, journey }) => (
                        <button
                          key={stop.id}
                          type="button"
                          onClick={() => onSelectJourney(journey.id)}
                          className="w-full rounded-lg border border-gray-200 p-4 text-left transition hover:border-gray-400 hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="font-semibold text-gray-900">
                              {journey.name}
                            </h4>

                            <span className="whitespace-nowrap rounded-full bg-gray-900 px-2 py-1 text-xs text-white">
                              Stop {stop.order}
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-6 text-gray-700">
                            {stop.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {stop.references.map((reference, index) => (
                              <span
                                key={`${stop.id}-${index}`}
                                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                              >
                                {formatReference(reference)}
                              </span>
                            ))}
                          </div>

                          <p className="mt-3 text-xs font-semibold text-gray-500">
                            Explore journey →
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </aside>
  );
}