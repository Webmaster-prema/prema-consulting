import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

const NotFoundPage = () => {
  const location = useLocation();
  usePageMeta(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <section id="main-content" className="relative pt-40 pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase mb-4">Error 404</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Page <span className="gradient-text">Not Found</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            The page you are looking for doesn't exist or has moved. These pages may help instead.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary px-8 py-4">
              Go to Homepage <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary px-8 py-4">Our Services</Link>
            <Link to="/faq" className="btn-secondary px-8 py-4">FAQ</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
