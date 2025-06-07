import React from 'react';
import Badge from '../../../../ui/Badge';
import styles from './SkipViewer.module.css';

const SkipViewer = ({ skip, variant = 'desktop' }) => {
  const containerClass = variant === 'mobile' ? styles.mobileContainer : styles.container;

  return (
    <div className={containerClass}>
      <div className={styles.skipIllustration}>
        <div className={styles.skipContainer}>
          <div className={styles.skipBody}></div>
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