export type CoverageArea =
    | "people"
    | "places"
    | "events"
    | "journeys"
    | "relationships";

export type CoverageItem = {
    id: string;
    name: string;
    periodId: string;
    areas: CoverageArea[];
    status: "complete" | "partial" | "missing";
    notes?: string;
};

export const dataCoverage: CoverageItem[] = [
    {
        id: "primeval-creation-fall",
        name: "Creation & Fall",
        periodId: "primeval-history",
        areas: ["people", "places", "events", "relationships"],
        status: "complete",
    },
    {
        id: "primeval-cain-abel",
        name: "Cain & Abel",
        periodId: "primeval-history",
        areas: ["people", "events", "relationships"],
        status: "complete",
    },
    {
        id: "primeval-noah-flood",
        name: "Noah & the Flood",
        periodId: "primeval-history",
        areas: ["people", "places", "events", "relationships"],
        status: "complete",
    },
    {
        id: "primeval-nations",
        name: "Noah's Descendants & the Nations",
        periodId: "primeval-history",
        areas: ["people", "events", "relationships"],
        status: "complete",
    },
    {
        id: "primeval-babel",
        name: "Tower of Babel",
        periodId: "primeval-history",
        areas: ["places", "events"],
        status: "complete",
    },
];