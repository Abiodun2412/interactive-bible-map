"use client";

import { useEffect, useRef } from "react";

import { people } from "@/data/people";
import { periods } from "@/data/periods";

import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";

import ResponsivePanel from "@/components/ResponsivePanel";

import type { BibleReference } from "@/types/bibleReference";
import type { Event as BibleEvent } from "@/types/event";
import type { Place } from "@/types/place";

type EventPanelProps = {
    event: BibleEvent;
    place: Place | null;
    onClose: () => void;
    onBack?: () => void;
    onSelectPerson: (personId: string) => void;
    onSelectPlace: (placeId: string) => void;
    onSelectJourney: (journeyId: string) => void;
    onSelectReference: (reference: BibleReference) => void;
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
            return "Exact";
        case "approximate":
            return "Approximate";
        case "range":
            return "Range";
        case "traditional":
            return "Traditional";
        case "unknown":
            return "Uncertain";
    }
}

export default function EventPanel({
    event,
    place,
    onClose,
    onBack,
    onSelectPerson,
    onSelectPlace,
    onSelectJourney,
    onSelectReference,
}: EventPanelProps) {

    const panelRef = useRef<HTMLElement | null>(null);

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

    const period = periods.find(
        (period) => period.id === event.periodId
    );

    const eventPeople = people.filter((person) =>
        event.personIds.includes(person.id)
    );

    const relatedJourneys = journeys.filter((journey) => {
        const journeyHasPlace = journeyStops.some(
            (stop) =>
                stop.journeyId === journey.id &&
                stop.placeId === event.placeId
        );

        const journeySharesPerson = journey.personIds.some((personId) =>
            event.personIds.includes(personId)
        );

        return journeyHasPlace && journeySharesPerson;
    });

    return (
        <ResponsivePanel panelRef={panelRef}>
            <div className="flex items-start justify-between gap-4">
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
                            Biblical Event
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                            {event.title}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-xl text-gray-500 hover:text-gray-900"
                    aria-label="Close event panel"
                >
                    ×
                </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {period && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        {period.name}
                    </span>
                )}

                {place && (
                    <button
                        type="button"
                        onClick={() => onSelectPlace(place.id)}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition hover:bg-gray-200"
                    >
                        {place.name}
                    </button>
                )}

                {event.approximateDate && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        {event.approximateDate}
                    </span>
                )}

                {event.approximateDate && event.datePrecision && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        {formatDatePrecision(event.datePrecision)}
                    </span>
                )}
            </div>

            <p className="mt-5 leading-7 text-gray-700">
                {event.description}
            </p>

            {eventPeople.length > 0 && (
                <section className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        People
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {eventPeople.map((person) => (
                            <button
                                key={person.id}
                                type="button"
                                onClick={() => onSelectPerson(person.id)}
                                className="rounded-full bg-gray-900 px-3 py-1 text-sm text-white transition hover:bg-gray-700"
                            >
                                {person.name}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {relatedJourneys.length > 0 && (
                <section className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Related Journeys
                    </h3>

                    <div className="mt-3 space-y-2">
                        {relatedJourneys.map((journey) => (
                            <button
                                key={journey.id}
                                type="button"
                                onClick={() => onSelectJourney(journey.id)}
                                className="w-full rounded-lg border border-gray-200 p-3 text-left transition hover:border-gray-400 hover:bg-gray-50"
                            >
                                <p className="text-sm font-semibold text-gray-900">
                                    {journey.name}
                                </p>

                                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                                    {journey.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            <section className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Scripture
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                    {event.references.map((reference, index) => (
                        <button
                            key={`${event.id}-${index}`}
                            type="button"
                            onClick={() => onSelectReference(reference)}
                            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
                        >
                            {formatReference(reference)}
                        </button>
                    ))}
                </div>
            </section>
        </ResponsivePanel>
    );
}