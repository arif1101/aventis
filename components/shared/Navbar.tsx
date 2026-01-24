'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // current route

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "WHAT WE DO", path: "/what-we-do" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "AIQ", path: "/aiq" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full h-[70px] z-50">
      <div className="max-w-[1294px] mx-auto flex items-center justify-between h-full px-6">
        {/* Left: Logo */}
        <div className="text-xl font-semibold">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Right: Navigation */}
        <ul className="flex items-center gap-8 text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`cursor-pointer transition-colors duration-200 ${
                    isActive ? "text-[#FFC4D4]" : "text-white hover:text-[#FFC4D4]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
