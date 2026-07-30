"use client";

import { useState } from "react";

export default function MapLegend() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="absolute right-3 top-3 z-[1000] rounded-xl bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-xl transition hover:bg-gray-50 sm:right-4 sm:top-4 sm:px-4 sm:py-3 sm:text-sm"
                aria-label="Open map legend"
            >
                Legend
            </button>
        );
    }

    return (
        <div className="absolute right-3 top-3 z-[1000] max-h-[70vh] w-48 overflow-y-auto rounded-xl bg-white p-3 shadow-xl sm:right-4 sm:top-4 sm:w-56 sm:p-4">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-semibold text-gray-900">
                    Map Legend
                </h2>

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                    aria-label="Close map legend"
                >
                    ×
                </button>
            </div>

            <div className="mt-3 space-y-2.5 text-xs text-gray-700 sm:mt-4 sm:space-y-3 sm:text-sm">
                <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-gray-900" />
                    <span>Selected location</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-gray-900 bg-white text-xs font-bold text-gray-900">
                        1
                    </span>
                    <span>Journey stop</span>
                </div>

                <div className="border-t border-gray-200 pt-3">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400 sm:mb-3 sm:text-xs">
                        Journey periods
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#92400e]" />
                            <span>Patriarchs</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-8 border-t-2 border-dashed border-[#b45309]" />
                            <span>Exodus & Wilderness</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#166534]" />
                            <span>Joshua & Conquest</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#7e22ce]" />
                            <span>Judges</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#1d4ed8]" />
                            <span>United Monarchy</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#be123c]" />
                            <span>Divided Kingdom</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-8 border-t-2 border-dashed border-[#4b5563]" />
                            <span>Exile</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#0f766e]" />
                            <span>Return & Restoration</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#dc2626]" />
                            <span>Life of Jesus</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-1 w-8 bg-[#2563eb]" />
                            <span>Early Church</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}