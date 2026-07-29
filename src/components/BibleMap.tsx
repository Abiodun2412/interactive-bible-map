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
import { people } from "@/data/people";
import { periods } from "@/data/periods";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { places } from "@/data/places";

import type { Place } from "@/types/place";

import { validateData } from "@/utils/validateData";

import {
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
            className="absolute bottom-20 right-4 z-[1000] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-xl transition hover:bg-gray-100"
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

    const [focusRequest, setFocusRequest] =
        useState(0);

    useEffect(() => {
        validateData();
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

    const activeContextLabel =
        selectedPersonId
            ? people.find((person) => person.id === selectedPersonId)?.name ?? null
            : selectedJourneyId
                ? journeys.find((journey) => journey.id === selectedJourneyId)?.name ?? null
                : selectedPeriodId
                    ? periods.find((period) => period.id === selectedPeriodId)?.name ?? null
                    : selectedPlace
                        ? selectedPlace.name
                        : null;

    const visibleJourneys = journeys.filter((journey) => {
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
    });

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

    const handleSearchPlace = (
        placeId: string
    ) => {
        const place = places.find(
            (place) => place.id === placeId
        );

        if (!place) {
            return;
        }

        setSelectedPeriodId(null);
        setSelectedJourneyId(null);
        setSelectedPersonId(null);
        setSelectedPlace(place);
    };

    const handleSearchJourney = (
        journeyId: string
    ) => {
        setSelectedPeriodId(null);
        setSelectedPersonId(null);
        setSelectedPlace(null);
        setSelectedJourneyId(journeyId);
    };

    const handleSearchPerson = (
        personId: string
    ) => {
        setSelectedPeriodId(null);
        setSelectedJourneyId(null);
        setSelectedPlace(null);
        setSelectedPersonId(personId);
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
            zoomControl={false}
            style={{
                height: "100vh",
                width: "100%",
            }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZoomControl position="bottomright" />

            <MapControls
                selectedPeriodId={selectedPeriodId}
                selectedJourneyId={selectedJourneyId}
                onPeriodChange={handlePeriodChange}
                onJourneyChange={(journeyId) => {
                    setSelectedJourneyId(journeyId);
                    setSelectedPersonId(null);
                    setSelectedPlace(null);
                }}
                onSelectPlace={handleSearchPlace}
                onSelectJourney={handleSearchJourney}
                onSelectPerson={handleSearchPerson}
            />

            <ActiveContext
                label={activeContextLabel}
                onClear={() => {
                    setSelectedPlace(null);
                    setSelectedPersonId(null);
                    setSelectedJourneyId(null);
                    setSelectedPeriodId(null);
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

            {visiblePlaces.map((place) => (
                <Marker
                    key={place.id}
                    position={[
                        place.latitude,
                        place.longitude,
                    ]}
                    icon={
                        selectedPlace?.id === place.id
                            ? selectedMarkerIcon
                            : defaultMarkerIcon
                    }
                    eventHandlers={{
                        click: () => setSelectedPlace(place),
                    }}
                />
            ))}

            {selectedPlace && (
                <LocationPanel
                    place={selectedPlace}
                    onClose={() =>
                        setSelectedPlace(null)
                    }
                />
            )}
        </MapContainer>
    );
}