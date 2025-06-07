import React from 'react';
import Badge from '../../../../ui/Badge';
import { getSkipFeatures } from '../../../../../utils';
import styles from './SkipFeatures.module.css';

const SkipFeatures = ({ skip, variant = 'desktop' }) => {
  const features = getSkipFeatures(skip);

  if (variant === 'mobile') {
    return (
      <div className={styles.mobileContainer}>
        {features.map((feature, index) => (
          <Badge key={index} variant="primary" size="small">
            {feature}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <span className={styles.featureIcon}>✅</span>
          <span className={styles.featureText}>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default SkipFeatures; 