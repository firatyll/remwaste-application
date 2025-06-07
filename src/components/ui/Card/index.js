import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props
}) => {
  const cardClass = [
    styles.card,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export default Card; 