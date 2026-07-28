import type { BibleReference } from "@/types/bibleReference";

export type JourneyStop = {
  id: string;
  journeyId: string;
  placeId: string;
  order: number;
  description: string;
  references: BibleReference[];
};