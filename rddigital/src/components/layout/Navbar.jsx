import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full pt-6 z-50">
      <div className="container mx-auto px-[5%] max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          <a href="/">RD DIGITAL</a>
        </div>

        {/* Navigation Links (Glassmorphism container) */}
        <nav className="bg-white rounded-lg px-8 py-3 flex items-center gap-8 shadow-lg">
          <a
            href="/"
            className="text-black font-bold hover:bg-indigo-200/50 font-medium text-[15px] transition-colors px-3 py-2 rounded-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black font-bold hover:bg-indigo-200/50 font-medium text-[15px] transition-colors px-3 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="/services"
            className="text-black font-bold hover:bg-indigo-200/50 font-medium text-[15px] transition-colors px-3 py-2 rounded-lg"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="text-black font-bold hover:bg-indigo-200/50 font-medium text-[15px] transition-colors px-3 py-2 rounded-lg"
          >
            Portfolio
          </a>
          <a
            href="/insights"
            className="text-black font-bold hover:bg-indigo-200/50 font-medium text-[15px] transition-colors px-3 py-2 rounded-lg"
          >
            Insights
          </a>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="btn-gradient text-[15px]">Book a Call</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
