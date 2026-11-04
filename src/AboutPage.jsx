import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeftRight, ChevronRight, Database, FileText, Mail, ShieldCheck, Smartphone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

const facts = [
  { label: "Category", value: "FinTech services provider for banking and finance" },
  { label: "Region served", value: "Middle East and North Africa (MENA)" },
  { label: "Headquarters", value: "Amman, Jordan" },
  { label: "Other offices", value: "Baghdad, Iraq" },
  { label: "Core services", value: "Core banking transformation, digital banking, payment solutions, managed IT services, cyber security, consultancy" },
  { label: "Platforms", value: "Temenos Transact (T24), Temenos Infinity, Temenos Payments Hub (TPH), Temenos Financial Crime Mitigation (FCM – AML), Oracle" },
  { label: "Experience", value: "10+ years, 30+ projects, 20+ financial institutions" },
  { label: "Team", value: "90+ banking technology consultants" },
  { label: "Certifications", value: "ISO/IEC 27001 certified (information security management) · Certified Temenos partner" },
  { label: "Contact", value: "info@prema-consulting.net" },
];

const temenosProducts = [
  {
    icon: <Database className="w-6 h-6" strokeWidth={1.5} />,
    name: "Temenos Transact (T24)",
    area: "Core banking",
    text: "The core banking system for accounts, deposits, lending and the general ledger. We implement, upgrade, customize and migrate data to Transact, and operate it after go-live.",
  },
  {
    icon: <Smartphone className="w-6 h-6" strokeWidth={1.5} />,
    name: "Temenos Infinity",
    area: "Digital banking",
    text: "The digital banking platform behind mobile and web channels. We design and build retail and corporate journeys, covering UX/UI, backend development and API integration.",
  },
  {
    icon: <ArrowLeftRight className="w-6 h-6" strokeWidth={1.5} />,
    name: "Temenos Payments Hub (TPH)",
    area: "Payments",
    text: "A single platform for processing domestic and cross-border payments, including SWIFT, RTGS, ACH and instant payments. We implement TPH and integrate it with the core banking system and local payment schemes.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
    name: "Temenos Financial Crime Mitigation (FCM – AML)",
    area: "Anti-money laundering",
    text: "Anti-money laundering and compliance controls: sanctions and watchlist screening, transaction monitoring and customer risk profiling. We implement FCM so banks meet central bank AML/CFT requirements.",
  },
];

const trends = [
  {
    title: "Real-time and instant payments",
    text: "Central banks across the Middle East have introduced instant payment systems, such as CliQ in Jordan. Banks need core and digital platforms that can post transactions in real time, 24/7, rather than in end-of-day batches.",
  },
  {
    title: "Open banking and APIs",
    text: "Regulators including the Central Bank of Bahrain and the Saudi Central Bank (SAMA) have published open banking frameworks. These require banks to expose secure, standardized APIs, which is difficult on legacy cores without an integration layer.",
  },
  {
    title: "Digital onboarding and eKYC",
    text: "Remote account opening with electronic identity verification, biometrics and digital signatures is now expected by customers. It must still meet each country's anti-money-laundering and know-your-customer rules.",
  },
  {
    title: "Islamic banking",
    text: "Many banks in the region offer Sharia-compliant products such as Murabaha, Ijara and Mudaraba. Core banking platforms must model these contracts correctly alongside conventional products.",
  },
  {
    title: "Arabic and localization",
    text: "Customer channels need full Arabic support, including right-to-left layouts, while reports and statements must follow local regulatory formats.",
  },
  {
    title: "Security and data residency",
    text: "Banking regulators set strict rules on information security, outsourcing and where customer data may be stored. Partners handling bank data are increasingly expected to hold certifications such as ISO/IEC 27001.",
  },
];

const whitepapers = [
  { href: "/whitepapers/the-rise-of-digital-banking.pdf", label: "The Rise of Digital Banking" },
  { href: "/whitepapers/empowering-digital-banking-with-rtgs-and-ach.pdf", label: "Empowering Digital Banking with RTGS and ACH" },
  { href: "/whitepapers/transforming-customer-acquisition-with-digital-onboarding.pdf", label: "Transforming Customer Acquisition with Digital Onboarding" },
  { href: "/whitepapers/navigating-the-landscape-of-digital-wallets.pdf", label: "Navigating the Landscape of Digital Wallets" },
];

const AboutPage = () => {
  usePageMeta('/about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section id="main-content" className="relative pt-36 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            About <span className="gradient-text">Prema Consulting</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Prema Consulting is a FinTech services provider for the banking and finance sector in the Middle East and North Africa. We specialize in core banking and digital banking transformation.
          </p>
        </div>
      </section>

      {/* Overview + facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <span className="section-label">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Prema Consulting helps banks, financial institutions and FinTech companies in the Middle East modernize the technology they run on. Our work covers the full lifecycle of a banking platform: assessing legacy systems, implementing a new core banking system, launching digital channels, and operating the platform after go-live.
              </p>
              <p>
                Our largest practice is <strong className="text-slate-800">core banking transformation</strong> on Temenos Transact (T24), including new implementations, upgrades, data migration and regulatory configuration. Our <strong className="text-slate-800">digital banking</strong> practice builds mobile and web banking on Temenos Infinity, covering UX/UI design, backend development and API integration. We also implement <strong className="text-slate-800">Temenos Payments Hub (TPH)</strong> for payments processing and <strong className="text-slate-800">Temenos Financial Crime Mitigation (FCM – AML)</strong> for anti-money laundering compliance.
              </p>
              <p>
                We are headquartered in Amman, Jordan, and have an office in Baghdad, Iraq. Over more than ten years, our team of 90+ consultants has delivered 30+ projects for 20+ financial institutions in the region. We are a certified Temenos partner, and our information security management system is certified to ISO/IEC 27001.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Prema Consulting at a Glance</h2>
              <dl className="divide-y divide-slate-200">
                {facts.map((fact) => (
                  <div key={fact.label} className="py-3 grid grid-cols-3 gap-4">
                    <dt className="text-sm font-semibold text-slate-500">{fact.label}</dt>
                    <dd className="col-span-2 text-sm text-slate-800">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Temenos expertise */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Certified Temenos Partner</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our <span className="gradient-text">Temenos Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
            As a certified Temenos partner, we cover the four Temenos platforms banks in MENA rely on most: core banking, digital channels, payments and financial crime compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {temenosProducts.map((product) => (
              <article key={product.name} className="flex gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-7">
                <div className="icon-box-premium w-12 h-12 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {product.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-primary/80 uppercase tracking-wider">{product.area}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{product.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Educational section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Industry Context</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Is Driving Banking Transformation in <span className="gradient-text">MENA</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
            Banks in the Middle East and North Africa face a combination of regulatory, customer and technology pressures. These are the main reasons they modernize their core banking and digital banking platforms.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend) => (
              <article key={trend.title} className="bg-white border border-slate-200 rounded-2xl p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{trend.title}</h3>
                <p className="text-slate-600 leading-relaxed">{trend.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How a transformation works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            The Stages of a Core Banking Transformation
          </h2>
          <ol className="space-y-5">
            {[
              ["Assessment", "Review the legacy system, products, integrations, data quality and regulatory obligations, and define business goals."],
              ["Roadmap and design", "Choose the migration approach (full replacement, phased or progressive), define the target architecture and plan the program."],
              ["Build and configure", "Configure products and accounting on the new core, develop local customizations, and build integrations with payment systems and channels."],
              ["Data migration", "Map, cleanse and convert legacy data, run several rehearsal migrations, and reconcile every balance and account."],
              ["Testing", "System, integration, performance and user acceptance testing, including regulatory reports and Close of Business (COB) runs."],
              ["Cutover and go-live", "Final migration, reconciliation and switch to the new platform, followed by close support during the first business cycles."],
              ["Operations", "Ongoing managed services: monitoring, COB operations, performance tuning, upgrades and continuous improvement."],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-5">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-slate-600 mt-8">
            Learn how we shorten each stage in <Link to="/approach" className="text-primary font-semibold hover:underline">our delivery approach</Link>.
          </p>
        </div>
      </section>

      {/* White papers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Research</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">White Papers by Prema Consulting</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whitepapers.map((paper) => (
              <a key={paper.href} href={paper.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <FileText className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="font-semibold text-slate-800">{paper.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Talk to Our Team</h2>
          <p className="text-lg text-slate-600 mb-8">
            Offices in Amman, Jordan and Baghdad, Iraq, serving banks across the Middle East and North Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@prema-consulting.net" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Mail className="w-5 h-5" /> Contact Us
            </a>
            <Link to="/faq" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-primary/40 text-slate-800 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Read the FAQ <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
