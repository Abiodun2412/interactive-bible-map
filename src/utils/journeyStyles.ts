type JourneyStyle = {
  color: string;
  weight: number;
  opacity: number;
  dashArray?: string;
};

export function getJourneyStyle(periodId: string): JourneyStyle {
  switch (periodId) {
    case "patriarchs":
      return {
        color: "#92400e",
        weight: 4,
        opacity: 0.85,
      };

    case "exodus-wilderness":
      return {
        color: "#b45309",
        weight: 4,
        opacity: 0.85,
        dashArray: "8 6",
      };

    case "conquest":
      return {
        color: "#166534",
        weight: 4,
        opacity: 0.85,
      };

    case "judges":
      return {
        color: "#7e22ce",
        weight: 4,
        opacity: 0.85,
      };

    case "united-monarchy":
      return {
        color: "#1d4ed8",
        weight: 4,
        opacity: 0.85,
      };

    case "divided-kingdom":
      return {
        color: "#be123c",
        weight: 4,
        opacity: 0.85,
      };

    default:
      return {
        color: "#374151",
        weight: 4,
        opacity: 0.85,
      };
  }
}