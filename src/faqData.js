// Single source for FAQ copy shown on the homepage and /faq. scripts/prerender.mjs builds the
// FAQPage JSON-LD from this file, so structured data always matches the visible answers.
// `lead` is the one-line answer shown first; `a` is the full answer; optional `list` and `after`
// render as bullets and a closing sentence.

export const FAQ_UPDATED = '2026-11-02';

export const faqCategories = [
  { id: 'about-prema', title: 'About Prema Consulting' },
  { id: 'core-banking', title: 'Core Banking' },
  { id: 'digital-banking-security', title: 'Digital Banking & Security' },
  { id: 'choosing-a-partner', title: 'Choosing a Partner' },
];

const faqItems = [
  {
    category: 'about-prema',
    featured: true,
    q: "What is Prema Consulting?",
    lead: "A FinTech services provider specializing in core banking and digital banking transformation for banks across MENA.",
    a: "Prema Consulting is a FinTech services provider for the banking and finance sector in the Middle East and North Africa (MENA). It delivers core banking transformation (Temenos Transact / T24), digital banking (Temenos Infinity), payments (Temenos Payments Hub), anti-money laundering (Temenos FCM – AML), managed IT services, cyber security and banking technology consultancy. The company has 10+ years of experience, 90+ consultants and 30+ completed projects for 20+ financial institutions. It is a certified Temenos partner and is ISO/IEC 27001 certified.",
  },
  {
    category: 'about-prema',
    featured: true,
    q: "Where is Prema Consulting based and which countries does it serve?",
    lead: "Headquartered in Amman, Jordan, with an office in Baghdad, Iraq, serving financial institutions across MENA.",
    a: "Prema Consulting is headquartered in Amman, Jordan, with a second office in Baghdad, Iraq. It serves banks, financial institutions and FinTech companies across the Middle East and North Africa, with delivery teams that work on-site and remotely.",
  },
  {
    category: 'about-prema',
    q: "What certifications and accreditations does Prema Consulting hold?",
    lead: "ISO/IEC 27001 Certification & Temenos Certified Partnership",
    a: "Prema Consulting holds two credentials that matter most to banks:",
    list: [
      "ISO/IEC 27001 certification: its information security management system is independently certified to the international standard for protecting information, which matters because transformation partners handle sensitive customer and financial data",
      "Certified Temenos partner: it delivers implementation, upgrade and support services on Temenos platforms, including Temenos Transact (T24), Temenos Infinity, Temenos Payments Hub (TPH) and Temenos Financial Crime Mitigation (FCM – AML)",
    ],
    after: "Copies of certificates are available on request from info@prema-consulting.net.",
  },
  {
    category: 'about-prema',
    q: "Which technology partners does Prema Consulting work with?",
    lead: "Temenos, Oracle and ten specialist partners in payments, digital identity, compliance and digital banking solutions.",
    a: "Prema Consulting's partner ecosystem includes Temenos (core and digital banking), Oracle (database and infrastructure), XPI (electronic payments and card systems), KOBIL (secure digital identity), 01 Systems (signature verification and onboarding), BankCube (data migration and reconciliation), Advanced Financial Solutions (risk, finance and compliance), QuanTech, Banknbox, ILA Group, Hysab Kytab and Arizona Intelligent Solutions.",
  },
  {
    category: 'core-banking',
    featured: true,
    q: "What is core banking transformation?",
    lead: "The replacement or modernization of the system a bank uses for accounts, lending, payments and the general ledger.",
    a: "Core banking transformation is the replacement or modernization of the central system a bank uses to manage accounts, deposits, loans, payments and the general ledger. It usually involves assessing the legacy platform, designing the target operating model, configuring a modern core such as Temenos Transact (T24), migrating and reconciling data, testing, and cutting over to the new system. Banks in the Middle East undertake it to launch products faster, support digital channels and real-time payments, meet central bank regulations, and reduce the cost of maintaining legacy technology.",
  },
  {
    category: 'core-banking',
    q: "How long does a core banking transformation take?",
    lead: "Typically 12 to 24 months for a full replacement; upgrades and phased migrations take less time.",
    a: "Duration depends on the bank's size, product range and migration approach. As a general industry guide, a full core replacement at a small to mid-sized bank commonly takes 12 to 24 months, while upgrades of an existing Temenos installation or phased, product-by-product migrations can be shorter. The main drivers of timeline are data quality, the number of integrations, the degree of customization, and regulatory approvals. Prema Consulting's delivery approach is designed to shorten time to market through reusable assets, test automation and experienced Temenos teams.",
  },
  {
    category: 'core-banking',
    featured: true,
    q: "What is Temenos Transact (T24) and why do banks use it?",
    lead: "A core banking platform used by more than 3,000 financial institutions worldwide.",
    a: "Temenos Transact, formerly known as T24, is a core banking platform from Temenos, a Swiss-listed banking software company serving more than 3,000 financial institutions in about 145 countries. It covers retail, corporate, private and Islamic banking with a parameter-driven product engine. Banks across the Middle East use it because it is widely adopted in the region, supports multi-entity and multi-currency operations, and has a large ecosystem of implementation partners. Prema Consulting implements, upgrades, customizes and operates Temenos Transact.",
  },
  {
    category: 'core-banking',
    q: "How is data migrated from a legacy core banking system?",
    lead: "Through a structured process of profiling, mapping, cleansing, rehearsal migrations and full reconciliation.",
    a: "A typical core banking data migration follows these steps:",
    list: [
      "Data profiling and quality assessment of the legacy system",
      "Mapping legacy fields to the target data model",
      "Data cleansing",
      "Building extraction and transformation routines",
      "Several mock (rehearsal) migrations",
      "Reconciliation of balances, accounts and transactions between old and new systems",
      "A planned cutover, often over a weekend",
    ],
    after: "Prema Consulting and its partner BankCube provide data migration and reconciliation services for core banking systems.",
  },
  {
    category: 'digital-banking-security',
    featured: true,
    q: "What is digital banking and how does Temenos Infinity support it?",
    lead: "The delivery of banking products through mobile, web and API channels, with Temenos Infinity as the platform.",
    a: "Digital banking means offering a bank's retail and corporate products through mobile apps, web portals and APIs so customers can open accounts, transact and get service without visiting a branch. Temenos Infinity is a digital banking platform that provides customer-facing journeys, onboarding, and an integration layer to the core banking system. Prema Consulting designs and implements Temenos Infinity solutions end to end, covering UX/UI design, backend development and API integration.",
  },
  {
    category: 'digital-banking-security',
    q: "What digital solutions does Prema Consulting provide beyond core banking?",
    lead: "Ready-to-deploy solutions ranging from digital onboarding and eKYC to loan origination and AI chatbots.",
    a: "Prema Consulting delivers ready-made banking solutions including digital customer onboarding and eKYC, customer identification, biometric verification, digital signature verification, enterprise signatory management, loan origination, transaction auditing, enterprise content management, digital archiving, AI chatbots and personal finance management. These are delivered with partners such as 01 Systems, KOBIL, Arizona Intelligent Solutions and Hysab Kytab.",
  },
  {
    category: 'digital-banking-security',
    q: "What cyber security services does Prema Consulting offer to banks?",
    lead: "SOC as a Service, security assessments, threat detection and incident response, delivered with partners.",
    a: "Through its partner network, Prema Consulting provides SOC as a Service (a managed Security Operations Center), cyber security assessments and audits, threat detection and prevention, incident response, and support for banking security standards such as PCI-DSS and ISO/IEC 27001 alongside local regulatory requirements.",
  },
  {
    category: 'choosing-a-partner',
    q: "What should banks in MENA consider when choosing a FinTech services provider?",
    lead: "Platform expertise, regional regulatory knowledge, information security credentials and post-go-live support.",
    a: "Key criteria include:",
    list: [
      "Proven experience on the chosen platform, for example Temenos Transact and Infinity",
      "Delivery references from banks in the region",
      "Knowledge of local central bank regulations and reporting",
      "Support for Arabic and right-to-left interfaces",
      "Experience with Sharia-compliant (Islamic) banking products where relevant",
      "Data residency and information security controls such as ISO/IEC 27001 certification",
      "The ability to support the system after go-live",
      "A commercial model that fits the bank's size",
    ],
  },
  {
    category: 'choosing-a-partner',
    featured: true,
    q: "How does Prema Consulting differ from global system integrators?",
    lead: "A specialist focus on MENA banking and Temenos, with senior teams, local presence and faster mobilization.",
    a: "Prema Consulting is a specialist firm focused on banking technology in the Middle East and North Africa, with deep Temenos expertise and offices in Jordan and Iraq. Compared with large global system integrators, it typically offers senior specialists closer to the client, faster mobilization and leaner, more cost-efficient teams. Global integrators are generally better suited to very large, multi-country programs that combine management consulting, multiple vendors and global sourcing. Many banks combine both models.",
  },
  {
    category: 'choosing-a-partner',
    q: "Does Prema Consulting provide support after go-live?",
    lead: "Yes. Managed IT Services cover Temenos operations, monitoring and 24/7 support.",
    a: "Yes. Through its Managed IT Services, Prema Consulting operates Temenos Transact environments after go-live, including Close of Business (COB) processing, job monitoring, performance tuning, database administration, backup and restore, and 24/7 monitoring. This lets banks keep the knowledge of the implementation team without building a large in-house operations team.",
  },
  {
    category: 'choosing-a-partner',
    q: "How does a bank start working with Prema Consulting?",
    lead: "With an assessment of current systems and objectives, followed by a transformation roadmap.",
    a: "Most engagements begin with an assessment of the bank's current systems and goals, followed by a transformation roadmap that defines scope, phases, timeline and budget. Banks can contact Prema Consulting at info@prema-consulting.net, by phone in Jordan on +962 6 581 8929, or in Iraq on +964 785 757 5751.",
  },
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// `id` gives each question a shareable link, e.g. /faq#what-is-core-banking-transformation.
const faqs = faqItems.map((item, index) => ({ ...item, id: slugify(item.q), number: index + 1 }));

export const faqPlainText = (item) =>
  [item.lead, item.a, item.list && `${item.list.join('; ')}.`, item.after].filter(Boolean).join(' ');

export default faqs;
