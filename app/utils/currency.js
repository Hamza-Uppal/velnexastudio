export const exchangeRates = {
  USD: 1,
  AED: 3.67,
  GBP: 0.79,
  EUR: 0.92,
  INR: 83,
  SAR: 3.75,
};

export const localeCurrencyMap = {
  "en-AE": "AED",
  "ar-AE": "AED",
  "en-GB": "GBP",
  "en-US": "USD",
  "en-IN": "INR",
  "hi-IN": "INR",
  "ar-SA": "SAR",
  "en-SA": "SAR",
  "de-DE": "EUR",
  "fr-FR": "EUR",
  "it-IT": "EUR",
  "es-ES": "EUR",
};

export function detectCurrency() {
  if (typeof window === "undefined") return "USD";
  const lang = navigator.language || "en-US";
  return localeCurrencyMap[lang] || "USD";
}

export function convertPrice(priceUSD, currency) {
  const rate = exchangeRates[currency] || 1;
  return Math.round(priceUSD * rate);
}

export function getCurrencySymbol(currency) {
  const symbols = {
    USD: "$",
    AED: "AED ",
    GBP: "£",
    EUR: "€",
    INR: "₹",
    SAR: "SAR ",
  };

  return symbols[currency] || "$";
}