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
import SearchPanel from "@/components/SearchPanel";
import Timeline from "@/components/Timeline";

import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { places } from "@/data/places";

import type { Place } from "@/types/place";

import "leaflet/dist/leaflet.css";

type MapFocusProps = {
  selectedJourneyId: string | null;
  selectedPlace: Place | null;
  selectedPersonId: string | null;
};

function MapFocus({
  selectedJourneyId,
  selectedPlace,
  selectedPersonId,
}: MapFocusProps) {
  const map = useMap();

  useEffect(() => {
    if (selectedJourneyId) {
      const selectedStops = journeyStops
        .filter((stop) => stop.journeyId === selectedJourneyId)
        .sort((a, b) => a.order - b.order);

      const positions = selectedStops
        .map((stop) =>
          places.find((place) => place.id === stop.placeId)
        )
        .filter((place): place is Place => place !== undefined)
        .map(
          (place) =>
            [place.latitude, place.longitude] as [number, number]
        );

      if (positions.length > 0) {
        map.fitBounds(positions, { padding: [50, 50] });
      }

      return;
    }

    if (selectedPersonId) {
      const personEventPlaceIds = events
        .filter((event) => event.personIds.includes(selectedPersonId))
        .map((event) => event.placeId);

      const personJourneyIds = journeys
        .filter((journey) => journey.personIds.includes(selectedPersonId))
        .map((journey) => journey.id);

      const personJourneyPlaceIds = journeyStops
        .filter((stop) => personJourneyIds.includes(stop.journeyId))
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

      if (positions.length === 1) {
        map.flyTo(positions[0], 9);
      } else if (positions.length > 1) {
        map.fitBounds(positions, { padding: [50, 50] });
      }

      return;
    }

    if (selectedPlace) {
      map.flyTo(
        [selectedPlace.latitude, selectedPlace.longitude],
        9
      );
    }
  }, [map, selectedJourneyId, selectedPersonId, selectedPlace]);

  return null;
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

  const personJourneyIds = new Set(
    selectedPersonId
      ? journeys
          .filter((journey) =>
            journey.personIds.includes(selectedPersonId)
          )
          .map((journey) => journey.id)
      : []
  );

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

    return matchesPeriod && matchesJourney && matchesPerson;
  });

  const journeyPlaceIds = new Set(
    visibleJourneys.flatMap((journey) =>
      journeyStops
        .filter((stop) => stop.journeyId === journey.id)
        .map((stop) => stop.placeId)
    )
  );

  const personEventPlaceIds = new Set(
    selectedPersonId
      ? events
          .filter((event) =>
            event.personIds.includes(selectedPersonId)
          )
          .map((event) => event.placeId)
      : []
  );

  const personJourneyPlaceIds = new Set(
    selectedPersonId
      ? journeyStops
          .filter((stop) =>
            personJourneyIds.has(stop.journeyId)
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
                event.periodId === selectedPeriodId
            );

          const matchesJourney = journeyPlaceIds.has(place.id);

          const matchesPerson =
            selectedPersonId !== null &&
            (personEventPlaceIds.has(place.id) ||
              personJourneyPlaceIds.has(place.id));

          return matchesEvent || matchesJourney || matchesPerson;
        });

  const getJourneyPositions = (journeyId: string) => {
    return journeyStops
      .filter((stop) => stop.journeyId === journeyId)
      .sort((a, b) => a.order - b.order)
      .map((stop) =>
        places.find((place) => place.id === stop.placeId)
      )
      .filter((place): place is Place => place !== undefined)
      .map(
        (place) =>
          [place.latitude, place.longitude] as [number, number]
      );
  };

  const handleSearchPlace = (placeId: string) => {
    const place = places.find((place) => place.id === placeId);

    if (!place) {
      return;
    }

    setSelectedPeriodId(null);
    setSelectedJourneyId(null);
    setSelectedPersonId(null);
    setSelectedPlace(place);
  };

  const handleSearchJourney = (journeyId: string) => {
    setSelectedPeriodId(null);
    setSelectedPersonId(null);
    setSelectedPlace(null);
    setSelectedJourneyId(journeyId);
  };

  const handleSearchPerson = (personId: string) => {
    setSelectedPeriodId(null);
    setSelectedJourneyId(null);
    setSelectedPlace(null);
    setSelectedPersonId(personId);
  };

  const handlePeriodChange = (periodId: string | null) => {
    setSelectedPeriodId(periodId);
    setSelectedJourneyId(null);
    setSelectedPersonId(null);
    setSelectedPlace(null);
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
        onChange={handlePeriodChange}
      />

      <JourneyFilter
        selectedJourneyId={selectedJourneyId}
        onChange={(journeyId) => {
          setSelectedJourneyId(journeyId);
          setSelectedPersonId(null);
          setSelectedPlace(null);
        }}
      />

      <SearchPanel
        onSelectPlace={handleSearchPlace}
        onSelectJourney={handleSearchJourney}
        onSelectPerson={handleSearchPerson}
      />

      <Timeline
        selectedPeriodId={selectedPeriodId}
        onSelectPeriod={handlePeriodChange}
      />

      <MapFocus
        selectedJourneyId={selectedJourneyId}
        selectedPlace={selectedPlace}
        selectedPersonId={selectedPersonId}
      />

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