import React from "react";
import {
  Cpu,
  HardDrive,
  Printer,
  ShieldCheck,
  Wifi,
  ArrowRight,
  Zap,
  MousePointer2,
  Settings2,
} from "lucide-react";
import { Link } from 'react-router-dom';

const FeatureItem = ({ title, desc, icon: Icon, align = "left" }) => (
  <div className={`flex items-start gap-5 mb-8 lg:mb-10 group ${align === "right" ? "flex-row-reverse text-right" : "text-left"}`}>
    <div className="shrink-0 relative">
      <div className="w-14 h-14 rounded-full bg-blue-50/80 backdrop-blur-md flex items-center justify-center text-blue-600 transition-all duration-700 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] shadow-sm border border-blue-100/30 relative z-10">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      {/* Animated ring around icon on hover */}
      <div className="absolute inset-[-3px] border border-blue-200/50 rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
    </div>
    <div className="pt-1.5">
      <h3 className="text-xl font-bold text-zinc-900 mb-2  group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-zinc-600 text-[13.5px] leading-relaxed max-w-[280px] font-medium opacity-90">
        {desc}
      </p>
    </div>
  </div>
);

const CategoryOverview = () => {
  return (
    <section className="w-full bg-[#fcfdfe] py-16 md:py-24 px-6 md:px-12 lg:px-24 font-['Poppins'] overflow-hidden relative">
      {/* Background Ornaments - Larger and more ethereal */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-[11px] font-black tracking-[0.3em] uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Classification Hub
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-4xl  text-zinc-900 leading-[1.1] mb-6 ">
            The Four Driver <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Architecture Types</span>
          </h2>
          
          <p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Deep dive into the specialized software layers that orchestrate communication 
            between your OS and the complex world of modern hardware components.
          </p>
        </div>

        {/* Symmetrical Full-Width Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Left Side Features */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <FeatureItem 
              title="Essential Drivers" 
              desc="The core DNA of your system: chipset coordination, graphics rendering, audio routing, and network stacks."
              icon={Cpu}
              align="left"
            />
            <FeatureItem 
              title="Hardware Specific" 
              desc="Precision control for high-speed storage, USB architecture, and critical internal bus communications."
              icon={HardDrive}
              align="left"
            />
            <FeatureItem 
              title="Peripheral Drivers" 
              desc="Bridging the gap for external ecosystem devices like printers, scanners, and multi-channel audio setups."
              icon={Printer}
              align="left"
            />
          </div>

          {/* Center Image - Massive and Robotic/Tech focused */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="relative group">
              {/* Layered Glow Rings */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] scale-125 animate-pulse"></div>
              <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-[60px] scale-150 animate-pulse delay-700"></div>
              
              {/* Central Shield/Circle */}
              <div className="w-64 h-64 md:w-[360px] md:h-[360px] rounded-full bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative z-10 border border-zinc-100 overflow-hidden group-hover:shadow-[0_30px_90px_rgba(37,99,235,0.2)] transition-all duration-1000">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 flex items-center justify-center relative">
                  {/* Decorative Tech Rings */}
                  <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full scale-[0.8] animate-[spin_30s_linear_infinite]"></div>
                  <div className="absolute inset-0 border-[1px] border-blue-500/10 rounded-full scale-[0.6] animate-[spin_45s_linear_infinite_reverse]"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                    alt="System Drivers Technology" 
                    className="w-full h-full object-cover relative z-10 opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-20"></div>
                </div>
              </div>
              
              {/* High-Tech Orbital Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-white shadow-xl flex items-center justify-center text-blue-600 animate-[float_5s_ease-in-out_infinite] z-30 border border-zinc-50 backdrop-blur-md">
                <Settings2 size={24} />
              </div>
              <div className="absolute -bottom-2 -left-2 w-14 h-14 rounded-xl bg-zinc-900 shadow-xl flex items-center justify-center text-blue-400 animate-[float_7s_ease-in-out_infinite_1.5s] z-30 border border-white/10 backdrop-blur-md">
                <Zap size={28} />
              </div>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <FeatureItem 
              title="Advanced Modules" 
              desc="Low-level BIOS/UEFI firmware, specialized display engines, and deep system optimization layers."
              icon={Settings2}
              align="right"
            />
            <FeatureItem 
              title="Device Security" 
              desc="Critical security protocols, hardware-level encryption, and trusted platform communication paths."
              icon={ShieldCheck}
              align="right"
            />
            <FeatureItem 
              title="Smart Connectivity" 
              desc="Modern wireless protocols, Bluetooth LE modules, and next-gen gigabit network interfaces."
              icon={Wifi}
              align="right"
            />
          </div>

        </div>

        {/* Action Section */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 px-10 py-4 bg-zinc-900 text-white rounded-[1.5rem]  text-base transition-all hover:bg-blue-600 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 ">
              Consult a Hardware Expert
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
          
         
        </div>
      </div>
    </section>
  );
};

export default CategoryOverview;