import type { BibleTranslation } from "@/types/bibleTranslation";

export function getVerseCount(
    translation: BibleTranslation,
    book: string,
    chapter: number
): number {
    return translation.verses.filter(
        (verse) =>
            verse.book === book &&
            verse.chapter === chapter
    ).length;
}