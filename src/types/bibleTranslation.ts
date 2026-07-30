import type { BibleVerse } from "@/types/bibleVerse";

export type BibleTranslation = {
    id: string;
    name: string;
    abbreviation: string;
    language: string;
    verses: BibleVerse[];
};