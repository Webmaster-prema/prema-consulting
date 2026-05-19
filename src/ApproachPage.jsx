import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Cpu, Users, TrendingUp, Monitor, Lightbulb, CheckCircle, ChevronRight, Mail, Clock, Target, Award } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ApproachPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const factors = [
    {
      title: "People",
      slug: "people",
      icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-blue-500 to-cyan-500",
      tagline: "Our Greatest Asset",
      description: "Investing in top-tier talent with deep domain expertise in banking and financial technology.",
      details: "At the heart of every successful project are our people. We invest heavily in recruiting, developing, and retaining the best talent in the FinTech industry. Our consultants bring years of hands-on experience with core banking systems, digital platforms, and regulatory frameworks across the MENA region and beyond.",
      points: [
        "Domain experts with 10+ years average experience in banking technology",
        "Continuous professional development and industry certification programs",
        "Cross-functional teams combining technical depth with business acumen",
        "Collaborative culture fostering knowledge sharing and mentorship",
        "Strategic hiring from leading financial institutions and technology firms",
        "Dedicated project leadership ensuring accountability and client focus"
      ]
    },
    {
      title: "Automation",
      slug: "automation",
      icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-purple-500 to-indigo-500",
      tagline: "Accelerated Delivery",
      description: "Leveraging cutting-edge tools and frameworks to automate repetitive tasks and accelerate delivery.",
      details: "We embrace automation at every stage of the project lifecycle — from automated testing and continuous integration to deployment pipelines and monitoring. By eliminating manual overhead, we dramatically reduce delivery timelines while improving consistency and reducing the risk of human error.",
      points: [
        "CI/CD pipelines for rapid, reliable deployments",
        "Automated regression testing ensuring quality at speed",
        "Infrastructure as Code (IaC) for consistent environment provisioning",
        "Automated data migration and validation tooling",
        "Robotic Process Automation (RPA) for operational efficiency",
        "Automated monitoring and alerting for proactive issue resolution"
      ]
    },
    {
      title: "Efficiency",
      slug: "efficiency",
      icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-green-500 to-emerald-500",
      tagline: "Maximum Value, Minimum Waste",
      description: "Streamlining processes and eliminating waste to deliver maximum value in minimum time.",
      details: "Efficiency is not just about speed — it's about delivering the right outcomes with optimal resource utilization. We apply lean principles and agile methodologies to eliminate waste, reduce handoffs, and keep our teams focused on activities that directly contribute to client value. Every process is continuously evaluated and optimized.",
      points: [
        "Agile and Scrum methodologies tailored to banking project needs",
        "Lean process design eliminating non-value-add activities",
        "Optimized resource allocation based on skill matching and availability",
        "Streamlined communication channels reducing decision bottlenecks",
        "Parallel workstream execution for compressed timelines",
        "Data-driven performance metrics guiding continuous improvement"
      ]
    },
    {
      title: "Innovation",
      slug: "innovation",
      icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-amber-500 to-orange-500",
      tagline: "Creative Problem Solving",
      description: "Embracing new technologies and creative solutions to solve complex industry challenges.",
      details: "Innovation drives everything we do. We actively explore emerging technologies — from AI and machine learning to blockchain and cloud-native architectures — and evaluate how they can solve real challenges in the financial sector. Our innovation lab prototypes new ideas rapidly, allowing clients to experience the future before committing to full-scale implementation.",
      points: [
        "Dedicated innovation lab for rapid prototyping and proof-of-concepts",
        "AI and machine learning integration for intelligent banking solutions",
        "Cloud-native and microservices architecture for modern platforms",
        "Blockchain exploration for secure, transparent financial transactions",
        "API-first design enabling open banking and ecosystem partnerships",
        "Regular technology radar assessments keeping our stack current"
      ]
    },
    {
      title: "Reusability",
      slug: "reusability",
      icon: <Monitor className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-teal-500 to-cyan-500",
      tagline: "Build Once, Deploy Many",
      description: "Building modular, reusable components and assets that accelerate future project delivery.",
      details: "Through years of delivering banking transformation projects, we've built a library of reusable assets, templates, accelerators, and frameworks. These pre-built components dramatically reduce project timelines — turning months of work into weeks. Every project contributes back to this library, creating a virtuous cycle of continuous improvement.",
      points: [
        "Proprietary accelerator frameworks for core banking implementations",
        "Reusable integration adapters for common banking system interfaces",
        "Pre-built testing scripts covering standard banking scenarios",
        "Template libraries for regulatory compliance and reporting",
        "Shared component libraries for digital banking frontends",
        "Documented patterns and playbooks from successful implementations"
      ]
    },
    {
      title: "Quality",
      slug: "quality",
      icon: <CheckCircle className="w-8 h-8" strokeWidth={1.5} />,
      color: "from-rose-500 to-pink-500",
      tagline: "Excellence as Standard",
      description: "Maintaining rigorous standards with comprehensive testing and continuous improvement practices.",
      details: "Quality is non-negotiable in financial services. We embed quality assurance into every phase of delivery — from requirements validation and design reviews to comprehensive testing strategies and post-deployment monitoring. Our multi-layered quality framework ensures that every deliverable meets the highest industry standards.",
      points: [
        "Multi-layered testing: unit, integration, system, UAT, and performance",
        "Dedicated QA engineers embedded in every development team",
        "Code review practices enforcing coding standards and best practices",
        "Security testing and vulnerability assessments at every milestone",
        "Performance benchmarking against industry standards",
        "Post-deployment health checks and knowledge transfer programs"
      ]
    }
  ];

  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section id="main-content" className="relative pt-36 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Ambient background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[120px] hero-ambient-pulse"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[100px] hero-ambient-drift"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-sm text-gray-400 mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Our Approach</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text content with staggered entrance */}
            <div>
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 font-display transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                Our <span className="gradient-text">Approach</span>
              </h1>
              <p className={`text-xl text-slate-300 leading-relaxed mb-4 transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                At Prema Consulting we focus on shortening the <strong className="text-white">Time To Market</strong>. We believe that the main objective for our clients is to start using the products and services we offer in a productive manner as soon as possible.
              </p>
              <p className={`text-lg text-slate-400 leading-relaxed transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                This will help them achieve their set ROI in the fastest way possible. To achieve TTM in all our engagements, we focus on six key factors that form the foundation of our delivery methodology.
              </p>
            </div>

            {/* Right - Premium Orbital Animation */}
            <div className={`hidden md:flex items-center justify-center transition-all duration-1200 ease-out ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative w-[420px] h-[420px]">
                {/* SVG Orbital Rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
                  {/* Outer ring */}
                  <circle cx="210" cy="210" r="190" fill="none" stroke="url(#ringGradient1)" strokeWidth="0.5" className="orbital-ring-outer" />
                  {/* Middle ring */}
                  <circle cx="210" cy="210" r="140" fill="none" stroke="url(#ringGradient2)" strokeWidth="0.5" className="orbital-ring-middle" />
                  {/* Inner ring */}
                  <circle cx="210" cy="210" r="85" fill="none" stroke="url(#ringGradient3)" strokeWidth="0.5" className="orbital-ring-inner" />

                  {/* Dashed orbit paths */}
                  <circle cx="210" cy="210" r="190" fill="none" stroke="rgba(0,169,224,0.08)" strokeWidth="1" strokeDasharray="4 8" className="orbital-dash-spin" />
                  <circle cx="210" cy="210" r="140" fill="none" stroke="rgba(0,169,224,0.06)" strokeWidth="1" strokeDasharray="3 12" className="orbital-dash-spin-reverse" />

                  {/* Connecting lines from center to nodes */}
                  {factors.map((_, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 210 + 190 * Math.cos(angle);
                    const y = 210 + 190 * Math.sin(angle);
                    return (
                      <line key={`line-${i}`} x1="210" y1="210" x2={x} y2={y} stroke="rgba(0,169,224,0.06)" strokeWidth="0.5" strokeDasharray="2 6" />
                    );
                  })}

                  {/* Gradient defs */}
                  <defs>
                    <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0,169,224,0.3)" />
                      <stop offset="50%" stopColor="rgba(0,169,224,0.05)" />
                      <stop offset="100%" stopColor="rgba(0,169,224,0.2)" />
                    </linearGradient>
                    <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0,169,224,0.15)" />
                      <stop offset="50%" stopColor="rgba(0,169,224,0.08)" />
                      <stop offset="100%" stopColor="rgba(0,169,224,0.2)" />
                    </linearGradient>
                    <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0,169,224,0.2)" />
                      <stop offset="100%" stopColor="rgba(0,169,224,0.1)" />
                    </linearGradient>
                    <radialGradient id="coreGlow">
                      <stop offset="0%" stopColor="rgba(0,169,224,0.3)" />
                      <stop offset="100%" stopColor="rgba(0,169,224,0)" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Core center element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-primary/20 rounded-full blur-xl core-pulse"></div>
                    <div className="absolute -inset-3 bg-primary/10 rounded-full blur-md core-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-md border border-primary/30 flex flex-col items-center justify-center">
                      <Clock className="w-7 h-7 text-primary mb-1" />
                      <span className="text-[10px] font-bold text-white/90 tracking-widest uppercase">TTM</span>
                    </div>
                  </div>
                </div>

                {/* Orbiting factor nodes */}
                {factors.map((factor, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const x = 210 + 190 * Math.cos(angle);
                  const y = 210 + 190 * Math.sin(angle);
                  const colors = [
                    'from-blue-400/80 to-cyan-400/80',
                    'from-purple-400/80 to-indigo-400/80',
                    'from-green-400/80 to-emerald-400/80',
                    'from-amber-400/80 to-orange-400/80',
                    'from-teal-400/80 to-cyan-400/80',
                    'from-rose-400/80 to-pink-400/80'
                  ];
                  const glowColors = [
                    'rgba(59,130,246,0.3)',
                    'rgba(139,92,246,0.3)',
                    'rgba(34,197,94,0.3)',
                    'rgba(245,158,11,0.3)',
                    'rgba(20,184,166,0.3)',
                    'rgba(244,63,94,0.3)'
                  ];

                  return (
                    <a
                      href={`#${factor.slug}`}
                      key={i}
                      className="absolute z-10 group"
                      style={{
                        left: `${x - 32}px`,
                        top: `${y - 32}px`,
                        animation: `nodeFloat ${3 + i * 0.4}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    >
                      <div className="relative">
                        {/* Node glow */}
                        <div
                          className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ backgroundColor: glowColors[i] }}
                        ></div>
                        {/* Node body */}
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[i]} backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-white/40 transition-all duration-500`}>
                          <div className="text-white [&>svg]:w-5 [&>svg]:h-5 mb-0.5">{factor.icon}</div>
                          <span className="text-[8px] font-semibold text-white/90 tracking-wide uppercase">{factor.title}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}

                {/* Floating micro particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{
                      left: `${60 + Math.random() * 300}px`,
                      top: `${60 + Math.random() * 300}px`,
                      animation: `particleDrift ${4 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="icon-box-premium w-14 h-14 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Clock className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Faster Delivery</h3>
                <p className="text-sm text-slate-500">Shortening time-to-market for maximum ROI</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="icon-box-premium w-14 h-14 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Target className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Results Driven</h3>
                <p className="text-sm text-slate-500">Every action focused on measurable outcomes</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="icon-box-premium w-14 h-14 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Award className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Proven Track Record</h3>
                <p className="text-sm text-slate-500">20+ successful implementations across the region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factor Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Six Pillars of Our <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Each factor works in harmony to ensure we deliver exceptional results at speed
            </p>
          </div>

          <div className="space-y-12">
            {factors.map((factor, index) => (
              <div key={index} id={factor.slug} className="scroll-mt-24">
                <div className={`bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ${index % 2 === 0 ? '' : ''}`}>
                  <div className="p-8 md:p-10">
                    <div className="grid md:grid-cols-5 gap-8">
                      {/* Left - Number, Icon, Title */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.color} flex items-center justify-center text-white shrink-0`}>
                            {factor.icon}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                            <h3 className="text-2xl font-bold text-slate-900">{factor.title}</h3>
                          </div>
                        </div>
                        <p className="text-primary font-semibold mb-3">{factor.tagline}</p>
                        <p className="text-slate-600 leading-relaxed">{factor.details}</p>
                      </div>

                      {/* Right - Key Points */}
                      <div className="md:col-span-3">
                        <h4 className="font-bold text-slate-900 mb-4 text-lg">How We Apply This</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {factor.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We <span className="gradient-text">Engage</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our proven engagement process ensures transparency, alignment, and successful outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive workshops to understand your current landscape, pain points, and strategic objectives." },
              { step: "02", title: "Strategy", desc: "Tailored roadmap with clear milestones, resource plans, and risk mitigation strategies." },
              { step: "03", title: "Execution", desc: "Agile delivery with regular sprint demos, iterative feedback, and continuous alignment." },
              { step: "04", title: "Transition", desc: "Knowledge transfer, training, and ongoing support ensuring sustainable operations." }
            ].map((phase, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-6 -ml-3 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold gradient-text mb-3">{phase.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Accelerate Your <span className="gradient-text">Time To Market</span>?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodology can help your institution achieve faster, better results. Our team is ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@prema-consulting.net" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Mail className="w-5 h-5" /> Contact Our Team
            </a>
            <Link to="/#services" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Explore Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApproachPage;
