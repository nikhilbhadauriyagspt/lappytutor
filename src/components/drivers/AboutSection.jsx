import React from 'react';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="w-full bg-white overflow-hidden font-['Poppins'] border-t-[3px] border-[#1075b8]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">

        {/* Left Content */}
        <div className="flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-[620px]">
            <h2 className="text-[38px] md:text-[44px] font-normal text-[#111827] mb-4">
              About Us
            </h2>

            <div className="w-[115px] h-[4px] bg-[#1075b8] mb-6"></div>

            <p className="text-[#525b64] text-[15px] md:text-[16px] leading-7 mb-10 max-w-[520px]">
              Lappy Tutor is an educational website created to explain driver
              topics in a simple and readable way. Our goal is to help users
              understand how drivers support everyday computer functions.
            </p>

            <div className="space-y-6 text-[#263241] text-[16px] md:text-[17px] leading-8 mb-10">
              <p>
                Drivers help your computer communicate with hardware such as
                display, sound, WiFi, printers, storage devices, and other
                connected components.
              </p>

              <p>
                We focus on clear explanations about driver basics, updates,
                compatibility, and common device behavior without making the
                information feel confusing or overly technical.
              </p>
            </div>



            <Link
              to="/about"
              className="inline-flex bg-[#1075b8] text-white px-10 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#0a6ea3] transition"
            >
              Learn more about Lappy Tutor
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[420px] lg:min-h-full bg-[#dff4ff]">
          <img
            src="/bios.avif"
            alt="Driver education and computer learning"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-[#1075b8]/20"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;