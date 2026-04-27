import React from 'react';
import { Settings, Zap, AlertTriangle, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const BIOSDriver = () => {
  const benefits = [
    { title: "CPU Support", desc: "Adds compatibility for newer processors on existing motherboards." },
    { title: "System Security", desc: "Patches low-level firmware vulnerabilities like Spectre and Meltdown." },
    { title: "RAM Stability", desc: "Fixes memory compatibility and enables higher XMP/DOCP speeds." },
    { title: "Boot Speeds", desc: "Optimizes hardware initialization to get you to the OS faster." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Settings size={14} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Firmware Layer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] mb-8">
              BIOS / <span className="text-blue-600">UEFI</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              BIOS (Basic Input/Output System) or the modern UEFI is the firmware that resides on your motherboard's chip. It is the first software to run when you turn on your PC, initializing all hardware before handing off control to the Operating System.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all">
                BIOS Update Help
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 p-12">
              <Cpu size={300} className="text-blue-600/10 absolute -bottom-20 -right-20 rotate-12" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900">{b.title}</h3>
                        <p className="text-sm text-zinc-500">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="p-10 bg-zinc-900 rounded-[40px] text-white">
            <h2 className="text-3xl font-bold mb-6">BIOS vs Drivers</h2>
            <p className="text-zinc-400 leading-relaxed">
              Unlike traditional drivers, BIOS updates are high-risk but high-reward. A failed update can render your motherboard unusable, but a successful one can fix persistent hardware bugs that no OS-level driver can solve.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Signs of Failure</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">• PC failing to POST (power-on self-test)</li>
                <li className="flex items-center gap-2">• Inability to install new OS versions</li>
                <li className="flex items-center gap-2">• Frequent power cycling/restarts</li>
                <li className="flex items-center gap-2">• Incorrect CPU or RAM readings</li>
              </ul>
            </div>
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">TPM 2.0 Support</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Windows 11 requires TPM 2.0 to be enabled in the BIOS. Many older motherboards received BIOS updates specifically to enable this feature, allowing hardware from 2017+ to run the latest OS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIOSDriver;
