import { people } from "@/data/people";
import { personRelationships } from "@/data/personRelationships";

export function validateRelationships() {
    const personIds = new Set(
        people.map((person) => person.id)
    );

    const relationshipIds = new Set<string>();
    const relationshipKeys = new Set<string>();

    for (const relationship of personRelationships) {
        if (relationshipIds.has(relationship.id)) {
            console.error(
                `[Relationship validation] Duplicate relationship ID "${relationship.id}".`
            );
        }

        relationshipIds.add(relationship.id);

        if (!personIds.has(relationship.personId)) {
            console.error(
                `[Relationship validation] Relationship "${relationship.id}" references missing person "${relationship.personId}".`
            );
        }

        if (!personIds.has(relationship.relatedPersonId)) {
            console.error(
                `[Relationship validation] Relationship "${relationship.id}" references missing related person "${relationship.relatedPersonId}".`
            );
        }

        if (
            relationship.personId ===
            relationship.relatedPersonId
        ) {
            console.error(
                `[Relationship validation] Relationship "${relationship.id}" relates person "${relationship.personId}" to themselves.`
            );
        }

        const relationshipKey = [
            relationship.personId,
            relationship.relatedPersonId,
            relationship.type,
        ].join("|");

        if (relationshipKeys.has(relationshipKey)) {
            console.error(
                `[Relationship validation] Duplicate relationship detected: ${relationship.personId} → ${relationship.relatedPersonId} (${relationship.type}).`
            );
        }

        relationshipKeys.add(relationshipKey);
    }
}