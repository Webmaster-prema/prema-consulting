import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PartnersPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: "XPI",
      logo: "/partners/xpi.png",
      description: "Specialized in the development, integration and maintenance of electronic payment systems. Their revolutionary Card24 solution empowers major financial institutions worldwide.",
      website: "https://xpi.ma/",
      founded: "2008",
      specialty: "Electronic Payment Systems"
    },
    {
      name: "Temenos",
      logo: "/partners/temenos.webp",
      description: "Listed on the Swiss stock exchange, Temenos is a provider of banking software to retail, corporate, universal, private, Islamic, and community banks. Serving over 3,000 financial institutions in 145 countries.",
      website: "https://www.temenos.com/",
      specialty: "Banking Software"
    },
    {
      name: "Digital Arena Solutions",
      logo: "/partners/digiarenas.png",
      description: "A digital transformation and enterprise technology partner delivering consulting and implementation services across cloud, data, and modern business platforms.",
      website: "https://www.digiarenas.com/",
      specialty: "Digital Transformation Services"
    },
    {
      name: "Oracle",
      logo: "/partners/oracle.png",
      description: "American multinational computer technology company and the third-largest software company in the world, offering database software, cloud systems, and enterprise solutions.",
      website: "https://www.oracle.com/",
      founded: "1977",
      specialty: "Enterprise Software & Cloud"
    },
    {
      name: "01 Systems",
      logo: "/partners/01systems.png",
      description: "Provider of Digital Transformation solutions for banks in areas of Signature Verification, Customer On-boarding, Biometrics, Paperless transactions & more.",
      website: "http://www.01systems.com/",
      specialty: "Digital Transformation"
    },
    {
      name: "ILA Group",
      logo: "/partners/ila-group.png",
      description: "A leading international company investing in and managing IT and FinTech ventures, capitalizing on emerging opportunities of B2B application stores, AI, and embedded mobility solutions.",
      website: "https://ila-group.com/",
      specialty: "IT & FinTech Ventures"
    },
    {
      name: "KOBIL",
      logo: "/partners/kobil.png",
      description: "Join the New Era of Secure Digital Identities and Business Communications. KOBIL's unique platform facilitates all business processes with the highest security standards.",
      website: "https://www.kobil.com/",
      specialty: "Digital Identity & Security"
    },
    {
      name: "QuanTech",
      logo: "/partners/quantech.png",
      description: "At the forefront of innovation, delivering services that help businesses meet goals and objectives faster through Technology components and Digital Transformation engagements.",
      website: "https://quantech.com.lb/",
      specialty: "Digital Transformation"
    },
    {
      name: "Advanced Financial Solutions",
      logo: "/partners/afs.png",
      description: "A software & consulting company established in 2000 as a subsidiary of Midis Group, specializing in Risk, Finance & Compliance solutions with over 20 years of proven track record.",
      website: "https://www.mds-afs.com/",
      founded: "2000",
      specialty: "Risk, Finance & Compliance"
    },
    {
      name: "Hysab Kytab",
      logo: "/partners/hysabkytab.webp",
      description: "A technology company providing digital solutions through financial management and consumer products. Their consumer app has over 640,000+ users from over 160 countries with 12 Million+ transactions.",
      website: "https://hysabkytab.com/",
      specialty: "Financial Management"
    },
    {
      name: "BankCube™",
      logo: "/partners/bankcube.png",
      description: "Provides unique banking solutions through Data Services, Business Platforms, and Digital Solutions. Well known for data migration and reconciliation services for core banking systems.",
      website: "https://bankcubes.com/",
      specialty: "Banking Solutions & Data Services"
    },
    {
      name: "Banknbox",
      logo: "/partners/banknbox.png",
      description: "The most powerful banking and payment services. Where innovation meets secure and agile solutions for banking and payments, enabling businesses to thrive in the digital economy.",
      website: "https://www.banknbox.com/",
      specialty: "Banking & Payment Services"
    },
    {
      name: "Arizona Intelligent Solutions",
      logo: "/partners/arizona.png",
      description: "Founded in 2017 in Amman, Jordan, specializing in advanced digital transformation technologies with emphasis on paperless processes and automated auditing. Helping organizations shift to a digital-first model that enhances efficiency, lowers costs, and supports sustainability.",
      website: "https://arizonaais.com/",
      founded: "2017",
      specialty: "Digital Transformation & Auditing"
    },
    {
      name: "Crystal Networks",
      logo: "/partners/crystal-networks.png",
      description: "A dynamic IT systems integrator established in 2005, supporting organizations across Levant and Gulf territories with infrastructure, networking, cybersecurity, cloud, and managed technology services.",
      website: "https://crystalnt.com/",
      founded: "2005",
      specialty: "IT Systems Integration"
    },
    {
      name: "Liquid C2",
      logo: "/partners/liquid-c2.svg",
      description: "A technology and cloud solutions provider delivering secure cloud, cybersecurity, managed services, and disaster recovery capabilities to accelerate business growth.",
      website: "https://liquidc2.com/",
      specialty: "Cloud & Cybersecurity Services"
    }
  ];

  return (
    <div className="font-sans">

      <Navbar />

      {/* Hero Banner */}
      <section id="main-content" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition text-sm">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Strategic Partners</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We collaborate with leading technology companies worldwide to deliver comprehensive, cutting-edge solutions for the financial services industry.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-detail-card bg-white border border-slate-200 rounded-2xl p-8"
              >
                {/* Partner logo */}
                <div className="bg-slate-50 rounded-xl p-6 mb-6 flex items-center justify-center min-h-[100px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[180px] object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{partner.name}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {partner.specialty}
                  </span>
                  {partner.founded && (
                    <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Est. {partner.founded}
                    </span>
                  )}
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">{partner.description}</p>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-semibold text-sm transition"
                  >
                    <Globe className="w-4 h-4" /> Visit Website <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join our growing network of strategic technology partners
          </p>
          <a
            href="mailto:info@prema-consulting.com"
            className="inline-block bg-white text-cyan-500 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
