import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ChevronRight, Database, Handshake, Mail, Search, ShieldCheck, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FaqList from './FaqList';
import faqs, { faqCategories, faqPlainText, FAQ_UPDATED } from './faqData';
import usePageMeta from './usePageMeta';

const updatedLabel = new Date(`${FAQ_UPDATED}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const categoryDetails = {
  'about-prema': { icon: Building2, blurb: 'Who we are, where we work and the credentials behind us.' },
  'core-banking': { icon: Database, blurb: 'Temenos Transact, timelines and moving data safely.' },
  'digital-banking-security': { icon: ShieldCheck, blurb: 'Digital channels, ready-made solutions and cyber security.' },
  'choosing-a-partner': { icon: Handshake, blurb: 'What to look for, and how working with us starts.' },
};

const FaqPage = () => {
  usePageMeta('/faq');
  const [query, setQuery] = useState('');

  useEffect(() => {
    // A link to a single question (/faq#<id>) is scrolled into view by FaqList.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const term = query.trim().toLowerCase();
  const results = term
    ? faqs.filter((item) => `${item.q} ${faqPlainText(item)}`.toLowerCase().includes(term))
    : [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section id="main-content" className="hero-gradient relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 dot-pattern opacity-15"></div>
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] hero-ambient-drift"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display leading-[1.1]">
            <span className="block text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-primary mb-4">Frequently Asked Questions</span>
            Expert Answers on <span className="gradient-text bg-gradient-to-r from-primary to-blue-400">Banking Transformation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Core banking, digital banking, Temenos platforms and choosing the right partner in the Middle East and North Africa, answered by the people who deliver it.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute z-10 left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 pointer-events-none" />
            <label htmlFor="faq-search" className="sr-only">Search the FAQ</label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions, e.g. data migration, Temenos, ISO"
              className="w-full bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-full pl-14 pr-14 py-5 text-white placeholder:text-slate-400 text-base md:text-lg focus:outline-none focus:border-primary/60 focus:bg-white/10 focus:ring-4 focus:ring-primary/20 transition-all [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="text-sm text-slate-400 mt-5">
            {faqs.length} questions · Last updated <time dateTime={FAQ_UPDATED}>{updatedLabel}</time>
          </p>
        </div>
      </section>

      {/* Topic cards, overlapping the hero */}
      <section className="relative z-20 -mt-16 pb-6">
        <nav aria-label="FAQ topics" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {faqCategories.map((category) => {
            const { icon: Icon, blurb } = categoryDetails[category.id];
            const count = faqs.filter((item) => item.category === category.id).length;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={() => setQuery('')}
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="icon-box-premium w-11 h-11 rounded-xl flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-bold text-slate-400">{count} questions</span>
                </div>
                <p className="font-display font-bold text-slate-900 mb-1.5">{category.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{blurb}</p>
              </a>
            );
          })}
        </nav>
      </section>

      {/* Questions */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {term ? (
            <div aria-live="polite">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {results.length} {results.length === 1 ? 'answer' : 'answers'} for “{query.trim()}”
              </h2>
              {results.length > 0 ? (
                <FaqList key={term} items={results} openFirst />
              ) : (
                <div className="text-center bg-slate-50 border border-slate-200 rounded-2xl p-10">
                  <p className="text-lg font-semibold text-slate-900 mb-2">No question matches that yet.</p>
                  <p className="text-slate-600 mb-6">Ask us directly and a specialist will reply.</p>
                  <a href="mailto:info@prema-consulting.net" className="btn-primary px-6 py-3">
                    <Mail className="w-4 h-4" /> Ask Our Team
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-16">
              {faqCategories.map((category) => {
                const { icon: Icon } = categoryDetails[category.id];
                return (
                  <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center shadow-lg shadow-primary/25">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </span>
                      <h2 id={`${category.id}-heading`} className="text-2xl md:text-3xl font-bold text-slate-900">
                        {category.title}
                      </h2>
                    </div>
                    <FaqList items={faqs.filter((item) => item.category === category.id)} openFirst />
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-14 md:px-14 text-center">
            <div className="absolute inset-0 dot-pattern opacity-10" aria-hidden="true"></div>
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still have a question? <span className="gradient-text bg-gradient-to-r from-primary to-blue-400">Ask a specialist.</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                Our Temenos consultants in Amman and Baghdad are ready to talk through your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@prema-consulting.net" className="btn-primary px-8 py-4">
                  <Mail className="w-5 h-5" /> Contact Our Team
                </a>
                <Link to="/services" className="btn-secondary px-8 py-4">
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqPage;
