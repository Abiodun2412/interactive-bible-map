"use client";

import JourneyFilter from "@/components/JourneyFilter";
import PeriodFilter from "@/components/PeriodFilter";
import SearchPanel from "@/components/SearchPanel";

type MapControlsProps = {
  selectedPeriodId: string | null;
  selectedJourneyId: string | null;

  onPeriodChange: (periodId: string | null) => void;
  onJourneyChange: (journeyId: string | null) => void;

  onSelectPlace: (placeId: string) => void;
  onSelectJourney: (journeyId: string) => void;
  onSelectPerson: (personId: string) => void;
};

export default function MapControls({
  selectedPeriodId,
  selectedJourneyId,
  onPeriodChange,
  onJourneyChange,
  onSelectPlace,
  onSelectJourney,
  onSelectPerson,
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
        onSelectPlace={onSelectPlace}
        onSelectJourney={onSelectJourney}
        onSelectPerson={onSelectPerson}
      />
    </div>
  );
}