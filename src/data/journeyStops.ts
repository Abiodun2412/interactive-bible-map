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
    {
        id: "david-jerusalem-stop-1",
        journeyId: "david-establishes-jerusalem",
        placeId: "hebron",
        order: 1,
        description:
            "David reigns from Hebron before becoming king over all Israel.",
        references: [
            {
                book: "2 Samuel",
                chapter: 5,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "david-jerusalem-stop-2",
        journeyId: "david-establishes-jerusalem",
        placeId: "zion",
        order: 2,
        description:
            "David captures the stronghold of Zion and establishes the City of David.",
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
        id: "david-jerusalem-stop-3",
        journeyId: "david-establishes-jerusalem",
        placeId: "jerusalem",
        order: 3,
        description:
            "Jerusalem becomes the centre of David's kingdom and the ark is brought into the city.",
        references: [
            {
                book: "2 Samuel",
                chapter: 6,
            },
        ],
    },
    {
        id: "solomon-temple-stop-1",
        journeyId: "solomon-rise-and-temple",
        placeId: "jerusalem",
        order: 1,
        description:
            "Solomon is proclaimed king in Jerusalem and succeeds David.",
        references: [
            {
                book: "1 Kings",
                chapter: 1,
                startVerse: 28,
                endVerse: 40,
            },
        ],
    },
    {
        id: "solomon-temple-stop-2",
        journeyId: "solomon-rise-and-temple",
        placeId: "gibeon",
        order: 2,
        description:
            "Solomon goes to Gibeon, where God appears to him and Solomon asks for wisdom.",
        references: [
            {
                book: "1 Kings",
                chapter: 3,
                startVerse: 4,
                endVerse: 15,
            },
        ],
    },
    {
        id: "solomon-temple-stop-3",
        journeyId: "solomon-rise-and-temple",
        placeId: "temple-mount",
        order: 3,
        description:
            "Solomon builds and later dedicates the Temple in Jerusalem.",
        references: [
            {
                book: "1 Kings",
                chapter: 6,
            },
            {
                book: "1 Kings",
                chapter: 8,
            },
        ],
    },
    {
        id: "jeroboam-kingdom-stop-1",
        journeyId: "jeroboam-northern-kingdom",
        placeId: "shechem",
        order: 1,
        description:
            "Jeroboam becomes king over the northern tribes and strengthens Shechem.",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 20,
                endVerse: 25,
            },
        ],
    },
    {
        id: "jeroboam-kingdom-stop-2",
        journeyId: "jeroboam-northern-kingdom",
        placeId: "bethel",
        order: 2,
        description:
            "Jeroboam establishes a worship centre at Bethel.",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 28,
                endVerse: 33,
            },
        ],
    },
    {
        id: "jeroboam-kingdom-stop-3",
        journeyId: "jeroboam-northern-kingdom",
        placeId: "dan",
        order: 3,
        description:
            "Jeroboam also establishes a worship centre at Dan in the far north.",
        references: [
            {
                book: "1 Kings",
                chapter: 12,
                startVerse: 28,
                endVerse: 30,
            },
        ],
    },
    {
        id: "elijah-drought-stop-1",
        journeyId: "elijah-drought-carmel",
        placeId: "samaria",
        order: 1,
        description:
            "Elijah announces the coming drought during the reign of Ahab.",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 1,
            },
        ],
    },
    {
        id: "elijah-drought-stop-2",
        journeyId: "elijah-drought-carmel",
        placeId: "brook-cherith",
        order: 2,
        description:
            "Elijah stays by the Brook Cherith as God sustains him.",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 2,
                endVerse: 7,
            },
        ],
    },
    {
        id: "elijah-drought-stop-3",
        journeyId: "elijah-drought-carmel",
        placeId: "zarephath",
        order: 3,
        description:
            "Elijah goes to Zarephath and stays with the widow there.",
        references: [
            {
                book: "1 Kings",
                chapter: 17,
                startVerse: 8,
                endVerse: 24,
            },
        ],
    },
    {
        id: "elijah-drought-stop-4",
        journeyId: "elijah-drought-carmel",
        placeId: "mount-carmel",
        order: 4,
        description:
            "Elijah confronts the prophets of Baal and calls Israel back to the Lord.",
        references: [
            {
                book: "1 Kings",
                chapter: 18,
                startVerse: 20,
                endVerse: 40,
            },
        ],
    },
    {
        id: "elijah-drought-stop-5",
        journeyId: "elijah-drought-carmel",
        placeId: "jezreel",
        order: 5,
        description:
            "After the rain returns, Elijah runs ahead of Ahab to Jezreel.",
        references: [
            {
                book: "1 Kings",
                chapter: 18,
                startVerse: 41,
                endVerse: 46,
            },
        ],
    },
    {
        id: "elijah-horeb-stop-1",
        journeyId: "elijah-to-horeb",
        placeId: "jezreel",
        order: 1,
        description:
            "Elijah is at Jezreel after the return of rain, where Jezebel threatens his life.",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "elijah-horeb-stop-2",
        journeyId: "elijah-to-horeb",
        placeId: "beersheba",
        order: 2,
        description:
            "Elijah travels to Beersheba and leaves his servant there before continuing into the wilderness.",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 3,
                endVerse: 4,
            },
        ],
    },
    {
        id: "elijah-horeb-stop-3",
        journeyId: "elijah-to-horeb",
        placeId: "mount-horeb",
        order: 3,
        description:
            "Elijah reaches Horeb, where the Lord speaks to him and directs the next stage of his ministry.",
        references: [
            {
                book: "1 Kings",
                chapter: 19,
                startVerse: 8,
                endVerse: 18,
            },
        ],
    },
    {
        id: "elisha-stop-1",
        journeyId: "elisha-early-ministry",
        placeId: "jericho",
        order: 1,
        description:
            "Elisha continues the prophetic ministry after Elijah is taken up and ministers at Jericho.",
        references: [
            {
                book: "2 Kings",
                chapter: 2,
            },
        ],
    },
    {
        id: "elisha-stop-2",
        journeyId: "elisha-early-ministry",
        placeId: "shunem",
        order: 2,
        description:
            "Elisha regularly passes through Shunem and ministers to the household of the Shunammite woman.",
        references: [
            {
                book: "2 Kings",
                chapter: 4,
                startVerse: 8,
                endVerse: 37,
            },
        ],
    },
    {
        id: "elisha-stop-3",
        journeyId: "elisha-early-ministry",
        placeId: "dothan",
        order: 3,
        description:
            "Elisha is at Dothan when the forces of Aram come to capture him.",
        references: [
            {
                book: "2 Kings",
                chapter: 6,
                startVerse: 8,
                endVerse: 23,
            },
        ],
    },
    {
        id: "fall-israel-stop-1",
        journeyId: "fall-of-northern-kingdom",
        placeId: "samaria",
        order: 1,
        description:
            "Samaria is besieged and captured by Assyria.",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 3,
                endVerse: 6,
            },
        ],
    },
    {
        id: "fall-israel-stop-2",
        journeyId: "fall-of-northern-kingdom",
        placeId: "assyria",
        order: 2,
        description:
            "Many Israelites are deported into Assyrian territory after the fall of Samaria.",
        references: [
            {
                book: "2 Kings",
                chapter: 17,
                startVerse: 6,
            },
        ],
    },
    {
        id: "assyria-judah-stop-1",
        journeyId: "assyrian-campaign-judah",
        placeId: "lachish",
        order: 1,
        description:
            "Sennacherib's campaign reaches Lachish, one of Judah's major fortified cities.",
        references: [
            {
                book: "2 Kings",
                chapter: 18,
                startVerse: 13,
                endVerse: 17,
            },
        ],
    },
    {
        id: "assyria-judah-stop-2",
        journeyId: "assyrian-campaign-judah",
        placeId: "jerusalem",
        order: 2,
        description:
            "The Assyrian threat reaches Jerusalem, where Hezekiah seeks the Lord and receives Isaiah's message.",
        references: [
            {
                book: "2 Kings",
                chapter: 18,
                startVerse: 17,
                endVerse: 37,
            },
            {
                book: "2 Kings",
                chapter: 19,
            },
        ],
    },
    {
        id: "josiah-reform-stop-1",
        journeyId: "josiah-reform",
        placeId: "jerusalem",
        order: 1,
        description:
            "Josiah leads Judah from Jerusalem during the major religious reforms of his reign.",
        references: [
            {
                book: "2 Kings",
                chapter: 22,
            },
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 1,
                endVerse: 25,
            },
        ],
    },
    {
        id: "josiah-reform-stop-2",
        journeyId: "josiah-reform",
        placeId: "temple-mount",
        order: 2,
        description:
            "The Book of the Law is found during work on the Temple, and Josiah renews the covenant before the Lord.",
        references: [
            {
                book: "2 Kings",
                chapter: 22,
                startVerse: 3,
                endVerse: 13,
            },
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 1,
                endVerse: 3,
            },
        ],
    },
    {
        id: "josiah-reform-stop-3",
        journeyId: "josiah-reform",
        placeId: "megiddo",
        order: 3,
        description:
            "Josiah goes to confront Pharaoh Neco at Megiddo and is mortally wounded.",
        references: [
            {
                book: "2 Kings",
                chapter: 23,
                startVerse: 29,
                endVerse: 30,
            },
        ],
    },
    {
        id: "judah-exile-stop-1",
        journeyId: "judah-babylonian-exile",
        placeId: "jerusalem",
        order: 1,
        description:
            "Jerusalem falls after the Babylonian siege, and people from Judah are taken away from their land.",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 1,
                endVerse: 21,
            },
        ],
    },
    {
        id: "judah-exile-stop-2",
        journeyId: "judah-babylonian-exile",
        placeId: "babylon",
        order: 2,
        description:
            "The exiles are carried into Babylonian territory following the conquest of Judah.",
        references: [
            {
                book: "2 Kings",
                chapter: 25,
                startVerse: 11,
                endVerse: 21,
            },
        ],
    },
    {
        id: "first-return-stop-1",
        journeyId: "first-return-to-jerusalem",
        placeId: "babylon",
        order: 1,
        description:
            "The returning community leaves the Babylonian exile region after the decree permitting the return.",
        references: [
            {
                book: "Ezra",
                chapter: 1,
            },
        ],
    },
    {
        id: "first-return-stop-2",
        journeyId: "first-return-to-jerusalem",
        placeId: "jerusalem",
        order: 2,
        description:
            "The returned exiles arrive in Judah and begin re-establishing the community around Jerusalem.",
        references: [
            {
                book: "Ezra",
                chapter: 2,
                startVerse: 64,
                endVerse: 70,
            },
        ],
    },
    {
        id: "first-return-stop-3",
        journeyId: "first-return-to-jerusalem",
        placeId: "temple-mount",
        order: 3,
        description:
            "The altar is rebuilt and work begins on restoring the Temple.",
        references: [
            {
                book: "Ezra",
                chapter: 3,
            },
        ],
    },
    {
        id: "ezra-return-stop-1",
        journeyId: "ezra-return",
        placeId: "babylon",
        order: 1,
        description:
            "Ezra prepares to leave Babylon with those returning to Jerusalem.",
        references: [
            {
                book: "Ezra",
                chapter: 7,
                startVerse: 1,
                endVerse: 10,
            },
        ],
    },
    {
        id: "ezra-return-stop-2",
        journeyId: "ezra-return",
        placeId: "jerusalem",
        order: 2,
        description:
            "Ezra arrives in Jerusalem and begins his ministry among the restored community.",
        references: [
            {
                book: "Ezra",
                chapter: 7,
                startVerse: 8,
                endVerse: 10,
            },
        ],
    },
    {
        id: "nehemiah-return-stop-1",
        journeyId: "nehemiah-return",
        placeId: "persia",
        order: 1,
        description:
            "Nehemiah serves in the Persian court when he learns of Jerusalem's condition.",
        references: [
            {
                book: "Nehemiah",
                chapter: 1,
            },
        ],
    },
    {
        id: "nehemiah-return-stop-2",
        journeyId: "nehemiah-return",
        placeId: "jerusalem",
        order: 2,
        description:
            "Nehemiah arrives in Jerusalem and begins the work of restoring the city.",
        references: [
            {
                book: "Nehemiah",
                chapter: 2,
                startVerse: 1,
                endVerse: 16,
            },
        ],
    },
    {
        id: "jesus-childhood-stop-1",
        journeyId: "jesus-egypt-childhood",
        placeId: "bethlehem",
        order: 1,
        description:
            "Jesus is in Bethlehem when Joseph is warned to take the family away from Herod.",
        references: [
            {
                book: "Matthew",
                chapter: 2,
                startVerse: 13,
            },
        ],
    },
    {
        id: "jesus-childhood-stop-2",
        journeyId: "jesus-egypt-childhood",
        placeId: "egypt",
        order: 2,
        description:
            "Joseph takes Mary and Jesus into Egypt, where they remain until after Herod's death.",
        references: [
            {
                book: "Matthew",
                chapter: 2,
                startVerse: 13,
                endVerse: 15,
            },
        ],
    },
    {
        id: "jesus-childhood-stop-3",
        journeyId: "jesus-egypt-childhood",
        placeId: "nazareth",
        order: 3,
        description:
            "After returning from Egypt, the family settles in Nazareth in Galilee.",
        references: [
            {
                book: "Matthew",
                chapter: 2,
                startVerse: 19,
                endVerse: 23,
            },
        ],
    },
];