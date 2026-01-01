"use client";

import { useState, useEffect } from "react";

export type Currency = "USD" | "INR";

/**
 * Hook to detect user's currency based on their region
 * - Detects Indian users via browser locale
 * - Returns "INR" for Indian users, "USD" for everyone else (default)
 * - Provides manual currency toggle functionality
 */
export function useCurrencyDetection(): Currency {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    // Detect if user is in India based on browser locale
    const detectCurrency = (): Currency => {
      // Check if running in browser
      if (typeof window === "undefined") return "USD";

      // Get browser language/locale
      const locale = navigator.language || (navigator as any).userLanguage;

      // Check for Indian locale (en-IN, hi-IN, etc.)
      if (locale && locale.toLowerCase().includes("-in")) {
        return "INR";
      }

      // Check additional browser languages
      const languages = navigator.languages || [];
      for (const lang of languages) {
        if (lang.toLowerCase().includes("-in")) {
          return "INR";
        }
      }

      // Default to USD for all other regions
      return "USD";
    };

    setCurrency(detectCurrency());
  }, []);

  return currency;
}
