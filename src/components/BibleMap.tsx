"use client";

import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import LocationPanel from "@/components/LocationPanel";
import { places } from "@/data/places";
import type { Place } from "@/types/place";

import "leaflet/dist/leaflet.css";

export default function BibleMap() {
  const jerusalem = places[0];

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <MapContainer
      center={[jerusalem.latitude, jerusalem.longitude]}
      zoom={7}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.latitude, place.longitude]}
          eventHandlers={{
            click: () => setSelectedPlace(place),
          }}
        >
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.description}
          </Popup>
        </Marker>
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