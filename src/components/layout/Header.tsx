import React from 'react';

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Eldarnwand Design System
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
          A scalable, accessible, and elegant color system for modern UIs
        </p>
      </div>
    </header>
  );
};

export default Header;