import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, THEME_STORAGE_KEY, DEFAULT_THEME } from '../../constants';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK;
    }
    
    return DEFAULT_THEME;
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const value = {
    theme,
    toggleTheme,
    isLight: theme === THEMES.LIGHT,
    isDark: theme === THEMES.DARK
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 