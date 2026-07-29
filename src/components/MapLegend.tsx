export default function MapLegend() {
  return (
    <div className="absolute right-4 top-4 z-[1000] w-56 rounded-xl bg-white p-4 shadow-xl">
      <h2 className="text-sm font-semibold text-gray-900">
        Map Legend
      </h2>

      <div className="mt-3 space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-gray-900" />
          <span>Selected location</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-1 w-8 bg-[#92400e]" />
          <span>Patriarchs</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-1 w-8 border-t-2 border-dashed border-[#b45309]" />
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
      </div>
    </div>
  );
}