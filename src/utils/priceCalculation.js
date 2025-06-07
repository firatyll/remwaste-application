/**
 * Price calculation utilities for skip pricing
 */

/**
 * Calculate total price including VAT for a skip
 * @param {Object} skip - Skip data object
 * @returns {Object} Price breakdown object
 */
export const calculateTotalPrice = (skip) => {
  const basePrice = skip.price_before_vat || 0;
  const transportCost = skip.transport_cost || 0;
  const perTonneCost = skip.per_tonne_cost || 0;
  
  // VAT is calculated only on base price
  const vatAmount = (basePrice * skip.vat) / 100;
  const total = basePrice + transportCost + perTonneCost + vatAmount;
  
  return {
    subtotal: basePrice + transportCost + perTonneCost,
    vatAmount,
    total,
    priceBeforeVat: basePrice,
    transportCost,
    perTonneCost
  };
};

/**
 * Format price for display
 * @param {number} price - Price to format
 * @param {boolean} includeSymbol - Whether to include £ symbol
 * @returns {string} Formatted price
 */
export const formatPrice = (price, includeSymbol = true) => {
  const formattedPrice = Math.round(price).toString();
  return includeSymbol ? `£${formattedPrice}` : formattedPrice;
}; 