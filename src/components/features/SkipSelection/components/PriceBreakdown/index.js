import React from 'react';
import { formatPrice } from '../../../../../utils';
import styles from './PriceBreakdown.module.css';

const PriceBreakdown = ({ skip, priceInfo, variant = 'desktop' }) => {
  if (variant === 'mobile') {
    return (
      <div className={styles.mobileContainer}>
        <div className={styles.mobileBreakdown}>
          <div className={styles.mobileItem}>
            <span>VAT ({skip.vat}%):</span>
            <span>{formatPrice(priceInfo.vatAmount)}</span>
          </div>
          {priceInfo.transportCost > 0 && (
            <div className={styles.mobileItem}>
              <span>TRANSPORT:</span>
              <span>{formatPrice(priceInfo.transportCost)}</span>
            </div>
          )}
          <div className={styles.mobileItem}>
            <span>BASE PRICE:</span>
            <span>{formatPrice(priceInfo.priceBeforeVat)}</span>
          </div>
          {priceInfo.perTonneCost > 0 && (
            <div className={styles.mobileItem}>
              <span>PER TONNE:</span>
              <span>{formatPrice(priceInfo.perTonneCost)}</span>
            </div>
          )}
          <div className={styles.mobileDivider}></div>
          <div className={styles.mobileTotal}>
            <span>Total:</span>
            <span>{formatPrice(priceInfo.total)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.priceItem}>
        <span className={styles.priceLabel}>VAT ({skip.vat}%):</span>
        <span className={styles.priceValue}>{formatPrice(priceInfo.vatAmount)}</span>
      </div>
      {priceInfo.transportCost > 0 && (
        <div className={styles.priceItem}>
          <span className={styles.priceLabel}>TRANSPORT:</span>
          <span className={styles.priceValue}>{formatPrice(priceInfo.transportCost)}</span>
        </div>
      )}
      <div className={styles.priceItem}>
        <span className={styles.priceLabel}>BASE PRICE:</span>
        <span className={styles.priceValue}>{formatPrice(priceInfo.priceBeforeVat)}</span>
      </div>
      {priceInfo.perTonneCost > 0 && (
        <div className={styles.priceItem}>
          <span className={styles.priceLabel}>PER TONNE:</span>
          <span className={styles.priceValue}>{formatPrice(priceInfo.perTonneCost)}</span>
        </div>
      )}
      <div className={styles.priceDivider}></div>
      <div className={styles.priceTotal}>
        {formatPrice(priceInfo.total)}
      </div>
    </div>
  );
};

export default PriceBreakdown; 