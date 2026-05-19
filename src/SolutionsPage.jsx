import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Users, TrendingUp, Zap, Globe, Monitor, Lightbulb, CheckCircle, ChevronRight, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const SolutionsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const location = useLocation();

  // Scroll to hash on page load
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

  const solutions = [
    {
      name: "ChatBot",
      slug: "chatbot",
      icon: <Monitor className="w-8 h-8" strokeWidth={1.5} />,
      category: "Digital",
      tagline: "Intelligent Conversational Banking",
      description: "AI-powered conversational banking assistants that handle customer queries, transactions, and support 24/7 across multiple channels.",
      details: "Our ChatBot solutions leverage advanced natural language processing and machine learning to deliver human-like banking interactions. Whether your customers need account information, want to make transfers, or require support with complex queries, our intelligent bots handle it all seamlessly across web, mobile, and messaging platforms.",
      features: [
        "Natural Language Processing (NLP) for accurate intent recognition",
        "Multi-channel deployment — web, mobile app, WhatsApp, SMS",
        "Seamless handoff to human agents for complex queries",
        "Transaction processing and account management capabilities",
        "Analytics dashboard for conversation insights and optimization",
        "Multi-language support for regional deployment"
      ],
      benefits: ["24/7 customer support", "70% reduction in support tickets", "Improved customer satisfaction", "Lower operational costs"]
    },
    {
      name: "Digital Signature Verification",
      slug: "digital-signature-verification",
      icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
      category: "Security",
      tagline: "Secure Document Authentication",
      description: "Secure electronic signature validation systems ensuring document authenticity and regulatory compliance for financial institutions.",
      details: "Our Digital Signature Verification solution provides banks and financial institutions with a robust, legally compliant electronic signature platform. Using advanced cryptographic techniques, the system ensures document integrity, signer authenticity, and non-repudiation across all banking operations — from account opening to loan agreements.",
      features: [
        "PKI-based digital signature creation and verification",
        "Real-time signature matching against stored specimens",
        "Multi-factor authentication for signer identity verification",
        "Audit trail and tamper-evident document sealing",
        "Integration with core banking and document management systems",
        "Compliance with eIDAS, ESIGN Act, and regional regulations"
      ],
      benefits: ["Eliminate paper-based processes", "Faster document turnaround", "Legal compliance assured", "Fraud prevention"]
    },
    {
      name: "Biometric Verification",
      slug: "biometric-verification",
      icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
      category: "Security",
      tagline: "Next-Generation Identity Authentication",
      description: "Advanced biometric authentication using fingerprint, facial recognition, and voice verification for secure customer identification.",
      details: "Our Biometric Verification platform integrates multiple biometric modalities — fingerprint, facial recognition, iris scanning, and voice authentication — to provide multi-layered security for banking transactions. The solution uses liveness detection to prevent spoofing attacks and supports both in-branch and remote verification scenarios.",
      features: [
        "Multi-modal biometric capture (face, fingerprint, voice, iris)",
        "AI-powered liveness detection to prevent spoofing",
        "1:1 verification and 1:N identification capabilities",
        "Mobile SDK for remote biometric enrollment and verification",
        "Integration with national ID databases and third-party data sources",
        "GDPR and privacy-by-design compliant biometric data handling"
      ],
      benefits: ["Frictionless authentication", "Enhanced security posture", "Reduced identity fraud"]
    },
    {
      name: "Customer Identification",
      slug: "customer-identification",
      icon: <CheckCircle className="w-8 h-8" strokeWidth={1.5} />,
      category: "Compliance",
      tagline: "Comprehensive KYC & AML Compliance",
      description: "Comprehensive KYC and identity verification solutions ensuring regulatory compliance and fraud prevention.",
      details: "Our Customer Identification solution automates the entire Know Your Customer (KYC) lifecycle — from initial identity verification and document validation to ongoing due diligence and risk assessment. The platform screens customers against global watchlists, PEP databases, and sanctions lists in real-time, ensuring your institution stays compliant while minimizing friction for legitimate customers.",
      features: [
        "Automated document capture and OCR-based data extraction",
        "Real-time screening against global watchlists and sanctions lists",
        "Risk scoring and customer due diligence automation",
        "PEP (Politically Exposed Persons) screening and monitoring",
        "Ongoing monitoring with automated alerts for risk changes",
        "Configurable compliance workflows for different jurisdictions"
      ],
      benefits: ["Regulatory compliance", "Faster customer verification", "Reduced manual review", "Global watchlist coverage"]
    },
    {
      name: "Customer Onboarding",
      slug: "customer-onboarding",
      icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
      category: "Digital",
      tagline: "Frictionless Digital Account Opening",
      description: "Streamlined digital onboarding journeys that reduce time-to-serve while maintaining full regulatory compliance.",
      details: "Transform your customer onboarding experience with our end-to-end digital solution. From initial application to account activation, our platform guides customers through a seamless journey with intelligent form pre-filling, real-time document verification, and automated compliance checks — reducing onboarding time from days to minutes.",
      features: [
        "Fully digital, paperless account opening journey",
        "Smart form pre-filling with OCR document extraction",
        "Integrated eKYC with biometric and document verification",
        "Real-time eligibility checks and instant decisioning",
        "Customizable workflows for different product types",
        "Omni-channel — start on mobile, complete on desktop or in-branch"
      ],
      benefits: ["90% faster onboarding", "Higher conversion rates", "Paperless processing", "Improved customer experience"]
    },
    {
      name: "Loan Origination",
      slug: "loan-origination",
      icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
      category: "Banking",
      tagline: "Automated Lending Workflows",
      description: "End-to-end loan processing platforms automating applications, credit scoring, approvals, and disbursement workflows.",
      details: "Our Loan Origination System (LOS) digitizes the entire lending lifecycle from application intake through credit analysis, approval, documentation, and disbursement. With built-in credit scoring models, automated decisioning rules, and seamless integration with credit bureaus, the platform dramatically accelerates loan processing while reducing risk exposure.",
      features: [
        "Digital loan application with document upload",
        "Automated credit scoring and risk assessment",
        "Integration with credit bureaus and scoring agencies",
        "Configurable approval workflows and delegation rules",
        "Automated document generation and e-signing",
        "Real-time status tracking for applicants and officers"
      ],
      benefits: ["Faster loan decisions", "Reduced processing costs", "Better risk management", "Improved borrower experience"]
    },
    {
      name: "Transaction Auditing (TAS)",
      slug: "transaction-auditing",
      icon: <Globe className="w-8 h-8" strokeWidth={1.5} />,
      category: "Compliance",
      tagline: "Real-Time Transaction Monitoring",
      description: "Real-time transaction monitoring and auditing systems providing full traceability and compliance reporting.",
      details: "Our Transaction Auditing System (TAS) provides comprehensive, real-time monitoring of all financial transactions across your institution. Every transaction is captured, analyzed, and stored with a complete audit trail. Advanced analytics detect anomalies and suspicious patterns, while automated reporting ensures compliance with regulatory requirements.",
      features: [
        "Real-time capture of all financial transactions",
        "Complete audit trail with full traceability",
        "Anomaly detection with configurable alert rules",
        "Automated regulatory compliance reporting",
        "Advanced search and investigation tools",
        "Integration with core banking and payment systems"
      ],
      benefits: ["Full transaction visibility", "Regulatory compliance", "Fraud detection", "Automated audit reports"]
    },
    {
      name: "Enterprise Signatory Management",
      slug: "enterprise-signatory-management",
      icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
      category: "Enterprise",
      tagline: "Centralized Authorization Control",
      description: "Centralized signatory management for enterprises, automating approval workflows and authorization hierarchies.",
      details: "Our Enterprise Signatory Management solution streamlines how organizations manage signing authorities and approval workflows. The platform maintains a centralized registry of authorized signatories, their roles, limits, and combinations — ensuring every document and transaction is properly authorized while eliminating bottlenecks in the approval process.",
      features: [
        "Centralized signatory registry with role-based access",
        "Configurable multi-level approval hierarchies",
        "Dynamic signing rules based on transaction type and amount",
        "Real-time signatory verification for counter staff",
        "Delegation management for absence handling",
        "Complete audit trail of all authorization activities"
      ],
      benefits: ["Streamlined approvals", "Reduced authorization errors", "Enhanced compliance", "Faster processing"]
    },
    {
      name: "Enterprise Content Management",
      slug: "enterprise-content-management",
      icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />,
      category: "Enterprise",
      tagline: "Intelligent Document Management",
      description: "Intelligent document and content management systems digitizing, organizing, and securing enterprise information.",
      details: "Our Enterprise Content Management (ECM) solution transforms how financial institutions handle documents and unstructured content. From capture and classification to storage, retrieval, and lifecycle management, the platform provides a unified repository that integrates with your core systems — making every document accessible, searchable, and secure.",
      features: [
        "Automated document capture, classification, and indexing",
        "Intelligent OCR and data extraction from scanned documents",
        "Version control and document lifecycle management",
        "Role-based access control and encryption at rest",
        "Full-text search with metadata filtering",
        "Integration with core banking, CRM, and workflow systems"
      ],
      benefits: ["Paperless operations", "Instant document retrieval", "Reduced storage costs", "Improved compliance"]
    },
    {
      name: "Digital Archiving",
      slug: "digital-archiving",
      icon: <Monitor className="w-8 h-8" strokeWidth={1.5} />,
      category: "Enterprise",
      tagline: "Secure Long-Term Storage",
      description: "Secure long-term digital storage solutions ensuring document preservation, retrieval, and regulatory compliance.",
      details: "Our Digital Archiving solution provides financial institutions with a secure, tamper-proof long-term storage platform for critical business records. With automated retention policies, legal hold capabilities, and fast retrieval, the system ensures your archived documents remain accessible and compliant throughout their entire lifecycle — from creation to disposition.",
      features: [
        "Tamper-proof storage with integrity verification",
        "Automated retention and disposition policy management",
        "Legal hold and litigation support capabilities",
        "High-speed retrieval from archived repositories",
        "Compliance with banking record retention regulations",
        "Scalable cloud and on-premises deployment options"
      ],
      benefits: ["Regulatory compliance", "Reduced physical storage", "Fast document retrieval", "Data integrity assured"]
    },
    {
      name: "Personal Finance Management",
      slug: "personal-finance-management",
      icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
      category: "Digital",
      tagline: "Smart Financial Wellness Tools",
      description: "Smart personal finance tools empowering customers with budgeting, spending insights, and financial goal tracking.",
      details: "Our Personal Finance Management (PFM) solution empowers bank customers to take control of their financial lives. With intelligent spending categorization, personalized budgeting tools, savings goal tracking, and AI-driven insights, the platform helps customers make smarter financial decisions while strengthening their relationship with your institution.",
      features: [
        "Automatic transaction categorization and tagging",
        "Customizable budgets with real-time spending alerts",
        "Savings goals with progress tracking and projections",
        "AI-driven spending insights and recommendations",
        "Multi-account aggregation for complete financial view",
        "White-label solution with full branding customization"
      ],
      benefits: ["Increased customer engagement", "Deeper financial insights", "Improved customer retention", "Revenue from premium features"]
    }
  ];

  const categories = ["All", "Digital", "Security", "Compliance", "Banking", "Enterprise"];
  const filteredSolutions = activeFilter === "All" ? solutions : solutions.filter(s => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section id="main-content" className="relative pt-36 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            FinTech <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Innovative technology solutions designed to transform banking operations, enhance customer experiences, and ensure regulatory compliance across the financial sector.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredSolutions.map((solution, index) => (
              <div key={index} id={solution.slug} className="scroll-mt-24 bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl icon-box-premium flex items-center justify-center text-primary shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">{solution.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{solution.name}</h2>
                      <p className="text-primary font-medium">{solution.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">{solution.details}</p>

                  {/* Features & Benefits */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 text-lg">Benefits</h3>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                            <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                            <span className="text-sm font-medium text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            Ready to Transform Your <span className="gradient-text">Banking Operations</span>?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your institution achieve digital excellence. Our team of experts is ready to tailor a solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@prema-consulting.net" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Mail className="w-5 h-5" /> Contact Our Team
            </a>
            <Link to="/" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Back to Home <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
