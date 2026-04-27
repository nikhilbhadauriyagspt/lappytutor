import React from 'react';
import {
  Settings,
  ArrowRight,
  ShieldAlert,
  Zap,
  Wifi,
  Speaker,
  Camera,
  Printer,
  Bluetooth,
  CheckCircle2,
  Cpu,
  Search,
  MonitorSmartphone,
  Activity,
  ChevronRight,
  Radar,
  Fingerprint
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemCard = ({ title, icon: Icon, desc }) => (
  <div className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-blue-200">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white shrink-0">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h4 className="text-lg font-black text-zinc-900 leading-tight">
        {title}
      </h4>
    </div>
    <p className="text-sm text-zinc-600 leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

const AnalysisStep = ({ id, title, desc, icon: Icon, isLast }) => (
  <div className="relative flex gap-6 group">
    <div className="relative flex flex-col items-center shrink-0">
      <div className="w-14 h-14 rounded-[1.25rem] bg-zinc-900 text-white flex items-center justify-center shadow-xl shadow-zinc-900/20 z-10 transition-transform duration-500 group-hover:scale-110">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      {!isLast && (
        <div className="absolute top-14 bottom-0 w-0.5 bg-gradient-to-b from-zinc-900 to-transparent opacity-10 mt-3 group-hover:opacity-20 transition-opacity" />
      )}
    </div>

    <div className="pb-10 pt-1">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-3">
        Stage {id}
      </div>
      <h3 className="text-xl font-black text-zinc-900 mb-2  group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-[14px] text-zinc-600 leading-relaxed max-w-md font-medium">
        {desc}
      </p>
    </div>
  </div>
);

const Troubleshooting = () => {
  const steps = [
    {
      id: '01',
      title: 'Architecture Audit',
      desc: 'Deep scan of internal hardware IDs and desktop component pathways to map the exact system environment.',
      icon: Cpu,
    },
    {
      id: '02',
      title: 'OS Sync Validation',
      desc: 'Comparing kernel version headers with device firmware to ensure zero communication latency or conflicts.',
      icon: Radar,
    },
    {
      id: '03',
      title: 'Module Precision Match',
      desc: 'Retrieving manufacturer-specific driver signatures for peak stable performance and functionality.',
      icon: Fingerprint,
    },
  ];

  const problems = [
    {
      title: 'Audio Fidelity',
      icon: Speaker,
      desc: 'Sound distortion or microphone failure caused by unstable audio buffers.',
    },
    {
      title: 'Display Engine',
      icon: Zap,
      desc: 'Visual stutter and refresh rate drops linked to outdated render drivers.',
    },
    {
      title: 'Network Stack',
      icon: Wifi,
      desc: 'Frequent disconnects or high ping due to fragmented wireless protocols.',
    },
    {
      title: 'Sync Protocol',
      icon: Bluetooth,
      desc: 'Unstable accessory pairing and dropouts in high-speed sync modules.',
    },
    {
      title: 'Print Queue',
      icon: Printer,
      desc: 'Spooler errors and command latency during peripheral handshakes.',
    },
    {
      title: 'Vision Logic',
      icon: Camera,
      desc: 'Black screen or low-res video feeds from webcam driver bottlenecks.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fafbfc] border-b border-zinc-100 relative overflow-hidden font-['Poppins']">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 lg:px-24 max-w-full mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white border border-zinc-200/60 shadow-sm text-blue-700 rounded-2xl mb-6">
            <Activity size={16} className="animate-pulse" />
            <span className="text-[11px]  tracking-[0.2em] uppercase">
              Diagnostic Protocol
            </span>
          </div>

          <h2 className="text-4xl md:text-4xl  text-zinc-900 mb-6 leading-[1.1] ">
            How to Identify <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Driver Needs</span>
          </h2>

          <p className="text-zinc-600 text-lg md:text-xl  leading-relaxed max-w-3xl">
            A precision-engineered approach to resolving hardware communication failures, 
            identifying bottlenecks before they impact your workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Analysis Pipeline */}
          <div className="lg:col-span-4 relative">
            <div className="mb-8">
              <h3 className="text-xs  text-zinc-600 uppercase tracking-[0.3em] mb-6">
                The Analysis Pipeline
              </h3>
              <div>
                {steps.map((step, idx) => (
                  <AnalysisStep
                    key={step.id}
                    id={step.id}
                    title={step.title}
                    desc={step.desc}
                    icon={step.icon}
                    isLast={idx === steps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Diagnostic Panel */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[2.5rem] border border-zinc-200 bg-white/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <p className="text-zinc-600 text-[11px]  uppercase tracking-[0.2em]">
                      System Health Monitor
                    </p>
                  </div>
                  <h3 className="text-2xl md:text-3xl  text-zinc-900 ">
                    Critical Error Signals
                  </h3>
                </div>

                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-red-50 text-red-700 text-[11px] font-black rounded-2xl border border-red-100 shadow-sm">
                  <ShieldAlert size={16} />
                  Action Required
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                {problems.map((item, index) => (
                  <ProblemCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                  />
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                    <Search size={20} />
                  </div>
                  <p className="text-sm text-zinc-600 font-medium leading-relaxed max-w-sm">
                    Software bridges require matching signatures to stabilize peripheral handshakes.
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="group px-10 py-4 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-zinc-900/10 active:scale-95 flex items-center gap-3 shrink-0"
                >
                  Learn More
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;
