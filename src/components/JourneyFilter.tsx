import { journeys } from "@/data/journeys";

type JourneyFilterProps = {
  selectedJourneyId: string | null;
  onChange: (journeyId: string | null) => void;
};

export default function JourneyFilter({
  selectedJourneyId,
  onChange,
}: JourneyFilterProps) {
  return (
    <div className="absolute left-4 top-28 z-[1000] rounded-xl bg-white p-4 shadow-xl">
      <label
        htmlFor="journey-filter"
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        Journey
      </label>

      <select
        id="journey-filter"
        value={selectedJourneyId ?? ""}
        onChange={(event) =>
          onChange(event.target.value === "" ? null : event.target.value)
        }
        className="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
      >
        <option value="">All journeys</option>

        {journeys.map((journey) => (
          <option key={journey.id} value={journey.id}>
            {journey.name}
          </option>
        ))}
      </select>
    </div>
  );
}