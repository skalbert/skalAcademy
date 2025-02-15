import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './debugTheme'; // Include debug script to log current theme state
import './index.css';  // Import Tailwind styles
import { ThemeProvider } from './context/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
