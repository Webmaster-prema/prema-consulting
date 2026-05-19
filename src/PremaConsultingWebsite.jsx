import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUp, Shield, Cpu, Users, TrendingUp, Zap, Globe, Monitor, Lightbulb, CheckCircle, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PremaConsultingWebsite = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      id: 1,
      icon: <Cpu className="w-7 h-7" strokeWidth={1.5} />,
      title: "Core Banking Transformation",
      description: "We help financial institutions modernize their legacy core banking systems by transitioning to the market-leading Temenos T24/Transact platform. Our comprehensive approach ensures seamless migration, operational efficiency, and full regulatory compliance.",
      features: ["Legacy System Assessment & Transformation Roadmap", "Temenos T24/Transact Implementation & Customization", "Secure Data Migration & Conversion", "Process Optimization & Cost Reduction", "Local & International Compliance Assurance"],
      highlight: true
    },
    {
      id: 2,
      icon: <Globe className="w-7 h-7" strokeWidth={1.5} />,
      title: "Digital Banking Services",
      description: "We enable banks to offer their retail and corporate products through digital channels. Using the Temenos Infinity platform, we design, develop and implement Mobile Apps and Web Applications covering UX/UI, Backend and APIs — so rich and user-friendly that customers never need to visit a branch.",
      features: ["Mobile & Web Banking Applications", "Temenos Infinity Platform Implementation", "UX/UI Design & Customer Experience", "Backend Development & API Integration", "Retail & Corporate Digital Channels"],
      highlight: true
    },
    {
      id: 3,
      icon: <Zap className="w-7 h-7" strokeWidth={1.5} />,
      title: "Managed IT Services",
      description: "We provide a comprehensive yet flexible portfolio of Managed IT Services for the Financial Software Industry. Our proven methodologies and cutting-edge tools help banks optimize operations, ensure business continuity, and achieve maximum return on IT investment.",
      features: ["T24/Transact Core Banking Operations & COB Processing", "Backup, Restore & Database Administration", "Job Monitoring & Performance Optimization", "IT Operations Management for Data Centers", "24/7 Monitoring & Scalable Support"],
      highlight: false
    },
    {
      id: 4,
      icon: <Shield className="w-7 h-7" strokeWidth={1.5} />,
      title: "Cyber Security",
      description: "Information Security is vital for banks and financial institutions. Through our partners network, we provide products and services that protect organizations from today's ever-changing security threats, ensuring compliance with banking security standards.",
      features: ["SOC as a Service", "Cyber Security Assessments & Auditing", "Threat Detection & Prevention", "Banking Security Compliance", "Security Operations & Incident Response"],
      highlight: false
    },
    {
      id: 5,
      icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
      title: "Consultancy Services",
      description: "Through our consultants and partners network, we provide expert advisory services covering the latest technologies in the banking and financial sector, helping institutions navigate digital transformation and emerging technologies.",
      features: ["Digital Transformation Strategy", "Banking Process Re-engineering", "Technology Architecture & Assessment"],
      highlight: false
    }
  ];

  const solutions = [
    { name: "ChatBot", slug: "chatbot", icon: <Monitor className="w-6 h-6" strokeWidth={1.5} />, description: "AI-powered conversational banking assistants that handle customer queries, transactions, and support 24/7 across multiple channels.", category: "Digital" },
    { name: "Digital Signature Verification", slug: "digital-signature-verification", icon: <Shield className="w-6 h-6" strokeWidth={1.5} />, description: "Secure electronic signature validation systems ensuring document authenticity and regulatory compliance for financial institutions.", category: "Security" },
    { name: "Biometric Verification", slug: "biometric-verification", icon: <Users className="w-6 h-6" strokeWidth={1.5} />, description: "Advanced biometric authentication using fingerprint, facial recognition, and voice verification for secure customer identification.", category: "Security" },
    { name: "Customer Identification", slug: "customer-identification", icon: <CheckCircle className="w-6 h-6" strokeWidth={1.5} />, description: "Comprehensive KYC and identity verification solutions ensuring regulatory compliance and fraud prevention.", category: "Compliance" },
    { name: "Customer Onboarding", slug: "customer-onboarding", icon: <Zap className="w-6 h-6" strokeWidth={1.5} />, description: "Streamlined digital onboarding journeys that reduce time-to-serve while maintaining full regulatory compliance.", category: "Digital" },
    { name: "Loan Origination", slug: "loan-origination", icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />, description: "End-to-end loan processing platforms automating applications, credit scoring, approvals, and disbursement workflows.", category: "Banking" },
    { name: "Transaction Auditing (TAS)", slug: "transaction-auditing", icon: <Globe className="w-6 h-6" strokeWidth={1.5} />, description: "Real-time transaction monitoring and auditing systems providing full traceability and compliance reporting.", category: "Compliance" },
    { name: "Enterprise Signatory Management", slug: "enterprise-signatory-management", icon: <Shield className="w-6 h-6" strokeWidth={1.5} />, description: "Centralized signatory management for enterprises, automating approval workflows and authorization hierarchies.", category: "Enterprise" },
    { name: "Enterprise Content Management", slug: "enterprise-content-management", icon: <Cpu className="w-6 h-6" strokeWidth={1.5} />, description: "Intelligent document and content management systems digitizing, organizing, and securing enterprise information.", category: "Enterprise" },
    { name: "Digital Archiving", slug: "digital-archiving", icon: <Monitor className="w-6 h-6" strokeWidth={1.5} />, description: "Secure long-term digital storage solutions ensuring document preservation, retrieval, and regulatory compliance.", category: "Enterprise" },
    { name: "Personal Finance Management", slug: "personal-finance-management", icon: <Lightbulb className="w-6 h-6" strokeWidth={1.5} />, description: "Smart personal finance tools empowering customers with budgeting, spending insights, and financial goal tracking.", category: "Digital" },
  ];

  const approachFactors = [
    { title: "People", icon: <Users className="w-5 h-5" strokeWidth={1.5} />, description: "Investing in top-tier talent with deep domain expertise in banking and financial technology." },
    { title: "Automation", icon: <Cpu className="w-5 h-5" strokeWidth={1.5} />, description: "Leveraging cutting-edge tools and frameworks to automate repetitive tasks and accelerate delivery." },
    { title: "Efficiency", icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />, description: "Streamlining processes and eliminating waste to deliver maximum value in minimum time." },
    { title: "Innovation", icon: <Lightbulb className="w-5 h-5" strokeWidth={1.5} />, description: "Embracing new technologies and creative solutions to solve complex industry challenges." },
    { title: "Reusability", icon: <Monitor className="w-5 h-5" strokeWidth={1.5} />, description: "Building modular, reusable components and assets that accelerate future project delivery." },
    { title: "Quality", icon: <CheckCircle className="w-5 h-5" strokeWidth={1.5} />, description: "Maintaining rigorous standards with comprehensive testing and continuous improvement practices." },
  ];

  const partners = [
    { name: "XPI", logo: "/partners/xpi.png", description: "Specialized in the development, integration and maintenance of electronic payment systems. Their revolutionary Card24 solution empowers major financial institutions worldwide." },
    { name: "Temenos", logo: "/partners/temenos.webp", description: "Listed on the Swiss stock exchange, Temenos is a provider of banking software to retail, corporate, universal, private, Islamic, and community banks. Serving over 3,000 financial institutions in 145 countries." },
    { name: "Oracle", logo: "/partners/oracle.png", description: "American multinational computer technology company and the third-largest software company in the world, offering database software, cloud systems, and enterprise solutions." },
    { name: "01 Systems", logo: "/partners/01systems.png", description: "Provider of Digital Transformation solutions for banks in areas of Signature Verification, Customer On-boarding, Biometrics, Paperless transactions & more." },
    { name: "ILA Group", logo: "/partners/ila-group.png", description: "A leading international company investing in and managing IT and FinTech ventures, capitalizing on emerging opportunities of B2B application stores, AI, and embedded mobility solutions." },
    { name: "KOBIL", logo: "/partners/kobil.png", description: "Join the New Era of Secure Digital Identities and Business Communications. KOBIL's unique platform facilitates all business processes with the highest security standards." },
    { name: "QuanTech", logo: "/partners/quantech.png", description: "At the forefront of innovation, delivering services that help businesses meet goals and objectives faster through Technology components and Digital Transformation engagements." },
    { name: "Advanced Financial Solutions", logo: "/partners/afs.png", description: "A software & consulting company established in 2000 as a subsidiary of Midis Group, specializing in Risk, Finance & Compliance solutions with over 20 years of proven track record." },
    { name: "Hysab Kytab", logo: "/partners/hysabkytab.webp", description: "A technology company providing digital solutions through financial management and consumer products. Their consumer app has over 640,000+ users from over 160 countries." },
    { name: "BankCube™", logo: "/partners/bankcube.png", description: "Provides unique banking solutions through Data Services, Business Platforms, and Digital Solutions. Well known for data migration and reconciliation services for core banking systems." },
    { name: "Banknbox", logo: "/partners/banknbox.png", description: "The most powerful banking and payment services. Where innovation meets secure and agile solutions for banking and payments, enabling businesses to thrive in the digital economy." },
    { name: "Arizona Intelligent Solutions", logo: "/partners/arizona.png", description: "Founded in 2017 in Amman, Jordan, specializing in advanced digital transformation technologies with emphasis on paperless processes and automated auditing." }
  ];

  const [heroReady, setHeroReady] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">

      <Navbar />

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top of page"
      >
        <ArrowUp size={20} />
      </button>

      {/* Hero Section */}
      <section id="main-content" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 dot-pattern opacity-15"></div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.04] rounded-full blur-[150px] hero-ambient-pulse"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[120px] hero-ambient-drift"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Trust badge */}
              <div className={`inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ease-out ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm text-slate-300 font-medium">Trusted by 20+ financial institutions across MENA</span>
              </div>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] transition-all duration-1000 ease-out ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                Where Banking Meets<br />
                <span className="gradient-text bg-gradient-to-r from-primary to-blue-400">What's Next</span>
              </h1>
              <p className={`text-xl text-slate-300 mb-10 leading-relaxed max-w-xl transition-all duration-1000 ease-out ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                We help banks modernize core systems, launch digital channels, and operationalize emerging technology — <strong className="text-white">faster, with less risk.</strong>
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                <a href="#services" className="btn-primary text-base px-8 py-4">
                  Explore Our Services <ArrowRight size={18} />
                </a>
                <a href="#about" className="btn-secondary px-8 py-4">
                  About Prema
                </a>
              </div>
            </div>

            {/* Premium SVG Illustration */}
            <div className={`relative hidden md:flex items-center justify-center transition-all duration-1200 ease-out ${heroReady ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '300ms' }} aria-hidden="true">
              <svg viewBox="0 0 500 500" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                {/* Outer glow ring */}
                <circle cx="250" cy="250" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="60s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="170" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" opacity="0.2">
                  <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="45s" repeatCount="indefinite" />
                </circle>

                {/* Dashed orbit rings */}
                <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(0,169,224,0.15)" strokeWidth="1" strokeDasharray="8 12">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="30s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="105" fill="none" stroke="rgba(0,169,224,0.1)" strokeWidth="1" strokeDasharray="4 8">
                  <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="25s" repeatCount="indefinite" />
                </circle>

                {/* Connection lines */}
                <line x1="250" y1="250" x2="370" y2="140" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.4" />
                <line x1="250" y1="250" x2="130" y2="140" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.4" />
                <line x1="250" y1="250" x2="370" y2="360" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.4" />
                <line x1="250" y1="250" x2="130" y2="360" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.4" />
                <line x1="250" y1="250" x2="250" y2="100" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
                <line x1="250" y1="250" x2="400" y2="250" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
                <line x1="250" y1="250" x2="100" y2="250" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
                <line x1="250" y1="250" x2="250" y2="400" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />

                {/* Cross connections */}
                <line x1="370" y1="140" x2="250" y2="100" stroke="rgba(0,169,224,0.15)" strokeWidth="0.5" />
                <line x1="130" y1="140" x2="250" y2="100" stroke="rgba(0,169,224,0.15)" strokeWidth="0.5" />
                <line x1="370" y1="360" x2="400" y2="250" stroke="rgba(0,169,224,0.15)" strokeWidth="0.5" />
                <line x1="130" y1="360" x2="100" y2="250" stroke="rgba(0,169,224,0.15)" strokeWidth="0.5" />

                {/* Center hub */}
                <circle cx="250" cy="250" r="45" fill="url(#centerGrad)" opacity="0.9" />
                <circle cx="250" cy="250" r="45" fill="none" stroke="rgba(0,169,224,0.6)" strokeWidth="1.5" />
                <circle cx="250" cy="250" r="55" fill="none" stroke="rgba(0,169,224,0.15)" strokeWidth="1">
                  <animate attributeName="r" values="55;60;55" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Center icon - Shield/Lock */}
                <path d="M250 228 L250 228 C250 228 270 235 270 235 L270 260 C270 270 250 278 250 278 C250 278 230 270 230 260 L230 235 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="244" y="248" width="12" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
                <circle cx="250" cy="253" r="2" fill="white" />

                {/* Node: Core Banking (top-right) */}
                <g>
                  <circle cx="370" cy="140" r="30" fill="rgba(0,169,224,0.1)" stroke="rgba(0,169,224,0.5)" strokeWidth="1" />
                  <circle cx="370" cy="140" r="22" fill="rgba(10,20,40,0.8)" stroke="rgba(0,169,224,0.3)" strokeWidth="1" />
                  <ellipse cx="370" cy="132" rx="9" ry="3.2" fill="none" stroke="#00A9E0" strokeWidth="1.4" />
                  <line x1="361" y1="132" x2="361" y2="147" stroke="#00A9E0" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="379" y1="132" x2="379" y2="147" stroke="#00A9E0" strokeWidth="1.4" strokeLinecap="round" />
                  <ellipse cx="370" cy="139.5" rx="9" ry="3.2" fill="none" stroke="#00A9E0" strokeWidth="1" opacity="0.85" />
                  <ellipse cx="370" cy="147" rx="9" ry="3.2" fill="none" stroke="#00A9E0" strokeWidth="1.4" />
                  <text x="370" y="182" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="500">Core Banking</text>
                </g>

                {/* Node: Digital Banking (top-left) */}
                <g>
                  <circle cx="130" cy="140" r="30" fill="rgba(0,169,224,0.1)" stroke="rgba(0,169,224,0.5)" strokeWidth="1" />
                  <circle cx="130" cy="140" r="22" fill="rgba(10,20,40,0.8)" stroke="rgba(0,169,224,0.3)" strokeWidth="1" />
                  <circle cx="130" cy="140" r="10" fill="none" stroke="#00A9E0" strokeWidth="1.5" />
                  <ellipse cx="130" cy="140" rx="5" ry="10" fill="none" stroke="#00A9E0" strokeWidth="1" />
                  <line x1="120" y1="140" x2="140" y2="140" stroke="#00A9E0" strokeWidth="1" />
                  <text x="130" y="182" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="500">Digital Banking</text>
                </g>

                {/* Node: Cyber Security (bottom-right) */}
                <g>
                  <circle cx="370" cy="360" r="30" fill="rgba(0,169,224,0.1)" stroke="rgba(0,169,224,0.5)" strokeWidth="1" />
                  <circle cx="370" cy="360" r="22" fill="rgba(10,20,40,0.8)" stroke="rgba(0,169,224,0.3)" strokeWidth="1" />
                  <path d="M370 350 L380 354 L380 363 C380 368 370 372 370 372 C370 372 360 368 360 363 L360 354 Z" fill="none" stroke="#00A9E0" strokeWidth="1.5" />
                  <polyline points="365,360 368,363 375,356" fill="none" stroke="#00A9E0" strokeWidth="1.5" />
                  <text x="370" y="400" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="500">Cyber Security</text>
                </g>

                {/* Node: Managed IT (bottom-left) */}
                <g>
                  <circle cx="130" cy="360" r="30" fill="rgba(0,169,224,0.1)" stroke="rgba(0,169,224,0.5)" strokeWidth="1" />
                  <circle cx="130" cy="360" r="22" fill="rgba(10,20,40,0.8)" stroke="rgba(0,169,224,0.3)" strokeWidth="1" />
                  <rect x="120" y="352" width="20" height="12.5" rx="2" fill="none" stroke="#00A9E0" strokeWidth="1.4" />
                  <polyline points="125,359 128,362 135,355" fill="none" stroke="#00A9E0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="130" y1="364.5" x2="130" y2="368.5" stroke="#00A9E0" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="124.5" y1="368.5" x2="135.5" y2="368.5" stroke="#00A9E0" strokeWidth="1.4" strokeLinecap="round" />
                  <text x="130" y="400" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="500">Managed IT</text>
                </g>

                {/* Orbiting dots */}
                <circle r="4" fill="#00A9E0" opacity="0.8">
                  <animateMotion dur="30s" repeatCount="indefinite" path="M250,110 A140,140 0 1,1 249.99,110" />
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#00A9E0" opacity="0.6">
                  <animateMotion dur="25s" repeatCount="indefinite" path="M355,250 A105,105 0 1,1 354.99,250" />
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" fill="white" opacity="0.5">
                  <animateMotion dur="20s" repeatCount="indefinite" path="M250,80 A170,170 0 1,1 249.99,80" />
                </circle>

                {/* Floating particles */}
                <circle cx="180" cy="120" r="1.5" fill="#00A9E0" opacity="0.6">
                  <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="120;115;120" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="390" r="1.5" fill="#00A9E0" opacity="0.4">
                  <animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="cy" values="390;385;390" dur="3.5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="420" cy="200" r="1" fill="white" opacity="0.3">
                  <animate attributeName="opacity" values="0;0.4;0" dur="5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="80" cy="280" r="1" fill="white" opacity="0.3">
                  <animate attributeName="opacity" values="0;0.3;0" dur="4.5s" repeatCount="indefinite" begin="2s" />
                </circle>

                {/* Gradients */}
                <defs>
                  <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0,169,224,0.3)" />
                    <stop offset="100%" stopColor="rgba(10,20,40,0.9)" />
                  </radialGradient>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00A9E0" />
                    <stop offset="50%" stopColor="rgba(0,169,224,0.3)" />
                    <stop offset="100%" stopColor="#00A9E0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0,169,224,0.6)" />
                    <stop offset="100%" stopColor="rgba(0,169,224,0.1)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">About Prema Consulting</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Empowering <span className="gradient-text">Digital Transformation</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Prema Consulting is a leading FinTech Services company in the MENA region, empowering financial institutions to achieve their digital transformation goals. We leverage technology to unlock new possibilities for Banks, FinTech companies, and more.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                We drive disruptive change, foster innovation, and deliver exceptional customer experiences — helping institutions modernize operations and stay ahead in a rapidly evolving financial landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: "20+", label: "Successful Projects", icon: <CheckCircle className="w-5 h-5" strokeWidth={1.5} /> },
                { number: "50+", label: "Expert Consultants", icon: <Users className="w-5 h-5" strokeWidth={1.5} /> },
                { number: "10+", label: "Years of Experience", icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} /> },
                { number: "14+", label: "Strategic Partners", icon: <Globe className="w-5 h-5" strokeWidth={1.5} /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 group">
                  <div className="icon-box-premium w-10 h-10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mx-auto">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Create <span className="gradient-text">Long-Term Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="service-card bg-white border border-slate-200 rounded-2xl p-7">
              <div className="icon-box-premium w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Market Leadership</h3>
              <p className="text-slate-600 leading-relaxed">Become a key player in the FinTech market by delivering reliable transformation outcomes for financial institutions.</p>
            </div>

            <div className="service-card bg-white border border-slate-200 rounded-2xl p-7">
              <div className="icon-box-premium w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                <Lightbulb className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drive Change</h3>
              <p className="text-slate-600 leading-relaxed">Foster creativity and innovation in financial technology through practical implementation and measurable business value.</p>
            </div>

            <div className="service-card bg-white border border-slate-200 rounded-2xl p-7">
              <div className="icon-box-premium w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                <Users className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Focus</h3>
              <p className="text-slate-600 leading-relaxed">Deliver exceptional experiences that empower consumers and support banks in building trusted digital relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <span className="section-label mx-auto">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
              From core banking modernization to digital channels and cybersecurity, we deliver end-to-end solutions for the financial industry.
            </p>
          </div>

          {/* Row 1 — Core Banking & Digital Banking (2 columns, featured) */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {services.filter(s => s.id <= 2).map((service, index) => (
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={service.id}
                className="service-card bg-white rounded-2xl p-8 lg:p-10 block relative group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
                <div className="icon-box-premium w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 font-display">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-[0.9375rem] leading-relaxed font-sans line-clamp-3">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-sans">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm font-sans group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2 — Managed IT, Cyber Security, Consultancy (3 columns) */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.filter(s => s.id > 2).map((service, index) => (
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={service.id}
                className="service-card bg-white rounded-2xl p-7 block group"
                style={{animationDelay: `${(index + 2) * 0.1}s`}}
              >
                <div className="icon-box-premium w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900 font-display">{service.title}</h3>
                <p className="text-slate-500 mb-5 text-sm leading-relaxed font-sans line-clamp-3">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-sans">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm font-sans group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,169,224,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <span className="section-label text-primary/80">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Time To <span className="gradient-text">Market</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                At Prema Consulting we focus on shortening the Time To Market. We believe that the main objective for our clients is to start using the products and services we offer in a productive manner as soon as possible.
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-8">
                This will help them achieve their set ROI in the fastest way possible. To achieve TTM in all our engagements, we focus on six key factors.
              </p>
              <Link to="/approach" className="btn-primary">
                Explore Our Approach <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right side - Factor cards */}
            <div className="grid grid-cols-2 gap-4">
              {approachFactors.map((factor, index) => (
                <Link to={`/approach#${factor.title.toLowerCase()}`} key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-primary/30 block">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    {factor.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{factor.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{factor.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <span className="section-label mx-auto">Innovation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Innovative solutions that drive digital transformation and operational excellence for financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {solutions.slice(0, 6).map((solution, index) => (
              <Link to={`/solutions#${solution.slug}`} key={index} className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/25 block">
                <div className="flex items-start gap-4">
                  <div className="icon-box-premium w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                    {solution.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-primary/80 uppercase tracking-wider">{solution.category}</span>
                    <h3 className="font-bold text-slate-900 mt-1 mb-1.5 text-base">{solution.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{solution.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-primary text-sm font-semibold mt-4 pl-16 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:pl-[4rem]">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/solutions" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              View All Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section - Scrolling Logo Bar */}
      <section id="partners" className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="section-label mx-auto text-primary/80">Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Strategic Partners</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional solutions
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <div className="marquee-track">
            {[...partners.filter(p => !["01 Systems", "BankCube™", "Arizona Intelligent Solutions", "ILA Group"].includes(p.name)), ...partners.filter(p => !["01 Systems", "BankCube™", "Arizona Intelligent Solutions", "ILA Group"].includes(p.name))].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 bg-white/5 border border-white/10 backdrop-blur-sm px-8 py-5 rounded-xl flex items-center justify-center min-w-[180px] h-[80px] hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-[140px] object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Partners <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
            Let's discuss how Prema Consulting can help you achieve your digital transformation goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@prema-consulting.net" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
            <a 
              href="tel:+96265818929" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremaConsultingWebsite;
