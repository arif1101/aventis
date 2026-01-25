import Link from "next/link";
import React from "react";

export default function Footer() {
  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "What to do", href: "#" },
        { name: "About", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Let's talk", href: "#" },
      ],
    },
    {
      title: "Aventis IQ",
      links: [
        { name: "Paper", href: "#" },
        { name: "About Aventis IQ", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  return (
    <section className="bg-[#0E0C0E] text-white">
      <div className="max-w-[1294px] mx-auto px-6 md:px-8 py-16 md:py-[80px]">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}
          <div className="flex w-full flex-col gap-6 text-center lg:text-left lg:items-start">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Aventis Logo"
                title="Aventis"
                className="h-8 mx-auto lg:mx-0"
              />
            </Link>

            <p className="max-w-[375px] mx-auto lg:mx-0 text-sm text-gray-300">
              Gain real-time visibility and control over all company spend. Automate up to 90% of manual work and help your finance team move faster than ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center lg:justify-start">
              <button className="border w-full sm:w-[220px] py-[14px] pl-[20px] rounded-[40px] hover:bg-white hover:text-black transition-all duration-300">
                Your Email Address
              </button>
              <button className="border w-full sm:w-[147px] py-[14px] rounded-[40px] hover:bg-white hover:text-black transition-all duration-300">
                LETS TALK
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 text-center lg:text-left">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="hover:text-white transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 font-bold">Contact Information</h3>
            <div className="flex flex-col text-sm text-gray-300">
              <span className="mt-6">
                245 Peachtree Street NE, Suite 624, Atlanta, GA 20415
              </span>
              <span className="mt-5">(404) 555-7890</span>
              <span className="mt-5">aventis@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
          Copyright © 2025 by Aventis
        </div>
      </div>
    </section>
  );
}
