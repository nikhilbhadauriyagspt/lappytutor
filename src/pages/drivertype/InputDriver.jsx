import React from 'react';
import { Keyboard, Zap, AlertTriangle, CheckCircle2, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const InputDriver = () => {
  const benefits = [
    { title: "Precision Response", desc: "Reduces latency for mouse movements and key presses." },
    { title: "Gesture Support", desc: "Enables multi-touch gestures like pinch-to-zoom on touchpads." },
    { title: "Programmable Keys", desc: "Allows customization of macro keys and special functions." },
    { title: "Polling Rate", desc: "Optimizes hardware reporting for smoother cursor movement." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Keyboard size={14} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Tactile Sync</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] mb-8">
              Input <span className="text-blue-600">Drivers</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              Input drivers manage devices that send data to your computer, such as keyboards, mice, touchpads, and drawing tablets. They are responsible for translating physical interactions into precise digital commands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all" aria-label="Contact our technical specialists for driver support">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 p-12">
              <MousePointer2 size={300} className="text-blue-600/10 absolute -bottom-20 -right-20 rotate-12" />
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
            <h2 className="text-3xl font-bold mb-6">Touchpad Gestures</h2>
            <p className="text-zinc-400 leading-relaxed">
              If your laptop's three-finger swipe or scroll isn't working, it's likely a driver issue. Precision drivers (like Synaptics or ELAN) are required for the OS to understand complex multi-touch inputs.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Signs of Failure</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">• Unresponsive keys or mouse lag</li>
                <li className="flex items-center gap-2">• "Ghost" mouse movements</li>
                <li className="flex items-center gap-2">• Touchpad scroll not working</li>
                <li className="flex items-center gap-2">• Macro keys being ignored</li>
              </ul>
            </div>
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Update Tips</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                For gaming peripherals, always use the dedicated software (Logitech G Hub, Razer Synapse) as they provide specialized drivers that go beyond basic plug-and-play functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDriver;
