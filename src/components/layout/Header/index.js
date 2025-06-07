import React from 'react';
import Button from '../../ui/Button';
import ThemeToggle from '../../theme/ThemeToggle';
import styles from './Header.module.css';

const Header = ({ title = "Choose Your Skip Size" }) => {
  return (
    <div className={styles.header}>
      <Button variant="secondary" size="medium" disabled>
        <span className={styles.arrow}>◀</span>
        <span>Previous</span>
      </Button>
      <div className={styles.currentStage}>
        <span className={styles.stageText}>{title}</span>
      </div>
      <div className={styles.rightSection}>
        <ThemeToggle />
        <Button variant="primary" size="medium">
          <span>Next</span>
          <span className={styles.arrow}>▶</span>
        </Button>
      </div>
    </div>
  );
};

export default Header; 