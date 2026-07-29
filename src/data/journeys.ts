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
];