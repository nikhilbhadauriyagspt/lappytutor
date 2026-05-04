import React, { useMemo, useState } from 'react';
import CategoryOverview from '../components/drivers/CategoryOverview';
import Troubleshooting from '../components/drivers/Troubleshooting';
import FAQSection from '../components/drivers/FAQSection';
import { blogPosts } from '../blogData';
import {
  ArrowRight,
  Cpu,
  Monitor,
  HardDrive,
  Printer,
  ShieldCheck,
  Wifi,
  Volume2,
  Keyboard,
  ScanLine,
  Webcam,
  Usb,
  Zap,
  Settings,
  Bluetooth,
  MemoryStick,
  Calendar,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/drivers/AboutSection';

const AllAboutDrivers = () => {
  const [activeType, setActiveType] = useState('essential');
  const latestBlogs = blogPosts.slice(0, 3);

  const essentialItems = [
    {
      title: 'Chipset Driver',
      content: 'Helps the main parts of your computer communicate with each other, including the processor, memory, ports, and motherboard.',
      color: 'blue',
    },
    {
      title: 'Graphics Driver',
      content: 'Helps your screen display clear visuals, correct resolution, smooth video, and better graphics performance.',
      color: 'blue',
    },
    {
      title: 'Audio Driver',
      content: 'Helps your speakers, headphones, microphone, and sound settings work properly with your system.',
      color: 'blue',
    },
    {
      title: 'Network Driver',
      content: 'Helps your computer connect to WiFi, Ethernet, and other network features for stable internet access.',
      color: 'blue',
    },
  ];

  const hardwareItems = [
    {
      title: 'Storage Controller',
      content: 'Helps your system recognize and communicate with SSD or HDD storage so files and startup processes work smoothly.',
      color: 'orange',
    },
    {
      title: 'USB Driver',
      content: 'Helps USB devices connect, respond, transfer data, and work correctly when plugged into your computer.',
      color: 'orange',
    },
    {
      title: 'Bluetooth Driver',
      content: 'Helps wireless devices like headphones, keyboards, speakers, and accessories pair and stay connected.',
      color: 'orange',
    },
    {
      title: 'Keyboard / Touchpad Driver',
      content: 'Helps laptop keyboards, touchpads, gestures, clicks, and input controls respond the way they should.',
      color: 'orange',
    },
  ];

  const peripheralItems = [
    {
      title: 'Printer Driver',
      content: 'Helps your computer send the right print instructions so documents, images, and layouts print correctly.',
      color: 'emerald',
    },
    {
      title: 'Scanner Driver',
      content: 'Helps scanners connect with your system and capture documents or images in the right format.',
      color: 'emerald',
    },
    {
      title: 'Webcam Driver',
      content: 'Helps your camera work with video calls, apps, and recording tools with better stability.',
      color: 'emerald',
    },
    {
      title: 'Monitor Driver',
      content: 'Helps your display use the right resolution, refresh rate, and screen settings for clearer viewing.',
      color: 'emerald',
    },
  ];

  const advancedItems = [
    {
      title: 'BIOS / UEFI',
      content: 'Helps your computer start correctly and prepares the core hardware before the operating system loads.',
      color: 'purple',
    },
    {
      title: 'Security Driver',
      content: 'Helps support secure features such as trusted hardware communication, encryption, and safe system access.',
      color: 'purple',
    },
    {
      title: 'Power Management Driver',
      content: 'Helps control battery use, sleep mode, heat balance, and power behavior for smoother daily use.',
      color: 'purple',
    },
    {
      title: 'Advanced Display Support',
      content: 'Helps improve display stability, screen output, color behavior, and graphics coordination.',
      color: 'purple',
    },
  ];

  const driverTypes = useMemo(
    () => [
      {
        id: 'essential',
        label: 'Essential',
        icon: Cpu,
        items: essentialItems,
        color: 'blue',
      },
      {
        id: 'hardware',
        label: 'Hardware',
        icon: HardDrive,
        items: hardwareItems,
        color: 'orange',
      },
      {
        id: 'peripheral',
        label: 'Peripherals',
        icon: Printer,
        items: peripheralItems,
        color: 'emerald',
      },
      {
        id: 'advanced',
        label: 'Advanced',
        icon: ShieldCheck,
        items: advancedItems,
        color: 'purple',
      },
    ],
    []
  );

  const activeGroup = driverTypes.find((item) => item.id === activeType);

  const imageMap = {
    'Chipset Driver': '/chipset.avif',
    'Graphics Driver': '/graphics.avif',
    'Audio Driver': '/audio.avif',
    'Network Driver': '/network.avif',
    'Storage Controller': '/storage.avif',
    'USB Driver': '/usb.avif',
    'Bluetooth Driver': '/bluetooth.avif',
    'Keyboard / Touchpad Driver': '/keyboard.avif',
    'Printer Driver': '/printer.avif',
    'Scanner Driver': '/scanner.avif',
    'Webcam Driver': '/webcam.avif',
    'Monitor Driver': '/monitor.avif',
    'BIOS / UEFI': '/bios.avif',
    'Security Driver': '/security.avif',
    'Power Management Driver': '/power.avif',
    'Advanced Display Support': '/display.avif',
  };

  const getLinkPath = (title) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('bios')) return '/drivers/bios';
    if (lowerTitle.includes('power management')) return '/drivers/power-management';
    if (lowerTitle.includes('keyboard') || lowerTitle.includes('touchpad')) return '/drivers/input';
    if (lowerTitle.includes('storage')) return '/drivers/storage';

    return `/drivers/${lowerTitle.split(' ')[0]}`;
  };

  return (
    <div className="bg-white font-['Poppins']">
      <CategoryOverview onAction={() => { }} />
      <AboutSection />
      {/* Why Drivers Matter */}
      <section className="w-full bg-white overflow-hidden border-t-[3px] border-[#1594ee]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
          <div className="relative h-[420px] lg:h-auto">
            <img
              src="/chipset.avif"
              alt="Drivers and system hardware"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/10"></div>
          </div>

          <div className="flex items-center px-6 md:px-14 lg:px-20 py-16 lg:py-20">
            <div className="max-w-[620px]">
              <h2 className="text-[38px] md:text-[44px] font-normal text-[#111827] mb-4">
                Why Drivers Matter
              </h2>

              <div className="w-[115px] h-[4px] bg-[#1594ee] mb-6"></div>

              <p className="text-[#7b8491] text-[15px] md:text-[16px] leading-7 mb-12 max-w-[520px]">
                Drivers work quietly in the background to help your computer and hardware
                understand each other. They make everyday functions like sound, display,
                internet, printing, and device connection work smoothly.
              </p>

              <div className="space-y-9 mb-12">
                {[
                  {
                    title: 'System Communication',
                    desc: 'Drivers help your operating system send the right instructions to each hardware part, so devices can respond properly.',
                    icon: Cpu,
                  },
                  {
                    title: 'Performance Support',
                    desc: 'The right drivers can make your system feel smoother, improve response, and reduce common device-related issues.',
                    icon: Zap,
                  },
                  {
                    title: 'Compatibility',
                    desc: 'Drivers help different hardware and software work together, especially after updates or when new devices are connected.',
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <div key={idx} className="flex gap-7 items-start">
                      <div className="w-[58px] shrink-0 pt-1 text-[#1594ee]">
                        <Icon size={54} strokeWidth={1.4} />
                      </div>

                      <div>
                        <h3 className="text-[20px] font-normal text-[#222] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#343b45] text-[16px] md:text-[17px] leading-8">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex bg-[#1295ea] text-white px-10 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#087ed0] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Categories */}
      <section
        id="category"
        className="relative py-24 bg-[#f4f8fb] overflow-hidden font-['Poppins']"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_45%,rgba(219,231,238,0.75)_100%)]"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[44px] font-normal text-[#111827] mb-3">
            Driver Categories
          </h2>

          <div className="w-[115px] h-[4px] bg-[#1594ee] mx-auto mb-5"></div>

          <p className="text-[#7b8491] text-[15px] md:text-[16px] leading-7 max-w-[580px] mx-auto mb-12">
            Explore different driver types in a simple way and understand how each one
            helps your computer, hardware, and connected devices work together.
          </p>

          <div className="flex justify-center mb-14">
            <div className="inline-flex bg-white/80 shadow-sm rounded-full p-1 border border-zinc-200 overflow-x-auto max-w-full">
              {driverTypes.map((tab) => {
                const isActive = activeType === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveType(tab.id)}
                    className={`px-7 py-3 rounded-full text-sm font-medium whitespace-nowrap transition ${isActive
                        ? 'bg-[#1295ea] text-white shadow-md'
                        : 'text-zinc-600 hover:text-[#1295ea]'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {activeGroup?.items?.map((item, index) => (
              <Link
                key={index}
                to={getLinkPath(item.title)}
                className="bg-white rounded-[4px] shadow-[0_10px_28px_rgba(0,0,0,0.12)] overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.16)] text-left"
              >
                <img
                  src={imageMap[item.title]}
                  alt={item.title}
                  className="w-full h-[190px] object-cover"
                />

                <div className="p-7">
                  <h3
                    className={`text-[22px] font-normal leading-snug mb-4 ${index === 1 ? 'text-[#1594ee]' : 'text-[#333]'
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#6b7280] text-[14px] leading-7">
                    {item.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>

      <Troubleshooting onAction={() => { }} />
      <FAQSection />

      {/* CTA Section */}
      <section className="w-full bg-[#1594ee] py-20 md:py-24 font-['Poppins'] text-center overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-white text-[38px] md:text-[48px] font-light leading-tight mb-6">
            Learn More About Drivers in a Simple Way
          </h2>

          <p className="text-white/95 text-[15px] md:text-[17px] leading-8 max-w-[760px] mx-auto mb-10">
            Explore easy driver information created to help you understand how your
            computer connects with sound, display, internet, printers, and other
            devices.
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

export default AllAboutDrivers;