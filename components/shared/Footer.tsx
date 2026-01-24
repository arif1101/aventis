import React from 'react'

export default function Footer() {
  const sections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "What to do", href: "#" },
        { name: "About", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Let's talk", href: "#" }
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


  const legalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <section className=" bg-[#0E0C0E] text-white">
      <div className="max-w-[1294px] mx-auto px-8 py-[80px]">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">

          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="Aventis Logo"
                  title="Aventis"
                  className="h-8"
                />
              </a>
            </div>
            <p className='max-w-[375px]'>Gain real-time visibility and control over all company spend. Automate up to 90% of manual work and help your finance team move faster than ever.</p>
            <div>
                <button className='border w-[220px] py-[14px] pl-[20px] rounded-[40px] cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Your Email Address</button>
                <button className='border w-[147px] py-[14px] text-center ml-2 rounded-[40px] cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>LET'S TALK</button>
            </div>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact Information</h3>
            <div className='flex flex-col'>
                <span className='mt-6'>245 Peachtree Street NE, Suite 624?Atlanta, GA 20415</span>
                <span className='mt-5'>(404) 555-7890</span>
                <span className='mt-5'>aventis@gmail.com</span>
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-col justify-between border-t border-gray-800 py-8 text-xs font-medium text-gray-400 md:items-center">
          <p className="">Copyright © 2025 by Aventis</p>
        </div>

      </div>
    </section>
  )
}