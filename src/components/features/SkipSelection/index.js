import React from 'react';
import Header from '../../layout/Header';
import Card from '../../ui/Card';
import SkipViewer from './components/SkipViewer';
import SkipFeatures from './components/SkipFeatures';
import PriceBreakdown from './components/PriceBreakdown';
import SizeControls from './components/SizeControls';
import NavigationFooter from './components/NavigationFooter';
import { useSkipSelection } from './hooks/useSkipSelection';
import styles from './SkipSelection.module.css';

const SkipSelection = () => {
  const {
    selectedSkip,
    priceInfo,
    handleSizeIncrease,
    handleSizeDecrease,
    canIncrease,
    canDecrease
  } = useSkipSelection();

  return (
    <div className={styles.skipSelection}>
      <div className={styles.mainContent}>
        <Header />

        {/* Desktop Layout */}
        <div className={styles.desktopLayout}>
          <div className={styles.wireframeContainer}>
            <div className={styles.wireframeContainerInner}>
              {/* Left Section - Skip Photo */}
              <SkipViewer skip={selectedSkip} variant="desktop" />

              {/* Right Section - Skip Information */}
              <Card variant="accent" className={styles.wireframeRight}>
                <h2 className={styles.skipInformationTitle}>Skip Details</h2>
                <SkipFeatures skip={selectedSkip} variant="desktop" />
                <PriceBreakdown 
                  skip={selectedSkip} 
                  priceInfo={priceInfo} 
                  variant="desktop" 
                />
              </Card>

              {/* Bottom Section - Size Controls */}
              <SizeControls
                skip={selectedSkip}
                onIncrease={handleSizeIncrease}
                onDecrease={handleSizeDecrease}
                canIncrease={canIncrease}
                canDecrease={canDecrease}
                variant="desktop"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className={styles.mobileLayout}>
          <Card variant="bordered" className={styles.mobileSection}>
            <SkipViewer skip={selectedSkip} variant="mobile" />
            
            <SizeControls
              skip={selectedSkip}
              onIncrease={handleSizeIncrease}
              onDecrease={handleSizeDecrease}
              canIncrease={canIncrease}
              canDecrease={canDecrease}
              variant="mobile"
            />

            <SkipFeatures skip={selectedSkip} variant="mobile" />
            <PriceBreakdown 
              skip={selectedSkip} 
              priceInfo={priceInfo} 
              variant="mobile" 
            />
          </Card>
        </div>

        <NavigationFooter priceInfo={priceInfo} />
      </div>
    </div>
  );
};

export default SkipSelection; 