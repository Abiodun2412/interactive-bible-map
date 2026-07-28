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
];