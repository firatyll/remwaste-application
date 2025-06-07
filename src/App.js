import React from 'react';
import { ThemeProvider } from './contexts';
import SkipSelection from './components/features/SkipSelection';
import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <SkipSelection />
      </div>
    </ThemeProvider>
  );
}

export default App;
