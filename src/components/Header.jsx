import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, Search,
  Cpu, Settings, Usb, ShieldCheck,
  Monitor, Volume2, Wifi, HardDrive,
  Keyboard, Printer, ScanLine, Webcam,
  Tv, ArrowRight, Mail
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const services = [
  {
    category: 'The System Foundation',
    subtitle: 'Essential Drivers',
    icon: Cpu,
    description: 'Basic driver topics for everyday system understanding.',
    items: [
      { name: 'Chipset Driver', desc: 'Core system link', icon: Cpu, path: '/drivers/chipset' },
      { name: 'Graphics Driver', desc: 'Display visuals', icon: Monitor, path: '/drivers/graphics' },
      { name: 'Audio Driver', desc: 'Sound output', icon: Volume2, path: '/drivers/audio' },
      { name: 'Network Driver', desc: 'WiFi & internet', icon: Wifi, path: '/drivers/network' },
    ],
  },
  {
    category: 'Internal Control',
    subtitle: 'Hardware Drivers',
    icon: Settings,
    description: 'Simple learning topics for internal device connections.',
    items: [
      { name: 'Storage Controller', desc: 'SSD & HDD', icon: HardDrive, path: '/drivers/storage' },
      { name: 'USB Support', desc: 'Port behavior', icon: Usb, path: '/drivers/usb' },
      { name: 'Bluetooth Driver', desc: 'Wireless devices', icon: 'Bluetooth', path: '/drivers/bluetooth' },
      { name: 'Input Drivers', desc: 'Keyboard & touchpad', icon: Keyboard, path: '/drivers/input' },
    ],
  },
  {
    category: 'External Access',
    subtitle: 'Peripheral Drivers',
    icon: Usb,
    description: 'Educational topics for connected external devices.',
    items: [
      { name: 'Printer Driver', desc: 'Print behavior', icon: Printer, path: '/drivers/printer' },
      { name: 'Scanner Support', desc: 'Scan basics', icon: ScanLine, path: '/drivers/scanner' },
      { name: 'Webcam Driver', desc: 'Camera access', icon: Webcam, path: '/drivers/webcam' },
    ],
  },
  {
    category: 'System Layer',
    subtitle: 'Advanced Topics',
    icon: ShieldCheck,
    description: 'Simple explanations of deeper system driver topics.',
    items: [
      { name: 'BIOS/UEFI', desc: 'Startup basics', icon: Settings, path: '/drivers/bios' },
      { name: 'Security Drivers', desc: 'Safe system access', icon: ShieldCheck, path: '/drivers/security' },
      { name: 'Monitor Driver', desc: 'Screen settings', icon: Tv, path: '/drivers/monitor' },
    ],
  },
];

const BluetoothIcon = ({ size = 14, ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m7 7 10 10-5 5V2l5 5L7 17" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const allDriverItems = services.flatMap((service) =>
    service.items.map((item) => ({
      ...item,
      category: service.subtitle,
    }))
  );

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allDriverItems
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 6);

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setSearchQuery('');
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-200 font-['Poppins']">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 py-4">
        <div className="flex items-center justify-between gap-6">

          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo-rok.avif"
              alt="Lappy Tutor"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-8 text-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? 'text-[#1075b8]'
                    : 'text-zinc-700 hover:text-[#1075b8]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 transition ${
                  isServicesOpen ? 'text-[#1075b8]' : 'text-zinc-700 hover:text-[#1075b8]'
                }`}
              >
                Drivers
                <ChevronDown
                  size={15}
                  className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[880px] bg-white border border-zinc-200 rounded-[12px] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden ${
                  isServicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-3'
                }`}
              >
                <div className="grid grid-cols-4 gap-6 p-7">
                  {services.map((service, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full border border-blue-100 bg-blue-50 text-[#1075b8] flex items-center justify-center">
                          <service.icon size={18} />
                        </div>

                        <div>
                          <h4 className="text-[13px] font-medium text-[#1075b8]">
                            {service.subtitle}
                          </h4>
                          <p className="text-[11px] text-zinc-500">
                            {service.category}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {service.items.map((item, itemIdx) => {
                          const ItemIcon = item.name === 'Bluetooth Driver' ? BluetoothIcon : item.icon;

                          return (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                className="group flex items-center gap-2 text-[13px] text-zinc-600 hover:text-[#1075b8] transition"
                              >
                                <ItemIcon size={14} className="text-zinc-400 group-hover:text-[#1075b8]" />
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f7fbff] border-t border-zinc-100 px-7 py-4 flex items-center justify-between">
                  <p className="text-zinc-600 text-[13px]">
                    Explore simple educational information about driver categories.
                  </p>

                
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex flex-1 max-w-[360px] relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search driver topics..."
              aria-label="Search driver topics"
              className="w-full border border-zinc-300 rounded-[6px] py-2.5 pl-10 pr-10 text-[13px] outline-none focus:border-[#1075b8] transition"
            />

            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
              >
                <X size={15} />
              </button>
            )}

            <div
              className={`absolute top-full left-0 w-full mt-3 bg-white border border-zinc-200 rounded-[10px] shadow-lg overflow-hidden transition-all duration-300 ${
                isSearchFocused && suggestions.length > 0
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2'
              }`}
            >
              <div className="p-2">
                {suggestions.map((item, idx) => {
                  const ItemIcon = item.icon === 'Bluetooth' ? BluetoothIcon : item.icon;

                  return (
                    <Link
                      key={idx}
                      to={item.path}
                      className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-blue-50 transition"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1075b8] flex items-center justify-center">
                        <ItemIcon size={14} />
                      </div>
                      <div>
                        <p className="text-[13px] text-zinc-800 font-medium">{item.name}</p>
                        <p className="text-[11px] text-zinc-500">{item.category}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@lappytutor.co"
              className="hidden lg:flex items-center gap-2 text-[13px] text-zinc-700 hover:text-[#1075b8]"
            >
              <Mail size={16} />
              Email Us
            </a>

            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-[#1075b8] text-white px-6 py-2.5 rounded-[4px] text-[13px] font-medium hover:bg-[#0a6ea3] transition"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="xl:hidden w-10 h-10 rounded-[6px] border border-zinc-300 flex items-center justify-center text-zinc-800"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      <div
        className={`xl:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="pt-24 px-6 pb-10 h-full overflow-y-auto">
          <input
            type="text"
            placeholder="Search driver topics..."
            aria-label="Search driver topics mobile"
            className="w-full border border-zinc-300 rounded-[6px] py-3 px-4 text-[14px] outline-none mb-8"
          />

          <div className="space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[26px] text-zinc-900"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6 border-t border-zinc-100">
              <h3 className="text-[#1075b8] text-[12px] uppercase tracking-[0.2em] mb-5">
                Driver Topics
              </h3>

              <div className="space-y-5">
                {services.map((service, idx) => (
                  <div key={idx}>
                    <h4 className="text-[15px] font-medium text-zinc-900 mb-3">
                      {service.subtitle}
                    </h4>

                    <div className="grid grid-cols-2 gap-2">
                      {service.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="border border-zinc-200 rounded-[8px] p-3 text-[12px] text-zinc-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex mt-6 bg-[#1075b8] text-white px-7 py-3 rounded-[4px] text-[14px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;