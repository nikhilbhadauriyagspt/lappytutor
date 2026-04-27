import {
  ArrowRight,
  ChevronRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
  Monitor,
  Printer,
  Wifi,
  Volume2,
  HardDrive,
  CheckCircle2,
  Activity,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const topics = [
    { title: 'Driver Basics', icon: Cpu },
    { title: 'Update Awareness', icon: Sparkles },
    { title: 'Compatibility', icon: Layers },
    { title: 'Graphics Devices', icon: Monitor },
    { title: 'Printer Topics', icon: Printer },
    { title: 'Network Drivers', icon: Wifi },
  ];

  const contentBlocks = [
    {
      title: 'Who We Are',
      text: 'Get Your Driver is an informational website created to help users better understand device drivers, updates, compatibility, and common driver-related topics through simple, clear, and educational content.',
    },
    {
      title: 'What We Do',
      text: 'We publish easy-to-read informational content around driver basics, update awareness, compatibility guidance, and general troubleshooting knowledge so everyday users can explore these topics with more confidence.',
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to make driver-related information easier to understand for everyday users by reducing confusion and presenting technical topics in a more practical and approachable way.',
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to become a trusted informational destination for users seeking clear and reliable content about device drivers and related support topics.',
    },
  ];

  const audience = [
    'Everyday computer users',
    'Home users trying to understand device behavior',
    'Students learning about system functionality',
    'Office users using connected devices',
    'Readers looking for update information',
  ];

  const devices = [
    'Printers',
    'Graphics cards',
    'Audio devices',
    'Wi-Fi adapters',
    'USB devices',
    'Scanners',
    'Motherboards',
    'Keyboards & Mice',
  ];

  return (
    <div className="bg-[#fafbfc] min-h-screen pt-28 pb-20 font-['Poppins'] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px]  uppercase mb-6 border border-blue-100/50">
                Informational Platform
              </div>
              
              <h1 className="text-4xl md:text-3xl lg:text-4xl  text-zinc-900 leading-[1.1] mb-6">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Get Your Driver?</span>
              </h1>

              <div className="space-y-5 text-zinc-600 text-base md:text-lg  leading-relaxed max-w-2xl">
                <p>
                  Get Your Driver is an informational website dedicated to helping
                  users understand drivers, updates, compatibility, and common
                  device-related topics through simple, clear, and educational content.
                </p>
                <p>
                  Our platform is built for readers who want approachable explanations
                  without overly technical language. We focus on awareness, clarity,
                  and structured learning.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group relative px-8 py-3.5 bg-zinc-900 text-white rounded-xl  transition-all hover:bg-blue-600 hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  to="/"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900  text-xs uppercase transition-all"
                >
                  Back to Home
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3">
                {topics.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`group p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
                        i % 3 === 0 ? 'bg-blue-50/20' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-[13px] font-black text-zinc-900 uppercase">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Philosophy */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px]  uppercase mb-4">
              Our Vision
            </div>
            <h3 className="text-2xl md:text-3xl  text-zinc-900 mb-4 leading-tight">
              Built for clarity, not confusion.
            </h3>
            <p className="text-zinc-600 text-base font-medium leading-relaxed">
              We aim to make driver-related content easier to explore by keeping the
              language readable and the focus centered on awareness.
            </p>
          </div>

          {contentBlocks.slice(0, 2).map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all hover:border-blue-200">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 mb-6">
                <Zap size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg  text-zinc-900 mb-3 uppercase">{item.title}</h4>
              <p className="text-zinc-600 text-[14px] leading-relaxed ">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Second Bento Row */}
        <section className="grid lg:grid-cols-3 gap-5 mb-20">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {contentBlocks.slice(2).map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all hover:border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 mb-6">
                  <Activity size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg  text-zinc-900 mb-3 uppercase">{item.title}</h4>
                <p className="text-zinc-600 text-[14px] leading-relaxed ">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 rounded-3xl bg-zinc-900 text-white shadow-xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 transition-transform group-hover:scale-125 duration-700">
              <Cpu size={100} />
            </div>
            <div className="relative z-10">
              <p className="text-[10px]  uppercase text-blue-400 mb-6">Audience</p>
              <h3 className="text-xl  mb-6 leading-tight">Who It Is For</h3>
              <div className="space-y-3">
                {audience.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-1" />
                    <p className="text-zinc-400 text-[13px] font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Drivers Matter Section */}
        <section className="mb-20">
          <div className="rounded-[2.5rem] bg-white border border-zinc-100 p-10 md:p-12 relative overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] uppercase mb-6 border border-orange-100">
                  Essential Knowledge
                </div>
                <h2 className="text-2xl md:text-3xl  text-zinc-900 leading-tight mb-6">
                  Why Drivers Matter
                </h2>
                <p className="text-zinc-600 text-base font-medium leading-relaxed">
                  Drivers help systems and hardware work together. They are a key part of how computers function, 
                  translating commands between the OS and hardware components correctly.
                </p>
              </div>
              
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {devices.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-center transition-all hover:bg-white hover:border-blue-200 group">
                      <p className="text-[12px] font-bold text-zinc-600 group-hover:text-blue-600 transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-[#fafbfc] rounded-[2.5rem] border border-zinc-100 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 mx-auto mb-8 border border-zinc-50">
              <Sparkles size={28} />
            </div>
            
            <h2 className="text-3xl md:text-4xl  text-zinc-900 leading-[1.1] mb-6">
              Explore driver-related topics <br className="hidden md:block" />
              with more ease and clarity.
            </h2>
            
            <p className="text-zinc-600 text-base md:text-lg  max-w-2xl mx-auto mb-10">
              If you would like to connect with us, share feedback, or explore more
              informational content, visit our contact page.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group px-10 py-3.5 bg-zinc-900 text-white rounded-xl  text-sm uppercase transition-all hover:bg-blue-600 shadow-xl active:scale-95"
              >
                Contact Us
              </Link>
              
              <Link
                to="/"
                className="px-10 py-3.5 bg-white border border-zinc-200 text-zinc-900 rounded-xl  text-sm uppercase transition-all shadow-sm active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;