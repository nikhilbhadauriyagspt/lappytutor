import {
  ArrowRight,
  Cpu,
  BookOpen,
  Layers,
  Monitor,
  Printer,
  Wifi,
  Target,
  Eye,
  CheckCircle2,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Easy Driver Learning',
      icon: BookOpen,
      text: 'We explain driver topics in simple language so readers can understand how devices and computers work together.',
    },
    {
      title: 'Clear Information',
      icon: FileText,
      text: 'Our content is written to be readable, useful, and focused on driver awareness without unnecessary complexity.',
    },
    {
      title: 'Helpful Topic Coverage',
      icon: Layers,
      text: 'We cover driver basics, updates, compatibility, display, sound, network, printer, and device-related topics.',
    },
  ];

  const topics = [
    { title: 'Driver Basics', icon: Cpu },
    { title: 'Updates', icon: RefreshCw },
    { title: 'Compatibility', icon: Layers },
    { title: 'Display', icon: Monitor },
    { title: 'Printer', icon: Printer },
    { title: 'Network', icon: Wifi },
  ];

  return (
    <div className="bg-white min-h-screen font-['Poppins'] text-[#111827] overflow-hidden">
      
      {/* Top Blue Banner */}
      <section className="relative bg-[#1295ea] py-20 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-white text-[42px] md:text-[56px] font-light mb-4">
            About Us
          </h1>
          <p className="text-white/90 text-[15px] md:text-[17px] max-w-[650px] mx-auto leading-8">
            A simple educational space for learning how drivers help computers,
            hardware, and connected devices work together.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative pt-20 pb-10 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[34px] md:text-[42px] font-normal mb-4">
            Our Story
          </h2>
          <div className="w-[90px] h-[3px] bg-[#1295ea] mx-auto mb-7"></div>

          <p className="text-[#5f6b7a] text-[16px] leading-8 mb-6">
            Lappy Tutor was created to make driver information easier to
            understand. Many people use computers every day, but driver-related
            topics can feel confusing because they are often explained in a very
            technical way.
          </p>

          <p className="text-[#5f6b7a] text-[16px] leading-8">
            Our goal is to explain these topics in a clear and human way. We focus
            on educational content about driver basics, updates, compatibility,
            and common device behavior so readers can learn what happens behind
            the scenes without feeling overwhelmed.
          </p>
        </div>
      </section>

      {/* Large Illustration Style Area */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="relative min-h-[430px] flex items-end justify-center">
            <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#1295ea] rounded-full"></div>

            <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 items-end text-[#1295ea]">
              {topics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-end ${
                      index % 2 === 0 ? 'pb-16' : 'pb-28'
                    }`}
                  >
                    <div className="w-[96px] h-[96px] md:w-[120px] md:h-[120px] rounded-full border-[3px] border-[#1295ea] flex items-center justify-center bg-white shadow-sm mb-5">
                      <Icon size={44} strokeWidth={1.8} />
                    </div>
                    <p className="text-[#111827] text-[14px] md:text-[16px] font-medium">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Three Small Cards */}
      <section className="bg-[#f7f7f7] py-20 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[88px] h-[88px] rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-[#1295ea] mb-7">
                  <Icon size={36} strokeWidth={1.7} />
                </div>

                <h3 className="text-[22px] font-normal mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4b5563] text-[15px] leading-7 max-w-[330px] mx-auto">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-22 md:py-28 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-zinc-100 rounded-[24px] p-8 md:p-10 shadow-sm">
            <Target className="text-[#1295ea] mb-6" size={36} />
            <h3 className="text-[28px] font-normal mb-4">Our Mission</h3>
            <p className="text-[#5f6b7a] text-[16px] leading-8">
              To make driver-related information simple, readable, and useful for
              everyday users who want to understand how their devices work.
            </p>
          </div>

          <div className="border border-zinc-100 rounded-[24px] p-8 md:p-10 shadow-sm">
            <Eye className="text-[#1295ea] mb-6" size={36} />
            <h3 className="text-[28px] font-normal mb-4">Our Vision</h3>
            <p className="text-[#5f6b7a] text-[16px] leading-8">
              To create a clear educational resource where driver basics,
              compatibility, updates, and device topics are explained without
              confusing language.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <section className="bg-[#1295ea] py-16 text-center px-6">
        <div className="max-w-[900px] mx-auto">
          <CheckCircle2 className="mx-auto text-white mb-5" size={42} />
          <h2 className="text-white text-[32px] md:text-[42px] font-light mb-5">
            Built for Clear Driver Education
          </h2>
          <p className="text-white/90 text-[16px] leading-8 max-w-[720px] mx-auto mb-9">
            Our content is informational only and created to help readers learn
            about drivers, connected devices, and system behavior in a simple way.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#1295ea] px-10 py-4 rounded-[4px] font-medium hover:bg-[#f3f8ff] transition"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;