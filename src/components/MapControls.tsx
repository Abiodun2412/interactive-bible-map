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
    <div className="absolute left-4 top-4 z-[1100] flex w-72 flex-col gap-3">
      <PeriodFilter
        selectedPeriodId={selectedPeriodId}
        onChange={onPeriodChange}
      />

      <JourneyFilter
        selectedJourneyId={selectedJourneyId}
        onChange={onJourneyChange}
      />

      <SearchPanel
        onSelectResult={onSelectResult}
      />
    </div>
  );
}