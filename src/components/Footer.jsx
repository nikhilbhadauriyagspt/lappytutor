import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-[#111827] font-['Poppins']">
      <div className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo-rok.avif" alt="Lappy Tutor" className="h-14 w-auto object-contain" />
            </Link>

            <p className="text-[#4b5563] text-[14px] leading-7 max-w-[320px] mb-7">
              Lappy Tutor is an educational website created to explain driver basics,
              device connections, and common system topics in simple language.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-[#1075b8] text-white px-8 py-3 rounded-[4px] text-[14px] font-medium hover:bg-[#0769a3] transition"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h3 className="text-[24px] font-normal mb-4">Useful Links</h3>
            <div className="w-[75px] h-[3px] bg-[#1075b8] mb-6"></div>

            <div className="space-y-4 text-[14px]">
              <Link to="/" className="block hover:text-[#1075b8]">Home</Link>
              <Link to="/about" className="block hover:text-[#1075b8]">About Us</Link>
              <Link to="/contact" className="block hover:text-[#1075b8]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-normal mb-4">Driver Topics</h3>
            <div className="w-[75px] h-[3px] bg-[#1075b8] mb-6"></div>

            <div className="space-y-4 text-[14px]">
              <Link to="/drivers/graphics" className="block hover:text-[#1075b8]">Display & Graphics Basics</Link>
              <Link to="/drivers/audio" className="block hover:text-[#1075b8]">Sound & Audio Drivers</Link>
              <Link to="/drivers/network" className="block hover:text-[#1075b8]">WiFi & Network Drivers</Link>
              <Link to="/drivers/printer" className="block hover:text-[#1075b8]">Printer Driver Information</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-normal mb-4">Policies</h3>
            <div className="w-[75px] h-[3px] bg-[#1075b8] mb-6"></div>

            <div className="space-y-4 text-[14px] mb-8">
              <Link to="/privacy-policy" className="block hover:text-[#1075b8]">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block hover:text-[#1075b8]">Terms of Service</Link>
              <Link to="/disclaimer" className="block hover:text-[#1075b8]">Disclaimer</Link>
              <Link to="/cookie-policy" className="block hover:text-[#1075b8]">Cookie Policy</Link>
            </div>

            <div className="flex items-start gap-3 text-[#4b5563] text-[14px] leading-7">
              <Mail size={18} className="text-[#1075b8] mt-1" />
              <a href="mailto:info@lappytutor.co" className="hover:text-[#1075b8]">
                info@lappytutor.co
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#0769a3] py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-[13px]">
            © {currentYear} Lappy Tutor. All rights reserved.
          </p>

          <p className="text-white text-[12px]">
            Educational information only. No software downloads or installation services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;