export type PersonRelationshipType =
    | "parent"
    | "child"
    | "spouse"
    | "sibling"
    | "mentor"
    | "disciple"
    | "king"
    | "prophet"
    | "friend"
    | "opponent"
    | "associate";

export type PersonRelationship = {
    id: string;
    personId: string;
    relatedPersonId: string;
    type: PersonRelationshipType;
    description?: string;
};