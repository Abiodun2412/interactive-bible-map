import { bibleBooks } from "@/data/bible/books";

import type { BibleReference } from "@/types/bibleReference";

export function parseBibleReference(
    query: string
): BibleReference | null {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
        return null;
    }

    const match = normalizedQuery.match(
        /^(.+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/
    );

    if (!match) {
        return null;
    }

    const [, rawBook, rawChapter, rawStartVerse, rawEndVerse] =
        match;

    const matchedBook = bibleBooks.find(
        (book) =>
            book.name.toLowerCase() === rawBook.toLowerCase()
    );

    if (!matchedBook) {
        return null;
    }

    const chapter = Number(rawChapter);

    if (
        chapter < 1 ||
        chapter > matchedBook.chapters
    ) {
        return null;
    }

    const startVerse =
        rawStartVerse !== undefined
            ? Number(rawStartVerse)
            : undefined;

    const endVerse =
        rawEndVerse !== undefined
            ? Number(rawEndVerse)
            : undefined;

    if (
        startVerse !== undefined &&
        startVerse < 1
    ) {
        return null;
    }

    if (
        endVerse !== undefined &&
        endVerse < startVerse!
    ) {
        return null;
    }

    return {
        book: matchedBook.name,
        chapter,
        startVerse,
        endVerse,
    };
}