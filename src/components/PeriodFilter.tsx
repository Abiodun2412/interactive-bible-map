import { periods } from "@/data/periods";

type PeriodFilterProps = {
  selectedPeriodId: string | null;
  onChange: (periodId: string | null) => void;
};

export default function PeriodFilter({
  selectedPeriodId,
  onChange,
}: PeriodFilterProps) {
  return (
    <div className="absolute left-4 top-4 z-[1000] rounded-xl bg-white p-4 shadow-xl">
      <label
        htmlFor="period-filter"
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        Historical Period
      </label>

      <select
        id="period-filter"
        value={selectedPeriodId ?? ""}
        onChange={(event) =>
          onChange(event.target.value === "" ? null : event.target.value)
        }
        className="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
      >
        <option value="">All periods</option>

        {periods.map((period) => (
          <option key={period.id} value={period.id}>
            {period.name}
          </option>
        ))}
      </select>
    </div>
  );
}