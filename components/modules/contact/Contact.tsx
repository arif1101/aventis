
export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-[#151518] rounded-3xl px-12 py-[60px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-[64px] font-light text-white">
            Contact Us
          </h2>
          <p className="text-[#CED4DA] text-[20px] tracking-[1%] mt-4">
            Let's discuss on something cool together.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6 mt-15">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-white text-sm mb-2.5 font-light">
                Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full bg-[#25252B] text-white px-5 py-3.5 rounded-lg focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm mb-2.5 font-light">
                Email <span className="text-white">*</span>
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-[#25252B] text-white px-5 py-3.5 rounded-lg focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Phone and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-white text-sm mb-2.5 font-light">
                Phone Number <span className="text-white">*</span>
              </label>
              <input
                type="tel"
                placeholder="+1 (555) - 253 - 456"
                className="w-full bg-[#25252B] text-white px-5 py-3.5 rounded-lg focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-white text-sm mb-2.5 font-light">
                Company <span className="text-white">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Message Subject"
                className="w-full bg-[#25252B] text-white px-5 py-3.5 rounded-lg focus:outline-none placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-sm mb-2.5 font-light">
              Message <span className="text-white">*</span>
            </label>
            <textarea
              placeholder="Write your message"
              className="w-full bg-[#25252B] text-white px-5 py-3.5 rounded-lg focus:outline-none placeholder-gray-500 text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button className="px-12 py-3.5 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide font-light">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}