"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { places } from "@/data/places";
import "leaflet/dist/leaflet.css";

export default function BibleMap() {
  const jerusalem = places[0];

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

      <Marker position={[jerusalem.latitude, jerusalem.longitude]}>
        <Popup>
          <strong>{jerusalem.name}</strong>
          <br />
          {jerusalem.description}
        </Popup>
      </Marker>
    </MapContainer>
  );
}