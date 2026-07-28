import type { Place } from "@/types/place";

type LocationPanelProps = {
  place: Place;
  onClose: () => void;
};

export default function LocationPanel({
  place,
  onClose,
}: LocationPanelProps) {
  return (
    <aside className="absolute right-4 top-4 z-[1000] w-80 rounded-xl bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {place.name}
          </h2>

          <p className="text-sm text-gray-500">
            {place.modernName}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-xl text-gray-500 hover:text-gray-900"
          aria-label="Close location panel"
        >
          ×
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {place.type}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {place.region}
        </span>
      </div>

      <p className="leading-7 text-gray-700">
        {place.description}
      </p>
    </aside>
  );
}