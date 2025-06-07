/**
 * Skip helper utilities
 */

/**
 * Generate skip features based on skip data
 * @param {Object} skip - Skip data object
 * @returns {Array} Array of feature strings
 */
export const getSkipFeatures = (skip) => {
  const features = [];
  if (skip.allowed_on_road) features.push('Road Placement');
  if (skip.allows_heavy_waste) features.push('Heavy Waste');
  features.push(`${skip.hire_period_days} Day Hire`);
  return features;
};

/**
 * Check if skip size can be increased
 * @param {number} currentIndex - Current skip index
 * @param {number} totalSkips - Total number of skips
 * @returns {boolean} Whether size can be increased
 */
export const canIncreaseSize = (currentIndex, totalSkips) => {
  return currentIndex < totalSkips - 1;
};

/**
 * Check if skip size can be decreased
 * @param {number} currentIndex - Current skip index
 * @returns {boolean} Whether size can be decreased
 */
export const canDecreaseSize = (currentIndex) => {
  return currentIndex > 0;
}; 