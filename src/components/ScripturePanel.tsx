"use client";

import { useEffect, useRef, useState } from "react";

import { getPassage } from "@/utils/getPassage";
import { loadBibleTranslation } from "@/utils/loadBibleTranslation";

import type { BibleTranslation } from "@/types/bibleTranslation";

import type { BibleReference } from "@/types/bibleReference";

import { bibleBooks } from "@/data/bible/books";

type ScripturePanelProps = {
    reference: BibleReference;
    onClose: () => void;
    onBack?: () => void;
};

function formatReference(reference: BibleReference) {
    const { book, chapter, startVerse, endVerse } = reference;

    if (startVerse === undefined) {
        return `${book} ${chapter}`;
    }

    if (endVerse === undefined || endVerse === startVerse) {
        return `${book} ${chapter}:${startVerse}`;
    }

    return `${book} ${chapter}:${startVerse}-${endVerse}`;
}

export default function ScripturePanel({
    reference,
    onClose,
    onBack,
}: ScripturePanelProps) {
    const panelRef = useRef<HTMLElement | null>(null);

    const [translation, setTranslation] =
        useState<BibleTranslation | null>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [activeReference, setActiveReference] =
        useState<BibleReference>(reference);

    const [showFullChapter, setShowFullChapter] = useState(false);

    const [isBookPickerOpen, setIsBookPickerOpen] = useState(false);
    const [isChapterPickerOpen, setIsChapterPickerOpen] = useState(false);

    useEffect(() => {
        const panel = panelRef.current;

        if (!panel) {
            return;
        }

        const stopPropagation = (event: Event) => {
            event.stopPropagation();
        };

        panel.addEventListener("wheel", stopPropagation);
        panel.addEventListener("mousedown", stopPropagation);
        panel.addEventListener("dblclick", stopPropagation);
        panel.addEventListener("touchstart", stopPropagation);
        panel.addEventListener("touchmove", stopPropagation);

        return () => {
            panel.removeEventListener("wheel", stopPropagation);
            panel.removeEventListener("mousedown", stopPropagation);
            panel.removeEventListener("dblclick", stopPropagation);
            panel.removeEventListener("touchstart", stopPropagation);
            panel.removeEventListener("touchmove", stopPropagation);
        };
    }, []);

    useEffect(() => {
        let cancelled = false;

        async function loadTranslation() {
            try {
                setIsLoading(true);
                setLoadError(null);

                const loadedTranslation =
                    await loadBibleTranslation("web");

                if (!cancelled) {
                    setTranslation(loadedTranslation);
                }
            } catch {
                if (!cancelled) {
                    setLoadError("Unable to load Scripture text.");
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        loadTranslation();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        setActiveReference(reference);
        setShowFullChapter(false);
    }, [reference]);

    const passageReference: BibleReference = showFullChapter
        ? {
            book: activeReference.book,
            chapter: activeReference.chapter,
        }
        : activeReference;

    const passage = translation
        ? getPassage(translation, passageReference)
        : [];

    const chapterVerses = translation
        ? translation.verses.filter(
            (verse) =>
                verse.book === activeReference.book &&
                verse.chapter === activeReference.chapter
        )
        : [];

    const maxVerse =
        chapterVerses.length > 0
            ? Math.max(
                ...chapterVerses.map((verse) => verse.verse)
            )
            : null;

    const originalChapterVerses = translation
        ? translation.verses.filter(
            (verse) =>
                verse.book === reference.book &&
                verse.chapter === reference.chapter
        )
        : [];

    const originalMaxVerse =
        originalChapterVerses.length > 0
            ? Math.max(
                ...originalChapterVerses.map((verse) => verse.verse)
            )
            : null;

    const originalReferenceIsInvalid =
        originalMaxVerse !== null &&
        (
            (
                reference.startVerse !== undefined &&
                reference.startVerse > originalMaxVerse
            ) ||
            (
                reference.endVerse !== undefined &&
                reference.endVerse > originalMaxVerse
            )
        );

    const referenceIsInvalid =
        maxVerse !== null &&
        (
            (
                activeReference.startVerse !== undefined &&
                activeReference.startVerse > maxVerse
            ) ||
            (
                activeReference.endVerse !== undefined &&
                activeReference.endVerse > maxVerse
            )
        );

    const isVerseInOriginalReference = (
        book: string,
        chapter: number,
        verse: number
    ) => {
        if (
            book !== reference.book ||
            chapter !== reference.chapter
        ) {
            return false;
        }

        if (reference.startVerse === undefined) {
            return true;
        }

        const endVerse =
            reference.endVerse ?? reference.startVerse;

        return (
            verse >= reference.startVerse &&
            verse <= endVerse
        );
    };

    const currentBookIndex = bibleBooks.findIndex(
        (book) => book.name === activeReference.book
    );

    const currentBook =
        currentBookIndex >= 0 ? bibleBooks[currentBookIndex] : null;

    const goToPreviousChapter = () => {
        if (!currentBook) {
            return;
        }

        if (activeReference.chapter > 1) {
            setActiveReference({
                book: activeReference.book,
                chapter: activeReference.chapter - 1,
            });

            setShowFullChapter(true);
            return;
        }

        if (currentBookIndex <= 0) {
            return;
        }

        const previousBook = bibleBooks[currentBookIndex - 1];

        setActiveReference({
            book: previousBook.name,
            chapter: previousBook.chapters,
        });

        setShowFullChapter(true);
    };

    const goToNextChapter = () => {
        if (!currentBook) {
            return;
        }

        if (activeReference.chapter < currentBook.chapters) {
            setActiveReference({
                book: activeReference.book,
                chapter: activeReference.chapter + 1,
            });

            setShowFullChapter(true);
            return;
        }

        if (currentBookIndex >= bibleBooks.length - 1) {
            return;
        }

        const nextBook = bibleBooks[currentBookIndex + 1];

        setActiveReference({
            book: nextBook.name,
            chapter: 1,
        });

        setShowFullChapter(true);
    };

    const isFirstChapter =
        currentBookIndex === 0 &&
        activeReference.chapter === 1;

    const isLastChapter =
        currentBookIndex === bibleBooks.length - 1 &&
        currentBook !== null &&
        activeReference.chapter === currentBook.chapters;

    const handleBookSelect = (bookName: string) => {
        setActiveReference({
            book: bookName,
            chapter: 1,
        });

        setShowFullChapter(true);
        setIsBookPickerOpen(false);
        setIsChapterPickerOpen(false);
    };

    const handleChapterSelect = (chapter: number) => {
        setActiveReference({
            book: activeReference.book,
            chapter,
        });

        setShowFullChapter(true);
        setIsChapterPickerOpen(false);
    };

    return (
        <aside
            ref={panelRef}
            className="absolute right-4 top-4 z-[1400] max-h-[calc(100vh-2rem)] w-96 overflow-y-auto overscroll-contain rounded-xl bg-white p-6 shadow-2xl"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    {onBack && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="mt-1 text-lg text-gray-500 hover:text-gray-900"
                            aria-label="Go back"
                        >
                            ←
                        </button>
                    )}

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Scripture
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                            {showFullChapter
                                ? `${activeReference.book} ${activeReference.chapter}`
                                : formatReference(activeReference)}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-xl text-gray-500 hover:text-gray-900"
                    aria-label="Close scripture panel"
                >
                    ×
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2">
                <button
                    type="button"
                    onClick={goToPreviousChapter}
                    disabled={isFirstChapter}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                    ← Previous
                </button>

                <div className="relative flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => {
                            setIsBookPickerOpen((current) => !current);
                            setIsChapterPickerOpen(false);
                        }}
                        className="rounded-lg px-2 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white"
                    >
                        {activeReference.book}
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setIsChapterPickerOpen((current) => !current);
                            setIsBookPickerOpen(false);
                        }}
                        className="rounded-lg px-2 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white"
                    >
                        {activeReference.chapter}
                    </button>

                    {isBookPickerOpen && (
                        <div className="absolute left-1/2 top-full z-20 mt-2 max-h-72 w-64 -translate-x-1/2 overflow-y-auto overscroll-contain rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                            {bibleBooks.map((book) => (
                                <button
                                    key={book.name}
                                    type="button"
                                    onClick={() => handleBookSelect(book.name)}
                                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${book.name === activeReference.book
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {book.name}
                                </button>
                            ))}
                        </div>
                    )}

                    {isChapterPickerOpen && currentBook && (
                        <div className="absolute left-1/2 top-full z-20 mt-2 max-h-72 w-56 -translate-x-1/2 overflow-y-auto overscroll-contain rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                            <div className="grid grid-cols-5 gap-2">
                                {Array.from(
                                    { length: currentBook.chapters },
                                    (_, index) => index + 1
                                ).map((chapter) => (
                                    <button
                                        key={chapter}
                                        type="button"
                                        onClick={() => handleChapterSelect(chapter)}
                                        className={`rounded-lg px-2 py-2 text-sm transition ${chapter === activeReference.chapter
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {chapter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <p className="mt-2 text-center text-xs text-gray-400">
                    {translation?.name ?? "Bible"}
                </p>

                {showFullChapter &&
                    !originalReferenceIsInvalid &&
                    reference.startVerse !== undefined &&
                    activeReference.book === reference.book &&
                    activeReference.chapter === reference.chapter && (
                        <p className="mt-2 text-center text-xs text-amber-700">
                            Highlighted: {formatReference(reference)}
                        </p>
                    )}

                <button
                    type="button"
                    onClick={goToNextChapter}
                    disabled={isLastChapter}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                    Next →
                </button>
            </div>

            {!showFullChapter &&
                activeReference.startVerse !== undefined && (
                    <button
                        type="button"
                        onClick={() => {
                            setActiveReference({
                                book: reference.book,
                                chapter: reference.chapter,
                            });

                            setShowFullChapter(true);
                        }}
                        className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Read full chapter
                    </button>
                )}

            {showFullChapter &&
                !originalReferenceIsInvalid &&
                reference.startVerse !== undefined &&
                activeReference.book === reference.book &&
                activeReference.chapter === reference.chapter && (
                    <button
                        type="button"
                        onClick={() => {
                            setActiveReference(reference);
                            setShowFullChapter(false);
                        }}
                        className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Return to selected passage
                    </button>
                )}

            <section className="mt-6">
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Passage
                    </h3>

                    {translation && (
                        <span className="text-xs text-gray-400">
                            {translation.abbreviation}
                        </span>
                    )}
                </div>

                {isLoading ? (
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-sm text-gray-600">
                            Loading Scripture...
                        </p>
                    </div>
                ) : loadError ? (
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-sm text-gray-600">
                            {loadError}
                        </p>
                    </div>
                ) : referenceIsInvalid ? (
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-sm font-semibold text-gray-900">
                            Invalid verse
                        </p>

                        <p className="mt-2 text-sm text-gray-600">
                            {activeReference.book} {activeReference.chapter}
                            {maxVerse !== null
                                ? ` contains ${maxVerse} verses.`
                                : " could not be found."}
                        </p>
                    </div>
                ) : passage.length === 0 ? (
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-sm text-gray-600">
                            No passage text was found for this reference.
                        </p>
                    </div>
                ) : (
                    <div className="mt-4 rounded-xl bg-white">
                        <div className="space-y-2 text-[15px] leading-8 text-gray-800">
                            {passage.map((verse) => {
                                const isOriginal =
                                    isVerseInOriginalReference(
                                        verse.book,
                                        verse.chapter,
                                        verse.verse
                                    );

                                return (
                                    <span
                                        key={`${verse.book}-${verse.chapter}-${verse.verse}`}
                                        className={
                                            showFullChapter && isOriginal
                                                ? "rounded bg-amber-50"
                                                : undefined
                                        }
                                    >
                                        <sup
                                            className={`mr-1 select-none text-[10px] font-semibold ${showFullChapter && isOriginal
                                                ? "text-amber-700"
                                                : "text-gray-400"
                                                }`}
                                        >
                                            {verse.verse}
                                        </sup>

                                        {verse.text}{" "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                )}
            </section>

            <section className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Reference details
                </h3>

                <dl className="mt-3 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">Book</dt>
                        <dd className="font-medium text-gray-900">
                            {activeReference.book}
                        </dd>
                    </div>

                    <div className="flex justify-between gap-4">
                        <dt className="text-gray-500">Chapter</dt>
                        <dd className="font-medium text-gray-900">
                            {activeReference.chapter}
                        </dd>
                    </div>

                    {activeReference.startVerse !== undefined && (
                        <div className="flex justify-between gap-4">
                            <dt className="text-gray-500">Starting verse</dt>
                            <dd className="font-medium text-gray-900">
                                {activeReference.startVerse}
                            </dd>
                        </div>
                    )}

                    {activeReference.endVerse !== undefined && (
                        <div className="flex justify-between gap-4">
                            <dt className="text-gray-500">Ending verse</dt>
                            <dd className="font-medium text-gray-900">
                                {activeReference.endVerse}
                            </dd>
                        </div>
                    )}
                </dl>
            </section>
        </aside>
    );
}