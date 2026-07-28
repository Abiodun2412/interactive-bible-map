"use client";

import { useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import LocationPanel from "@/components/LocationPanel";
import PeriodFilter from "@/components/PeriodFilter";
import { events } from "@/data/events";
import { places } from "@/data/places";
import type { Place } from "@/types/place";

import "leaflet/dist/leaflet.css";

export default function BibleMap() {
  const jerusalem = places[0];

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);

  const visiblePlaces =
    selectedPeriodId === null
      ? places
      : places.filter((place) =>
          events.some(
            (event) =>
              event.placeId === place.id &&
              event.periodId === selectedPeriodId
          )
        );

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