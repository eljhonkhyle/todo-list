import React, { useState, useEffect } from 'react';

const Header = () => {
  // Initialize the userName state with the value from localStorage
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    localStorage.setItem('userName', newName); // Store the name in localStorage
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '2rem'
  };

  const inlineContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyles = {
    border: 'none',
    borderBottom: 'none',
    outline: 'none',
    background: 'none',
    color: '#8758ff', 
    width: '200px',
    padding: '1rem',
    fontSize: '1.7rem', 
  };

  // Use useEffect to update the userName state when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="header" style={containerStyles}>
      <h1 className="logo">Task X Pro</h1>
      <div style={inlineContainerStyles}>
        <h2>Welcome, </h2>
        <input
          type="text"
          placeholder="Name here"
          value={userName}
          onChange={handleNameChange}
          style={inputStyles}
        />
      </div>
    </div>
  );
};

export default Header;
