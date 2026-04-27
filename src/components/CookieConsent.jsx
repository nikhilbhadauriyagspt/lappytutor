import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, ShieldCheck, ArrowRight } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in fade-in slide-in-from-bottom-full duration-700">
      <div className="bg-zinc-900 text-white border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-[1600px] mx-auto px-6 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Content Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left flex-1">
              <div className="hidden md:flex w-12 h-12 rounded-2xl bg-blue-600 shrink-0 items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-1">Privacy Optimization</h3>
                <p className="text-zinc-300 text-[13px] md:text-sm leading-relaxed max-w-3xl">
                  We use cookies to synchronize your experience and analyze our diagnostic traffic. 
                  By continuing to explore, you agree to our 
                  <Link to="/cookie-policy" className="text-white underline hover:text-blue-400 mx-1 transition-colors">Cookie Policy</Link>
                  and 
                  <Link to="/privacy-policy" className="text-white underline hover:text-blue-400 mx-1 transition-colors">Privacy Terms</Link>.
                </p>
              </div>
            </div>

            {/* Action Side */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <div className="flex items-center gap-2 mr-4 hidden xl:flex">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest whitespace-nowrap">SSL Secured & GDPR</span>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-8 py-3.5 bg-zinc-800 text-zinc-300 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-700 hover:text-white transition-all active:scale-95 whitespace-nowrap border border-white/5"
                >
                  Essential Only
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-10 py-3.5 bg-blue-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95 group whitespace-nowrap"
                >
                  <span className="flex items-center justify-center gap-2">
                    Accept All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                aria-label="Close cookie consent"
                className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
