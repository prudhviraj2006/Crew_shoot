import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="CrewShoot Logo" 
      className={`block object-contain w-full h-auto ${className}`}
    />
  );
};

export default Logo;
