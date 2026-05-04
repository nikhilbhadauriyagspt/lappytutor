import { Mail, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_API_URL } from '../config';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      category: data.category,
      message: data.message,
      site_origin: window.location.hostname,
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setIsSubmitting(false);
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsSubmitting(false);
        alert('Submission failed: ' + result.message);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setIsSubmitting(false);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="pt-5 bg-white font-['Poppins']">
      {/* Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${
          isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border border-blue-100 text-zinc-900 px-6 py-5 rounded-[18px] shadow-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#1075b8] flex items-center justify-center text-white">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold">Message Sent</p>
            <p className="text-xs text-zinc-500">We have received your message.</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] border-b border-zinc-100">
        <div className="flex items-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-[620px]">
            <h1 className="text-[46px] md:text-[64px] font-normal text-[#111827] leading-tight mb-5">
              Contact Us
            </h1>

            <div className="w-[110px] h-[4px] bg-[#1075b8] mb-7"></div>

            <p className="text-[#5f6b7a] text-[16px] md:text-[18px] leading-8 mb-10">
              Have a question about driver topics or how devices work with your computer?
              Send us your message and we’ll keep the response simple, clear, and informational.
            </p>

            <a
              href="mailto:info@lappytutor.co"
              className="inline-flex items-center gap-3 bg-[#1075b8] text-white px-8 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#0a6ea3] transition"
            >
              <Mail size={18} />
              info@lappytutor.co
            </a>
          </div>
        </div>

        <div className="relative bg-[#eaf7ff] min-h-[360px] flex items-center justify-center overflow-hidden">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-white/70"></div>
          <MessageSquare size={230} strokeWidth={1.2} className="relative z-10 text-[#1075b8]" />
          <div className="absolute bottom-0 left-0 right-0 h-[7px] bg-[#1075b8]"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto bg-white rounded-[24px] border border-zinc-100 shadow-sm p-6 md:p-10 lg:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-[34px] md:text-[42px] font-normal text-[#111827] mb-4">
              Send a Message
            </h2>
            <p className="text-[#5f6b7a] text-[15px] md:text-[16px] leading-7 max-w-[650px] mx-auto">
              Share your question or topic below. This form is for general driver
              information and educational inquiries only.
            </p>
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  First Name
                </label>
                <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  className="w-full bg-[#f7f7f7] border border-zinc-200 px-5 py-4 rounded-[10px] outline-none focus:border-[#1075b8] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Last Name
                </label>
                <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Your last name"
                  className="w-full bg-[#f7f7f7] border border-zinc-200 px-5 py-4 rounded-[10px] outline-none focus:border-[#1075b8] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-[#f7f7f7] border border-zinc-200 px-5 py-4 rounded-[10px] outline-none focus:border-[#1075b8] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Topic Category
                </label>
                <select
                  required
                  name="category"
                  defaultValue=""
                  className="w-full bg-[#f7f7f7] border border-zinc-200 px-5 py-4 rounded-[10px] outline-none focus:border-[#1075b8] transition"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Graphics">Graphics / Display</option>
                  <option value="Audio">Audio / Sound</option>
                  <option value="Network">Network / Wi-Fi</option>
                  <option value="Storage">Storage / Drives</option>
                  <option value="Peripheral">Printers / Scanners</option>
                  <option value="Security">Security Drivers</option>
                  <option value="Other">Other Topic</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                Your Message
              </label>
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Write your question or topic here..."
                className="w-full bg-[#f7f7f7] border border-zinc-200 px-5 py-4 rounded-[10px] outline-none focus:border-[#1075b8] transition resize-none"
              />
            </div>

            <button
              disabled={isSubmitting}
              aria-label="Contact form for general driver information"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#1075b8] text-white px-12 py-4 rounded-[4px] font-medium shadow-md hover:bg-[#0a6ea3] transition disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Submit Message
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;