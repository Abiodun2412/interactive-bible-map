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
    identificationStatus: "well-established",
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
    identificationStatus: "well-established",
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
    identificationStatus: "well-established",
  },
  {
    id: "ur",
    name: "Ur",
    modernName: "Tell el-Muqayyar",
    latitude: 30.9625,
    longitude: 46.1031,
    type: "city",
    region: "Mesopotamia",
    description:
      "Ancient Mesopotamian city associated with Abram's place of origin.",
    identificationStatus: "probable",
    identificationNote:
      "Tell el-Muqayyar in southern Iraq is a widely proposed identification of biblical Ur.",
  },
  {
    id: "haran",
    name: "Haran",
    modernName: "Harran",
    latitude: 36.865,
    longitude: 39.031,
    type: "city",
    region: "Upper Mesopotamia",
    description:
      "A major stop in Abram's migration before his journey into Canaan.",
    identificationStatus: "well-established",
  },
  {
    id: "shechem",
    name: "Shechem",
    modernName: "Tell Balata",
    latitude: 32.2135,
    longitude: 35.2818,
    type: "city",
    region: "Canaan",
    description:
      "An important biblical location associated with the patriarchs and later Israelite history.",
    identificationStatus: "well-established",
  },
  {
    id: "bethel",
    name: "Bethel",
    modernName: "Beitin",
    latitude: 31.926,
    longitude: 35.221,
    type: "city",
    region: "Canaan",
    description:
      "A significant biblical site associated with Abraham, Jacob, and later Israelite worship.",
    identificationStatus: "probable",
    identificationNote:
      "Beitin is a common identification for biblical Bethel, though the precise identification is debated.",
  },
  {
    id: "egypt",
    name: "Egypt",
    modernName: "Egypt",
    latitude: 30.0444,
    longitude: 31.2357,
    type: "region",
    region: "Egypt",
    description:
      "A major setting in biblical history, including the patriarchal narratives and the Exodus.",
    identificationStatus: "well-established",
  },
  {
    id: "hebron",
    name: "Hebron",
    modernName: "Hebron",
    latitude: 31.5326,
    longitude: 35.0998,
    type: "city",
    region: "Canaan",
    description:
      "A major patriarchal location associated especially with Abraham and his family.",
    identificationStatus: "well-established",
  },
];