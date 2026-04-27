import React from 'react';
import { Printer, Zap, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrinterDriver = () => {
  const benefits = [
    { title: "Print Accuracy", desc: "Ensures colors and fonts are rendered exactly as on screen." },
    { title: "Spooling Management", desc: "Handles large print jobs without crashing the system." },
    { title: "Hardware Features", desc: "Unlocks duplex printing, tray selection, and ink monitoring." },
    { title: "Wireless Printing", desc: "Enables stable communication for Wi-Fi and network printers." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Printer size={14} />
              <span className="text-[11px] font-bold uppercase tracking-widest">External Output</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] mb-8">
              Printer <span className="text-blue-600">Drivers</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              Printer drivers are small pieces of software that convert the data you want to print into a format that a specific printer can understand. They act as the essential bridge between your document and the physical output.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-zinc-900 transition-all" aria-label="Contact our technical specialists for driver support">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-50 rounded-[48px] overflow-hidden border border-zinc-100 p-12">
              <FileText size={300} className="text-blue-600/10 absolute -bottom-20 -right-20 rotate-12" />
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
            <h2 className="text-3xl font-bold mb-6">PCL vs PostScript</h2>
            <p className="text-zinc-400 leading-relaxed">
              Professional printers often use different driver languages like PCL or PostScript. Choosing the right one can significantly affect the quality of complex graphics and the speed at which documents are processed.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Signs of Failure</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">• Printer appearing "Offline"</li>
                <li className="flex items-center gap-2">• Garbled text or symbols on pages</li>
                <li className="flex items-center gap-2">• Slow spooling or stuck print jobs</li>
                <li className="flex items-center gap-2">• Missing options (grayscale, duplex)</li>
              </ul>
            </div>
            <div className="p-8 border border-zinc-100 rounded-[32px] hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Maintenance</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Keeping printer drivers updated is essential after a major OS update (like Windows 11), as the print subsystem often changes, causing older drivers to stop communicating with the hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterDriver;
