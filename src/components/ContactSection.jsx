import { Mail, ArrowRight, CheckCircle2, MapPin, MessageSquare, Sparkles, Cpu, Phone } from 'lucide-react';
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
      site_origin: window.location.hostname
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        e.target.reset();
      } else {
        console.error("Backend Error:", result.message);
        setIsSubmitting(false);
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#fafbfc] relative overflow-hidden font-['Poppins']" id="contact">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

      {/* Success Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
          isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border border-blue-100 text-zinc-900 px-6 py-5 rounded-[2rem] shadow-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black">Message Sent</span>
            <span className="text-xs text-zinc-600 mt-0.5">We have received your inquiry.</span>
          </div>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white border border-zinc-200/60 shadow-sm text-blue-600 rounded-2xl mb-8">
              <MessageSquare size={16} />
              <span className="text-[11px] font-black uppercase tracking-widest">
                Contact Hub
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl  text-zinc-900 mb-8 leading-[1.1] ">
              Get in touch <br />
              with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">expert team.</span>
            </h2>

            <p className="text-zinc-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12">
              Have questions about driver updates, hardware compatibility, or system issues? Reach out to our team for clear guidance.
            </p>

            <div className="grid gap-4 sm:grid-cols-1 mb-12">
              {[
                { label: 'Email Address', value: 'info@getyourdriver.shop', icon: Mail, type: 'email' },
                
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-zinc-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-blue-200">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1.5">{item.label}</p>
                    <p className="text-base md:text-lg font-bold text-zinc-900 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
             
             
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 pt-4">
            <div className="relative rounded-[3rem] border border-zinc-200 bg-white/60 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
              
              <div className="mb-12">
                <h3 className="text-3xl  text-zinc-900  mb-4">
                  Send a message
                </h3>
                <p className="text-zinc-600 text-base font-medium leading-relaxed">
                  Fill out the form below with your details and the issue you're facing. Our team will review your message and get back to you shortly.
                </p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">First Name</label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      className="w-full bg-zinc-50 border border-transparent px-6 py-5 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">Last Name</label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      className="w-full bg-zinc-50 border border-transparent px-6 py-5 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-zinc-50 border border-transparent px-6 py-5 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">Problem Category</label>
                    <div className="relative">
                      <select
                        required
                        name="category"
                        className="w-full bg-zinc-50 border border-transparent px-6 py-5 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-zinc-900 appearance-none"
                      >
                        <option value="" disabled selected>Select a category</option>
                        <option value="Graphics">Graphics / Display</option>
                        <option value="Audio">Audio / Sound</option>
                        <option value="Network">Network / Wi-Fi</option>
                        <option value="Storage">Storage / HDD / SSD</option>
                        <option value="Peripheral">Printers / Scanners</option>
                        <option value="Security">Security / TPM</option>
                        <option value="Other">Other Issues</option>
                      </select>
                      <ArrowRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-zinc-600 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    className="w-full bg-zinc-50 border border-transparent px-6 py-5 rounded-2xl focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-zinc-900 resize-none placeholder:text-zinc-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-6 bg-zinc-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-zinc-900/20 active:scale-[0.98] flex items-center justify-center gap-4 disabled:opacity-50 group"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Message
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;