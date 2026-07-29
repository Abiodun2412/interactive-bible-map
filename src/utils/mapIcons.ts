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

export function createJourneyStopIcon(
    orders: number[],
    isSelected = false
) {
    const label = orders.join(" / ");

    const width =
        label.length <= 2
            ? 30
            : label.length <= 5
                ? 42
                : 56;

    return L.divIcon({
        className: "",
        html: `
      <div
        style="
          min-width: ${width}px;
          height: 30px;
          padding: 0 8px;
          border-radius: 9999px;
          background: ${isSelected ? "#111827" : "#ffffff"};
          color: ${isSelected ? "#ffffff" : "#111827"};
          border: 3px solid #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "
      >
        ${label}
      </div>
    `,
        iconSize: [width, 30],
        iconAnchor: [width / 2, 15],
    });
}