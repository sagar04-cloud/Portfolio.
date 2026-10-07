import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-dark-bg text-dark-text">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-bold tracking-tighter mb-1">SAGAR U</h4>
          <p className="text-slate-400 text-sm font-medium">AI-Focused Full Stack Developer </p>
          <p className="text-slate-500 text-sm mt-1">Bangalore, India</p>
        </div>



        <div className="flex flex-col items-center md:items-end text-xs text-slate-500 font-medium">
          <p>© 2026 Sagar U</p>
          <p className="mt-1">"Designed & built with curiosity."</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
