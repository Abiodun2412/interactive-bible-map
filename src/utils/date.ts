export function formatHistoricalYear(year: number) {
  if (year < 0) {
    return `${Math.abs(year)} BC`;
  }

  if (year > 0) {
    return `${year} AD`;
  }

  return "AD 1";
}