import React from 'react';
import Badge from '../../../../ui/Badge';
import { getSkipFeatures } from '../../../../../utils';
import styles from './SkipFeatures.module.css';

const SkipFeatures = ({ skip, variant = 'desktop' }) => {
  const features = getSkipFeatures(skip);

  const getBadgeVariant = (feature) => {
    if (feature === 'Not on the Road') return 'danger';
    if (feature === 'Road Placement') return 'success';
    if (feature.includes('Heavy Waste')) return 'warning';
    return 'primary'; // Default for hire period
  };

  if (variant === 'mobile') {
    return (
      <div className={styles.mobileContainer}>
        {features.map((feature, index) => (
          <Badge key={index} variant={getBadgeVariant(feature)} size="small">
            {feature}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <Badge key={index} variant={getBadgeVariant(feature)} size="medium">
          {feature}
        </Badge>
      ))}
    </div>
  );
};

export default SkipFeatures; 