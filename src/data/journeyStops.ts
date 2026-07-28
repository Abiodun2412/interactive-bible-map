import type { JourneyStop } from "@/types/journeyStop";

export const journeyStops: JourneyStop[] = [
  {
    id: "abraham-stop-1",
    journeyId: "abraham-journey",
    placeId: "ur",
    order: 1,
    description:
      "Abram's family leaves Ur and begins the journey toward Canaan.",
    references: [
      {
        book: "Genesis",
        chapter: 11,
        startVerse: 31,
      },
    ],
  },
  {
    id: "abraham-stop-2",
    journeyId: "abraham-journey",
    placeId: "haran",
    order: 2,
    description:
      "Abram lives in Haran before being called to continue toward Canaan.",
    references: [
      {
        book: "Genesis",
        chapter: 12,
        startVerse: 1,
        endVerse: 5,
      },
    ],
  },
  {
    id: "abraham-stop-3",
    journeyId: "abraham-journey",
    placeId: "shechem",
    order: 3,
    description:
      "Abram reaches Shechem, where the Lord appears to him.",
    references: [
      {
        book: "Genesis",
        chapter: 12,
        startVerse: 6,
        endVerse: 7,
      },
    ],
  },
  {
    id: "abraham-stop-4",
    journeyId: "abraham-journey",
    placeId: "bethel",
    order: 4,
    description:
      "Abram travels toward the hill country near Bethel and builds an altar.",
    references: [
      {
        book: "Genesis",
        chapter: 12,
        startVerse: 8,
      },
    ],
  },
  {
    id: "abraham-stop-5",
    journeyId: "abraham-journey",
    placeId: "egypt",
    order: 5,
    description:
      "A famine leads Abram to travel into Egypt.",
    references: [
      {
        book: "Genesis",
        chapter: 12,
        startVerse: 10,
        endVerse: 20,
      },
    ],
  },
  {
    id: "abraham-stop-6",
    journeyId: "abraham-journey",
    placeId: "bethel",
    order: 6,
    description:
      "Abram returns from Egypt to the area near Bethel.",
    references: [
      {
        book: "Genesis",
        chapter: 13,
        startVerse: 1,
        endVerse: 4,
      },
    ],
  },
  {
    id: "abraham-stop-7",
    journeyId: "abraham-journey",
    placeId: "hebron",
    order: 7,
    description:
      "Abram settles near the great trees of Mamre at Hebron.",
    references: [
      {
        book: "Genesis",
        chapter: 13,
        startVerse: 18,
      },
    ],
  },
];