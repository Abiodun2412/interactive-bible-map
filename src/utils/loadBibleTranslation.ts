import type { BibleTranslation } from "@/types/bibleTranslation";

const translationCache = new Map<string, BibleTranslation>();

export async function loadBibleTranslation(
    translationId: string
): Promise<BibleTranslation> {
    const cached = translationCache.get(translationId);

    if (cached) {
        return cached;
    }

    const response = await fetch(`/bible/${translationId}.json`);

    if (!response.ok) {
        throw new Error(
            `Failed to load Bible translation: ${translationId}`
        );
    }

    const translation =
        (await response.json()) as BibleTranslation;

    translationCache.set(translationId, translation);

    return translation;
}