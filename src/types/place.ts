export type IdentificationStatus =
  | "well-established"
  | "probable"
  | "traditional"
  | "disputed"
  | "unknown";

export type Place = {
  id: string;
  name: string;
  modernName: string;
  latitude: number;
  longitude: number;
  type: string;
  region: string;
  description: string;

  identificationStatus: IdentificationStatus;
  identificationNote?: string;
};