import React from 'react';
import { useTheme } from '../../../contexts';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={`${styles.themeToggleTrack} ${isDark ? styles.dark : ''}`}>
        <div className={`${styles.themeToggleThumb} ${isDark ? styles.dark : ''}`}>
          <span className={styles.themeIcon}>
            {isDark ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 