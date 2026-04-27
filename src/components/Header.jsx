import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, Search, 
  Cpu, Settings, Usb, ShieldCheck,
  Monitor, Volume2, Wifi, HardDrive,
  Keyboard, Printer, ScanLine, Webcam,
  Tv, ArrowRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const services = [
  {
    category: "The System Foundation",
    subtitle: "Essential Drivers",
    icon: Cpu,
    description: "Core software required for a stable and usable system.",
    items: [
      { name: "Chipset Driver", desc: "Logic Sync", icon: Cpu, path: "/drivers/chipset" },
      { name: "Graphics Driver", desc: "Visuals & GPU", icon: Monitor, path: "/drivers/graphics" },
      { name: "Audio Driver", desc: "Sound I/O", icon: Volume2, path: "/drivers/audio" },
      { name: "Network Driver", desc: "Wi-Fi & LAN", icon: Wifi, path: "/drivers/network" }
    ]
  },
  {
    category: "Internal Control",
    subtitle: "Hardware-Specific",
    icon: Settings,
    description: "Drivers that manage internal modules for performance.",
    items: [
      { name: "Storage Controller", desc: "NVMe & SSD", icon: HardDrive, path: "/drivers/storage" },
      { name: "USB Support", desc: "Port Power", icon: Usb, path: "/drivers/usb" },
      { name: "Bluetooth Driver", desc: "Wireless Sync", icon: "Bluetooth", path: "/drivers/bluetooth" },
      { name: "Input Drivers", desc: "Gestures", icon: Keyboard, path: "/drivers/input" }
    ]
  },
  {
    category: "External Access",
    subtitle: "Peripheral Drivers",
    icon: Usb,
    description: "Software bridges for all connected external devices.",
    items: [
      { name: "Printer Driver", desc: "Document Spooling", icon: Printer, path: "/drivers/printer" },
      { name: "Scanner Support", desc: "Image Digitizing", icon: ScanLine, path: "/drivers/scanner" },
      { name: "Webcam Driver", desc: "HD Sync", icon: Webcam, path: "/drivers/webcam" }
    ]
  },
  {
    category: "Security & BIOS",
    subtitle: "Advanced Systems",
    icon: ShieldCheck,
    description: "Low-level system protection and firmware management.",
    items: [
      { name: "BIOS/UEFI", desc: "Initialization", icon: Settings, path: "/drivers/bios" },
      { name: "Security Drivers", desc: "TPM 2.0 & Data", icon: ShieldCheck, path: "/drivers/security" },
      { name: "Monitor Driver", desc: "Color & Refresh", icon: Tv, path: "/drivers/monitor" }
    ]
  }
];

// Re-using Bluetooth icon since it's common
const BluetoothIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 7 10 10-5 5V2l5 5L7 17" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();

  // Flatten services for searching
  const allDriverItems = services.flatMap(service => 
    service.items.map(item => ({
      ...item,
      category: service.subtitle
    }))
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Search Input
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allDriverItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Close everything on click outside
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

  // Close on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setSearchQuery('');
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white py-3 border-b border-zinc-100 shadow-sm' : 'bg-white/95 backdrop-blur-md py-5'
    }`}>
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-8">
          
          <Link to="/" className="flex items-center shrink-0 group relative z-10">
            <img 
              src="/logo-rok.avif" 
              alt="Get Your Driver" 
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-between uppercase">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative py-1 text-[13px] font-bold tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-zinc-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
              
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex uppercase items-center gap-1.5 py-1 text-[13px] font-bold tracking-wide transition-colors duration-300 ${
                  isServicesOpen ? 'text-blue-600' : 'text-zinc-600 hover:text-blue-600'
                }`}
              >
                Explore Drivers
                <ChevronDown size={14} className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </nav>

            {/* Modern Search Bar with Suggestions */}
            <div className="relative w-full max-w-md mx-8" ref={searchRef}>
              <div className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search drivers, guides, support..."
                  className={`w-full bg-zinc-50 border transition-all duration-300 rounded-full py-3 pl-12 pr-4 text-[13px] outline-none ${
                    isSearchFocused 
                      ? 'border-blue-600/30 ring-4 ring-blue-600/5 bg-white shadow-lg shadow-blue-600/5' 
                      : 'border-zinc-100 hover:border-zinc-200'
                  }`}
                />
                <Search className={`absolute left-4 transition-colors duration-300 ${isSearchFocused ? 'text-blue-600' : 'text-zinc-600'}`} size={18} />
                
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-zinc-600 hover:text-zinc-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Search Suggestions Dropdown */}
              <div className={`absolute top-full left-0 w-full mt-3 bg-white border border-zinc-100 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden z-50 ${
                isSearchFocused && suggestions.length > 0 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                <div className="p-2">
                  <div className="px-4 py-2 text-[10px] font-black text-zinc-600 uppercase tracking-widest border-b border-zinc-50 mb-1">
                    Suggested Drivers
                  </div>
                  {suggestions.map((item, idx) => {
                    const ItemIcon = item.icon === "Bluetooth" ? BluetoothIcon : item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.path}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-blue-50 group transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                          <ItemIcon size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-zinc-600 group-hover:text-zinc-600">
                            {item.category} • {item.desc}
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
                <div className="bg-zinc-50 p-3 text-center">
                  <button className="text-[11px] font-bold text-blue-600 hover:underline uppercase tracking-widest">
                    View all results
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link 
              to="/contact"
              className="hidden md:block px-8 py-3.5 uppercase bg-blue-600 text-white text-[11px] font-black tracking-widest rounded-full transition-all duration-300 hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-600/20"
            >
              Get in Touch
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl transition-all ${isMenuOpen ? 'bg-blue-600 text-white' : 'text-zinc-900 bg-zinc-100'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown - 4 Column Layout */}
      <div 
        ref={dropdownRef}
        className={`hidden lg:block absolute left-0 w-full bg-white border-b border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out overflow-hidden ${
          isServicesOpen ? 'max-h-[800px] opacity-100 visible translate-y-0' : 'max-h-0 opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="max-w-[1820px] mx-auto px-12 py-14">
          <div className="grid grid-cols-4 gap-12">
            {services.map((service, idx) => {
              const CategoryIcon = service.icon;
              return (
                <div key={idx} className="space-y-8">
                  <div className="flex items-center gap-4 group/title">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover/title:bg-blue-600 group-hover/title:text-white transition-all duration-300">
                      <CategoryIcon size={24} />
                    </div>
                    <div>
                      <h3 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                        {service.category}
                      </h3>
                      <h4 className="text-zinc-900 text-lg font-bold">
                        {service.subtitle}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-zinc-600 text-[13px] leading-relaxed border-l-2 border-zinc-100 pl-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {service.items.map((item, itemIdx) => {
                      const ItemIcon = item.name === "Bluetooth Driver" ? BluetoothIcon : item.icon;
                      return (
                        <li key={itemIdx}>
                          <Link to={item.path} className="group flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-zinc-50 text-zinc-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                              <ItemIcon size={16} />
                            </div>
                            <div>
                              <div className="text-[14px] font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-zinc-600 uppercase font-bold tracking-wider group-hover:text-zinc-600">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-14 pt-8 border-t border-zinc-50 flex items-center justify-between">
            <div className="text-[13px] text-zinc-600 font-medium italic">
              "Ensuring hardware compatibility through precise driver synchronization."
            </div>
            <Link to="/drivers" className="flex items-center gap-2 text-[12px] font-black text-zinc-900 uppercase tracking-widest group">
              View Complete Directory
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 h-screen bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="pt-24 px-8 h-full overflow-y-auto pb-12">
          {/* Mobile Search */}
          <div className="relative mb-10">
            <input 
              type="text" 
              placeholder="Search drivers..."
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 text-[15px] outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-4xl font-black text-zinc-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-blue-600 text-[11px] font-black uppercase tracking-widest mb-8">All Services</h3>
              <div className="grid grid-cols-1 gap-10">
                {services.map((service, idx) => (
                  <div key={idx}>
                    <div className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                      <service.icon size={18} className="text-blue-600" />
                      {service.subtitle}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.items.map((item, itemIdx) => (
                        <Link 
                          key={itemIdx} 
                          to={item.path} 
                          onClick={() => setIsMenuOpen(false)}
                          className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100"
                        >
                          <div className="text-[13px] font-bold text-zinc-800 mb-1">{item.name}</div>
                          <div className="text-[10px] text-zinc-600 font-bold uppercase">{item.desc}</div>
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
              className="mt-4 w-full py-5 bg-blue-600 text-white font-black text-center text-[13px] uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
