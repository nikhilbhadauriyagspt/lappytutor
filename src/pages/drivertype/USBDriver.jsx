import React from 'react';
import { Usb, Zap, AlertTriangle, CheckCircle2, Cable } from 'lucide-react';
import { Link } from 'react-router-dom';

const USBDriver = () => {
  const benefits = [
    { title: "Port Recognition", desc: "Ensures USB 3.0, 3.1, and Type-C ports work at correct speeds." },
    { title: "Power Management", desc: "Allows ports to charge devices efficiently even in sleep mode." },
    { title: "Device Compatibility", desc: "Supports external drives, webcams, and MIDI devices." },
    { title: "Speed Stability", desc: "Reduces data transfer drops on high-bandwidth peripherals." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Usb size={14} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Universal Link</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] mb-8">
              USB <span className="text-blue-600">Drivers</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              USB (Universal Serial Bus) drivers act as a bridge between your OS and your motherboard's USB controllers. They ensure that every device you plug into your computer is recognized and can exchange data at maximum speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all">
                Troubleshoot USB
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 p-12">
              <Cable size={300} className="text-blue-600/10 absolute -bottom-20 -right-20 rotate-12" />
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
            <h2 className="text-3xl font-bold mb-6">Type-C & Speed</h2>
            <p className="text-zinc-400 leading-relaxed">
              With the advent of USB 3.2 and USB4, generic drivers are no longer enough. To get the full 40Gbps speed or support DisplayPort Alt-Mode on your Type-C port, you must have the specific controller drivers from your laptop or motherboard manufacturer.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Signs of Failure</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">• "USB Device Not Recognized" error</li>
                <li className="flex items-center gap-2">• Slow charging on modern ports</li>
                <li className="flex items-center gap-2">• External drives disconnecting randomly</li>
                <li className="flex items-center gap-2">• Ports working only at USB 2.0 speeds</li>
              </ul>
            </div>
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Firmware vs Driver</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Sometimes a driver isn't enough. High-performance USB controllers often require firmware updates to fix hardware-level bugs that cause audio popping or mouse lag when using certain combinations of devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USBDriver;
