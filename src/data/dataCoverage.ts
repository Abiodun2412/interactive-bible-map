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
    {
        id: "patriarchs-abraham",
        name: "Abraham, Sarah, Lot, Hagar & Ishmael",
        periodId: "patriarchs",
        areas: ["people", "places", "events", "relationships"],
        status: "complete",
    },
    {
        id: "patriarchs-isaac",
        name: "Isaac, Rebekah, Jacob & Esau",
        periodId: "patriarchs",
        areas: ["people", "events", "relationships"],
        status: "complete",
    },
    {
        id: "patriarchs-jacob-family",
        name: "Jacob's Household & Children",
        periodId: "patriarchs",
        areas: ["people", "events", "relationships"],
        status: "complete",
    },
    {
        id: "patriarchs-joseph",
        name: "Joseph Narrative & Migration into Egypt",
        periodId: "patriarchs",
        areas: ["people", "places", "events", "journeys", "relationships"],
        status: "complete",
    },
    {
        id: "exodus-core-people",
        name: "Moses, Aaron, Miriam & Midian Household",
        periodId: "exodus-wilderness",
        areas: ["people", "events", "relationships"],
        status: "complete",
    },
    {
        id: "exodus-deliverance-sinai",
        name: "Exodus, Deliverance & Sinai",
        periodId: "exodus-wilderness",
        areas: ["people", "places", "events"],
        status: "complete",
    },
];