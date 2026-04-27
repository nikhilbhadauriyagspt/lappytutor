import React from 'react';
import { Tv, Zap, AlertTriangle, CheckCircle2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const MonitorDriver = () => {
  const benefits = [
    { title: "Color Accuracy", desc: "Enables ICC profiles for correct color reproduction." },
    { title: "Refresh Rate", desc: "Unlocks higher refresh rates (120Hz, 144Hz, 240Hz)." },
    { title: "Display Sync", desc: "Properly handles G-Sync and FreeSync communications." },
    { title: "HDR Support", desc: "Enables High Dynamic Range for better contrast and brightness." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Monitor size={14} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Display Protocol</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] mb-8">
              Monitor <span className="text-blue-600">Drivers</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              While many monitors are "Plug and Play," specific monitor drivers (often as INF files) tell the operating system exactly what your display is capable of, from its maximum resolution to its color gamut and supported refresh rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all" aria-label="Contact our technical specialists for driver support">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 p-12">
              <Tv size={300} className="text-blue-600/10 absolute -bottom-20 -right-20 rotate-12" />
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
            <h2 className="text-3xl font-bold mb-6">Why Use .INF Files?</h2>
            <p className="text-zinc-400 leading-relaxed">
              Without the specific INF file for your monitor, Windows might identify it as a "Generic PnP Monitor," which can limit your resolution or prevent you from enabling features like HDR or specific high refresh rate modes that your hardware supports.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Signs of Failure</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">• Resolution being "capped" or blurry</li>
                <li className="flex items-center gap-2">• Colors looking washed out or incorrect</li>
                <li className="flex items-center gap-2">• Monitor flickering at high refresh rates</li>
                <li className="flex items-center gap-2">• HDR option missing in settings</li>
              </ul>
            </div>
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">G-Sync & FreeSync</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                For VRR (Variable Refresh Rate) technologies to work reliably, both your GPU and your monitor must be on their latest firmware and drivers. This ensures the "handshake" between them is stable during fast-paced gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorDriver;
