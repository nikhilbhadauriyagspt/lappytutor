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
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Content Side */}
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-blue-50 shrink-0 items-center justify-center text-[#1075b8]">
              <Cookie size={20} />
            </div>
            <div>
              <p className="text-[#4b5563] text-[13px] md:text-[14px] leading-relaxed">
                <strong className="text-[#111827] mr-1">Privacy Optimization:</strong>
                We use cookies to synchronize your experience and analyze our diagnostic traffic. 
                By continuing to explore, you agree to our 
                <Link to="/cookie-policy" className="text-[#1075b8] hover:underline mx-1">Cookie Policy</Link>
                and 
                <Link to="/privacy-policy" className="text-[#1075b8] hover:underline mx-1">Privacy Terms</Link>.
              </p>
            </div>
          </div>

          {/* Action Side */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <div className="hidden lg:flex items-center gap-2 mr-4 border-r border-zinc-100 pr-6">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">SSL Secured & GDPR</span>
            </div>
            
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-6 py-2.5 bg-zinc-100 text-zinc-600 rounded-[4px] text-[12px] font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-8 py-2.5 bg-[#1075b8] text-white rounded-[4px] text-[12px] font-medium hover:bg-[#0769a3] transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
