import React, { useState, useEffect } from 'react';
import skipsData from '../data/skips.json';
import ThemeToggle from './ThemeToggle';
import './SkipSelection.css';

const SkipSelection = () => {
  const [selectedSkipIndex, setSelectedSkipIndex] = useState(0);
  const [selectedSkip, setSelectedSkip] = useState(skipsData[0]);

  // Update selected skip when index changes
  useEffect(() => {
    setSelectedSkip(skipsData[selectedSkipIndex]);
  }, [selectedSkipIndex]);

  // Calculate total price including VAT
  const calculateTotalPrice = (skip) => {
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

  const priceInfo = calculateTotalPrice(selectedSkip);

  // Adjust skip size with +/- controls
  const handleSizeIncrease = () => {
    if (selectedSkipIndex < skipsData.length - 1) {
      setSelectedSkipIndex(selectedSkipIndex + 1);
    }
  };

  const handleSizeDecrease = () => {
    if (selectedSkipIndex > 0) {
      setSelectedSkipIndex(selectedSkipIndex - 1);
    }
  };

  // Generate skip features based on data
  const getSkipFeatures = (skip) => {
    const features = [];
    if (skip.allowed_on_road) features.push('Road Placement');
    if (skip.allows_heavy_waste) features.push('Heavy Waste');
    features.push(`${skip.hire_period_days} Day Hire`);
    return features;
  };

  return (
    <div className="skip-selection">
      {/* Main Content */}
      <div className="main-content">
        {/* Simple Navigation Header */}
        <div className="simple-nav-header">
          <button 
            className="nav-btn prev-btn" 
            disabled={true}
          >
            <span className="arrow">◀</span>
            <span>Previous</span>
          </button>
          <div className="current-stage">
            <span className="stage-text">Choose Your Skip Size</span>
          </div>
          <div className="nav-right-section">
            <ThemeToggle />
            <button 
              className="nav-btn next-btn" 
              disabled={false}
            >
              <span>Next</span>
              <span className="arrow">▶</span>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="desktop-layout">
          <div className="wireframe-container">
            <div className="wireframe-container-inner">
              {/* Left Section - Skip Photo */}
              <div className="wireframe-left">
              <div className="skip-photo">
                <div className="skip-illustration">
                  <div className="skip-container">
                    <div className="skip-body"></div>
                    <div className="skip-badge">{selectedSkip.size} Yards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Skip Information */}
            <div className="wireframe-right">
              <h2 className="skip-information-title">Skip Details</h2>
              
              <div className="features-section">
                {getSkipFeatures(selectedSkip).map((feature, index) => (
                  <div key={index} className="feature-item-wireframe">
                    <span className="feature-icon-wireframe">✅</span>
                    <span className="feature-text-wireframe">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="price-section-wireframe">
                <div className="price-item">
                  <span className="price-label">VAT ({selectedSkip.vat}%):</span>
                  <span className="price-value">£{priceInfo.vatAmount.toFixed(0)}</span>
                </div>
                {priceInfo.transportCost > 0 && (
                  <div className="price-item">
                    <span className="price-label">TRANSPORT:</span>
                    <span className="price-value">£{priceInfo.transportCost}</span>
                  </div>
                )}
                <div className="price-item">
                  <span className="price-label">BASE PRICE:</span>
                  <span className="price-value">£{priceInfo.priceBeforeVat}</span>
                </div>
                {priceInfo.perTonneCost > 0 && (
                  <div className="price-item">
                    <span className="price-label">PER TONNE:</span>
                    <span className="price-value">£{priceInfo.perTonneCost}</span>
                  </div>
                )}
                <div className="price-divider"></div>
                <div className="price-total">
                  £{priceInfo.total.toFixed(0)}
                </div>
              </div>
            </div>

            {/* Bottom Section - Size Controls */}
            <div className="size-controls-wireframe">
              <button 
                className="size-btn-wireframe decrease-btn" 
                onClick={handleSizeDecrease}
                disabled={selectedSkipIndex === 0}
              >
                ◀
              </button>
              <span className="size-display-wireframe">{selectedSkip.size} Yard</span>
              <button 
                className="size-btn-wireframe increase-btn" 
                onClick={handleSizeIncrease}
                disabled={selectedSkipIndex === skipsData.length - 1}
              >
                ▶
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-layout">
          <div className="mobile-section">
            <div className="mobile-skip-photo">
              <div className="skip-illustration">
                <div className="skip-container">
                  <div className="skip-body"></div>
                  <div className="skip-badge">{selectedSkip.size} Yards</div>
                </div>
              </div>
            </div>

            <div className="mobile-size-controls">
              <button 
                className="size-btn" 
                onClick={handleSizeDecrease}
                disabled={selectedSkipIndex === 0}
              >
                ◀
              </button>
              <span className="size-display">{selectedSkip.size} yard</span>
              <button 
                className="size-btn" 
                onClick={handleSizeIncrease}
                disabled={selectedSkipIndex === skipsData.length - 1}
              >
                ▶
              </button>
            </div>

            <div className="mobile-skip-info">
              <div className="mobile-features">
                {getSkipFeatures(selectedSkip).map((feature, index) => (
                  <span key={index} className="mobile-feature">{feature}</span>
                ))}
              </div>
            </div>

            <div className="mobile-price">
              <div className="mobile-price-breakdown">
                <div className="mobile-price-item">
                  <span>VAT ({selectedSkip.vat}%):</span>
                  <span>£{priceInfo.vatAmount.toFixed(0)}</span>
                </div>
                {priceInfo.transportCost > 0 && (
                  <div className="mobile-price-item">
                    <span>TRANSPORT:</span>
                    <span>£{priceInfo.transportCost}</span>
                  </div>
                )}
                <div className="mobile-price-item">
                  <span>BASE PRICE:</span>
                  <span>£{priceInfo.priceBeforeVat}</span>
                </div>
                {priceInfo.perTonneCost > 0 && (
                  <div className="mobile-price-item">
                    <span>PER TONNE:</span>
                    <span>£{priceInfo.perTonneCost}</span>
                  </div>
                )}
                <div className="mobile-price-divider"></div>
                <div className="mobile-price-total">
                  <span>Total:</span>
                  <span>£{priceInfo.total.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="navigation-footer">
          <button className="footer-btn back-btn">
            <span className="arrow">◀</span>
            <span>Back</span>
          </button>
          <div className="footer-price">
            <span className="footer-price-label">Price VAT etc.</span>
            <span className="footer-price-amount">£{priceInfo.total.toFixed(0)}</span>
          </div>
          <button className="footer-btn continue-btn">
            <span>Continue</span>
            <span className="arrow">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelection; 