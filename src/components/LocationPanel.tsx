import { events } from "@/data/events";
import type { Place } from "@/types/place";
import type { BibleReference } from "@/types/bibleReference";

type LocationPanelProps = {
  place: Place;
  onClose: () => void;
};

function formatReference(reference: BibleReference) {
  const { book, chapter, startVerse, endVerse } = reference;

  if (startVerse === undefined) {
    return `${book} ${chapter}`;
  }

  if (endVerse === undefined || endVerse === startVerse) {
    return `${book} ${chapter}:${startVerse}`;
  }

  return `${book} ${chapter}:${startVerse}-${endVerse}`;
}

export default function LocationPanel({
  place,
  onClose,
}: LocationPanelProps) {
  const placeEvents = events.filter((event) => event.placeId === place.id);

  return (
    <aside className="absolute right-4 top-4 z-[1000] max-h-[calc(100vh-2rem)] w-96 overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
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

      <p className="mb-6 leading-7 text-gray-700">
        {place.description}
      </p>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-gray-900">
          Key Events
        </h3>

        {placeEvents.length === 0 ? (
          <p className="text-sm text-gray-500">
            No events added yet.
          </p>
        ) : (
          <div className="space-y-4">
            {placeEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-lg border border-gray-200 p-4"
              >
                <h4 className="font-semibold text-gray-900">
                  {event.title}
                </h4>

                {event.approximateDate && (
                  <p className="mt-1 text-sm text-gray-500">
                    {event.approximateDate}
                  </p>
                )}

                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {event.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {event.references.map((reference, index) => (
                    <span
                      key={`${event.id}-${index}`}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                    >
                      {formatReference(reference)}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </aside>
  );
}