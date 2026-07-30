"use client";

import JourneyFilter from "@/components/JourneyFilter";
import PeriodFilter from "@/components/PeriodFilter";
import SearchPanel from "@/components/SearchPanel";

import type { SearchResult } from "@/types/searchResult";

type MapControlsProps = {
  selectedPeriodId: string | null;
  selectedJourneyId: string | null;

  onPeriodChange: (periodId: string | null) => void;
  onJourneyChange: (journeyId: string | null) => void;

  onSelectResult: (result: SearchResult) => void;
};

export default function MapControls({
  selectedPeriodId,
  selectedJourneyId,
  onPeriodChange,
  onJourneyChange,
  onSelectResult,
}: MapControlsProps) {
  return (
    <div className="absolute left-3 right-3 top-3 z-[1100] grid grid-cols-2 gap-2 sm:left-4 sm:right-auto sm:top-4 sm:flex sm:w-72 sm:flex-col sm:gap-3">
      <PeriodFilter
        selectedPeriodId={selectedPeriodId}
        onChange={onPeriodChange}
      />

      <JourneyFilter
        selectedJourneyId={selectedJourneyId}
        onChange={onJourneyChange}
      />

      <div className="col-span-2 sm:col-auto">
        <SearchPanel
          onSelectResult={onSelectResult}
        />
      </div>
    </div>
  );
}