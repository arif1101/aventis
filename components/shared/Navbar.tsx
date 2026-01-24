import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full h-[70px] z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Left: Logo */}
        <div className="text-xl font-semibold">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Right: Navigation */}
        <ul className="flex items-center gap-8 text-white text-sm tracking-wide">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">WHAT WE DO</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">CONTACT</li>
          <li className="cursor-pointer">AIQ</li>
        </ul>
      </div>
    </nav>
  );
}
