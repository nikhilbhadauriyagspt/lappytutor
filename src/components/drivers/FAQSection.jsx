import React from 'react';
import { HelpCircle, ChevronDown, Plus, MessageCircle, Sparkles, Zap } from 'lucide-react';

const FAQItem = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0);

  return (
    <div className={`group mb-4 overflow-hidden rounded-[2rem] border transition-all duration-500 ${
      isOpen 
        ? 'border-blue-200 bg-white shadow-[0_20px_50px_rgba(37,99,235,0.06)]' 
        : 'border-zinc-100 bg-zinc-50/50 hover:border-blue-100 hover:bg-white'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-8 text-left transition-all"
      >
        <div className="flex items-center gap-4">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-all duration-500 ${
            isOpen ? 'bg-blue-600 text-white' : 'bg-white text-zinc-500 shadow-sm'
          }`}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
            isOpen ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-blue-600'
          }`}>
            {q}
          </span>
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
          isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-white text-zinc-500 shadow-sm group-hover:text-blue-600'
        }`}>
          <ChevronDown size={20} strokeWidth={2.5} />
        </div>
        </button>

        <div className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}>
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-2 ml-12">
            <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed font-medium max-w-2xl">
              {a}
            </p>
          </div>
        </div>
        </div>    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What are the main driver categories?", a: "The main categories include essential (core hardware), hardware-specific (internal components), peripheral (external devices), and advanced (firmware and security) drivers." },
    { q: "Which drivers are most important?", a: "Chipset, Graphics, Audio, and Network drivers are critical for standard operation, hardware coordination, and overall system stability." },
    { q: "Why are drivers called translators?", a: "They translate complex operating system commands into specific electrical signals and instructions that hardware components can execute." },
    { q: "Can a connected device work without a driver?", a: "In most cases, no. Even if detected, the device will likely have limited functionality, poor performance, or show constant system errors." },
    { q: "Do laptops need different drivers than desktops?", a: "Yes. Laptops require specialized support for touchpads, integrated power management, cooling profiles, and specialized wireless modules." },
    { q: "What happens if a driver is missing?", a: "The hardware may fail to be detected, experience major performance lag, produce incorrect output, or crash the entire system with kernel errors." }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden font-['Poppins']">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Title and Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-50 text-blue-600 rounded-2xl mb-8 border border-blue-100 shadow-sm">
              <HelpCircle size={18} strokeWidth={2.5} />
              <span className="text-[11px]  tracking-[0.2em] uppercase">
                Knowledge Base
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl  text-zinc-900 mb-8 leading-[1.1] ">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
            </h2>

            <p className="text-zinc-600 text-lg md:text-xl  leading-relaxed max-w-md mb-12">
              Everything you need to know about the software layers that empower your hardware and stabilize your system.
            </p>

            {/* Support Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 p-8 text-white shadow-2xl shadow-zinc-900/20">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageCircle size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md mb-6">
                  <Sparkles className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl mb-3 ">Need specific help?</h3>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-medium">
                  Our technical specialists are available for deep architecture consultation and troubleshooting.
                </p>
               
              </div>
            </div>
          </div>

          {/* Right Side: Accordion Items */}
          <div className="lg:col-span-7 pt-4">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
