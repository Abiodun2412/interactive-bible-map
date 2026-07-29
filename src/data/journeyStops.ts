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
    {
        id: "wilderness-stop-1",
        journeyId: "wilderness-to-moab",
        placeId: "mount-sinai",
        order: 1,
        description:
            "Israel departs from the region of Mount Sinai after receiving God's commands and preparing to continue toward the Promised Land.",
        references: [
            {
                book: "Numbers",
                chapter: 10,
                startVerse: 11,
                endVerse: 13,
            },
        ],
    },
    {
        id: "wilderness-stop-2",
        journeyId: "wilderness-to-moab",
        placeId: "kadesh-barnea",
        order: 2,
        description:
            "Israel reaches the region of Kadesh-barnea, from which the twelve spies are sent to explore the land of Canaan.",
        references: [
            {
                book: "Numbers",
                chapter: 13,
                startVerse: 1,
                endVerse: 26,
            },
        ],
    },
    {
        id: "wilderness-stop-3",
        journeyId: "wilderness-to-moab",
        placeId: "plains-of-moab",
        order: 3,
        description:
            "After the wilderness years and later journeys, Israel camps on the plains of Moab beside the Jordan, opposite Jericho.",
        references: [
            {
                book: "Numbers",
                chapter: 22,
                startVerse: 1,
            },
        ],
    },
    {
        id: "entry-canaan-stop-1",
        journeyId: "entry-into-canaan",
        placeId: "plains-of-moab",
        order: 1,
        description:
            "Israel prepares east of the Jordan for entry into the land under Joshua's leadership.",
        references: [
            {
                book: "Joshua",
                chapter: 1,
            },
        ],
    },
    {
        id: "entry-canaan-stop-2",
        journeyId: "entry-into-canaan",
        placeId: "jordan-crossing",
        order: 2,
        description:
            "Israel crosses the Jordan on dry ground as God stops the river before the ark of the covenant.",
        references: [
            {
                book: "Joshua",
                chapter: 3,
            },
        ],
    },
    {
        id: "entry-canaan-stop-3",
        journeyId: "entry-into-canaan",
        placeId: "gilgal",
        order: 3,
        description:
            "Israel camps at Gilgal, where twelve stones from the Jordan are set up as a memorial.",
        references: [
            {
                book: "Joshua",
                chapter: 4,
                startVerse: 19,
                endVerse: 24,
            },
        ],
    },
    {
        id: "entry-canaan-stop-4",
        journeyId: "entry-into-canaan",
        placeId: "jericho",
        order: 4,
        description:
            "Israel comes to Jericho, the first major city confronted after crossing the Jordan.",
        references: [
            {
                book: "Joshua",
                chapter: 6,
            },
        ],
    },
    {
        id: "southern-campaign-stop-1",
        journeyId: "southern-campaign",
        placeId: "gibeon",
        order: 1,
        description:
            "Joshua marches to defend Gibeon from the Amorite coalition.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 1,
                endVerse: 11,
            },
        ],
    },
    {
        id: "southern-campaign-stop-2",
        journeyId: "southern-campaign",
        placeId: "beth-horon",
        order: 2,
        description:
            "Israel pursues the retreating armies along the ascent and descent of Beth-horon.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 10,
                endVerse: 11,
            },
        ],
    },
    {
        id: "southern-campaign-stop-3",
        journeyId: "southern-campaign",
        placeId: "azekah",
        order: 3,
        description:
            "The pursuit continues toward Azekah during the defeat of the Amorite coalition.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 10,
                endVerse: 11,
            },
        ],
    },
    {
        id: "southern-campaign-stop-4",
        journeyId: "southern-campaign",
        placeId: "makkedah",
        order: 4,
        description:
            "Joshua deals with the five kings at Makkedah and captures the city.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 16,
                endVerse: 28,
            },
        ],
    },
    {
        id: "southern-campaign-stop-5",
        journeyId: "southern-campaign",
        placeId: "libnah",
        order: 5,
        description:
            "Israel moves from Makkedah to Libnah and captures the city.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 29,
                endVerse: 30,
            },
        ],
    },
    {
        id: "southern-campaign-stop-6",
        journeyId: "southern-campaign",
        placeId: "lachish",
        order: 6,
        description:
            "Joshua moves against Lachish and the city is taken.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 31,
                endVerse: 33,
            },
        ],
    },
    {
        id: "southern-campaign-stop-7",
        journeyId: "southern-campaign",
        placeId: "eglon",
        order: 7,
        description:
            "Israel attacks Eglon during the continuing southern campaign.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 34,
                endVerse: 35,
            },
        ],
    },
    {
        id: "southern-campaign-stop-8",
        journeyId: "southern-campaign",
        placeId: "hebron",
        order: 8,
        description:
            "Joshua turns against Hebron and defeats the forces there.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 36,
                endVerse: 37,
            },
        ],
    },
    {
        id: "southern-campaign-stop-9",
        journeyId: "southern-campaign",
        placeId: "debir",
        order: 9,
        description:
            "The southern campaign continues to Debir.",
        references: [
            {
                book: "Joshua",
                chapter: 10,
                startVerse: 38,
                endVerse: 39,
            },
        ],
    },
    {
        id: "northern-campaign-stop-1",
        journeyId: "northern-campaign",
        placeId: "hazor",
        order: 1,
        description:
            "Hazor leads the coalition of northern kings gathered against Israel.",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "northern-campaign-stop-2",
        journeyId: "northern-campaign",
        placeId: "waters-of-merom",
        order: 2,
        description:
            "Joshua attacks the northern coalition near the Waters of Merom.",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 6,
                endVerse: 9,
            },
        ],
    },
    {
        id: "northern-campaign-stop-3",
        journeyId: "northern-campaign",
        placeId: "sidon",
        order: 3,
        description:
            "Israel pursues the defeated armies toward Great Sidon.",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 8,
            },
        ],
    },
    {
        id: "northern-campaign-stop-4",
        journeyId: "northern-campaign",
        placeId: "mizpah-north",
        order: 4,
        description:
            "The pursuit extends into the northern region described as the Valley of Mizpah.",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 8,
            },
        ],
    },
    {
        id: "northern-campaign-stop-5",
        journeyId: "northern-campaign",
        placeId: "hazor",
        order: 5,
        description:
            "Joshua returns to Hazor and captures the city.",
        references: [
            {
                book: "Joshua",
                chapter: 11,
                startVerse: 10,
                endVerse: 15,
            },
        ],
    },
    {
        id: "joshua-final-stop-1",
        journeyId: "joshua-final-years",
        placeId: "shiloh",
        order: 1,
        description:
            "Israel gathers at Shiloh, where the tent of meeting is established and the remaining tribal inheritances are distributed.",
        references: [
            {
                book: "Joshua",
                chapter: 18,
                startVerse: 1,
                endVerse: 10,
            },
        ],
    },
    {
        id: "joshua-final-stop-2",
        journeyId: "joshua-final-years",
        placeId: "timnath-serah",
        order: 2,
        description:
            "Joshua receives Timnath-serah as his inheritance and builds up the city.",
        references: [
            {
                book: "Joshua",
                chapter: 19,
                startVerse: 49,
                endVerse: 50,
            },
        ],
    },
    {
        id: "joshua-final-stop-3",
        journeyId: "joshua-final-years",
        placeId: "shechem",
        order: 3,
        description:
            "Joshua gathers Israel at Shechem for his final covenant address, calling the nation to serve the Lord faithfully.",
        references: [
            {
                book: "Joshua",
                chapter: 24,
                startVerse: 1,
                endVerse: 28,
            },
        ],
    },
    {
        id: "joshua-final-stop-4",
        journeyId: "joshua-final-years",
        placeId: "timnath-serah",
        order: 4,
        description:
            "Joshua dies at the age of 110 and is buried in the territory of his inheritance.",
        references: [
            {
                book: "Joshua",
                chapter: 24,
                startVerse: 29,
                endVerse: 31,
            },
        ],
    },
    {
        id: "samson-stop-1",
        journeyId: "samson-journey",
        placeId: "zorah",
        order: 1,
        description:
            "Samson grows up in the region of Zorah, where the Spirit of the Lord begins to stir him.",
        references: [
            {
                book: "Judges",
                chapter: 13,
                startVerse: 24,
                endVerse: 25,
            },
        ],
    },
    {
        id: "samson-stop-2",
        journeyId: "samson-journey",
        placeId: "timnah",
        order: 2,
        description:
            "Samson goes down to Timnah, where his marriage and early conflict with the Philistines unfold.",
        references: [
            {
                book: "Judges",
                chapter: 14,
            },
        ],
    },
    {
        id: "samson-stop-3",
        journeyId: "samson-journey",
        placeId: "gaza",
        order: 3,
        description:
            "Samson later comes to Gaza, one of the major Philistine cities associated with the final events of his life.",
        references: [
            {
                book: "Judges",
                chapter: 16,
                startVerse: 1,
                endVerse: 31,
            },
        ],
    },
    {
        id: "ruth-bethlehem-stop-1",
        journeyId: "ruth-to-bethlehem",
        placeId: "moab",
        order: 1,
        description:
            "Naomi prepares to return from Moab after hearing that the Lord has provided food for His people.",
        references: [
            {
                book: "Ruth",
                chapter: 1,
                startVerse: 6,
                endVerse: 18,
            },
        ],
    },
    {
        id: "ruth-bethlehem-stop-2",
        journeyId: "ruth-to-bethlehem",
        placeId: "bethlehem",
        order: 2,
        description:
            "Naomi and Ruth arrive in Bethlehem at the beginning of the barley harvest.",
        references: [
            {
                book: "Ruth",
                chapter: 1,
                startVerse: 19,
                endVerse: 22,
            },
        ],
    },
    {
        id: "david-flees-stop-1",
        journeyId: "david-flees-saul",
        placeId: "gibeah",
        order: 1,
        description:
            "David departs from Saul's court as Saul's hostility toward him grows.",
        references: [
            {
                book: "1 Samuel",
                chapter: 19,
            },
        ],
    },
    {
        id: "david-flees-stop-2",
        journeyId: "david-flees-saul",
        placeId: "nob",
        order: 2,
        description:
            "David comes to Nob and receives provisions from Ahimelech the priest.",
        references: [
            {
                book: "1 Samuel",
                chapter: 21,
                startVerse: 1,
                endVerse: 9,
            },
        ],
    },
    {
        id: "david-flees-stop-3",
        journeyId: "david-flees-saul",
        placeId: "gath",
        order: 3,
        description:
            "David flees to Gath and comes before Achish, king of the Philistine city.",
        references: [
            {
                book: "1 Samuel",
                chapter: 21,
                startVerse: 10,
                endVerse: 15,
            },
        ],
    },
    {
        id: "david-flees-stop-4",
        journeyId: "david-flees-saul",
        placeId: "adullam",
        order: 4,
        description:
            "David escapes to the cave of Adullam and begins gathering followers.",
        references: [
            {
                book: "1 Samuel",
                chapter: 22,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "david-flees-stop-5",
        journeyId: "david-flees-saul",
        placeId: "en-gedi",
        order: 5,
        description:
            "David hides in the wilderness around En Gedi and later spares Saul's life.",
        references: [
            {
                book: "1 Samuel",
                chapter: 24,
            },
        ],
    },
];