import type { PersonRelationship } from "@/types/personRelationship";

export const personRelationships: PersonRelationship[] = [
    {
        id: "jacob-joseph-parent",
        personId: "jacob",
        relatedPersonId: "joseph",
        type: "parent",
        description: "Jacob was the father of Joseph.",
    },
    {
        id: "joseph-jacob-child",
        personId: "joseph",
        relatedPersonId: "jacob",
        type: "child",
        description: "Joseph was a son of Jacob.",
    },
    {
        id: "david-solomon-parent",
        personId: "david",
        relatedPersonId: "solomon",
        type: "parent",
        description: "David was the father of Solomon.",
    },
    {
        id: "solomon-david-child",
        personId: "solomon",
        relatedPersonId: "david",
        type: "child",
        description: "Solomon was a son of David.",
    },
    {
        id: "mary-jesus-parent",
        personId: "mary",
        relatedPersonId: "jesus",
        type: "parent",
        description: "Mary was the mother of Jesus.",
    },
    {
        id: "jesus-mary-child",
        personId: "jesus",
        relatedPersonId: "mary",
        type: "child",
        description: "Jesus was born to Mary.",
    },
    {
        id: "paul-timothy-mentor",
        personId: "paul",
        relatedPersonId: "timothy",
        type: "mentor",
        description: "Paul mentored Timothy in ministry.",
    },
    {
        id: "timothy-paul-disciple",
        personId: "timothy",
        relatedPersonId: "paul",
        type: "disciple",
        description: "Timothy served and learned alongside Paul.",
    },
];