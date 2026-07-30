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
    {
        id: "jesus-baptism-stop-1",
        journeyId: "jesus-to-baptism",
        placeId: "nazareth",
        order: 1,
        description:
            "Jesus comes from Nazareth in Galilee before beginning His public ministry.",
        references: [
            {
                book: "Mark",
                chapter: 1,
                startVerse: 9,
            },
        ],
    },
    {
        id: "jesus-baptism-stop-2",
        journeyId: "jesus-to-baptism",
        placeId: "jordan-river-baptism",
        order: 2,
        description:
            "Jesus comes to John at the Jordan and is baptised.",
        references: [
            {
                book: "Matthew",
                chapter: 3,
                startVerse: 13,
                endVerse: 17,
            },
        ],
    },
    {
        id: "jesus-early-stop-1",
        journeyId: "jesus-early-ministry",
        placeId: "jordan-river-baptism",
        order: 1,
        description:
            "Jesus is baptised by John in the Jordan region.",
        references: [
            {
                book: "Matthew",
                chapter: 3,
                startVerse: 13,
                endVerse: 17,
            },
        ],
    },
    {
        id: "jesus-early-stop-2",
        journeyId: "jesus-early-ministry",
        placeId: "judean-wilderness",
        order: 2,
        description:
            "Jesus is led into the wilderness following His baptism.",
        references: [
            {
                book: "Matthew",
                chapter: 4,
                startVerse: 1,
                endVerse: 11,
            },
        ],
    },
    {
        id: "jesus-early-stop-3",
        journeyId: "jesus-early-ministry",
        placeId: "cana",
        order: 3,
        description:
            "Jesus performs the sign of turning water into wine at Cana.",
        references: [
            {
                book: "John",
                chapter: 2,
                startVerse: 1,
                endVerse: 11,
            },
        ],
    },
    {
        id: "jesus-early-stop-4",
        journeyId: "jesus-early-ministry",
        placeId: "capernaum",
        order: 4,
        description:
            "Capernaum becomes one of the main centres of Jesus' ministry in Galilee.",
        references: [
            {
                book: "Mark",
                chapter: 1,
                startVerse: 21,
                endVerse: 39,
            },
        ],
    },
    {
        id: "galilean-ministry-stop-1",
        journeyId: "jesus-galilean-ministry",
        placeId: "capernaum",
        order: 1,
        description:
            "Capernaum serves as a major centre of Jesus' ministry in Galilee.",
        references: [
            {
                book: "Mark",
                chapter: 1,
                startVerse: 21,
                endVerse: 39,
            },
        ],
    },
    {
        id: "galilean-ministry-stop-2",
        journeyId: "jesus-galilean-ministry",
        placeId: "mount-beatitudes-region",
        order: 2,
        description:
            "Jesus teaches His disciples and the crowds on a mountain in Galilee.",
        references: [
            {
                book: "Matthew",
                chapter: 5,
            },
            {
                book: "Matthew",
                chapter: 6,
            },
            {
                book: "Matthew",
                chapter: 7,
            },
        ],
    },
    {
        id: "galilean-ministry-stop-3",
        journeyId: "jesus-galilean-ministry",
        placeId: "sea-of-galilee",
        order: 3,
        description:
            "Jesus and His disciples travel around and across the Sea of Galilee during His ministry.",
        references: [
            {
                book: "Mark",
                chapter: 4,
                startVerse: 35,
                endVerse: 41,
            },
        ],
    },
    {
        id: "galilean-ministry-stop-4",
        journeyId: "jesus-galilean-ministry",
        placeId: "bethsaida",
        order: 4,
        description:
            "Jesus ministers in the region around Bethsaida and feeds a large crowd.",
        references: [
            {
                book: "Luke",
                chapter: 9,
                startVerse: 10,
                endVerse: 17,
            },
        ],
    },
    {
        id: "galilean-ministry-stop-5",
        journeyId: "jesus-galilean-ministry",
        placeId: "caesarea-philippi",
        order: 5,
        description:
            "Near Caesarea Philippi, Peter confesses that Jesus is the Messiah.",
        references: [
            {
                book: "Matthew",
                chapter: 16,
                startVerse: 13,
                endVerse: 20,
            },
        ],
    },
    {
        id: "toward-jerusalem-stop-1",
        journeyId: "jesus-toward-jerusalem",
        placeId: "caesarea-philippi",
        order: 1,
        description:
            "Jesus ministers in the northern region where Peter confesses Him as the Messiah.",
        references: [
            {
                book: "Matthew",
                chapter: 16,
                startVerse: 13,
                endVerse: 20,
            },
        ],
    },
    {
        id: "toward-jerusalem-stop-2",
        journeyId: "jesus-toward-jerusalem",
        placeId: "mount-transfiguration-region",
        order: 2,
        description:
            "Jesus is transfigured before Peter, James, and John on a high mountain.",
        references: [
            {
                book: "Matthew",
                chapter: 17,
                startVerse: 1,
                endVerse: 8,
            },
        ],
    },
    {
        id: "toward-jerusalem-stop-3",
        journeyId: "jesus-toward-jerusalem",
        placeId: "bethany",
        order: 3,
        description:
            "Bethany becomes a key setting in the final stage of Jesus' ministry, including the raising of Lazarus.",
        references: [
            {
                book: "John",
                chapter: 11,
            },
        ],
    },
    {
        id: "toward-jerusalem-stop-4",
        journeyId: "jesus-toward-jerusalem",
        placeId: "jerusalem",
        order: 4,
        description:
            "Jesus approaches Jerusalem as the final stage of His earthly ministry begins.",
        references: [
            {
                book: "Luke",
                chapter: 19,
                startVerse: 28,
            },
        ],
    },
    {
        id: "jerusalem-entry-stop-1",
        journeyId: "jesus-entry-jerusalem",
        placeId: "bethany",
        order: 1,
        description:
            "Jesus stays near Bethany before His entry into Jerusalem.",
        references: [
            {
                book: "John",
                chapter: 12,
                startVerse: 1,
                endVerse: 11,
            },
        ],
    },
    {
        id: "jerusalem-entry-stop-2",
        journeyId: "jesus-entry-jerusalem",
        placeId: "mount-of-olives",
        order: 2,
        description:
            "Jesus approaches Jerusalem through the Mount of Olives region.",
        references: [
            {
                book: "Matthew",
                chapter: 21,
                startVerse: 1,
                endVerse: 9,
            },
        ],
    },
    {
        id: "jerusalem-entry-stop-3",
        journeyId: "jesus-entry-jerusalem",
        placeId: "jerusalem",
        order: 3,
        description:
            "Jesus enters Jerusalem as the crowds welcome Him.",
        references: [
            {
                book: "Matthew",
                chapter: 21,
                startVerse: 10,
                endVerse: 11,
            },
        ],
    },
    {
        id: "jerusalem-entry-stop-4",
        journeyId: "jesus-entry-jerusalem",
        placeId: "temple-mount",
        order: 4,
        description:
            "Jesus enters the Temple during His final week in Jerusalem.",
        references: [
            {
                book: "Matthew",
                chapter: 21,
                startVerse: 12,
                endVerse: 17,
            },
        ],
    },
    {
        id: "arrest-trial-stop-1",
        journeyId: "jesus-arrest-and-trial",
        placeId: "upper-room-jerusalem",
        order: 1,
        description:
            "Jesus shares the Passover meal with His disciples before leaving the city.",
        references: [
            {
                book: "Matthew",
                chapter: 26,
                startVerse: 17,
                endVerse: 30,
            },
        ],
    },
    {
        id: "arrest-trial-stop-2",
        journeyId: "jesus-arrest-and-trial",
        placeId: "gethsemane",
        order: 2,
        description:
            "Jesus prays in Gethsemane and is arrested there.",
        references: [
            {
                book: "Matthew",
                chapter: 26,
                startVerse: 36,
                endVerse: 56,
            },
        ],
    },
    {
        id: "arrest-trial-stop-3",
        journeyId: "jesus-arrest-and-trial",
        placeId: "high-priest-residence",
        order: 3,
        description:
            "Jesus is taken before the high priest and Jewish leadership.",
        references: [
            {
                book: "Matthew",
                chapter: 26,
                startVerse: 57,
                endVerse: 68,
            },
        ],
    },
    {
        id: "arrest-trial-stop-4",
        journeyId: "jesus-arrest-and-trial",
        placeId: "praetorium-jerusalem",
        order: 4,
        description:
            "Jesus is brought before Pontius Pilate as the Roman trial begins.",
        references: [
            {
                book: "Matthew",
                chapter: 27,
                startVerse: 1,
                endVerse: 26,
            },
        ],
    },
    {
        id: "crucifixion-stop-1",
        journeyId: "jesus-crucifixion-resurrection",
        placeId: "praetorium-jerusalem",
        order: 1,
        description:
            "Jesus is condemned under Roman authority before being led away for crucifixion.",
        references: [
            {
                book: "Matthew",
                chapter: 27,
                startVerse: 11,
                endVerse: 26,
            },
        ],
    },
    {
        id: "crucifixion-stop-2",
        journeyId: "jesus-crucifixion-resurrection",
        placeId: "golgotha",
        order: 2,
        description:
            "Jesus is taken to Golgotha and crucified.",
        references: [
            {
                book: "Matthew",
                chapter: 27,
                startVerse: 27,
                endVerse: 56,
            },
        ],
    },
    {
        id: "crucifixion-stop-3",
        journeyId: "jesus-crucifixion-resurrection",
        placeId: "jesus-tomb",
        order: 3,
        description:
            "Jesus is buried in a tomb, which is later found empty on the first day of the week.",
        references: [
            {
                book: "Matthew",
                chapter: 27,
                startVerse: 57,
                endVerse: 61,
            },
            {
                book: "Matthew",
                chapter: 28,
                startVerse: 1,
                endVerse: 10,
            },
        ],
    },
    {
        id: "crucifixion-stop-4",
        journeyId: "jesus-crucifixion-resurrection",
        placeId: "jerusalem",
        order: 4,
        description:
            "The risen Jesus appears to His disciples in Jerusalem.",
        references: [
            {
                book: "Luke",
                chapter: 24,
                startVerse: 36,
                endVerse: 49,
            },
        ],
    },
    {
        id: "resurrection-ascension-stop-1",
        journeyId: "resurrection-to-ascension",
        placeId: "jesus-tomb",
        order: 1,
        description:
            "The tomb is found empty on the first day of the week.",
        references: [
            {
                book: "Matthew",
                chapter: 28,
                startVerse: 1,
                endVerse: 10,
            },
        ],
    },
    {
        id: "resurrection-ascension-stop-2",
        journeyId: "resurrection-to-ascension",
        placeId: "jerusalem",
        order: 2,
        description:
            "The risen Jesus appears to His disciples in Jerusalem.",
        references: [
            {
                book: "Luke",
                chapter: 24,
                startVerse: 36,
                endVerse: 49,
            },
        ],
    },
    {
        id: "resurrection-ascension-stop-3",
        journeyId: "resurrection-to-ascension",
        placeId: "mount-of-olives",
        order: 3,
        description:
            "Jesus leads His disciples out toward the Mount of Olives region and ascends into heaven.",
        references: [
            {
                book: "Acts",
                chapter: 1,
                startVerse: 6,
                endVerse: 12,
            },
        ],
    },
    {
        id: "philip-ministry-stop-1",
        journeyId: "philip-ministry",
        placeId: "jerusalem",
        order: 1,
        description:
            "Persecution scatters believers from Jerusalem after Stephen's death.",
        references: [
            {
                book: "Acts",
                chapter: 8,
                startVerse: 1,
                endVerse: 4,
            },
        ],
    },
    {
        id: "philip-ministry-stop-2",
        journeyId: "philip-ministry",
        placeId: "samaria-region",
        order: 2,
        description:
            "Philip proclaims Christ in Samaria and many respond to the message.",
        references: [
            {
                book: "Acts",
                chapter: 8,
                startVerse: 5,
                endVerse: 13,
            },
        ],
    },
    {
        id: "philip-ministry-stop-3",
        journeyId: "philip-ministry",
        placeId: "jerusalem-gaza-road",
        order: 3,
        description:
            "Philip is directed toward the road from Jerusalem to Gaza, where he meets the Ethiopian official.",
        references: [
            {
                book: "Acts",
                chapter: 8,
                startVerse: 26,
                endVerse: 40,
            },
        ],
    },
    {
        id: "saul-damascus-stop-1",
        journeyId: "saul-road-to-damascus",
        placeId: "jerusalem",
        order: 1,
        description:
            "Saul leaves Jerusalem with authority to arrest followers of Jesus in Damascus.",
        references: [
            {
                book: "Acts",
                chapter: 9,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "saul-damascus-stop-2",
        journeyId: "saul-road-to-damascus",
        placeId: "damascus",
        order: 2,
        description:
            "Near Damascus, Saul encounters Jesus and is later brought into the city.",
        references: [
            {
                book: "Acts",
                chapter: 9,
                startVerse: 3,
                endVerse: 9,
            },
        ],
    },
    {
        id: "peter-cornelius-stop-1",
        journeyId: "peter-joppa-caesarea",
        placeId: "joppa",
        order: 1,
        description:
            "Peter stays in Joppa, where he receives the vision that prepares him to visit Cornelius.",
        references: [
            {
                book: "Acts",
                chapter: 10,
                startVerse: 9,
                endVerse: 23,
            },
        ],
    },
    {
        id: "peter-cornelius-stop-2",
        journeyId: "peter-joppa-caesarea",
        placeId: "caesarea-maritima",
        order: 2,
        description:
            "Peter comes to Caesarea and enters the household of Cornelius.",
        references: [
            {
                book: "Acts",
                chapter: 10,
                startVerse: 24,
                endVerse: 48,
            },
        ],
    },
    {
        id: "barnabas-paul-antioch-stop-1",
        journeyId: "barnabas-brings-paul-antioch",
        placeId: "tarsus",
        order: 1,
        description:
            "Barnabas travels to Tarsus to look for Paul.",
        references: [
            {
                book: "Acts",
                chapter: 11,
                startVerse: 25,
            },
        ],
    },
    {
        id: "barnabas-paul-antioch-stop-2",
        journeyId: "barnabas-brings-paul-antioch",
        placeId: "antioch-syria",
        order: 2,
        description:
            "Barnabas brings Paul to Antioch, where they teach the church together for a year.",
        references: [
            {
                book: "Acts",
                chapter: 11,
                startVerse: 26,
            },
        ],
    },
    {
        id: "paul-first-stop-1",
        journeyId: "paul-first-missionary-journey",
        placeId: "antioch-syria",
        order: 1,
        description:
            "The church at Antioch sends Paul and Barnabas out for missionary work.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 1,
                endVerse: 3,
            },
        ],
    },
    {
        id: "paul-first-stop-2",
        journeyId: "paul-first-missionary-journey",
        placeId: "seleucia",
        order: 2,
        description:
            "Paul and Barnabas travel to Seleucia and sail from there to Cyprus.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 4,
            },
        ],
    },
    {
        id: "paul-first-stop-3",
        journeyId: "paul-first-missionary-journey",
        placeId: "salamis",
        order: 3,
        description:
            "They arrive at Salamis and proclaim the word of God.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 5,
            },
        ],
    },
    {
        id: "paul-first-stop-4",
        journeyId: "paul-first-missionary-journey",
        placeId: "paphos",
        order: 4,
        description:
            "They cross Cyprus and reach Paphos.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 6,
                endVerse: 12,
            },
        ],
    },
    {
        id: "paul-first-stop-5",
        journeyId: "paul-first-missionary-journey",
        placeId: "perga",
        order: 5,
        description:
            "Paul and his companions sail to the region of Pamphylia and arrive at Perga.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 13,
            },
        ],
    },
    {
        id: "paul-first-stop-6",
        journeyId: "paul-first-missionary-journey",
        placeId: "pisidian-antioch",
        order: 6,
        description:
            "Paul and Barnabas travel inland to Antioch of Pisidia and preach there.",
        references: [
            {
                book: "Acts",
                chapter: 13,
                startVerse: 14,
                endVerse: 52,
            },
        ],
    },
    {
        id: "paul-first-stop-7",
        journeyId: "paul-first-missionary-journey",
        placeId: "iconium",
        order: 7,
        description:
            "They continue to Iconium and minister there.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 1,
                endVerse: 7,
            },
        ],
    },
    {
        id: "paul-first-stop-8",
        journeyId: "paul-first-missionary-journey",
        placeId: "lystra",
        order: 8,
        description:
            "Paul and Barnabas reach Lystra, where Paul heals a man and is later stoned.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 8,
                endVerse: 20,
            },
        ],
    },
    {
        id: "paul-first-stop-9",
        journeyId: "paul-first-missionary-journey",
        placeId: "derbe",
        order: 9,
        description:
            "They continue to Derbe and make many disciples.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 20,
                endVerse: 21,
            },
        ],
    },
    {
        id: "paul-first-stop-10",
        journeyId: "paul-first-missionary-journey",
        placeId: "lystra",
        order: 10,
        description:
            "Paul and Barnabas begin retracing their route, strengthening the disciples.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 21,
                endVerse: 23,
            },
        ],
    },
    {
        id: "paul-first-stop-11",
        journeyId: "paul-first-missionary-journey",
        placeId: "iconium",
        order: 11,
        description:
            "They revisit the believers in Iconium.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 21,
                endVerse: 23,
            },
        ],
    },
    {
        id: "paul-first-stop-12",
        journeyId: "paul-first-missionary-journey",
        placeId: "pisidian-antioch",
        order: 12,
        description:
            "They return through Antioch of Pisidia, strengthening the churches.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 21,
                endVerse: 23,
            },
        ],
    },
    {
        id: "paul-first-stop-13",
        journeyId: "paul-first-missionary-journey",
        placeId: "perga",
        order: 13,
        description:
            "They return through Perga and proclaim the word there.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 24,
                endVerse: 25,
            },
        ],
    },
    {
        id: "paul-first-stop-14",
        journeyId: "paul-first-missionary-journey",
        placeId: "antioch-syria",
        order: 14,
        description:
            "Paul and Barnabas return to Antioch and report to the church.",
        references: [
            {
                book: "Acts",
                chapter: 14,
                startVerse: 26,
                endVerse: 28,
            },
        ],
    },
    {
        id: "paul-second-stop-1",
        journeyId: "paul-second-missionary-journey",
        placeId: "antioch-syria",
        order: 1,
        description:
            "Paul begins the second missionary journey from Antioch.",
        references: [
            {
                book: "Acts",
                chapter: 15,
                startVerse: 36,
                endVerse: 41,
            },
        ],
    },
    {
        id: "paul-second-stop-2",
        journeyId: "paul-second-missionary-journey",
        placeId: "lystra",
        order: 2,
        description:
            "Paul visits Lystra, where Timothy joins the missionary team.",
        references: [
            {
                book: "Acts",
                chapter: 16,
                startVerse: 1,
                endVerse: 5,
            },
        ],
    },
    {
        id: "paul-second-stop-3",
        journeyId: "paul-second-missionary-journey",
        placeId: "troas",
        order: 3,
        description:
            "At Troas, Paul receives the vision calling him to Macedonia.",
        references: [
            {
                book: "Acts",
                chapter: 16,
                startVerse: 6,
                endVerse: 10,
            },
        ],
    },
    {
        id: "paul-second-stop-4",
        journeyId: "paul-second-missionary-journey",
        placeId: "philippi",
        order: 4,
        description:
            "Paul and his companions minister in Philippi.",
        references: [
            {
                book: "Acts",
                chapter: 16,
                startVerse: 11,
                endVerse: 40,
            },
        ],
    },
    {
        id: "paul-second-stop-5",
        journeyId: "paul-second-missionary-journey",
        placeId: "thessalonica",
        order: 5,
        description:
            "Paul preaches in Thessalonica.",
        references: [
            {
                book: "Acts",
                chapter: 17,
                startVerse: 1,
                endVerse: 9,
            },
        ],
    },
    {
        id: "paul-second-stop-6",
        journeyId: "paul-second-missionary-journey",
        placeId: "berea",
        order: 6,
        description:
            "Paul and Silas minister among the Bereans.",
        references: [
            {
                book: "Acts",
                chapter: 17,
                startVerse: 10,
                endVerse: 15,
            },
        ],
    },
    {
        id: "paul-second-stop-7",
        journeyId: "paul-second-missionary-journey",
        placeId: "athens",
        order: 7,
        description:
            "Paul speaks in Athens, including his address at the Areopagus.",
        references: [
            {
                book: "Acts",
                chapter: 17,
                startVerse: 16,
                endVerse: 34,
            },
        ],
    },
    {
        id: "paul-second-stop-8",
        journeyId: "paul-second-missionary-journey",
        placeId: "corinth",
        order: 8,
        description:
            "Paul spends an extended period ministering in Corinth.",
        references: [
            {
                book: "Acts",
                chapter: 18,
                startVerse: 1,
                endVerse: 18,
            },
        ],
    },
    {
        id: "paul-second-stop-9",
        journeyId: "paul-second-missionary-journey",
        placeId: "antioch-syria",
        order: 9,
        description:
            "Paul eventually returns to Antioch after the journey.",
        references: [
            {
                book: "Acts",
                chapter: 18,
                startVerse: 22,
            },
        ],
    },
    {
        id: "paul-third-stop-1",
        journeyId: "paul-third-missionary-journey",
        placeId: "antioch-syria",
        order: 1,
        description:
            "Paul begins another journey from Antioch and travels through the regions of Asia Minor.",
        references: [
            {
                book: "Acts",
                chapter: 18,
                startVerse: 23,
            },
        ],
    },
    {
        id: "paul-third-stop-2",
        journeyId: "paul-third-missionary-journey",
        placeId: "ephesus",
        order: 2,
        description:
            "Paul spends an extended period teaching and ministering in Ephesus.",
        references: [
            {
                book: "Acts",
                chapter: 19,
            },
        ],
    },
    {
        id: "paul-third-stop-3",
        journeyId: "paul-third-missionary-journey",
        placeId: "philippi",
        order: 3,
        description:
            "Paul travels through Macedonia after leaving Ephesus.",
        references: [
            {
                book: "Acts",
                chapter: 20,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "paul-third-stop-4",
        journeyId: "paul-third-missionary-journey",
        placeId: "corinth",
        order: 4,
        description:
            "Paul spends time in Greece before beginning his return journey.",
        references: [
            {
                book: "Acts",
                chapter: 20,
                startVerse: 2,
                endVerse: 3,
            },
        ],
    },
    {
        id: "paul-third-stop-5",
        journeyId: "paul-third-missionary-journey",
        placeId: "philippi",
        order: 5,
        description:
            "Paul returns through Macedonia as he begins travelling toward Jerusalem.",
        references: [
            {
                book: "Acts",
                chapter: 20,
                startVerse: 3,
                endVerse: 6,
            },
        ],
    },
    {
        id: "paul-third-stop-6",
        journeyId: "paul-third-missionary-journey",
        placeId: "troas",
        order: 6,
        description:
            "Paul spends several days at Troas during the return journey.",
        references: [
            {
                book: "Acts",
                chapter: 20,
                startVerse: 6,
                endVerse: 12,
            },
        ],
    },
    {
        id: "paul-third-stop-7",
        journeyId: "paul-third-missionary-journey",
        placeId: "miletus",
        order: 7,
        description:
            "Paul meets the Ephesian elders at Miletus before continuing toward Jerusalem.",
        references: [
            {
                book: "Acts",
                chapter: 20,
                startVerse: 17,
                endVerse: 38,
            },
        ],
    },
    {
        id: "paul-third-stop-8",
        journeyId: "paul-third-missionary-journey",
        placeId: "jerusalem",
        order: 8,
        description:
            "Paul eventually reaches Jerusalem at the end of the journey.",
        references: [
            {
                book: "Acts",
                chapter: 21,
                startVerse: 15,
                endVerse: 17,
            },
        ],
    },
    {
        id: "paul-caesarea-stop-1",
        journeyId: "paul-jerusalem-caesarea",
        placeId: "jerusalem",
        order: 1,
        description:
            "Paul is held in Roman custody in Jerusalem after his arrest.",
        references: [
            {
                book: "Acts",
                chapter: 23,
                startVerse: 12,
                endVerse: 23,
            },
        ],
    },
    {
        id: "paul-caesarea-stop-2",
        journeyId: "paul-jerusalem-caesarea",
        placeId: "caesarea-maritima",
        order: 2,
        description:
            "Paul is transferred to Caesarea, where his case is heard before Roman governors.",
        references: [
            {
                book: "Acts",
                chapter: 23,
                startVerse: 23,
                endVerse: 35,
            },
        ],
    },
    {
        id: "paul-rome-stop-1",
        journeyId: "paul-journey-to-rome",
        placeId: "caesarea-maritima",
        order: 1,
        description:
            "Paul departs from Caesarea after appealing to Caesar.",
        references: [
            {
                book: "Acts",
                chapter: 27,
                startVerse: 1,
                endVerse: 2,
            },
        ],
    },
    {
        id: "paul-rome-stop-2",
        journeyId: "paul-journey-to-rome",
        placeId: "sidon",
        order: 2,
        description:
            "The ship stops at Sidon, where Paul is allowed to visit friends.",
        references: [
            {
                book: "Acts",
                chapter: 27,
                startVerse: 3,
            },
        ],
    },
    {
        id: "paul-rome-stop-3",
        journeyId: "paul-journey-to-rome",
        placeId: "myra",
        order: 3,
        description:
            "At Myra, Paul is transferred to an Alexandrian ship sailing toward Italy.",
        references: [
            {
                book: "Acts",
                chapter: 27,
                startVerse: 5,
                endVerse: 6,
            },
        ],
    },
    {
        id: "paul-rome-stop-4",
        journeyId: "paul-journey-to-rome",
        placeId: "fair-havens",
        order: 4,
        description:
            "The voyage pauses at Fair Havens on Crete before continuing despite worsening conditions.",
        references: [
            {
                book: "Acts",
                chapter: 27,
                startVerse: 7,
                endVerse: 12,
            },
        ],
    },
    {
        id: "paul-rome-stop-5",
        journeyId: "paul-journey-to-rome",
        placeId: "malta",
        order: 5,
        description:
            "After the storm and shipwreck, Paul and the others reach Malta safely.",
        references: [
            {
                book: "Acts",
                chapter: 27,
                startVerse: 39,
                endVerse: 44,
            },
            {
                book: "Acts",
                chapter: 28,
                startVerse: 1,
                endVerse: 10,
            },
        ],
    },
    {
        id: "paul-rome-stop-6",
        journeyId: "paul-journey-to-rome",
        placeId: "syracuse",
        order: 6,
        description:
            "Paul's journey continues through Syracuse in Sicily.",
        references: [
            {
                book: "Acts",
                chapter: 28,
                startVerse: 12,
            },
        ],
    },
    {
        id: "paul-rome-stop-7",
        journeyId: "paul-journey-to-rome",
        placeId: "puteoli",
        order: 7,
        description:
            "Paul reaches Puteoli in Italy and spends time with believers there.",
        references: [
            {
                book: "Acts",
                chapter: 28,
                startVerse: 13,
                endVerse: 14,
            },
        ],
    },
    {
        id: "paul-rome-stop-8",
        journeyId: "paul-journey-to-rome",
        placeId: "rome",
        order: 8,
        description:
            "Paul reaches Rome and continues proclaiming the gospel while living under guard.",
        references: [
            {
                book: "Acts",
                chapter: 28,
                startVerse: 16,
                endVerse: 31,
            },
        ],
    },
    {
        id: "jacob-egypt-stop-1",
        journeyId: "jacob-family-to-egypt",
        placeId: "beersheba",
        order: 1,
        description:
            "Jacob stops at Beersheba, where God reassures him about going down to Egypt.",
        references: [
            {
                book: "Genesis",
                chapter: 46,
                startVerse: 1,
                endVerse: 7,
            },
        ],
    },
    {
        id: "jacob-egypt-stop-2",
        journeyId: "jacob-family-to-egypt",
        placeId: "goshen",
        order: 2,
        description:
            "Jacob's household arrives in Egypt and settles in Goshen.",
        references: [
            {
                book: "Genesis",
                chapter: 46,
                startVerse: 28,
                endVerse: 34,
            },
            {
                book: "Genesis",
                chapter: 47,
                startVerse: 1,
                endVerse: 12,
            },
        ],
    },
];