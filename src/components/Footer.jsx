import {
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe,
  Lock,
  Cpu,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Disclaimer', path: '/disclaimer' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-[#09090b] text-white pt-16 pb-8 overflow-hidden relative font-['Poppins']">
      {/* Success Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
          isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#18181b] border border-zinc-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Subscription Active</span>
            <span className="text-[11px] text-zinc-400">You're now synced with our network.</span>
          </div>
        </div>
      </div>

      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-15 max-w-full mx-auto relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12 pb-12 border-b border-white/5">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 group mb-6">
              <img 
                src="/logo-rok.png" 
                alt="Get Your Driver" 
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 brightness-0 invert" 
              />
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md font-medium">
              The authoritative destination for understanding device drivers and system architecture.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-blue-600/30 transition-colors duration-700" />
              
              <div className="relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-blue-500" size={16} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Stay Synced
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed font-medium">
                    Architectural insights and driver updates delivered to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm font-medium outline-none focus:border-blue-500 transition-all placeholder:text-zinc-500 pr-32"
                  />
                  <button
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white px-5 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-2 group/btn"
                  >
                    {isSubmitting ? '...' : (
                      <>
                        Subscribe
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">
              System Core
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-blue-500 font-bold text-[13px] transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">
              Governance
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-blue-500 font-bold text-[13px] transition-all flex items-center gap-2 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">
              Technical Support
            </h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail size={14} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email</span>
                </div>
                <a href="mailto:info@getyourdriver.shop" className="text-zinc-300 hover:text-white text-sm font-bold transition-colors">
                  info@getyourdriver.shop
                </a>
              </div>

              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
           
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-blue-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">SSL Secured</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.2em]">
              &copy; {currentYear} GET YOUR DRIVER. All rights reserved.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-zinc-300 text-[8px] font-black uppercase tracking-[0.25em] leading-loose max-w-4xl mx-auto ">
            For Informational purposes only. We do not distribute software or provide installation files.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;