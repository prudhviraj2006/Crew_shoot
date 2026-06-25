import React from 'react';
import Image from 'next/image';

const Logo = ({ className = "" }) => {
  return (
    <Image 
      src="/logo.png" 
      alt="CrewShoot Logo" 
      width={100}
      height={100}
      priority
      className={`block object-contain ${className}`}
    />
  );
};

export default Logo;
