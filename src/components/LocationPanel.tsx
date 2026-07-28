import { events } from "@/data/events";
import { people } from "@/data/people";
import { periods } from "@/data/periods";
import type { BibleReference } from "@/types/bibleReference";
import type { Place } from "@/types/place";

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
            {placeEvents.map((event) => {
              const period = periods.find(
                (period) => period.id === event.periodId
              );

              const eventPeople = people.filter((person) =>
                event.personIds.includes(person.id)
              );

              return (
                <article
                  key={event.id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <h4 className="font-semibold text-gray-900">
                    {event.title}
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {period && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                        {period.name}
                      </span>
                    )}

                    {event.approximateDate && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                        {event.approximateDate}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {event.description}
                  </p>

                  {eventPeople.length > 0 && (
                    <div className="mt-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        People
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {eventPeople.map((person) => (
                          <span
                            key={person.id}
                            className="rounded-full bg-gray-900 px-2 py-1 text-xs text-white"
                          >
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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
              );
            })}
          </div>
        )}
      </section>
    </aside>
  );
}