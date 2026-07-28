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

    {
        id: "jacob-stop-1",
        journeyId: "jacob-journey",
        placeId: "beersheba",
        order: 1,
        description:
            "Jacob leaves Beersheba and begins his journey toward Haran.",
        references: [
            {
                book: "Genesis",
                chapter: 28,
                startVerse: 10,
            },
        ],
    },
    {
        id: "jacob-stop-2",
        journeyId: "jacob-journey",
        placeId: "bethel",
        order: 2,
        description:
            "Jacob dreams of the stairway reaching to heaven and names the place Bethel.",
        references: [
            {
                book: "Genesis",
                chapter: 28,
                startVerse: 11,
                endVerse: 22,
            },
        ],
    },
    {
        id: "jacob-stop-3",
        journeyId: "jacob-journey",
        placeId: "haran",
        order: 3,
        description:
            "Jacob reaches the region of Haran, where he lives and serves Laban.",
        references: [
            {
                book: "Genesis",
                chapter: 29,
                startVerse: 1,
            },
        ],
    },
    {
        id: "jacob-stop-4",
        journeyId: "jacob-journey",
        placeId: "peniel",
        order: 4,
        description:
            "On his return, Jacob wrestles through the night and receives the name Israel.",
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
        id: "jacob-stop-5",
        journeyId: "jacob-journey",
        placeId: "shechem",
        order: 5,
        description:
            "Jacob returns to Canaan and settles for a time near Shechem.",
        references: [
            {
                book: "Genesis",
                chapter: 33,
                startVerse: 18,
                endVerse: 20,
            },
        ],
    },
    {
        id: "jacob-stop-6",
        journeyId: "jacob-journey",
        placeId: "bethel",
        order: 6,
        description:
            "Jacob returns to Bethel, where God reaffirms his name Israel and the covenant promises.",
        references: [
            {
                book: "Genesis",
                chapter: 35,
                startVerse: 1,
                endVerse: 15,
            },
        ],
    },
    {
        id: "jacob-stop-7",
        journeyId: "jacob-journey",
        placeId: "hebron",
        order: 7,
        description:
            "Jacob comes to his father Isaac at Hebron.",
        references: [
            {
                book: "Genesis",
                chapter: 35,
                startVerse: 27,
            },
        ],
    },

    {
        id: "joseph-stop-1",
        journeyId: "joseph-egypt-journey",
        placeId: "canaan",
        order: 1,
        description:
            "Joseph is taken from the land of Canaan after being sold by his brothers.",
        references: [
            {
                book: "Genesis",
                chapter: 37,
            },
        ],
    },
    {
        id: "joseph-stop-2",
        journeyId: "joseph-egypt-journey",
        placeId: "egypt",
        order: 2,
        description:
            "Joseph is brought into Egypt, where he serves in Potiphar's house before later rising to authority.",
        references: [
            {
                book: "Genesis",
                chapter: 39,
                startVerse: 1,
            },
        ],
    },
    {
        id: "israel-egypt-stop-1",
        journeyId: "israel-to-egypt",
        placeId: "canaan",
        order: 1,
        description:
            "Jacob and his household prepare to leave the land of Canaan and go to Joseph in Egypt.",
        references: [
            {
                book: "Genesis",
                chapter: 45,
                startVerse: 25,
                endVerse: 28,
            },
        ],
    },
    {
        id: "israel-egypt-stop-2",
        journeyId: "israel-to-egypt",
        placeId: "beersheba",
        order: 2,
        description:
            "Israel comes to Beersheba and offers sacrifices to God. God speaks to him and tells him not to be afraid to go down to Egypt.",
        references: [
            {
                book: "Genesis",
                chapter: 46,
                startVerse: 1,
                endVerse: 4,
            },
        ],
    },
    {
        id: "israel-egypt-stop-3",
        journeyId: "israel-to-egypt",
        placeId: "egypt",
        order: 3,
        description:
            "Jacob and his household enter Egypt, where Jacob is reunited with Joseph.",
        references: [
            {
                book: "Genesis",
                chapter: 46,
                startVerse: 5,
                endVerse: 30,
            },
        ],
    },
    {
        id: "exodus-stop-1",
        journeyId: "exodus-to-sinai",
        placeId: "goshen",
        order: 1,
        description:
            "Israel prepares to leave the region of Egypt where they had been living.",
        references: [
            {
                book: "Exodus",
                chapter: 12,
                startVerse: 1,
                endVerse: 32,
            },
        ],
    },
    {
        id: "exodus-stop-2",
        journeyId: "exodus-to-sinai",
        placeId: "egypt",
        order: 2,
        description:
            "Israel departs from Egypt after the Passover.",
        references: [
            {
                book: "Exodus",
                chapter: 12,
                startVerse: 31,
                endVerse: 42,
            },
        ],
    },
    {
        id: "exodus-stop-3",
        journeyId: "exodus-to-sinai",
        placeId: "red-sea-crossing",
        order: 3,
        description:
            "God brings Israel through the sea and delivers them from Pharaoh's pursuing army.",
        references: [
            {
                book: "Exodus",
                chapter: 14,
            },
        ],
    },
    {
        id: "exodus-stop-4",
        journeyId: "exodus-to-sinai",
        placeId: "mount-sinai",
        order: 4,
        description:
            "Israel arrives at Mount Sinai, where God meets with the nation and gives His covenant commands.",
        references: [
            {
                book: "Exodus",
                chapter: 19,
            },
            {
                book: "Exodus",
                chapter: 20,
            },
        ],
    },
];