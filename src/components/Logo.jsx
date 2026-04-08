import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="CrewShoot Logo" 
      className={`block object-contain ${className}`}
    />
  );
};

export default Logo;
