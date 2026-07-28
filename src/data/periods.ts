import type { Period } from "@/types/period";

export const periods: Period[] = [
  {
    id: "patriarchs",
    name: "Patriarchs",
    startYear: -2000,
    endYear: -1700,
    description:
      "The period associated with Abraham, Isaac, Jacob, and the early family history of Israel.",
  },
  {
    id: "united-monarchy",
    name: "United Monarchy",
    startYear: -1050,
    endYear: -930,
    description:
      "The period associated with Saul, David, and Solomon before the kingdom divided.",
  },
  {
    id: "life-of-jesus",
    name: "Life of Jesus",
    startYear: -6,
    endYear: 33,
    description:
      "The period covering the birth, ministry, death, and resurrection of Jesus.",
  },
  {
    id: "early-church",
    name: "Early Church",
    startYear: 30,
    endYear: 100,
    description:
      "The period covering Acts, the growth of the early Christian movement, and the apostolic era.",
  },
];