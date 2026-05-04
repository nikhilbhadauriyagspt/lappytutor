import React from 'react';
import { Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChipsetDriver = () => {
  const benefits = [
    {
      title: 'System Communication',
      desc: 'Helps your processor, memory, and motherboard work together smoothly.',
    },
    {
      title: 'Power Balance',
      desc: 'Supports stable power flow between different system components.',
    },
    {
      title: 'System Stability',
      desc: 'Reduces unexpected behavior like crashes or slow response.',
    },
  ];

  return (
    <div className="pt-15 bg-white font-['Poppins']">

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] border-b border-zinc-100">
        
        <div className="flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-[620px]">

            <h1 className="text-[46px] md:text-[64px] font-normal text-[#111827] leading-tight mb-5">
              Chipset Drivers
            </h1>

            <div className="w-[110px] h-[4px] bg-[#1075b8] mb-7"></div>

            <p className="text-[#5f6b7a] text-[16px] md:text-[18px] leading-8 mb-10">
              Chipset drivers help your computer manage communication between core
              hardware components like the processor, memory, storage, and ports.
              They support smooth data flow and stable system behavior.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-[#1075b8] text-white px-10 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#0a6ea3] transition"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative bg-[#eaf7ff] min-h-[420px] flex items-center justify-center overflow-hidden">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-white/70"></div>
          <Cpu size={240} strokeWidth={1.2} className="relative z-10 text-[#1075b8]" />
          <div className="absolute bottom-0 left-0 right-0 h-[7px] bg-[#1075b8]"></div>
        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-[#f7f7f7]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              <div className="w-[116px] h-[116px] rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#1075b8] mb-7 shadow-sm">
                <Cpu size={46} />
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
              Why It Matters
            </h2>

            <div className="w-[95px] h-[4px] bg-[#1075b8] mb-6"></div>

            <p className="text-[#5f6b7a] text-[16px] leading-8">
              Chipset drivers help your system maintain stable communication between
              internal components, making everyday tasks smoother and more reliable.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-zinc-100 rounded-[18px] p-8 shadow-sm">
              <AlertTriangle className="text-[#1075b8] mb-5" size={34} />
              <h3 className="text-[24px] font-normal mb-4">Common Signs</h3>

              <ul className="space-y-3 text-[#5f6b7a] text-[15px] leading-7">
                <li>Slow system response or lag</li>
                <li>USB or ports not working properly</li>
                <li>Device detection issues</li>
                <li>Unexpected system instability</li>
              </ul>
            </div>

            <div className="border border-zinc-100 rounded-[18px] p-8 shadow-sm">
              <CheckCircle2 className="text-[#1075b8] mb-5" size={34} />
              <h3 className="text-[24px] font-normal mb-4">What It Helps With</h3>

              <p className="text-[#5f6b7a] text-[15px] leading-8">
                It supports stable hardware interaction, smoother data transfer,
                consistent device behavior, and better coordination across system components.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#1075b8] py-20 md:py-24 text-center">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="text-white text-[38px] md:text-[48px] font-light leading-tight mb-6">
            Learn More About Drivers in a Simple Way
          </h2>

          <p className="text-white text-[15px] md:text-[17px] leading-8 max-w-[760px] mx-auto mb-10">
            Explore easy driver information created to help you understand how your
            computer connects with sound, display, internet, printers, and other devices.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-[#1075b8] px-12 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#f3f8ff] transition"
          >
            CONTACT US
          </Link>

        </div>
      </section>

    </div>
  );
};

export default ChipsetDriver;