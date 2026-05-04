import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const BlogCard = ({ post, featured = false }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={`group relative flex flex-col h-full bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${
        featured ? 'lg:col-span-2 lg:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-zinc-100 ${featured ? 'lg:w-1/2' : 'aspect-[16/10]'}`}>
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-zinc-900 shadow-sm">
            <Sparkles size={12} className="text-blue-600" />
            {featured ? 'Featured' : 'Latest'}
          </span>
        </div>
      </div>

      <div className={`p-8 md:p-10 flex flex-col flex-grow ${featured ? 'lg:w-1/2 justify-center' : ''}`}>
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-6">
          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-blue-600" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-blue-600" />
            {post.readTime}
          </span>
        </div>

        <h2 className={`font-black text-zinc-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors ${
          featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        }`}>
          {post.title}
        </h2>

        <p className={`text-zinc-600 font-medium text-sm leading-relaxed mb-8 ${featured ? 'line-clamp-6 md:line-clamp-none' : 'line-clamp-3'}`}>
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-blue-600 transition-all">
          Read Full Analysis
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
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

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-[#fafbfc] min-h-screen pt-32 pb-24 font-['Poppins'] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px]  uppercase tracking-widest mb-8 border border-blue-100/50 shadow-sm">
            <BookOpen size={16} />
            Engineering Intelligence
          </div>

          <h1 className="text-5xl md:text-4xl  text-zinc-900 leading-[1.05] mb-8 ">
            Driver Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 italic">Modern Systems.</span>
          </h1>

          <p className="text-zinc-600 text-lg md:text-xl  leading-relaxed max-w-2xl mx-auto">
            Deep-dive technical analyses, practical system guides, and hardware 
            synchronization updates curated for precision performance.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-8">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {remainingPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Modern Newsletter Section */}
        <div className="relative rounded-[3rem] bg-zinc-900 text-white p-12 md:p-24 overflow-hidden shadow-2xl shadow-zinc-950/20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                <Sparkles size={14} />
                Stay Synchronized
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight ">
                Access the <br /> <span className="text-blue-500">Knowledge Network.</span>
              </h2>

              <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-md">
                Get high-level system maintenance tips and critical device awareness 
                delivered to your engineering workspace.
              </p>
            </div>

            <div className="relative">
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <div className="relative group">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white text-sm font-medium outline-none focus:border-blue-500 transition-all placeholder:text-zinc-500 backdrop-blur-xl group-hover:bg-white/10"
                  />
                  <button
                    disabled={isSubmitting}
                    className="md:absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-10 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95 py-4 md:py-0"
                  >
                    {isSubmitting ? '...' : 'Connect'}
                  </button>
                </div>
                {isSuccess && (
                  <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-2 mt-2">
                    <CheckCircle2 size={14} />
                    Successfully Enrolled
                  </p>
                )}
              </form>
              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mt-8 text-center lg:text-left">
                Precision Security. No Spam Policy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;