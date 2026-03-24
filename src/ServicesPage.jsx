import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Users, Zap, Globe, CheckCircle, ChevronRight, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => {
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

  const services = [
    {
      id: "core-banking-transformation",
      icon: <Cpu className="w-10 h-10" strokeWidth={1.5} />,
      title: "Core Banking Transformation",
      subtitle: "Modernize your legacy systems with Temenos T24/Transact",
      description: "Prema Consulting offers a comprehensive Core Banking Transformation service designed to help financial institutions modernize their legacy core banking systems. Leveraging our expertise and industry-standard methodologies, we guide our clients in transitioning to the market-leading Temenos T24/Transact core banking platform. Our approach not only ensures a seamless transition but also optimizes operational efficiency, flexibility, and compliance.",
      features: [
        { title: "Legacy System Assessment", detail: "Thorough analysis of existing core banking systems to identify areas for improvement and design a tailored transformation roadmap." },
        { title: "Temenos T24/Transact Implementation", detail: "Complete deployment of the Temenos T24/Transact platform, customized to meet client-specific needs and business requirements." },
        { title: "Data Migration & Conversion", detail: "Secure and accurate migration of data from legacy systems to the new core banking solution with zero data loss." },
        { title: "Process Optimization", detail: "Streamlining banking operations to enhance productivity, reduce costs, and improve the overall customer experience." },
        { title: "Compliance Assurance", detail: "Configuration of the new system to meet local and international banking regulations and compliance standards." }
      ],
      benefits: ["Reduced operational costs", "Improved system performance", "Enhanced regulatory compliance", "Future-proof technology stack", "Better customer experience"]
    },
    {
      id: "digital-banking-services",
      icon: <Globe className="w-10 h-10" strokeWidth={1.5} />,
      title: "Digital Banking Services",
      subtitle: "Enable your customers to bank anytime, anywhere",
      description: "Prema Consulting has successfully implemented many projects using the Infinity product from Temenos to enable banks in the region to offer their products and services through digital channels — Web, Mobile, and Tablets. Our expert consultants cover all aspects of the software to produce complete solutions that utilize all needed components of a digital enabling software from UX/UI, Backend and APIs. We design, develop and implement applications so rich in functionality, attractive and user-friendly that a bank's customers never need to visit any branch.",
      features: [
        { title: "Mobile Banking Applications", detail: "Native and cross-platform mobile apps with rich functionality for retail and corporate banking customers." },
        { title: "Web Banking Portals", detail: "Responsive web applications providing full banking services accessible from any browser and device." },
        { title: "Temenos Infinity Platform", detail: "Expert implementation and customization of the Temenos Infinity digital banking platform for seamless omnichannel experiences." },
        { title: "UX/UI Design", detail: "User-centered design approach ensuring intuitive, attractive interfaces that drive customer adoption and satisfaction." },
        { title: "API Development & Integration", detail: "Robust API layer connecting digital channels with core banking systems and third-party services." }
      ],
      benefits: ["Increased digital adoption", "Reduced branch costs", "24/7 service availability", "Enhanced customer satisfaction", "Omnichannel consistency"]
    },
    {
      id: "managed-it-services",
      icon: <Zap className="w-10 h-10" strokeWidth={1.5} />,
      title: "Managed IT Services",
      subtitle: "Ensure business continuity with expert IT management",
      description: "In today's fast-paced IT and Financial Software Industry, maintaining high-performance and sustainable Managed IT Services is crucial for business success. Companies face growing challenges requiring scalable, highly available, and flexible operational services to handle increasing transaction volumes and evolving business needs. At Prema Consulting, we provide a comprehensive yet flexible portfolio of Managed IT Services, ensuring that our clients achieve business growth, continuity, and maximum return on IT investment.",
      features: [
        { title: "T24/Transact Core Banking Operations", detail: "Daily operations management including COB (Close of Business) processing, ensuring smooth end-of-day transactions." },
        { title: "Backup & Restore Solutions", detail: "Enterprise-grade backup and restore solutions essential for data security and disaster recovery." },
        { title: "Database Administration", detail: "Database administration and performance tuning ensuring efficiency and optimal system performance." },
        { title: "Job Monitoring & Optimization", detail: "T24 job monitoring and performance optimization helping businesses run smoothly and efficiently." },
        { title: "24/7 Monitoring & Support", detail: "Round-the-clock monitoring and support with scalable solutions tailored to your specific business needs." }
      ],
      benefits: ["Seamless IT performance", "System reliability", "Scalable solutions", "Reduced IT overhead", "Business continuity"]
    },
    {
      id: "cyber-security",
      icon: <Shield className="w-10 h-10" strokeWidth={1.5} />,
      title: "Cyber Security",
      subtitle: "Protect your organization from evolving threats",
      description: "Information Security is vital to security-conscious companies, especially in the banking and financial sector. Prema Consulting provides, through its partners network, products and services that protect organizations from today's ever-changing security threats. We offer comprehensive security solutions including SOC as a Service and full-spectrum Cyber Security Services to ensure your institution remains protected and compliant.",
      features: [
        { title: "SOC as a Service", detail: "Fully managed Security Operations Center monitoring your infrastructure 24/7 for threats and anomalies." },
        { title: "Cyber Security Assessments", detail: "Comprehensive security audits and vulnerability assessments to identify and address potential weaknesses." },
        { title: "Threat Detection & Prevention", detail: "Advanced threat detection systems using AI and machine learning to identify and neutralize attacks in real-time." },
        { title: "Banking Security Compliance", detail: "Ensuring compliance with banking security standards and regulations including PCI-DSS, ISO 27001, and local requirements." },
        { title: "Incident Response", detail: "Rapid incident response and recovery procedures to minimize impact and restore operations quickly." }
      ],
      benefits: ["Proactive threat protection", "Regulatory compliance", "Reduced risk exposure", "Expert security team", "Peace of mind"]
    },
    {
      id: "consultancy-services",
      icon: <Users className="w-10 h-10" strokeWidth={1.5} />,
      title: "Consultancy Services",
      subtitle: "Expert advisory for digital transformation",
      description: "Prema Consulting is equipped, through its consultants and partners network, to provide its clients expert Consultancy Services. Our advisory covers the latest technologies in the banking and financial sector, helping institutions navigate digital transformation, adopt emerging technologies, and re-engineer processes for the digital age. We bring deep domain expertise combined with technology knowledge to deliver actionable strategies.",
      features: [
        { title: "Digital Transformation Strategy", detail: "End-to-end digital transformation roadmaps tailored to your institution's goals, capabilities, and market position." },
        { title: "Banking Process Re-engineering", detail: "Redesigning and optimizing banking processes to improve efficiency, reduce costs, and enhance service delivery." },
        { title: "Technology Architecture Assessment", detail: "Evaluating current technology landscapes and designing future-state architectures aligned with business objectives." }
      ],
      benefits: ["Strategic clarity", "Technology roadmap", "Industry best practices", "Risk mitigation", "Competitive advantage"]
    }
  ];

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
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            The Services we offer are focused on the Banking and Financial Industries. We provide Core Banking Transformation, Digital Banking, Managed IT Services, Cyber Security, and Consultancy Services — delivering end-to-end solutions for financial institutions.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Info */}
              <div>
                <div className="icon-box-premium w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display">
                  {service.title}
                </h2>
                <p className="text-primary font-semibold mb-6">{service.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">Key Benefits</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Features */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">Service Features</h3>
                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="icon-box-premium w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{feature.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,169,224,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your <span className="gradient-text">Banking Operations</span>?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your institution modernize, optimize, and grow. Our team of banking and technology experts is ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@prema-consulting.com" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Mail className="w-5 h-5" /> Contact Our Team
            </a>
            <Link to="/solutions" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
