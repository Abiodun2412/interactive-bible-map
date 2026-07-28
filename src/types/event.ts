import type { BibleReference } from "@/types/bibleReference";

export type DatePrecision =
  | "exact"
  | "approximate"
  | "range"
  | "traditional"
  | "unknown";

export type Event = {
  id: string;
  title: string;
  description: string;

  placeId?: string;

  periodId: string;
  personIds: string[];

  approximateDate?: string;
  datePrecision?: DatePrecision;

  references: BibleReference[];
};