import React from 'react';

const Footer: React.FC = () => {
  console.log('Footer component loaded');

  return (
    <footer className="w-full bg-[#1F2937] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-sans text-sm text-gray-400 font-normal">
          © 2025 Eldarnwand Design System — Designed for scalability and clarity
        </p>
      </div>
    </footer>
  );
};

export default Footer;