import { searchIndex } from "@/utils/searchIndex";
import { parseBibleReference } from "@/utils/parseBibleReference";

import type { SearchResult } from "@/types/searchResult";

function getSearchScore(
    result: SearchResult,
    query: string
): number {
    const title = result.title.toLowerCase();

    const aliases =
        result.aliases?.map((alias) =>
            alias.toLowerCase()
        ) ?? [];

    if (title === query) {
        return 100;
    }

    if (aliases.includes(query)) {
        return 90;
    }

    if (title.startsWith(query)) {
        return 80;
    }

    if (
        aliases.some((alias) =>
            alias.startsWith(query)
        )
    ) {
        return 70;
    }

    if (title.includes(query)) {
        return 60;
    }

    if (
        aliases.some((alias) =>
            alias.includes(query)
        )
    ) {
        return 50;
    }

    if (result.searchText.includes(query)) {
        return 20;
    }

    return 0;
}

export function searchBibleMap(
    query: string
): SearchResult[] {
    const normalizedQuery = query
        .trim()
        .toLowerCase();

    if (!normalizedQuery) {
        return [];
    }

    const results: SearchResult[] = [];

    const scriptureReference =
        parseBibleReference(query);

    if (scriptureReference) {
        const {
            book,
            chapter,
            startVerse,
            endVerse,
        } = scriptureReference;

        let title = `${book} ${chapter}`;

        if (startVerse !== undefined) {
            title += `:${startVerse}`;

            if (
                endVerse !== undefined &&
                endVerse !== startVerse
            ) {
                title += `-${endVerse}`;
            }
        }

        results.push({
            id: `scripture-${title}`,
            type: "scripture",
            title,
            subtitle: "Scripture",
            searchText: title.toLowerCase(),
        });
    }

    const indexedResults = searchIndex
        .map((result) => ({
            result,
            score: getSearchScore(
                result,
                normalizedQuery
            ),
        }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => {
            if (a.score !== b.score) {
                return b.score - a.score;
            }

            return a.result.title.localeCompare(
                b.result.title
            );
        })
        .map(({ result }) => result);

    return [
        ...results,
        ...indexedResults,
    ].slice(0, 50);
}