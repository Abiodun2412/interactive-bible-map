import type { BibleReference } from "@/types/bibleReference";

export type Event = {
  id: string;
  title: string;
  description: string;
  placeId: string;
  approximateDate?: string;
  references: BibleReference[];
};