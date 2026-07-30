"use client";

import { useEffect, useRef } from "react";

import { journeyStops } from "@/data/journeyStops";
import { people } from "@/data/people";
import { periods } from "@/data/periods";
import { places } from "@/data/places";

import ResponsivePanel from "@/components/ResponsivePanel";

import type { BibleReference } from "@/types/bibleReference";

type Journey = {
    id: string;
    name: string;
    description: string;
    periodId: string;
    personIds: string[];
};

type JourneyPanelProps = {
    journey: Journey;
    onClose: () => void;
    onBack?: () => void;
    onSelectPlace: (placeId: string) => void;
    onSelectPerson: (personId: string) => void;
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

export default function JourneyPanel({
    journey,
    onClose,
    onBack,
    onSelectPlace,
    onSelectPerson,
    onSelectReference,
}: JourneyPanelProps) {
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
        panel.addEventListener("mousedown", stopPropagation);
        panel.addEventListener("dblclick", stopPropagation);
        panel.addEventListener("touchstart", stopPropagation);
        panel.addEventListener("touchmove", stopPropagation);

        return () => {
            panel.removeEventListener("wheel", stopPropagation);
            panel.removeEventListener("mousedown", stopPropagation);
            panel.removeEventListener("dblclick", stopPropagation);
            panel.removeEventListener("touchstart", stopPropagation);
            panel.removeEventListener("touchmove", stopPropagation);
        };
    }, []);

    const period = periods.find(
        (period) => period.id === journey.periodId
    );

    const journeyPeople = people.filter((person) =>
        journey.personIds.includes(person.id)
    );

    const stops = journeyStops
        .filter((stop) => stop.journeyId === journey.id)
        .sort((a, b) => a.order - b.order);

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
                            Biblical Journey
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                            {journey.name}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-xl text-gray-500 hover:text-gray-900"
                    aria-label="Close journey panel"
                >
                    ×
                </button>
            </div>

            {period && (
                <div className="mt-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        {period.name}
                    </span>
                </div>
            )}

            <p className="mt-5 leading-7 text-gray-700">
                {journey.description}
            </p>

            {journeyPeople.length > 0 && (
                <section className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        People
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {journeyPeople.map((person) => (
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

            {stops.length > 0 && (
                <section className="mt-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Stops
                        </h3>

                        <span className="text-xs text-gray-400">
                            {stops.length}
                        </span>
                    </div>

                    <div className="space-y-3">
                        {stops.map((stop) => {
                            const place = places.find(
                                (place) => place.id === stop.placeId
                            );

                            return (
                                <div
                                    key={stop.id}
                                    className="rounded-lg border border-gray-200 p-4"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onSelectPlace(stop.placeId)
                                            }
                                            className="text-left font-semibold text-gray-900 hover:text-gray-600"
                                        >
                                            {place?.name ?? stop.placeId}
                                        </button>

                                        <span className="whitespace-nowrap rounded-full bg-gray-900 px-2 py-1 text-xs text-white">
                                            Stop {stop.order}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-gray-700">
                                        {stop.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {stop.references.map(
                                            (reference, index) => (
                                                <button
                                                    key={`${stop.id}-${index}`}
                                                    type="button"
                                                    onClick={() =>
                                                        onSelectReference(reference)
                                                    }
                                                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 transition hover:bg-gray-200"
                                                >
                                                    {formatReference(reference)}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </ResponsivePanel>
    );
}