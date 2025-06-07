import React, { useState } from 'react';
import { useTheme } from '../../../../../contexts';
import Badge from '../../../../ui/Badge';
import ThemeToggle from '../../../../theme/ThemeToggle';
import styles from './SkipViewer.module.css';

const SkipViewer = ({ skip, variant = 'desktop' }) => {
  const { isDark } = useTheme();
  const [imageError, setImageError] = useState(false);
  const containerClass = variant === 'mobile' ? styles.mobileContainer : styles.container;
  
  // Generate image path based on theme
  const themeColor = isDark ? 'green' : 'yellow';
  const imagePath = `/images/${skip.size}-yards-${themeColor}.png`;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={containerClass}>
      {variant === 'mobile' && (
        <div className={styles.mobileThemeToggle}>
          <ThemeToggle />
        </div>
      )}
      <div className={styles.skipIllustration}>
        <div className={styles.skipContainer}>
          {!imageError ? (
            <img 
              src={imagePath} 
              alt={`${skip.size} Yard Skip`}
              className={styles.skipImage}
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div className={styles.skipFallback}>
              <div className={styles.skipIcon}>🗑️</div>
              <div className={styles.skipSize}>{skip.size}</div>
            </div>
          )}
          <div className={styles.skipBadge}>
            <Badge variant="white" size="medium">
              {skip.size} Yard
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipViewer; 