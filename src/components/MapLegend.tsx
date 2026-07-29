"use client";

import { useState } from "react";

export default function MapLegend() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="absolute right-4 top-4 z-[1000] rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-xl transition hover:bg-gray-50"
                aria-label="Open map legend"
            >
                Legend
            </button>
        );
    }

    return (
        <div className="absolute right-4 top-4 z-[1000] w-56 rounded-xl bg-white p-4 shadow-xl">
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

            <div className="mt-4 space-y-3 text-sm text-gray-700">
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
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
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
                    </div>
                </div>
            </div>
        </div>
    );
}