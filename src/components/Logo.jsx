import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-black rounded-lg p-2 leading-none select-none ${className}`}>
      <div className="text-white font-black text-xl tracking-wider uppercase">
        CREW
      </div>
      <div className="flex items-center text-white font-black text-xl leading-none">
        <span>SH</span>
        <div className="flex gap-[2px] mx-[2px] items-center">
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="#f5a623" 
            className="transform translate-y-[1px]"
          >
            <path d="M5 3L19 12L5 21V3Z" />
          </svg>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="#f5a623" 
            className="transform translate-y-[1px]"
          >
            <path d="M5 3L19 12L5 21V3Z" />
          </svg>
        </div>
        <span className="normal-case font-bold">t</span>
      </div>
    </div>
  );
};

export default Logo;
