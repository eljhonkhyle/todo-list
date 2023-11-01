import React, { useState, useEffect } from 'react';

const Header = () => {
  // Initialize the userName state with the value from localStorage
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    localStorage.setItem('userName', newName); // Store the name in localStorage
  };

  // Use useEffect to update the userName state when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    
    <div className="header-container">
      <div className='inline-container'>
        <h2 className='welcome-text'>Welcome, </h2>
        <input className='welcome-input'
          type="text"
          placeholder="Name Here"
          value={userName}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};

export default Header;
