import type { Journey } from "@/types/journey";

export const journeys: Journey[] = [
    {
        id: "abraham-journey",
        name: "Journey of Abraham",
        description:
            "Abraham's migration from Mesopotamia into Canaan, including his travels through Egypt and the land of Canaan.",
        periodId: "patriarchs",
        personIds: ["abraham"],
    },
    {
        id: "jacob-journey",
        name: "Journey of Jacob",
        description:
            "Jacob's travels from Canaan to Haran and back, including the events surrounding Bethel, Peniel, and his return to the land.",
        periodId: "patriarchs",
        personIds: ["jacob"],
    },
    {
        id: "joseph-egypt-journey",
        name: "Joseph Taken to Egypt",
        description:
            "Joseph is taken from Canaan into Egypt, where God later raises him to a position of authority.",
        periodId: "patriarchs",
        personIds: ["joseph"],
    },
    {
        id: "israel-to-egypt",
        name: "Israel Goes to Egypt",
        description:
            "Jacob and his household leave Canaan during the famine and travel to Egypt, where Joseph is reunited with his father and the family settles in the land.",
        periodId: "patriarchs",
        personIds: ["jacob", "joseph"],
    },
    {
        id: "exodus-to-sinai",
        name: "The Exodus to Mount Sinai",
        description:
            "Israel departs from Egypt under Moses, crosses the sea by God's deliverance, and journeys through the wilderness to Mount Sinai.",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
    },
    {
        id: "wilderness-to-moab",
        name: "Wilderness Journey toward Canaan",
        description:
            "After leaving Mount Sinai, Israel journeys through the wilderness, spends significant time around Kadesh-barnea, and eventually reaches the plains of Moab opposite the Promised Land.",
        periodId: "exodus-wilderness",
        personIds: ["moses", "aaron"],
    },
    {
        id: "entry-into-canaan",
        name: "Entry into the Promised Land",
        description:
            "Under Joshua's leadership, Israel moves from the plains of Moab, crosses the Jordan, camps at Gilgal, and confronts Jericho.",
        periodId: "conquest",
        personIds: ["joshua"],
    },
    {
        id: "southern-campaign",
        name: "Joshua's Southern Campaign",
        description:
            "Joshua leads Israel from the Gibeon region through a sequence of battles across southern Canaan.",
        periodId: "conquest",
        personIds: ["joshua"],
    }, {
        id: "northern-campaign",
        name: "Joshua's Northern Campaign",
        description:
            "Joshua marches north against the coalition led by Hazor, defeats the gathered armies near the Waters of Merom, and pursues them through northern Canaan.",
        periodId: "conquest",
        personIds: ["joshua"],
    },
    {
        id: "joshua-final-years",
        name: "Joshua's Final Years",
        description:
            "Key locations associated with the settlement of the land, Joshua's inheritance, and his final covenant gathering at Shechem.",
        periodId: "conquest",
        personIds: ["joshua"],
    },
    {
        id: "samson-journey",
        name: "Samson's Journey",
        description:
            "Key locations from Samson's life and conflicts with the Philistines, from his home region around Zorah to Timnah and Gaza.",
        periodId: "judges",
        personIds: ["samson"],
    },
    {
        id: "ruth-to-bethlehem",
        name: "Ruth and Naomi Return to Bethlehem",
        description:
            "Naomi leaves Moab to return to Bethlehem, and Ruth chooses to go with her and join the people of Israel.",
        periodId: "judges",
        personIds: ["ruth", "naomi"],
    },
    {
        id: "david-flees-saul",
        name: "David Flees from Saul",
        description:
            "Key locations from David's flight from Saul, including Nob, Gath, Adullam, and En Gedi.",
        periodId: "judges",
        personIds: ["david", "saul"],
    },
    {
        id: "david-establishes-jerusalem",
        name: "David Establishes Jerusalem",
        description:
            "David moves from Hebron to Jerusalem, captures Zion, and establishes Jerusalem as the centre of the kingdom.",
        periodId: "united-monarchy",
        personIds: ["david"],
    },
    {
        id: "solomon-rise-and-temple",
        name: "Solomon's Rise & the Temple",
        description:
            "Key locations associated with Solomon's accession, his request for wisdom at Gibeon, and the building and dedication of the Temple in Jerusalem.",
        periodId: "united-monarchy",
        personIds: ["solomon"],
    },
    {
        id: "jeroboam-northern-kingdom",
        name: "Jeroboam Establishes the Northern Kingdom",
        description:
            "Key locations associated with Jeroboam's establishment of the northern kingdom after Israel divided from Judah.",
        periodId: "divided-kingdom",
        personIds: ["jeroboam"],
    },
    {
        id: "elijah-drought-carmel",
        name: "Elijah During the Drought",
        description:
            "Key locations from Elijah's ministry during the drought, from the Brook Cherith and Zarephath to the confrontation at Mount Carmel.",
        periodId: "divided-kingdom",
        personIds: ["elijah"],
    },
    {
        id: "elijah-to-horeb",
        name: "Elijah's Journey to Horeb",
        description:
            "After the events at Mount Carmel and Jezreel, Elijah flees south through Beersheba and travels to Horeb, the mountain of God.",
        periodId: "divided-kingdom",
        personIds: ["elijah"],
    },
    {
        id: "elisha-early-ministry",
        name: "Elisha's Early Ministry",
        description:
            "Key locations from Elisha's early prophetic ministry after succeeding Elijah.",
        periodId: "divided-kingdom",
        personIds: ["elisha"],
    },
    {
        id: "fall-of-northern-kingdom",
        name: "Fall of the Northern Kingdom",
        description:
            "The final collapse of the northern kingdom as Samaria falls to Assyria and Israelites are deported eastward.",
        periodId: "divided-kingdom",
        personIds: ["hoshea", "shalmaneser", "sargon"],
    },
    {
        id: "assyrian-campaign-judah",
        name: "Assyria's Campaign against Judah",
        description:
            "The Assyrian campaign through Judah culminating in the threat against Jerusalem during Hezekiah's reign.",
        periodId: "divided-kingdom",
        personIds: ["hezekiah", "sennacherib", "isaiah"],
    },
    {
        id: "josiah-reform",
        name: "Josiah's Reform",
        description:
            "Key locations associated with Josiah's covenant renewal, reforms, and final campaign.",
        periodId: "divided-kingdom",
        personIds: ["josiah"],
    },
    {
        id: "judah-babylonian-exile",
        name: "Judah's Exile to Babylon",
        description:
            "The forced deportation of people from Judah to Babylon during and after the Babylonian conquest.",
        periodId: "exile",
        personIds: ["jehoiachin", "zedekiah", "nebuchadnezzar"],
    },
    {
        id: "first-return-to-jerusalem",
        name: "The First Return to Jerusalem",
        description:
            "The return of Judean exiles from Babylonian territory to Jerusalem following Cyrus's decree.",
        periodId: "return-restoration",
        personIds: ["zerubbabel", "jeshua-high-priest"],
    },
    {
        id: "ezra-return",
        name: "Ezra's Return to Jerusalem",
        description:
            "Ezra travels from Babylon to Jerusalem with a group of returning exiles and begins his ministry of teaching and reform.",
        periodId: "return-restoration",
        personIds: ["ezra"],
    },
    {
        id: "nehemiah-return",
        name: "Nehemiah's Journey to Jerusalem",
        description:
            "Nehemiah travels from the Persian court to Jerusalem and leads the restoration of the city's walls.",
        periodId: "return-restoration",
        personIds: ["nehemiah"],
    },
    {
        id: "jesus-egypt-childhood",
        name: "Jesus' Childhood Journey",
        description:
            "Joseph takes Mary and Jesus from Bethlehem into Egypt to escape Herod, before the family later returns and settles in Nazareth.",
        periodId: "life-of-jesus",
        personIds: ["jesus", "mary", "joseph-husband-of-mary"],
    },
    {
        id: "jesus-to-baptism",
        name: "Jesus Travels to the Jordan",
        description:
            "Jesus leaves Nazareth and comes to the Jordan region, where He is baptised by John before beginning His public ministry.",
        periodId: "life-of-jesus",
        personIds: ["jesus", "john-baptist"],
    },
    {
        id: "jesus-early-ministry",
        name: "Jesus' Early Ministry",
        description:
            "A journey from the Jordan and wilderness into the opening stages of Jesus' ministry in Galilee.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "jesus-galilean-ministry",
        name: "Jesus' Galilean Ministry",
        description:
            "Key locations from Jesus' teaching and ministry around Galilee and the northern regions.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "jesus-toward-jerusalem",
        name: "Jesus Travels Toward Jerusalem",
        description:
            "Key locations from the later phase of Jesus' ministry as He moves from the northern regions toward Bethany and Jerusalem.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "jesus-entry-jerusalem",
        name: "Jesus' Entry into Jerusalem",
        description:
            "Jesus approaches Jerusalem from Bethany and the Mount of Olives before entering the city and Temple during His final week.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "jesus-arrest-and-trial",
        name: "Jesus' Arrest & Trial",
        description:
            "The final evening before the crucifixion, from the Last Supper in Jerusalem through Gethsemane, Jesus' arrest, and His hearings before Jewish and Roman authorities.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "jesus-crucifixion-resurrection",
        name: "Crucifixion & Resurrection",
        description:
            "The final movement from Jesus' Roman trial to Golgotha, His burial, and the empty tomb.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "resurrection-to-ascension",
        name: "Resurrection to Ascension",
        description:
            "The final phase of Jesus' earthly ministry after the resurrection, culminating in His ascension near the Mount of Olives.",
        periodId: "life-of-jesus",
        personIds: ["jesus"],
    },
    {
        id: "philip-ministry",
        name: "Philip's Ministry Beyond Jerusalem",
        description:
            "Philip leaves the Jerusalem-centred Church, ministers in Samaria, and later encounters the Ethiopian official on the road toward Gaza.",
        periodId: "early-church",
        personIds: ["philip-evangelist"],
    },
    {
        id: "saul-road-to-damascus",
        name: "Saul's Journey to Damascus",
        description:
            "Saul travels from Jerusalem toward Damascus intending to arrest believers, but encounters the risen Jesus on the way.",
        periodId: "early-church",
        personIds: ["paul"],
    },
    {
        id: "peter-joppa-caesarea",
        name: "Peter's Journey to Cornelius",
        description:
            "Peter ministers in Joppa and then travels north to Caesarea after being summoned to the household of Cornelius.",
        periodId: "early-church",
        personIds: ["peter", "cornelius"],
    },
    {
        id: "barnabas-brings-paul-antioch",
        name: "Barnabas Brings Paul to Antioch",
        description:
            "Barnabas travels to Tarsus to find Paul and brings him to Antioch, where they teach the growing church together.",
        periodId: "early-church",
        personIds: ["barnabas", "paul"],
    },
    {
        id: "paul-first-missionary-journey",
        name: "Paul's First Missionary Journey",
        description:
            "Paul and Barnabas travel from Antioch through Cyprus and cities of southern Galatia before returning to Antioch.",
        periodId: "early-church",
        personIds: ["paul", "barnabas"],
    },
    {
        id: "paul-second-missionary-journey",
        name: "Paul's Second Missionary Journey",
        description:
            "Paul travels through Asia Minor into Macedonia and Greece, ministering in cities including Philippi, Thessalonica, Athens, and Corinth.",
        periodId: "early-church",
        personIds: ["paul", "silas", "timothy"],
    },
    {
        id: "paul-third-missionary-journey",
        name: "Paul's Third Missionary Journey",
        description:
            "Paul travels from Antioch through Asia Minor, spends an extended period in Ephesus, then travels through Macedonia and Greece before beginning his return toward Jerusalem.",
        periodId: "early-church",
        personIds: ["paul", "timothy"],
    },
    {
        id: "paul-jerusalem-caesarea",
        name: "Paul's Transfer to Caesarea",
        description:
            "Paul is taken from Jerusalem under Roman guard to Caesarea after a plot is discovered against his life.",
        periodId: "early-church",
        personIds: ["paul"],
    },
    {
        id: "paul-journey-to-rome",
        name: "Paul's Journey to Rome",
        description:
            "Paul travels as a Roman prisoner from Caesarea across the Mediterranean, survives shipwreck on Malta, and eventually reaches Rome.",
        periodId: "early-church",
        personIds: ["paul"],
    },
    {
        id: "jacob-family-to-egypt",
        name: "Jacob's Household Moves to Egypt",
        description:
            "During the famine, Jacob travels with his household from Canaan into Egypt after learning that Joseph is alive, beginning Israel's long residence in Egypt.",
        periodId: "patriarchs",
        personIds: [
            "jacob",
            "joseph",
            "benjamin",
            "reuben",
            "simeon",
            "levi",
            "judah",
            "dan",
            "naphtali",
            "gad",
            "asher",
            "issachar",
            "zebulun",
        ],
    },
];