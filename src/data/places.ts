import type { Place } from "@/types/place";

export const places: Place[] = [
  {
    id: "jerusalem",
    name: "Jerusalem",
    modernName: "Jerusalem",
    latitude: 31.778,
    longitude: 35.235,
    type: "city",
    region: "Judea",
    description:
      "A major biblical city associated with the monarchy, the Temple, the ministry of Jesus, and the early Church.",
  },
  {
    id: "bethlehem",
    name: "Bethlehem",
    modernName: "Bethlehem",
    latitude: 31.7054,
    longitude: 35.2024,
    type: "city",
    region: "Judea",
    description:
      "A biblical town associated with Ruth and Boaz, King David, and the birth of Jesus.",
  },
  {
    id: "nazareth",
    name: "Nazareth",
    modernName: "Nazareth",
    latitude: 32.6996,
    longitude: 35.3035,
    type: "city",
    region: "Galilee",
    description:
      "The town where Jesus grew up and where much of his early life is traditionally associated.",
  },
];