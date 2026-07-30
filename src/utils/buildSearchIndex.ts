import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { people } from "@/data/people";
import { places } from "@/data/places";

import type { SearchResult } from "@/types/searchResult";
import { searchAliases } from "@/data/searchAliases";

export function buildSearchIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    places.forEach((place) => {
        results.push({
            id: place.id,
            type: "place",
            title: place.name,
            subtitle: place.modernName,
            searchText: [
                place.name,
                place.modernName,
                place.region,
                place.description,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase(),
        });
    });

    people.forEach((person) => {
        const aliases = searchAliases[person.id] ?? [];

        results.push({
            id: person.id,
            type: "person",
            title: person.name,
            subtitle: "Biblical person",
            aliases,
            searchText: [
                person.name,
                person.description,
                ...aliases,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase(),
        });
    });

    events.forEach((event) => {
        results.push({
            id: event.id,
            type: "event",
            title: event.title,
            subtitle: "Biblical event",
            searchText: [
                event.title,
                event.description,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase(),
        });
    });

    journeys.forEach((journey) => {
        results.push({
            id: journey.id,
            type: "journey",
            title: journey.name,
            subtitle: "Biblical journey",
            searchText: [
                journey.name,
                journey.description,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase(),
        });
    });

    return results;
}