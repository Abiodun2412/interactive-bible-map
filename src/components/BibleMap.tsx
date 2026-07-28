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

import JourneyFilter from "@/components/JourneyFilter";
import LocationPanel from "@/components/LocationPanel";
import PeriodFilter from "@/components/PeriodFilter";
import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { places } from "@/data/places";
import type { Place } from "@/types/place";

import "leaflet/dist/leaflet.css";

type MapFocusProps = {
  selectedJourneyId: string | null;
};

function MapFocus({ selectedJourneyId }: MapFocusProps) {
  const map = useMap();

  useEffect(() => {
    if (!selectedJourneyId) {
      return;
    }

    const selectedStops = journeyStops
      .filter((stop) => stop.journeyId === selectedJourneyId)
      .sort((a, b) => a.order - b.order);

    const positions = selectedStops
      .map((stop) => places.find((place) => place.id === stop.placeId))
      .filter((place): place is Place => place !== undefined)
      .map(
        (place) =>
          [place.latitude, place.longitude] as [number, number]
      );

    if (positions.length > 0) {
      map.fitBounds(positions, {
        padding: [50, 50],
      });
    }
  }, [map, selectedJourneyId]);

  return null;
}

export default function BibleMap() {
  const jerusalem = places[0];

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [selectedJourneyId, setSelectedJourneyId] = useState<string | null>(null);

  const visibleJourneys = journeys.filter((journey) => {
    const matchesPeriod =
      selectedPeriodId === null ||
      journey.periodId === selectedPeriodId;

    const matchesJourney =
      selectedJourneyId === null ||
      journey.id === selectedJourneyId;

    return matchesPeriod && matchesJourney;
  });

  const journeyPlaceIds = new Set(
    visibleJourneys.flatMap((journey) =>
      journeyStops
        .filter((stop) => stop.journeyId === journey.id)
        .map((stop) => stop.placeId)
    )
  );

  const visiblePlaces =
    selectedPeriodId === null && selectedJourneyId === null
      ? places
      : places.filter((place) => {
          const matchesEvent =
            selectedPeriodId !== null &&
            events.some(
              (event) =>
                event.placeId === place.id &&
                event.periodId === selectedPeriodId
            );

          const matchesJourney = journeyPlaceIds.has(place.id);

          return matchesEvent || matchesJourney;
        });

  const getJourneyPositions = (journeyId: string) => {
    return journeyStops
      .filter((stop) => stop.journeyId === journeyId)
      .sort((a, b) => a.order - b.order)
      .map((stop) => places.find((place) => place.id === stop.placeId))
      .filter((place): place is Place => place !== undefined)
      .map(
        (place) =>
          [place.latitude, place.longitude] as [number, number]
      );
  };

  return (
    <MapContainer
      center={[jerusalem.latitude, jerusalem.longitude]}
      zoom={7}
      zoomControl={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoomControl position="bottomright" />

      <PeriodFilter
        selectedPeriodId={selectedPeriodId}
        onChange={(periodId) => {
          setSelectedPeriodId(periodId);
          setSelectedPlace(null);
        }}
      />

      <JourneyFilter
        selectedJourneyId={selectedJourneyId}
        onChange={(journeyId) => {
          setSelectedJourneyId(journeyId);
          setSelectedPlace(null);
        }}
      />

      <MapFocus selectedJourneyId={selectedJourneyId} />

      {visibleJourneys.map((journey) => (
        <Polyline
          key={journey.id}
          positions={getJourneyPositions(journey.id)}
        />
      ))}

      {visiblePlaces.map((place) => (
        <Marker
          key={place.id}
          position={[place.latitude, place.longitude]}
          eventHandlers={{
            click: () => setSelectedPlace(place),
          }}
        />
      ))}

      {selectedPlace && (
        <LocationPanel
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </MapContainer>
  );
}