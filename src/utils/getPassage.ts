import type { BibleReference } from "@/types/bibleReference";
import type { BibleTranslation } from "@/types/bibleTranslation";
import type { BibleVerse } from "@/types/bibleVerse";

export function getPassage(
    translation: BibleTranslation,
    reference: BibleReference
): BibleVerse[] {
    return translation.verses.filter((verse) => {
        if (
            verse.book !== reference.book ||
            verse.chapter !== reference.chapter
        ) {
            return false;
        }

        if (reference.startVerse === undefined) {
            return true;
        }

        if (verse.verse < reference.startVerse) {
            return false;
        }

        if (
            reference.endVerse !== undefined &&
            verse.verse > reference.endVerse
        ) {
            return false;
        }

        return true;
    });
}