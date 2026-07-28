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
  const sortedPeriods = [...periods].sort(
    (a, b) => a.startYear - b.startYear
  );

  return (
    <div className="absolute bottom-4 left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Biblical Timeline
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Explore the biblical world through historical periods
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSelectPeriod(null)}
          className="text-xs font-medium text-gray-500 hover:text-gray-900"
        >
          Show all
        </button>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="relative flex min-w-[850px] items-start justify-between px-6 pt-1">
          <div className="absolute left-6 right-6 top-[13px] h-0.5 bg-gray-300" />

          {sortedPeriods.map((period) => {
            const isSelected = selectedPeriodId === period.id;

            return (
              <button
                key={period.id}
                type="button"
                onClick={() => onSelectPeriod(period.id)}
                className="group relative z-10 flex w-48 flex-col items-center text-center"
              >
                <span
                  className={`h-6 w-6 rounded-full border-4 transition ${
                    isSelected
                      ? "border-gray-900 bg-gray-900"
                      : "border-white bg-gray-400 group-hover:bg-gray-700"
                  }`}
                />

                <div
                  className={`mt-3 rounded-lg px-3 py-2 transition ${
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