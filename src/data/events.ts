import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: "creation",
    title: "Creation",
    description:
      "God creates the heavens and the earth and establishes the created order.",
    periodId: "patriarchs",
    personIds: [],
    datePrecision: "unknown",
    references: [
      {
        book: "Genesis",
        chapter: 1,
      },
      {
        book: "Genesis",
        chapter: 2,
      },
    ],
  },
  {
    id: "call-of-abraham",
    title: "God calls Abraham",
    description:
      "God calls Abram to leave his country and go to the land that He will show him.",
    placeId: "haran",
    periodId: "patriarchs",
    personIds: ["abraham"],
    datePrecision: "approximate",
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
    id: "covenant-with-abraham",
    title: "God makes covenant promises to Abraham",
    description:
      "God promises Abraham descendants, land, and blessing.",
    placeId: "canaan",
    periodId: "patriarchs",
    personIds: ["abraham"],
    datePrecision: "approximate",
    references: [
      {
        book: "Genesis",
        chapter: 15,
      },
      {
        book: "Genesis",
        chapter: 17,
      },
    ],
  },
  {
    id: "birth-of-isaac",
    title: "Birth of Isaac",
    description:
      "Isaac is born to Abraham and Sarah according to God's promise.",
    placeId: "beersheba",
    periodId: "patriarchs",
    personIds: ["abraham", "isaac"],
    datePrecision: "approximate",
    references: [
      {
        book: "Genesis",
        chapter: 21,
        startVerse: 1,
        endVerse: 7,
      },
    ],
  },
  {
    id: "jacob-renamed-israel",
    title: "Jacob is named Israel",
    description:
      "Jacob wrestles through the night and receives the name Israel.",
    placeId: "peniel",
    periodId: "patriarchs",
    personIds: ["jacob"],
    datePrecision: "approximate",
    references: [
      {
        book: "Genesis",
        chapter: 32,
        startVerse: 22,
        endVerse: 32,
      },
    ],
  },
  {
    id: "joseph-taken-to-egypt",
    title: "Joseph is taken to Egypt",
    description:
      "Joseph is sold and taken into Egypt, where God later raises him to a position of authority.",
    placeId: "egypt",
    periodId: "patriarchs",
    personIds: ["joseph"],
    datePrecision: "approximate",
    references: [
      {
        book: "Genesis",
        chapter: 37,
      },
      {
        book: "Genesis",
        chapter: 39,
      },
    ],
  },
  {
    id: "jacob-family-enters-egypt",
    title: "Jacob's family settles in Egypt",
    description:
      "Jacob and his household come to Egypt during the famine and settle there.",
    placeId: "egypt",
    periodId: "patriarchs",
    personIds: ["jacob", "joseph"],
    datePrecision: "approximate",
    references: [
      {
        book: "Genesis",
        chapter: 46,
      },
      {
        book: "Genesis",
        chapter: 47,
      },
    ],
  },
  {
    id: "david-captures-jerusalem",
    title: "David establishes Jerusalem as his capital",
    description:
      "David captures the stronghold of Zion and establishes Jerusalem as the political centre of the united kingdom.",
    placeId: "jerusalem",
    periodId: "united-monarchy",
    personIds: ["david"],
    approximateDate: "c. 1000 BC",
    datePrecision: "approximate",
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
    personIds: ["solomon"],
    approximateDate: "10th century BC",
    datePrecision: "range",
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
    personIds: ["jesus"],
    approximateDate: "c. 6–4 BC",
    datePrecision: "range",
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
    personIds: ["jesus"],
    datePrecision: "unknown",
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