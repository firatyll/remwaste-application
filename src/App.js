import React from 'react';
import SkipSelection from './components/SkipSelection';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <SkipSelection />
      </div>
    </ThemeProvider>
  );
}

export default App;
