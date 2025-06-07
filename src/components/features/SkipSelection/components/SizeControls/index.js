import React from 'react';
import styles from './SizeControls.module.css';

const SizeControls = ({ 
  skip, 
  onIncrease, 
  onDecrease, 
  canIncrease, 
  canDecrease,
  variant = 'desktop'
}) => {
  const containerClass = variant === 'mobile' ? styles.mobileContainer : styles.container;

  return (
    <div className={containerClass}>
      <button 
        className={styles.sizeButton}
        onClick={onDecrease}
        disabled={!canDecrease}
      >
        ◀
      </button>
      <span className={styles.sizeDisplay}>
        {skip.size} Yard
      </span>
      <button 
        className={styles.sizeButton}
        onClick={onIncrease}
        disabled={!canIncrease}
      >
        ▶
      </button>
    </div>
  );
};

export default SizeControls; 