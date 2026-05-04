import React from 'react';
import { Settings, ShieldCheck, Zap } from 'lucide-react';

const Troubleshooting = () => {
  const items = [
    {
      title: 'Simple Driver Checks',
      icon: Settings,
      desc: 'Understand which driver may be affecting sound, display, internet, printer, or connected devices.',
    },
    {
      title: 'Smooth System Use',
      icon: Zap,
      desc: 'Learn how the right drivers can help your device feel more stable, responsive, and reliable.',
    },
    {
      title: 'Better Compatibility',
      icon: ShieldCheck,
      desc: 'Keep hardware and software working together, especially after updates or new device connections.',
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-20 md:py-24 font-['Poppins']">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[132px] h-[132px] rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-9">
                  <Icon size={58} strokeWidth={1.6} className="text-[#1075b8]" />
                </div>

                <h2 className="text-[24px] md:text-[26px] font-normal text-[#111827] mb-5">
                  {item.title}
                </h2>

                <p className="text-[#111827] text-[16px] leading-8 max-w-[420px] mx-auto">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;