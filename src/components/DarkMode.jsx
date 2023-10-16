import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const DarkMode = () => {

    const iconStyle = {
        width: '20px',  //
        height: '20px', //
      };

  // Initialize the dark mode state with the stored value or the default
  const [isDarkMode, setDarkMode] = useState(() => {
    // Check if there's a stored value for dark mode
    const storedValue = localStorage.getItem('darkMode');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    // Check for user preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // If the user hasn't explicitly set dark mode, use their system preference
    if (!localStorage.getItem('darkMode')) {
      setDarkMode(prefersDarkMode);
    }
  }, []);

  // Update the dark mode state and store the value in local storage
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    // Store the dark mode value in local storage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    // Apply dark mode class to the body element
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="dark-mode-container">
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <Sun style={iconStyle}/> : <Moon style={iconStyle} />}
        <span className="mode-label">{isDarkMode ? '' : ''}</span>
      </div>
    </div>
  );
};

export default DarkMode;
