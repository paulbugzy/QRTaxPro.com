// src/utils/taxYear.ts

const today = new Date();
const currentYear = today.getFullYear();

// Month index is 0-based → 10 = November
const switchDate = new Date(currentYear, 10, 13); // Nov 13

// Rolls over on November 13 each year
export const TAX_DISPLAY_YEAR = today >= switchDate ? currentYear : currentYear - 1;

// 3-year tax range: (year - 2), (year - 1), (year)
export const TAX_YEAR_RANGE: [number, number, number] = [
  TAX_DISPLAY_YEAR - 2,
  TAX_DISPLAY_YEAR - 1,
  TAX_DISPLAY_YEAR,
];

// Helper to format like: "2023, 2024 & 2025"
export function formatTaxYearRange(
  separator = ', ',
  lastSeparator = ' & '
): string {
  const [a, b, c] = TAX_YEAR_RANGE;
  return `${a}${separator}${b}${lastSeparator}${c}`;
}
