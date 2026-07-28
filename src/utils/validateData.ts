import { events } from "@/data/events";
import { journeys } from "@/data/journeys";
import { journeyStops } from "@/data/journeyStops";
import { people } from "@/data/people";
import { periods } from "@/data/periods";
import { places } from "@/data/places";

function findDuplicateIds<T extends { id: string }>(
  items: T[],
  label: string
) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const item of items) {
    if (seen.has(item.id)) {
      duplicates.add(item.id);
    }

    seen.add(item.id);
  }

  if (duplicates.size > 0) {
    console.error(
      `[Data validation] Duplicate ${label} IDs:`,
      [...duplicates]
    );
  }
}

export function validateData() {
  // Check every dataset for duplicate IDs.
  findDuplicateIds(places, "place");
  findDuplicateIds(people, "person");
  findDuplicateIds(periods, "period");
  findDuplicateIds(events, "event");
  findDuplicateIds(journeys, "journey");
  findDuplicateIds(journeyStops, "journey stop");

  const placeIds = new Set(places.map((place) => place.id));
  const personIds = new Set(people.map((person) => person.id));
  const periodIds = new Set(periods.map((period) => period.id));
  const journeyIds = new Set(journeys.map((journey) => journey.id));

  // Check event references.
  for (const event of events) {
    if (event.placeId && !placeIds.has(event.placeId)) {
      console.error(
        `[Data validation] Event "${event.id}" references missing place "${event.placeId}".`
      );
    }

    if (!periodIds.has(event.periodId)) {
      console.error(
        `[Data validation] Event "${event.id}" references missing period "${event.periodId}".`
      );
    }

    for (const personId of event.personIds) {
      if (!personIds.has(personId)) {
        console.error(
          `[Data validation] Event "${event.id}" references missing person "${personId}".`
        );
      }
    }
  }

  // Check journey references.
  for (const journey of journeys) {
    if (!periodIds.has(journey.periodId)) {
      console.error(
        `[Data validation] Journey "${journey.id}" references missing period "${journey.periodId}".`
      );
    }

    for (const personId of journey.personIds) {
      if (!personIds.has(personId)) {
        console.error(
          `[Data validation] Journey "${journey.id}" references missing person "${personId}".`
        );
      }
    }
  }

  // Check journey-stop references.
  for (const stop of journeyStops) {
    if (!journeyIds.has(stop.journeyId)) {
      console.error(
        `[Data validation] Journey stop "${stop.id}" references missing journey "${stop.journeyId}".`
      );
    }

    if (!placeIds.has(stop.placeId)) {
      console.error(
        `[Data validation] Journey stop "${stop.id}" references missing place "${stop.placeId}".`
      );
    }
  }
}