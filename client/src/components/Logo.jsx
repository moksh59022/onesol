import React from 'react';

const Logo = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-8 h-8 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-brand-primary" />
      <div className="w-3 h-3 rounded-full bg-brand-peach ml-[-6px] opacity-75" />
    </div>
    <span className="text-2xl font-bold text-brand-text tracking-tighter">RecruiterAI</span>
  </div>
);

export default Logo;
