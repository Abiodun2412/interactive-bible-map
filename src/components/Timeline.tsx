"use client";

import { useEffect, useRef } from "react";

import { periods } from "@/data/periods";
import { formatHistoricalYear } from "@/utils/date";

type TimelineProps = {
  selectedPeriodId: string | null;
  onSelectPeriod: (periodId: string | null) => void;
};

export default function Timeline({
  selectedPeriodId,
  onSelectPeriod,
}: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const sortedPeriods = [...periods].sort(
    (a, b) => a.startYear - b.startYear
  );

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    const stopPropagation = (event: Event) => {
      event.stopPropagation();
    };

    timeline.addEventListener("wheel", stopPropagation);
    timeline.addEventListener("touchmove", stopPropagation);

    return () => {
      timeline.removeEventListener("wheel", stopPropagation);
      timeline.removeEventListener("touchmove", stopPropagation);
    };
  }, []);

  const scrollTimeline = (direction: "left" | "right") => {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    timeline.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-4 left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Biblical Timeline
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Explore the biblical world through historical periods
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTimeline("left")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
            aria-label="Scroll timeline left"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollTimeline("right")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
            aria-label="Scroll timeline right"
          >
            →
          </button>

          <button
            type="button"
            onClick={() => onSelectPeriod(null)}
            className="ml-1 text-xs font-medium text-gray-500 hover:text-gray-900"
          >
            Show all
          </button>
        </div>
      </div>

      <div
        ref={timelineRef}
        className="overflow-x-auto overscroll-contain pb-2"
      >
        <div className="relative flex min-w-max items-start gap-8 px-6 pt-1">
          <div className="absolute left-6 right-6 top-[13px] h-0.5 bg-gray-300" />

          {sortedPeriods.map((period) => {
            const isSelected = selectedPeriodId === period.id;

            return (
              <button
                key={period.id}
                type="button"
                onClick={() => onSelectPeriod(period.id)}
                className="group relative z-10 flex w-44 flex-none flex-col items-center text-center"
              >
                <span
                  className={`h-6 w-6 rounded-full border-4 transition ${
                    isSelected
                      ? "border-gray-900 bg-gray-900"
                      : "border-white bg-gray-400 group-hover:bg-gray-700"
                  }`}
                />

                <div
                  className={`mt-3 w-full rounded-lg px-3 py-2 transition ${
                    isSelected
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-900 group-hover:bg-gray-100"
                  }`}
                >
                  <p className="text-sm font-semibold">
                    {period.name}
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      isSelected ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {formatHistoricalYear(period.startYear)}
                    {" – "}
                    {formatHistoricalYear(period.endYear)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}