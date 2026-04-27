import React, { useMemo, useState } from 'react';
import CategoryOverview from '../components/drivers/CategoryOverview';
import Troubleshooting from '../components/drivers/Troubleshooting';
import FAQSection from '../components/drivers/FAQSection';
import { blogPosts } from '../blogData';
import {
  Info,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Monitor,
  HardDrive,
  Printer,
  ShieldCheck,
  ChevronRight,
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
  Layers3,
  CheckCircle2,
  Calendar,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllAboutDrivers = () => {
  const [activeType, setActiveType] = useState('essential');
  const latestBlogs = blogPosts.slice(0, 3);

  const essentialItems = [
    {
      title: 'Chipset Driver',
      content: 'Controls communication between the motherboard, processor, memory, and core ports.',
      why: ['System Stability', 'Hardware Detection', 'Port Control'],
      signs: ['Unknown Device', 'USB Error', 'System Lag'],
      color: 'blue'
    },
    {
      title: 'Graphics Driver',
      content: 'Manages display output, resolution, rendering, and visual performance.',
      why: ['Better Display', 'Smooth Rendering', 'Video Support'],
      signs: ['Flicker', 'Low Resolution', 'Visual Crash'],
      color: 'blue'
    },
    {
      title: 'Audio Driver',
      content: 'Handles speakers, headphones, microphones, and sound routing.',
      why: ['Clear Sound', 'Mic Access', 'Port Detection'],
      signs: ['No Sound', 'Static Noise', 'Mic Issue'],
      color: 'blue'
    },
    {
      title: 'Network Driver',
      content: 'Connects network hardware with the operating system for internet access.',
      why: ['Internet Access', 'Stable Connection', 'Device Communication'],
      signs: ['No Wi-Fi', 'Frequent Disconnect', 'Slow Network'],
      color: 'blue'
    },
  ];

  const hardwareItems = [
    {
      title: 'Storage Controller',
      content: 'Manages communication between the system and SSD or HDD devices.',
      why: ['Fast Boot', 'Drive Detection', 'Data Handling'],
      signs: ['Boot Error', 'Missing Drive', 'Slow Loading'],
      color: 'orange'
    },
    {
      title: 'USB Driver',
      content: 'Supports device detection and response for USB-connected hardware.',
      why: ['Device Detection', 'Fast Transfer', 'Power Support'],
      signs: ['Unknown Device', 'Port Not Working', 'Connection Fail'],
      color: 'orange'
    },
    {
      title: 'Bluetooth Driver',
      content: 'Enables pairing and communication with wireless accessories.',
      why: ['Wireless Audio', 'File Transfer', 'Accessory Pairing'],
      signs: ['No Pairing', 'Drop Issue', 'Connection Lag'],
      color: 'orange'
    },
    {
      title: 'Keyboard / Touchpad Driver',
      content: 'Controls input behavior, gestures, and key response on laptops.',
      why: ['Smooth Input', 'Gesture Support', 'Accurate Control'],
      signs: ['Keys Not Working', 'Gesture Missing', 'Input Delay'],
      color: 'orange'
    },
  ];

  const peripheralItems = [
    {
      title: 'Printer Driver',
      content: 'Converts files into printer-ready instructions for accurate output.',
      why: ['Print Quality', 'Layout Accuracy', 'Printer Features'],
      signs: ['Printer Offline', 'Print Error', 'Queue Problem'],
      color: 'emerald'
    },
    {
      title: 'Scanner Driver',
      content: 'Supports scanning, device connection, and file capture functions.',
      why: ['Clear Scan', 'Device Sync', 'Format Support'],
      signs: ['Scanner Not Found', 'Poor Scan', 'Scan Failed'],
      color: 'emerald'
    },
    {
      title: 'Webcam Driver',
      content: 'Handles camera access, video feed quality, and app compatibility.',
      why: ['Clear Video', 'Camera Access', 'Stable Feed'],
      signs: ['Black Screen', 'Camera Missing', 'Laggy Feed'],
      color: 'emerald'
    },
    {
      title: 'Monitor Driver',
      content: 'Improves resolution handling, refresh rates, and display compatibility.',
      why: ['Correct Resolution', 'Better Refresh', 'Display Accuracy'],
      signs: ['Blur Screen', 'Wrong Resolution', 'Display Flicker'],
      color: 'emerald'
    },
  ];

  const advancedItems = [
    {
      title: 'BIOS / UEFI',
      content: 'Supports hardware initialization and low-level system startup.',
      why: ['Boot Control', 'Hardware Init', 'Core Setup'],
      signs: ['No Boot', 'Power Loop', 'Freeze'],
      color: 'purple'
    },
    {
      title: 'Security Driver',
      content: 'Supports TPM, encryption, and secure hardware communication.',
      why: ['Secure Access', 'Data Protection', 'Safe Boot'],
      signs: ['TPM Error', 'Security Warning', 'Access Issue'],
      color: 'purple'
    },
    {
      title: 'Power Management Driver',
      content: 'Controls battery behavior, sleep mode, and power efficiency.',
      why: ['Battery Control', 'Sleep Support', 'Thermal Balance'],
      signs: ['Battery Drain', 'Wake Issue', 'Heat Problem'],
      color: 'purple'
    },
    {
      title: 'Advanced Display Support',
      content: 'Refines display sync, output stability, and graphics coordination.',
      why: ['Visual Stability', 'Better Sync', 'Output Control'],
      signs: ['Screen Tear', 'Ghosting', 'Color Issue'],
      color: 'purple'
    },
  ];

  const driverTypes = useMemo(
    () => [
      {
        id: 'essential',
        label: 'Essential',
        short: 'Core system drivers',
        icon: Cpu,
        items: essentialItems,
        color: 'blue'
      },
      {
        id: 'hardware',
        label: 'Hardware',
        short: 'Internal device control',
        icon: HardDrive,
        items: hardwareItems,
        color: 'orange'
      },
      {
        id: 'peripheral',
        label: 'Peripherals',
        short: 'External device support',
        icon: Printer,
        items: peripheralItems,
        color: 'emerald'
      },
      {
        id: 'advanced',
        label: 'Advanced',
        short: 'Low-level & security layer',
        icon: ShieldCheck,
        items: advancedItems,
        color: 'purple'
      },
    ],
    []
  );

  const activeGroup = driverTypes.find((item) => item.id === activeType);

  const getCardIcon = (title) => {
    const map = {
      'Chipset Driver': Cpu,
      'Graphics Driver': Monitor,
      'Audio Driver': Volume2,
      'Network Driver': Wifi,
      'Storage Controller': MemoryStick,
      'USB Driver': Usb,
      'Bluetooth Driver': Bluetooth,
      'Keyboard / Touchpad Driver': Keyboard,
      'Printer Driver': Printer,
      'Scanner Driver': ScanLine,
      'Webcam Driver': Webcam,
      'Monitor Driver': Monitor,
      'BIOS / UEFI': Cpu,
      'Security Driver': ShieldCheck,
      'Power Management Driver': Zap,
      'Advanced Display Support': Settings,
    };

    return map[title] || Cpu;
  };

  return (
    <div className="bg-white font-['Poppins']">
      <CategoryOverview onAction={() => {}} />

      {/* Why Drivers Matter - Modern Redesign */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>

        <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
            <div className="order-2 lg:order-1">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[11px]  tracking-[0.2em] uppercase mb-6 border border-blue-100/50">
                  Core Foundation
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-4xl 4 text-zinc-900 leading-[1.1]  mb-6">
                  Why Drivers Matter
                </h2>
                <h3 className="text-xl md:text-2xl  text-blue-600/80 mb-8">
                  Drivers Keep Hardware And Software Connected
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl ">
                  Device drivers act as the essential translation layer, allowing your operating system 
                  to communicate seamlessly with hardware like printers, high-end graphics cards, 
                  audio modules, network adapters, and advanced peripherals.
                </p>
              </div>

              {/* Vertical Content Blocks with Divider */}
              <div className="space-y-10 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-600/40 before:via-zinc-100 before:to-transparent pl-8">
                {[
                  {
                    title: "System Communication",
                    desc: "Drivers enable precise and correct instruction exchange between the OS and raw hardware.",
                    icon: Cpu
                  },
                  {
                    title: "Performance Support",
                    desc: "Dramatically improves system stability, response times, and overall device reliability.",
                    icon: Zap
                  },
                  {
                    title: "Compatibility",
                    desc: "Ensures complex hardware modules integrate perfectly with your specific system environment.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Feature Access",
                    desc: "Unlocks the full range of manufacturer-specific settings and advanced hardware capabilities.",
                    icon: Settings
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    {/* Active Dot on Divider */}
                    <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                    
                    <h4 className="text-xl  text-zinc-900 mb-2  group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-lg font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              {/* Floating Geometric Ornaments */}
              <div className="absolute -top-12 -right-8 w-24 h-24 bg-blue-500/10 rounded-2xl rotate-12 blur-sm animate-[float_6s_ease-in-out_infinite] pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-md animate-[float_8s_ease-in-out_infinite_1s] pointer-events-none"></div>
              <div className="absolute top-1/2 -right-16 w-20 h-20 border border-blue-100/50 rounded-3xl rotate-45 animate-[spin_20s_linear_infinite] pointer-events-none"></div>

              {/* Clipped Polygon Image Container */}
              <div className="relative w-full aspect-square max-w-[550px] group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-zinc-900/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                
                <div 
                  className="relative w-full h-full overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-white transition-all duration-700"
                  style={{ 
                    clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    borderRadius: '2rem'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                    alt="Advanced Technology Architecture" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-white/10"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Driver Categories - SaaS Style Redesign */}
      <section id="category" className="py-24 md:py-32 bg-[#fafbfc] border-b border-zinc-100 relative">
        <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] tracking-[0.25em] uppercase mb-6 border border-blue-100/50">
              System Organization
            </div>
            <h2 className="text-4xl md:text-4xl  text-zinc-900 leading-tight mb-4 ">
              Driver Categories
            </h2>
            <p className="text-zinc-600 text-lg ">
              Explore Driver Types
            </p>
          </div>

          {/* Horizontal Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-zinc-200/50 backdrop-blur-sm rounded-[2rem] border border-zinc-200/30 overflow-x-auto no-scrollbar max-w-full">
              {driverTypes.map((tab) => {
                const isActive = activeType === tab.id;
                const activeColors = {
                  blue: 'bg-white text-blue-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]',
                  orange: 'bg-white text-orange-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]',
                  emerald: 'bg-white text-emerald-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]',
                  purple: 'bg-white text-purple-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]',
                };

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveType(tab.id)}
                    className={`flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-500 whitespace-nowrap ${
                      isActive
                        ? `${activeColors[tab.color]} scale-100`
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/40'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout - Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-500">
            {activeGroup?.items?.map((item, index) => {
              const Icon = getCardIcon(item.title);
              const getLinkPath = (title) => {
                const lowerTitle = title.toLowerCase();
                if (lowerTitle.includes('bios')) return '/drivers/bios';
                if (lowerTitle.includes('power management')) return '/drivers/power-management';
                if (lowerTitle.includes('keyboard') || lowerTitle.includes('touchpad')) return '/drivers/input';
                if (lowerTitle.includes('storage')) return '/drivers/storage';
                
                // Default: take the first word (e.g., "Audio Driver" -> "audio")
                return `/drivers/${lowerTitle.split(' ')[0]}`;
              };

              const linkPath = getLinkPath(item.title);
              const themeColor = item.color || activeGroup.color;

              const cardThemes = {
                blue: {
                  border: 'hover:border-blue-200',
                  iconBg: 'bg-blue-50',
                  iconText: 'text-blue-600',
                  iconHover: 'group-hover:bg-blue-600 group-hover:text-white',
                  shadow: 'shadow-blue-100',
                  link: 'group-hover:text-blue-600'
                },
                orange: {
                  border: 'hover:border-orange-200',
                  iconBg: 'bg-orange-50',
                  iconText: 'text-orange-600',
                  iconHover: 'group-hover:bg-orange-600 group-hover:text-white',
                  shadow: 'shadow-orange-100',
                  link: 'group-hover:text-orange-600'
                },
                emerald: {
                  border: 'hover:border-emerald-200',
                  iconBg: 'bg-emerald-50',
                  iconText: 'text-emerald-600',
                  iconHover: 'group-hover:bg-emerald-600 group-hover:text-white',
                  shadow: 'shadow-emerald-100',
                  link: 'group-hover:text-emerald-600'
                },
                purple: {
                  border: 'hover:border-purple-200',
                  iconBg: 'bg-purple-50',
                  iconText: 'text-purple-600',
                  iconHover: 'group-hover:bg-purple-600 group-hover:text-white',
                  shadow: 'shadow-purple-100',
                  link: 'group-hover:text-purple-600'
                }
              };

              const theme = cardThemes[themeColor] || cardThemes.blue;

              return (
                <Link
                  key={index}
                  to={linkPath}
                  aria-label={`Learn more about ${item.title}`}
                  className={`group relative bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] ${theme.border} flex flex-col h-full`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} ${theme.iconText} flex items-center justify-center mb-6 ${theme.iconHover} transition-colors duration-500 shadow-sm ${theme.shadow}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl  text-zinc-900 mb-4  group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 text-[14px] leading-relaxed font-medium mb-8 flex-grow">
                    {item.content}
                  </p>

                  <div className={`flex items-center gap-2 text-[12px]  uppercase tracking-widest text-zinc-600 ${theme.link} transition-colors`}>
                    Learn More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Troubleshooting onAction={() => {}} />
      <FAQSection />

      {/* Latest Blogs Section */}
      <section className="py-24 md:py-32 bg-[#f7f8fa] border-t border-zinc-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -ml-40 -mt-40 pointer-events-none"></div>
        
        <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-6 border border-blue-100/50">
              Insights
            </div>
            <h2 className="text-4xl md:text-4xl  text-zinc-900 leading-tight mb-4 ">
              Latest <span className="text-blue-600">Insights & Updates</span>
            </h2>
            <p className="text-zinc-600 text-lg font-medium max-w-2xl mx-auto">
              Stay informed about driver compatibility, system maintenance, and performance optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white rounded-[2.5rem] border border-zinc-200/70 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-blue-600" /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-blue-600" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl  text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight ">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 text-[15px] leading-relaxed mb-8 line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[12px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    Read Analysis <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-4 px-12 py-5 bg-zinc-900 text-white rounded-2xl text-sm uppercase tracking-[0.15em] hover:bg-blue-600 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Explore Full Blogs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllAboutDrivers;
