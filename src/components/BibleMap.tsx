"use client";

import { useEffect, useState } from "react";

import {
    MapContainer,
    Marker,
    Polyline,
    TileLayer,
    useMap,
    ZoomControl,
} from "react-leaflet";

import MapControls from "@/components/MapControls";
import LocationPanel from "@/components/LocationPanel";
import Timeline from "@/components/Timeline";
import ActiveContext from "@/components/ActiveContext";
import MapLegend from "@/components/MapLegend";
import EventPanel from "@/components/EventPanel";
import PersonPanel from "@/components/PersonPanel";
import JourneyPanel from "@/components/JourneyPanel";
import ScripturePanel from "@/components/ScripturePanel";
import { people } from "@/data/people";
import { periods } from "@/data/periods";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { places } from "@/data/places";

import type { Place } from "@/types/place";
import type { BibleReference } from "@/types/bibleReference";

import { validateData } from "@/utils/validateData";
import { validateRelationships } from "@/utils/validateRelationships";
import { parseBibleReference } from "@/utils/parseBibleReference";

import type { SearchResult } from "@/types/searchResult";

import {
    createJourneyStopIcon,
    defaultMarkerIcon,
    selectedMarkerIcon,
} from "@/utils/mapIcons";

import "@/utils/leafletIcons";
import "leaflet/dist/leaflet.css";

import { getJourneyStyle } from "@/utils/journeyStyles";

type MapFocusProps = {
    selectedJourneyId: string | null;
    selectedPlace: Place | null;
    selectedPersonId: string | null;
    selectedPeriodId: string | null;
    focusRequest: number;
};

function MapFocus({
    selectedJourneyId,
    selectedPlace,
    selectedPersonId,
    selectedPeriodId,
    focusRequest,
}: MapFocusProps) {
    const map = useMap();

    useEffect(() => {
        const fitPositions = (positions: [number, number][]) => {
            if (positions.length === 1) {
                map.flyTo(positions[0], 9);
                return;
            }

            if (positions.length > 1) {
                map.fitBounds(positions, {
                    paddingTopLeft: [50, 50],
                    paddingBottomRight: [50, 240],
                });
            }
        };

        if (selectedJourneyId) {
            const positions = journeyStops
                .filter((stop) => stop.journeyId === selectedJourneyId)
                .sort((a, b) => a.order - b.order)
                .map((stop) =>
                    places.find((place) => place.id === stop.placeId)
                )
                .filter((place): place is Place => place !== undefined)
                .map(
                    (place) =>
                        [place.latitude, place.longitude] as [number, number]
                );

            fitPositions(positions);
            return;
        }

        if (selectedPersonId) {
            const personEventPlaceIds = events
                .filter((event) =>
                    event.personIds.includes(selectedPersonId)
                )
                .map((event) => event.placeId)
                .filter(
                    (placeId): placeId is string =>
                        placeId !== undefined
                );

            const personJourneyIds = journeys
                .filter((journey) =>
                    journey.personIds.includes(selectedPersonId)
                )
                .map((journey) => journey.id);

            const personJourneyPlaceIds = journeyStops
                .filter((stop) =>
                    personJourneyIds.includes(stop.journeyId)
                )
                .map((stop) => stop.placeId);

            const personPlaceIds = new Set([
                ...personEventPlaceIds,
                ...personJourneyPlaceIds,
            ]);

            const positions = places
                .filter((place) => personPlaceIds.has(place.id))
                .map(
                    (place) =>
                        [place.latitude, place.longitude] as [number, number]
                );

            fitPositions(positions);
            return;
        }

        if (selectedPlace) {
            map.flyTo(
                [selectedPlace.latitude, selectedPlace.longitude],
                9
            );

            return;
        }

        if (selectedPeriodId) {
            const periodEventPlaceIds = events
                .filter((event) => event.periodId === selectedPeriodId)
                .map((event) => event.placeId)
                .filter(
                    (placeId): placeId is string =>
                        placeId !== undefined
                );

            const periodJourneyIds = journeys
                .filter(
                    (journey) =>
                        journey.periodId === selectedPeriodId
                )
                .map((journey) => journey.id);

            const periodJourneyPlaceIds = journeyStops
                .filter((stop) =>
                    periodJourneyIds.includes(stop.journeyId)
                )
                .map((stop) => stop.placeId);

            const periodPlaceIds = new Set([
                ...periodEventPlaceIds,
                ...periodJourneyPlaceIds,
            ]);

            const positions = places
                .filter((place) => periodPlaceIds.has(place.id))
                .map(
                    (place) =>
                        [place.latitude, place.longitude] as [number, number]
                );

            fitPositions(positions);
            return;
        }

        const jerusalem = places.find(
            (place) => place.id === "jerusalem"
        );

        if (jerusalem) {
            map.flyTo(
                [jerusalem.latitude, jerusalem.longitude],
                7
            );
        }
    }, [
        map,
        selectedJourneyId,
        selectedPlace,
        selectedPersonId,
        selectedPeriodId,
        focusRequest,
    ]);

    return null;
}

type RefocusButtonProps = {
    onClick: () => void;
};

function RefocusButton({
    onClick,
}: RefocusButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute bottom-45 right-3 z-[1000] rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-xl transition hover:bg-gray-100 sm:bottom-20 sm:right-4 sm:px-4 sm:text-sm"
        >
            Refocus map
        </button>
    );
}

export default function BibleMap() {
    const jerusalem = places[0];

    const [selectedPlace, setSelectedPlace] =
        useState<Place | null>(null);

    const [selectedPeriodId, setSelectedPeriodId] =
        useState<string | null>(null);

    const [selectedJourneyId, setSelectedJourneyId] =
        useState<string | null>(null);

    const [selectedPersonId, setSelectedPersonId] =
        useState<string | null>(null);

    const [selectedEventId, setSelectedEventId] =
        useState<string | null>(null);

    const [selectedPersonPanelId, setSelectedPersonPanelId] =
        useState<string | null>(null);

    const [selectedJourneyPanelId, setSelectedJourneyPanelId] =
        useState<string | null>(null);

    const [selectedReference, setSelectedReference] =
        useState<BibleReference | null>(null);

    const [focusRequest, setFocusRequest] =
        useState(0);

    type PanelHistoryEntry =
        | { type: "location"; placeId: string }
        | { type: "event"; eventId: string }
        | { type: "person"; personId: string }
        | { type: "scripture"; reference: BibleReference }
        | { type: "journey"; journeyId: string };

    const [panelHistory, setPanelHistory] = useState<PanelHistoryEntry[]>([]);

    useEffect(() => {
        validateData();
        validateRelationships();
    }, []);

    const personJourneyIds = new Set(
        selectedPersonId
            ? journeys
                .filter((journey) =>
                    journey.personIds.includes(selectedPersonId)
                )
                .map((journey) => journey.id)
            : []
    );

    const selectedJourneyStops = selectedJourneyId
        ? journeyStops
            .filter(
                (stop) =>
                    stop.journeyId === selectedJourneyId
            )
            .sort((a, b) => a.order - b.order)
        : [];

    const selectedJourneyPanel =
        selectedJourneyPanelId
            ? journeys.find(
                (journey) => journey.id === selectedJourneyPanelId
            ) ?? null
            : null;

    const selectedEvent =
        selectedEventId
            ? events.find((event) => event.id === selectedEventId) ?? null
            : null;

    const selectedEventPlace =
        selectedEvent
            ? places.find((place) => place.id === selectedEvent.placeId) ?? null
            : null;

    const selectedPersonPanel =
        selectedPersonPanelId
            ? people.find(
                (person) => person.id === selectedPersonPanelId
            ) ?? null
            : null;

    const activeContext =
        selectedEvent
            ? {
                type: "Event" as const,
                label: selectedEvent.title,
            }
            : selectedPersonId
                ? {
                    type: "Person" as const,
                    label:
                        people.find((person) => person.id === selectedPersonId)?.name ??
                        null,
                }
                : selectedJourneyId
                    ? {
                        type: "Journey" as const,
                        label:
                            journeys.find((journey) => journey.id === selectedJourneyId)
                                ?.name ?? null,
                    }
                    : selectedPeriodId
                        ? {
                            type: "Period" as const,
                            label:
                                periods.find((period) => period.id === selectedPeriodId)
                                    ?.name ?? null,
                        }
                        : selectedPlace
                            ? {
                                type: "Place" as const,
                                label: selectedPlace.name,
                            }
                            : {
                                type: null,
                                label: null,
                            };

    const hasActiveJourneyContext =
        selectedJourneyId !== null ||
        selectedPersonId !== null ||
        selectedPeriodId !== null;

    const visibleJourneys = hasActiveJourneyContext
        ? journeys.filter((journey) => {
            const matchesPeriod =
                selectedPeriodId === null ||
                journey.periodId === selectedPeriodId;

            const matchesJourney =
                selectedJourneyId === null ||
                journey.id === selectedJourneyId;

            const matchesPerson =
                selectedPersonId === null ||
                journey.personIds.includes(selectedPersonId);

            return (
                matchesPeriod &&
                matchesJourney &&
                matchesPerson
            );
        })
        : [];

    const journeyPlaceIds = new Set(
        visibleJourneys.flatMap((journey) =>
            journeyStops
                .filter(
                    (stop) =>
                        stop.journeyId === journey.id
                )
                .map((stop) => stop.placeId)
        )
    );

    const personEventPlaceIds = new Set(
        selectedPersonId
            ? events
                .filter((event) =>
                    event.personIds.includes(
                        selectedPersonId
                    )
                )
                .map((event) => event.placeId)
                .filter(
                    (placeId): placeId is string =>
                        placeId !== undefined
                )
            : []
    );

    const personJourneyPlaceIds = new Set(
        selectedPersonId
            ? journeyStops
                .filter((stop) =>
                    personJourneyIds.has(
                        stop.journeyId
                    )
                )
                .map((stop) => stop.placeId)
            : []
    );

    const visiblePlaces =
        selectedPeriodId === null &&
            selectedJourneyId === null &&
            selectedPersonId === null
            ? places
            : places.filter((place) => {
                const matchesEvent =
                    selectedPeriodId !== null &&
                    events.some(
                        (event) =>
                            event.placeId === place.id &&
                            event.periodId ===
                            selectedPeriodId
                    );

                const matchesJourney =
                    journeyPlaceIds.has(place.id);

                const matchesPerson =
                    selectedPersonId !== null &&
                    (personEventPlaceIds.has(
                        place.id
                    ) ||
                        personJourneyPlaceIds.has(
                            place.id
                        ));

                return (
                    matchesEvent ||
                    matchesJourney ||
                    matchesPerson
                );
            });

    const getJourneyPositions = (
        journeyId: string
    ) => {
        return journeyStops
            .filter(
                (stop) =>
                    stop.journeyId === journeyId
            )
            .sort((a, b) => a.order - b.order)
            .map((stop) =>
                places.find(
                    (place) =>
                        place.id === stop.placeId
                )
            )
            .filter(
                (place): place is Place =>
                    place !== undefined
            )
            .map(
                (place) =>
                    [
                        place.latitude,
                        place.longitude,
                    ] as [number, number]
            );
    };

    const pushPanelHistory = (entry: PanelHistoryEntry) => {
        setPanelHistory((current) => [...current, entry]);
    };

    const handleSearchResultSelect = (result: SearchResult) => {
        setPanelHistory([]);

        setSelectedPlace(null);
        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedReference(null);

        setSelectedPeriodId(null);
        setSelectedJourneyId(null);
        setSelectedPersonId(null);

        if (result.type === "place") {
            const place = places.find(
                (place) => place.id === result.id
            );

            if (place) {
                setSelectedPlace(place);
            }

            return;
        }

        if (result.type === "person") {
            setSelectedPersonId(result.id);
            setSelectedPersonPanelId(result.id);
            return;
        }

        if (result.type === "event") {
            setSelectedEventId(result.id);
            return;
        }

        if (result.type === "journey") {
            setSelectedJourneyId(result.id);
            return;
        }

        if (result.type === "scripture") {
            const reference = parseBibleReference(result.title);

            if (!reference) {
                return;
            }

            setSelectedReference(reference);
        }
    };




    const handleLocationJourneySelect = (journeyId: string) => {
        setSelectedPeriodId(null);
        setSelectedPersonId(null);
        setSelectedPlace(null);

        setPanelHistory([]);

        setSelectedJourneyId(journeyId);
    };

    const handleLocationPersonSelect = (personId: string) => {
        if (selectedPlace) {
            pushPanelHistory({
                type: "location",
                placeId: selectedPlace.id,
            });
        }

        setSelectedPlace(null);
        setSelectedEventId(null);

        setSelectedPersonId(personId);
        setSelectedPersonPanelId(personId);
    };

    const handleLocationReferenceSelect = (
        reference: BibleReference
    ) => {
        if (selectedPlace) {
            pushPanelHistory({
                type: "location",
                placeId: selectedPlace.id,
            });
        }

        setSelectedPlace(null);
        setSelectedEventId(null);
        setSelectedPersonPanelId(null);

        setSelectedReference(reference);
    };

    const handleEventPersonSelect = (personId: string) => {
        if (selectedEventId) {
            pushPanelHistory({
                type: "event",
                eventId: selectedEventId,
            });
        }

        setSelectedEventId(null);
        setSelectedPersonPanelId(personId);
    };

    const handleEventPlaceSelect = (placeId: string) => {
        const place = places.find((place) => place.id === placeId);

        if (!place) {
            return;
        }

        if (selectedEventId) {
            pushPanelHistory({
                type: "event",
                eventId: selectedEventId,
            });
        }

        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedPlace(place);
    };

    const handleEventJourneySelect = (journeyId: string) => {
        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedPlace(null);

        setSelectedPeriodId(null);
        setSelectedPersonId(null);

        setPanelHistory([]);

        setSelectedJourneyId(journeyId);
    };

    const handleEventReferenceSelect = (reference: BibleReference) => {
        if (selectedEventId) {
            pushPanelHistory({
                type: "event",
                eventId: selectedEventId,
            });
        }

        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedPlace(null);

        setSelectedReference(reference);
    };

    const handlePersonPanelEventSelect = (eventId: string) => {
        if (selectedPersonPanelId) {
            pushPanelHistory({
                type: "person",
                personId: selectedPersonPanelId,
            });
        }

        setSelectedPersonPanelId(null);
        setSelectedEventId(eventId);
    };

    const handlePersonPanelPersonSelect = (personId: string) => {
        if (selectedPersonPanelId) {
            pushPanelHistory({
                type: "person",
                personId: selectedPersonPanelId,
            });
        }

        setSelectedEventId(null);
        setSelectedPlace(null);

        setSelectedPersonId(personId);
        setSelectedPersonPanelId(personId);
    };

    const handlePersonPanelJourneySelect = (journeyId: string) => {
        setSelectedPersonPanelId(null);
        setSelectedEventId(null);
        setSelectedPlace(null);

        setPanelHistory([]);

        setSelectedJourneyId(journeyId);
    };

    const handlePersonPanelPlaceSelect = (placeId: string) => {
        const place = places.find((place) => place.id === placeId);

        if (!place) {
            return;
        }

        if (selectedPersonPanelId) {
            pushPanelHistory({
                type: "person",
                personId: selectedPersonPanelId,
            });
        }

        setSelectedPersonPanelId(null);
        setSelectedEventId(null);
        setSelectedPlace(place);
    };

    const handleLocationEventSelect = (eventId: string) => {
        if (selectedPlace) {
            pushPanelHistory({
                type: "location",
                placeId: selectedPlace.id,
            });
        }

        setSelectedPlace(null);
        setSelectedEventId(eventId);
    };

    const handleMapPlaceSelect = (place: Place) => {
        if (selectedJourneyPanelId) {
            pushPanelHistory({
                type: "journey",
                journeyId: selectedJourneyPanelId,
            });
        }

        setSelectedJourneyPanelId(null);
        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedReference(null);

        setSelectedPlace(place);
    };

    const handleJourneyPanelPlaceSelect = (placeId: string) => {
        const place = places.find((place) => place.id === placeId);

        if (!place) {
            return;
        }

        if (selectedJourneyPanelId) {
            pushPanelHistory({
                type: "journey",
                journeyId: selectedJourneyPanelId,
            });
        }

        setSelectedJourneyPanelId(null);
        setSelectedPlace(place);
    };

    const handleJourneyPanelPersonSelect = (personId: string) => {
        if (selectedJourneyPanelId) {
            pushPanelHistory({
                type: "journey",
                journeyId: selectedJourneyPanelId,
            });
        }

        setSelectedJourneyPanelId(null);
        setSelectedPersonId(personId);
        setSelectedPersonPanelId(personId);
    };

    const handleJourneyPanelReferenceSelect = (
        reference: BibleReference
    ) => {
        if (selectedJourneyPanelId) {
            pushPanelHistory({
                type: "journey",
                journeyId: selectedJourneyPanelId,
            });
        }

        setSelectedJourneyPanelId(null);
        setSelectedReference(reference);
    };

    const handlePanelBack = () => {
        if (panelHistory.length === 0) {
            return;
        }

        const previousPanel = panelHistory[panelHistory.length - 1];

        setPanelHistory((current) => current.slice(0, -1));

        setSelectedPlace(null);
        setSelectedEventId(null);
        setSelectedPersonPanelId(null);
        setSelectedJourneyPanelId(null);
        setSelectedReference(null);

        if (previousPanel.type === "scripture") {
            setSelectedReference(previousPanel.reference);
            return;
        }
        if (previousPanel.type === "location") {
            const place = places.find(
                (place) => place.id === previousPanel.placeId
            );

            if (place) {
                setSelectedPlace(place);
            }

            return;
        }

        if (previousPanel.type === "event") {
            setSelectedEventId(previousPanel.eventId);
            return;
        }

        if (previousPanel.type === "person") {
            setSelectedPersonPanelId(previousPanel.personId);
        }

        if (previousPanel.type === "journey") {
            setSelectedJourneyPanelId(previousPanel.journeyId);
            return;
        }
    };

    const handlePeriodChange = (
        periodId: string | null
    ) => {
        setSelectedPeriodId(periodId);
        setSelectedJourneyId(null);
        setSelectedPersonId(null);
        setSelectedPlace(null);
    };

    const handleRefocus = () => {
        setFocusRequest(
            (current) => current + 1
        );
    };

    return (
        <MapContainer
            center={[
                jerusalem.latitude,
                jerusalem.longitude,
            ]}
            zoom={7}
            minZoom={3}
            zoomControl={false}
            worldCopyJump={false}
            maxBounds={[
                [5, 5],
                [50, 60],
            ]}
            maxBoundsViscosity={1}
            style={{
                height: "100vh",
                width: "100%",
            }}
        >

            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap
            />

            <ZoomControl position="bottomright" />

            <MapControls
                selectedPeriodId={selectedPeriodId}
                selectedJourneyId={selectedJourneyId}
                onPeriodChange={handlePeriodChange}
                onJourneyChange={(journeyId) => {
                    setSelectedJourneyId(journeyId);
                    setSelectedJourneyPanelId(journeyId ?? null);

                    setSelectedPersonId(null);
                    setSelectedPlace(null);
                    setSelectedEventId(null);
                    setSelectedPersonPanelId(null);
                    setSelectedReference(null);
                    setPanelHistory([]);
                }}
                onSelectResult={handleSearchResultSelect}
            />

            <ActiveContext
                label={activeContext.label}
                type={activeContext.type}
                onClear={() => {
                    setSelectedPlace(null);
                    setSelectedPersonId(null);
                    setSelectedJourneyId(null);
                    setSelectedPeriodId(null);
                    setSelectedEventId(null);
                    setSelectedPersonPanelId(null);
                }}
            />

            <MapLegend />

            <Timeline
                selectedPeriodId={
                    selectedPeriodId
                }
                onSelectPeriod={
                    handlePeriodChange
                }
            />

            <RefocusButton
                onClick={handleRefocus}
            />

            <MapFocus
                selectedJourneyId={
                    selectedJourneyId
                }
                selectedPlace={selectedPlace}
                selectedPersonId={
                    selectedPersonId
                }
                selectedPeriodId={
                    selectedPeriodId
                }
                focusRequest={focusRequest}
            />

            {visibleJourneys.map(
                (journey) => (
                    <Polyline
                        key={journey.id}
                        positions={getJourneyPositions(journey.id)}
                        pathOptions={getJourneyStyle(journey.periodId)}
                    />
                )
            )}

            {visiblePlaces.map((place) => {
                const journeyStopsAtPlace = selectedJourneyStops.filter(
                    (stop) => stop.placeId === place.id
                );

                const isSelected =
                    selectedPlace?.id === place.id;

                const icon =
                    journeyStopsAtPlace.length > 0
                        ? createJourneyStopIcon(
                            journeyStopsAtPlace.map((stop) => stop.order),
                            isSelected
                        )
                        : isSelected
                            ? selectedMarkerIcon
                            : defaultMarkerIcon;

                return (
                    <Marker
                        key={place.id}
                        position={[
                            place.latitude,
                            place.longitude,
                        ]}
                        icon={icon}
                        eventHandlers={{
                            click: () => handleMapPlaceSelect(place),
                        }}
                    />
                );
            })}

            {selectedPlace && (
                <LocationPanel
                    place={selectedPlace}
                    onClose={() => {
                        setSelectedPlace(null);
                        setPanelHistory([]);
                    }}
                    onBack={
                        panelHistory.length > 0
                            ? handlePanelBack
                            : undefined
                    }
                    onSelectJourney={handleLocationJourneySelect}
                    onSelectEvent={handleLocationEventSelect}
                    onSelectPerson={handleLocationPersonSelect}
                    onSelectReference={handleLocationReferenceSelect}
                />
            )}

            {selectedEvent && (
                <EventPanel
                    event={selectedEvent}
                    place={selectedEventPlace}
                    onClose={() => {
                        setSelectedEventId(null);
                        setPanelHistory([]);
                    }}
                    onBack={
                        panelHistory.length > 0
                            ? handlePanelBack
                            : undefined
                    }
                    onSelectPerson={handleEventPersonSelect}
                    onSelectPlace={handleEventPlaceSelect}
                    onSelectJourney={handleEventJourneySelect}
                    onSelectReference={handleEventReferenceSelect}
                />
            )}

            {selectedPersonPanel && (
                <PersonPanel
                    person={selectedPersonPanel}
                    onClose={() => {
                        setSelectedPersonPanelId(null);
                        setPanelHistory([]);
                    }}
                    onBack={
                        panelHistory.length > 0
                            ? handlePanelBack
                            : undefined
                    }
                    onSelectEvent={handlePersonPanelEventSelect}
                    onSelectJourney={handlePersonPanelJourneySelect}
                    onSelectPlace={handlePersonPanelPlaceSelect}
                    onSelectPerson={handlePersonPanelPersonSelect}
                />
            )}

            {selectedJourneyPanel && (
                <JourneyPanel
                    journey={selectedJourneyPanel}
                    onClose={() => {
                        setSelectedJourneyPanelId(null);
                        setPanelHistory([]);
                    }}
                    onBack={
                        panelHistory.length > 0
                            ? handlePanelBack
                            : undefined
                    }
                    onSelectPlace={handleJourneyPanelPlaceSelect}
                    onSelectPerson={handleJourneyPanelPersonSelect}
                    onSelectReference={handleJourneyPanelReferenceSelect}
                />
            )}

            {selectedReference && (
                <ScripturePanel
                    reference={selectedReference}
                    onClose={() => {
                        setSelectedReference(null);
                        setPanelHistory([]);
                    }}
                    onBack={
                        panelHistory.length > 0
                            ? handlePanelBack
                            : undefined
                    }
                />
            )}
        </MapContainer>
    );
}