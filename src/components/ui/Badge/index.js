import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const badgeClass = [
    styles.badge,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClass} {...props}>
      {children}
    </span>
  );
};

export default Badge; 