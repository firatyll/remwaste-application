import { useState, useEffect } from 'react';
import skipsData from '../../../../data/skips.json';
import { calculateTotalPrice, canIncreaseSize, canDecreaseSize } from '../../../../utils';

export const useSkipSelection = () => {
  const [selectedSkipIndex, setSelectedSkipIndex] = useState(0);
  const [selectedSkip, setSelectedSkip] = useState(skipsData[0]);

  // Update selected skip when index changes
  useEffect(() => {
    setSelectedSkip(skipsData[selectedSkipIndex]);
  }, [selectedSkipIndex]);

  // Calculate price information
  const priceInfo = calculateTotalPrice(selectedSkip);

  // Handle size increase
  const handleSizeIncrease = () => {
    if (canIncreaseSize(selectedSkipIndex, skipsData.length)) {
      setSelectedSkipIndex(selectedSkipIndex + 1);
    }
  };

  // Handle size decrease
  const handleSizeDecrease = () => {
    if (canDecreaseSize(selectedSkipIndex)) {
      setSelectedSkipIndex(selectedSkipIndex - 1);
    }
  };

  return {
    selectedSkip,
    selectedSkipIndex,
    priceInfo,
    handleSizeIncrease,
    handleSizeDecrease,
    canIncrease: canIncreaseSize(selectedSkipIndex, skipsData.length),
    canDecrease: canDecreaseSize(selectedSkipIndex),
    totalSkips: skipsData.length
  };
}; 