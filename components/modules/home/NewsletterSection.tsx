export default function NewsletterSection() {
  return (
    <div className="bg-black text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1294px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          
          {/* Left Side - Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-light leading-tight">
              STAY UPDATED
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light mt-4 sm:mt-6">
              Stay informed with insight from Aventis iQ
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:max-w-xl lg:flex-1">
            <div className="space-y-6">
              
              {/* Email Input with Subscribe Button */}
              <div className="relative flex items-center border border-white/40 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="enter your email placeholder"
                  className="flex-1 bg-transparent px-4 sm:px-6 py-3 text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                <button
                  className="px-6 sm:px-8 py-3 border-l border-white/40 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide font-light whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>

              {/* Checkbox and Agreement Text */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  className="mt-1 w-4 h-4 bg-transparent border border-white/40 rounded cursor-pointer accent-white"
                />
                <label
                  htmlFor="agreement"
                  className="text-xs text-gray-400 leading-relaxed cursor-pointer"
                >
                  I agree to receive communications from Aventis and understand I can unsubscribe at any time. View our Privacy Policy.
                </label>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
