import React from 'react';
import { HelpCircle, ChevronDown, BookOpen, Sparkles } from 'lucide-react';

const FAQItem = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0);

  return (
    <div className={`mb-4 overflow-hidden rounded-[18px] border transition-all duration-300 ${
      isOpen ? 'border-blue-200 bg-white shadow-[0_15px_40px_rgba(37,99,235,0.07)]' : 'border-zinc-100 bg-zinc-50'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-5 px-6 md:px-8 py-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
            isOpen ? 'bg-blue-600 text-white' : 'bg-white text-zinc-500'
          }`}>
            {index + 1}
          </span>
          <span className="text-[16px] md:text-[18px] text-zinc-900 font-medium">
            {q}
          </span>
        </span>

        <ChevronDown
          size={22}
          className={`shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} px-6 md:px-8 pb-7 md:pl-[86px]`}>
        <p className="text-zinc-600 text-[15px] leading-7 max-w-3xl">
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'What is a driver in simple words?',
      a: 'A driver is a small piece of software that helps your computer understand how to work with a device, such as sound, display, printer, keyboard, WiFi, or storage.',
    },
    {
      q: 'Why does a computer need drivers?',
      a: 'Drivers help the operating system and hardware communicate clearly. Without the right driver, a device may not work properly or may only work with limited features.',
    },
    {
      q: 'What are the common types of drivers?',
      a: 'Common driver types include display drivers, audio drivers, network drivers, printer drivers, USB drivers, Bluetooth drivers, storage drivers, and input device drivers.',
    },
    {
      q: 'How can I know if a driver may be causing an issue?',
      a: 'Simple signs can include no sound, weak display quality, WiFi not connecting, printer not responding, USB devices not showing, or a device working differently after an update.',
    },
    {
      q: 'Do drivers affect system performance?',
      a: 'Yes, drivers can affect how smoothly devices respond. A suitable driver can help improve stability, compatibility, display quality, sound output, and connection behavior.',
    },
    {
      q: 'Is driver information useful for beginners?',
      a: 'Yes. Learning the basics of drivers can help you understand why devices behave a certain way and what role software plays in keeping hardware connected.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-['Poppins']">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-50 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[11px] uppercase tracking-[0.18em] mb-6">
              <HelpCircle size={16} />
              Driver Learning
            </div>

            <h2 className="text-[38px] md:text-[46px] font-normal text-zinc-900 leading-tight mb-6">
              Simple Questions About Drivers
            </h2>

            <p className="text-zinc-600 text-[16px] leading-8 max-w-[460px] mb-8">
              Clear answers for anyone who wants to understand how drivers help a computer
              work with hardware and connected devices.
            </p>

            <div className="rounded-[24px] bg-[#f7fbff] border border-blue-100 p-7">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 mb-5 shadow-sm">
                <BookOpen size={24} />
              </div>
              <h3 className="text-[20px] text-zinc-900 mb-3 font-medium">
                Educational Only
              </h3>
              <p className="text-zinc-600 text-[14px] leading-7">
                This section is created to explain driver basics in a simple and easy-to-read way.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;