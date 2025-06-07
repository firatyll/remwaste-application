import React from 'react';
import Button from '../../../../ui/Button';
import { formatPrice } from '../../../../../utils';
import styles from './NavigationFooter.module.css';

const NavigationFooter = ({ priceInfo }) => {
  return (
    <div className={styles.footer}>
      <Button variant="secondary" size="medium">
        <span className={styles.arrow}>◀</span>
        <span>Back</span>
      </Button>
      <div className={styles.footerPrice}>
        <div className={styles.footerPriceLabel}>Price VAT etc.</div>
        <div className={styles.footerPriceAmount}>
          {formatPrice(priceInfo.total)}
        </div>
      </div>
      <Button variant="primary" size="medium">
        <span>Continue</span>
        <span className={styles.arrow}>▶</span>
      </Button>
    </div>
  );
};

export default NavigationFooter; 