import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <img 
        src="/logo.png" 
        alt="CrewShoot Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
