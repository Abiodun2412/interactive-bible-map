import type { BibleReference } from "@/types/bibleReference";

export type Event = {
  id: string;
  title: string;
  description: string;
  placeId: string;
  periodId: string;
  personIds: string[];
  approximateDate?: string;
  references: BibleReference[];
};