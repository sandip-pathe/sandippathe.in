import { Currency } from "@/hooks/useCurrencyDetection";

// Fixed exchange rate: 1 USD = 83 INR
const USD_TO_INR_RATE = 83;

/**
 * Format a price range based on the user's currency
 * @param minUSD - Minimum price in USD
 * @param maxUSD - Maximum price in USD
 * @param currency - Target currency (USD or INR)
 * @returns Formatted price range string
 */
export function formatPriceRange(
  minUSD: number,
  maxUSD: number,
  currency: Currency
): string {
  if (currency === "INR") {
    // Convert to INR and format in Lakhs (1 Lakh = 100,000)
    const minINR = minUSD * USD_TO_INR_RATE;
    const maxINR = maxUSD * USD_TO_INR_RATE;

    // Format in Lakhs
    const minLakhs = minINR / 100000;
    const maxLakhs = maxINR / 100000;

    // Format with proper decimal places
    const formatLakh = (value: number): string => {
      if (value === Math.floor(value)) {
        return `${Math.floor(value)}L`;
      }
      return `${value.toFixed(1)}L`;
    };

    return `₹${formatLakh(minLakhs)} - ₹${formatLakh(maxLakhs)}`;
  }

  // Format in USD with comma separators
  const formatUSD = (value: number): string => {
    return `$${value.toLocaleString("en-US")}`;
  };

  return `${formatUSD(minUSD)} - ${formatUSD(maxUSD)}`;
}

/**
 * Format a monthly price based on the user's currency
 * @param priceUSD - Monthly price in USD
 * @param currency - Target currency (USD or INR)
 * @returns Formatted monthly price string
 */
export function formatMonthlyPrice(
  priceUSD: number,
  currency: Currency
): string {
  if (currency === "INR") {
    const priceINR = priceUSD * USD_TO_INR_RATE;

    // Format in thousands (K)
    if (priceINR >= 1000) {
      const thousands = priceINR / 1000;
      return `₹${Math.round(thousands)}K`;
    }

    return `₹${priceINR.toLocaleString("en-IN")}`;
  }

  return `$${priceUSD.toLocaleString("en-US")}`;
}

/**
 * Format a single price value based on the user's currency
 * @param priceUSD - Price in USD
 * @param currency - Target currency (USD or INR)
 * @returns Formatted price string
 */
export function formatPrice(priceUSD: number, currency: Currency): string {
  if (currency === "INR") {
    const priceINR = priceUSD * USD_TO_INR_RATE;

    // Format in Lakhs if >= 1 Lakh
    if (priceINR >= 100000) {
      const lakhs = priceINR / 100000;
      if (lakhs === Math.floor(lakhs)) {
        return `₹${Math.floor(lakhs)}L`;
      }
      return `₹${lakhs.toFixed(1)}L`;
    }

    // Format in thousands (K) if >= 1000
    if (priceINR >= 1000) {
      const thousands = priceINR / 1000;
      return `₹${Math.round(thousands)}K`;
    }

    return `₹${priceINR.toLocaleString("en-IN")}`;
  }

  return `$${priceUSD.toLocaleString("en-US")}`;
}
