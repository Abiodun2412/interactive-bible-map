import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: "david-captures-jerusalem",
    title: "David establishes Jerusalem as his capital",
    description:
      "David captures the stronghold of Zion and establishes Jerusalem as the political centre of the united kingdom.",
    placeId: "jerusalem",
    periodId: "united-monarchy",
    approximateDate: "c. 1000 BC",
    references: [
      {
        book: "2 Samuel",
        chapter: 5,
        startVerse: 6,
        endVerse: 10,
      },
    ],
  },
  {
    id: "solomon-builds-temple",
    title: "Solomon builds the Temple",
    description:
      "Solomon constructs the first Temple in Jerusalem as the central place of worship for Israel.",
    placeId: "jerusalem",
    periodId: "united-monarchy",
    approximateDate: "10th century BC",
    references: [
      {
        book: "1 Kings",
        chapter: 6,
      },
    ],
  },
  {
    id: "birth-of-jesus",
    title: "Birth of Jesus",
    description:
      "Jesus is born in Bethlehem during the reign of Herod the Great.",
    placeId: "bethlehem",
    periodId: "life-of-jesus",
    approximateDate: "c. 6–4 BC",
    references: [
      {
        book: "Matthew",
        chapter: 2,
        startVerse: 1,
        endVerse: 12,
      },
      {
        book: "Luke",
        chapter: 2,
        startVerse: 1,
        endVerse: 20,
      },
    ],
  },
  {
    id: "jesus-grows-up-nazareth",
    title: "Jesus grows up in Nazareth",
    description:
      "After returning from Egypt, Jesus is raised in Nazareth in Galilee.",
    placeId: "nazareth",
    periodId: "life-of-jesus",
    references: [
      {
        book: "Matthew",
        chapter: 2,
        startVerse: 19,
        endVerse: 23,
      },
      {
        book: "Luke",
        chapter: 2,
        startVerse: 39,
        endVerse: 40,
      },
    ],
  },
];