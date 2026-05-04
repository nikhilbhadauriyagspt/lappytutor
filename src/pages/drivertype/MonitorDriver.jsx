import React from 'react';
import { Monitor, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MonitorDriver = () => {
  const benefits = [
    {
      title: 'Clear Display Settings',
      desc: 'Helps your system use the correct screen resolution and display format.',
    },
    {
      title: 'Smooth Screen Output',
      desc: 'Supports stable refresh behavior for a smoother viewing experience.',
    },
    {
      title: 'Color Balance',
      desc: 'Ensures colors appear natural and consistent on your screen.',
    },
  ];

  return (
    <div className="pt-15 bg-white font-['Poppins']">

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] border-b border-zinc-100">

        <div className="flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-[620px]">

            <h1 className="text-[46px] md:text-[64px] font-normal text-[#111827] leading-tight mb-5">
              Monitor Drivers
            </h1>

            <div className="w-[110px] h-[4px] bg-[#1295ea] mb-7"></div>

            <p className="text-[#5f6b7a] text-[16px] md:text-[18px] leading-8 mb-10">
              Monitor drivers help your computer understand your display’s capabilities,
              including resolution, refresh behavior, and color output. They support
              clear visuals and consistent screen performance.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-[#1295ea] text-white px-10 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#087ed0] transition"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative bg-[#eaf7ff] min-h-[420px] flex items-center justify-center overflow-hidden">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-white/70"></div>
          <Monitor size={240} strokeWidth={1.2} className="relative z-10 text-[#1295ea]" />
          <div className="absolute bottom-0 left-0 right-0 h-[7px] bg-[#1295ea]"></div>
        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-[#f7f7f7]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              <div className="w-[116px] h-[116px] rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#1295ea] mb-7 shadow-sm">
                <Monitor size={46} />
              </div>

              <h2 className="text-[23px] font-normal text-[#111827] mb-4">
                {item.title}
              </h2>

              <p className="text-[#4b5563] text-[15px] leading-7 max-w-[340px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* INFO */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-1">
            <h2 className="text-[36px] md:text-[42px] font-normal text-[#111827] mb-4">
              Why Monitor Drivers Matter
            </h2>

            <div className="w-[95px] h-[4px] bg-[#1295ea] mb-6"></div>

            <p className="text-[#5f6b7a] text-[16px] leading-8">
              Monitor drivers help your system correctly display visuals by
              matching your screen’s supported settings with your computer output.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-zinc-100 rounded-[18px] p-8 shadow-sm">
              <AlertTriangle className="text-[#1295ea] mb-5" size={34} />
              <h3 className="text-[24px] font-normal mb-4">Common Signs</h3>

              <ul className="space-y-3 text-[#5f6b7a] text-[15px] leading-7">
                <li>Blurry or incorrect resolution</li>
                <li>Colors appearing faded or off</li>
                <li>Screen flickering or unstable output</li>
                <li>Display settings not showing correctly</li>
              </ul>
            </div>

            <div className="border border-zinc-100 rounded-[18px] p-8 shadow-sm">
              <CheckCircle2 className="text-[#1295ea] mb-5" size={34} />
              <h3 className="text-[24px] font-normal mb-4">What It Helps With</h3>

              <p className="text-[#5f6b7a] text-[15px] leading-8">
                Monitor drivers support accurate resolution, stable display output,
                proper color behavior, and smoother overall screen performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#1594ee] py-20 md:py-24 text-center">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="text-white text-[38px] md:text-[48px] font-light leading-tight mb-6">
            Learn More About Drivers in a Simple Way
          </h2>

          <p className="text-white/95 text-[15px] md:text-[17px] leading-8 max-w-[760px] mx-auto mb-10">
            Explore easy driver information created to help you understand how your
            computer connects with sound, display, internet, printers, and other devices.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-[#1295ea] px-12 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#f3f8ff] transition"
          >
            CONTACT US
          </Link>

        </div>
      </section>

    </div>
  );
};

export default MonitorDriver;