"use client";

import { useEffect, useRef, useState } from "react";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { people } from "@/data/people";
import { periods } from "@/data/periods";
import { places } from "@/data/places";
import { personRelationships } from "@/data/personRelationships";

import ResponsivePanel from "@/components/ResponsivePanel";

type Person = (typeof people)[number];

type PersonPanelProps = {
    person: Person;
    onClose: () => void;
    onBack?: () => void;
    onSelectEvent: (eventId: string) => void;
    onSelectJourney: (journeyId: string) => void;
    onSelectPlace: (placeId: string) => void;
    onSelectPerson: (personId: string) => void;
};

function formatRelationshipType(type: string) {
    switch (type) {
        case "parent":
            return "Parent";
        case "child":
            return "Child";
        case "spouse":
            return "Spouse";
        case "sibling":
            return "Sibling";
        case "mentor":
            return "Mentor";
        case "disciple":
            return "Disciple";
        case "king":
            return "King";
        case "prophet":
            return "Prophet";
        case "friend":
            return "Friend";
        case "opponent":
            return "Opponent";
        case "associate":
            return "Associate";
        default:
            return type;
    }
}

export default function PersonPanel({
    person,
    onClose,
    onBack,
    onSelectEvent,
    onSelectJourney,
    onSelectPlace,
    onSelectPerson,
}: PersonPanelProps) {
    const panelRef = useRef<HTMLElement | null>(null);

    const [openSections, setOpenSections] = useState<Set<string>>(
        new Set(["events"])
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

    const personEvents = events.filter((event) =>
        event.personIds.includes(person.id)
    );

    const personJourneys = journeys.filter((journey) =>
        journey.personIds.includes(person.id)
    );

    const personPlaceIds = new Set<string>();

    personEvents.forEach((event) => {
        if (event.placeId) {
            personPlaceIds.add(event.placeId);
        }
    });

    personJourneys.forEach((journey) => {
        journeyStops
            .filter((stop) => stop.journeyId === journey.id)
            .forEach((stop) => {
                personPlaceIds.add(stop.placeId);
            });
    });

    const personPlaces = places.filter((place) =>
        personPlaceIds.has(place.id)
    );

    const personPeriodIds = new Set<string>();

    personEvents.forEach((event) => {
        personPeriodIds.add(event.periodId);
    });

    personJourneys.forEach((journey) => {
        personPeriodIds.add(journey.periodId);
    });

    const personPeriods = periods.filter((period) =>
        personPeriodIds.has(period.id)
    );

    const relationships = personRelationships
        .filter((relationship) => relationship.personId === person.id)
        .map((relationship) => {
            const relatedPerson = people.find(
                (candidate) =>
                    candidate.id === relationship.relatedPersonId
            );

            if (!relatedPerson) {
                return null;
            }

            return {
                relationship,
                relatedPerson,
            };
        })
        .filter(
            (
                item
            ): item is {
                relationship: (typeof personRelationships)[number];
                relatedPerson: (typeof people)[number];
            } => item !== null
        );

    const groupedRelationships = relationships.reduce(
        (groups, item) => {
            const type = item.relationship.type;

            if (!groups[type]) {
                groups[type] = [];
            }

            groups[type].push(item);

            return groups;
        },
        {} as Record<
            string,
            typeof relationships
        >
    );

    const relationshipTypes = Object.keys(groupedRelationships);

    const toggleSection = (section: string) => {
        setOpenSections((current) => {
            const next = new Set(current);

            if (next.has(section)) {
                next.delete(section);
            } else {
                next.add(section);
            }

            return next;
        });
    };

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
                            Biblical Person
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                            {person.name}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-xl text-gray-500 hover:text-gray-900"
                    aria-label="Close person panel"
                >
                    ×
                </button>
            </div>

            <p className="mt-5 leading-7 text-gray-700">
                {person.description}
            </p>

            {personPeriods.length > 0 && (
                <section className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Historical Periods
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {personPeriods.map((period) => (
                            <span
                                key={period.id}
                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                            >
                                {period.name}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {relationships.length > 0 && (
                <section className="mt-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Relationships
                        </h3>

                        <span className="text-xs text-gray-400">
                            {relationships.length}
                        </span>
                    </div>

                    <div className="space-y-2">
                        {relationshipTypes.map((type) => {
                            const items = groupedRelationships[type];
                            const sectionKey = `relationship-${type}`;
                            const isOpen = openSections.has(sectionKey);

                            return (
                                <div
                                    key={type}
                                    className="overflow-hidden rounded-lg border border-gray-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(sectionKey)}
                                        className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {formatRelationshipType(type)}
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                {items.length} relationship
                                                {items.length === 1 ? "" : "s"}
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
                                        <div className="space-y-2 p-3">
                                            {items.map(
                                                ({ relationship, relatedPerson }) => (
                                                    <button
                                                        key={relationship.id}
                                                        type="button"
                                                        onClick={() =>
                                                            onSelectPerson(relatedPerson.id)
                                                        }
                                                        className="w-full rounded-lg border border-gray-200 p-3 text-left transition hover:border-gray-400 hover:bg-gray-50"
                                                    >
                                                        <p className="text-sm font-semibold text-gray-900">
                                                            {relatedPerson.name}
                                                        </p>

                                                        {relationship.description && (
                                                            <p className="mt-2 text-xs leading-5 text-gray-500">
                                                                {relationship.description}
                                                            </p>
                                                        )}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {personEvents.length > 0 && (
                <section className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                    <button
                        type="button"
                        onClick={() => toggleSection("events")}
                        className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                                Events
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {personEvents.length} event
                                {personEvents.length === 1 ? "" : "s"}
                            </p>
                        </div>

                        <span
                            className={`text-sm text-gray-500 transition-transform ${openSections.has("events") ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {openSections.has("events") && (
                        <div className="space-y-2 p-3">
                            {personEvents.map((event) => (
                                <button
                                    key={event.id}
                                    type="button"
                                    onClick={() => onSelectEvent(event.id)}
                                    className="w-full rounded-lg border border-gray-200 p-3 text-left transition hover:border-gray-400 hover:bg-gray-50"
                                >
                                    <p className="text-sm font-semibold text-gray-900">
                                        {event.title}
                                    </p>

                                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                                        {event.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {personJourneys.length > 0 && (
                <section className="mt-3 overflow-hidden rounded-lg border border-gray-200">
                    <button
                        type="button"
                        onClick={() => toggleSection("journeys")}
                        className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                                Journeys
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {personJourneys.length} journey
                                {personJourneys.length === 1 ? "" : "s"}
                            </p>
                        </div>

                        <span
                            className={`text-sm text-gray-500 transition-transform ${openSections.has("journeys") ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {openSections.has("journeys") && (
                        <div className="space-y-2 p-3">
                            {personJourneys.map((journey) => (
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
                    )}
                </section>
            )}

            {personPlaces.length > 0 && (
                <section className="mt-3 overflow-hidden rounded-lg border border-gray-200">
                    <button
                        type="button"
                        onClick={() => toggleSection("places")}
                        className="flex w-full items-center justify-between gap-4 bg-gray-50 px-4 py-3 text-left hover:bg-gray-100"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                                Places
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {personPlaces.length} place
                                {personPlaces.length === 1 ? "" : "s"}
                            </p>
                        </div>

                        <span
                            className={`text-sm text-gray-500 transition-transform ${openSections.has("places") ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {openSections.has("places") && (
                        <div className="flex flex-wrap gap-2 p-3">
                            {personPlaces.map((place) => (
                                <button
                                    key={place.id}
                                    type="button"
                                    onClick={() => onSelectPlace(place.id)}
                                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
                                >
                                    {place.name}
                                </button>
                            ))}
                        </div>
                    )}
                </section>
            )}
        </ResponsivePanel>
    );
}