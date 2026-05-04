import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Policies
const PrivacyPolicy = lazy(() => import('./policies/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./policies/TermsOfService'));
const CookiePolicy = lazy(() => import('./policies/CookiePolicy'));
const Disclaimer = lazy(() => import('./policies/Disclaimer'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-2 border-zinc-100 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

// Driver Pages
const ChipsetDriver = lazy(() => import('./pages/drivertype/ChipsetDriver'));
const GraphicsDriver = lazy(() => import('./pages/drivertype/GraphicsDriver'));
const AudioDriver = lazy(() => import('./pages/drivertype/AudioDriver'));
const NetworkDriver = lazy(() => import('./pages/drivertype/NetworkDriver'));
const StorageDriver = lazy(() => import('./pages/drivertype/StorageDriver'));
const USBDriver = lazy(() => import('./pages/drivertype/USBDriver'));
const BluetoothDriver = lazy(() => import('./pages/drivertype/BluetoothDriver'));
const InputDriver = lazy(() => import('./pages/drivertype/InputDriver'));
const PrinterDriver = lazy(() => import('./pages/drivertype/PrinterDriver'));
const ScannerDriver = lazy(() => import('./pages/drivertype/ScannerDriver'));
const WebcamDriver = lazy(() => import('./pages/drivertype/WebcamDriver'));
const BIOSDriver = lazy(() => import('./pages/drivertype/BIOSDriver'));
const SecurityDriver = lazy(() => import('./pages/drivertype/SecurityDriver'));
const MonitorDriver = lazy(() => import('./pages/drivertype/MonitorDriver'));
const PowerManagementDriver = lazy(() => import('./pages/drivertype/PowerManagementDriver'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans selection:bg-blue-50 selection:text-blue-600 bg-white min-h-screen flex flex-col">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1075b8] focus:text-white focus:px-4 focus:py-2 focus:rounded-[4px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1075b8]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* Driver Routes */}
              <Route path="/drivers/chipset" element={<ChipsetDriver />} />
              <Route path="/drivers/graphics" element={<GraphicsDriver />} />
              <Route path="/drivers/audio" element={<AudioDriver />} />
              <Route path="/drivers/network" element={<NetworkDriver />} />
              <Route path="/drivers/storage" element={<StorageDriver />} />
              <Route path="/drivers/usb" element={<USBDriver />} />
              <Route path="/drivers/bluetooth" element={<BluetoothDriver />} />
              <Route path="/drivers/input" element={<InputDriver />} />
              <Route path="/drivers/printer" element={<PrinterDriver />} />
              <Route path="/drivers/scanner" element={<ScannerDriver />} />
              <Route path="/drivers/webcam" element={<WebcamDriver />} />
              <Route path="/drivers/bios" element={<BIOSDriver />} />
              <Route path="/drivers/security" element={<SecurityDriver />} />
              <Route path="/drivers/monitor" element={<MonitorDriver />} />
              <Route path="/drivers/power-management" element={<PowerManagementDriver />} />

              {/* Policy Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
