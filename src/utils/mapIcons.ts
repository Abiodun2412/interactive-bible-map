import L from "leaflet";

export const defaultMarkerIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const selectedMarkerIcon = L.divIcon({
  className: "",
  html: `
    <div
      style="
        width: 24px;
        height: 24px;
        border-radius: 9999px;
        background: #111827;
        border: 4px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      "
    ></div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});