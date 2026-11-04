// Title and description for each route. Used at runtime (usePageMeta) and at build time
// (scripts/prerender.mjs) so every pre-rendered page ships with its own head tags.
const routeMeta = {
  '/': {
    title: 'Prema Consulting | FinTech Services for Banks in the Middle East & North Africa',
    description: 'Prema Consulting is a FinTech services provider for banks in the Middle East and North Africa, specializing in core banking transformation (Temenos Transact/T24), digital banking (Temenos Infinity), managed IT and cyber security.',
  },
  '/services': {
    title: 'Core Banking & Digital Banking Services in the Middle East | Prema Consulting',
    description: 'Core banking transformation on Temenos Transact (T24), digital banking on Temenos Infinity, managed IT services, cyber security and consultancy for banks in the Middle East and North Africa.',
  },
  '/about': {
    title: 'About Prema Consulting | FinTech Services for Banks in the Middle East',
    description: 'Prema Consulting is a FinTech services provider based in Amman, Jordan, with an office in Baghdad, Iraq. It delivers core banking and digital banking transformation for banks across the Middle East and North Africa.',
  },
  '/faq': {
    title: 'FAQ: Core Banking & Digital Banking in the Middle East | Prema Consulting',
    description: 'Answers to common questions about core banking transformation, Temenos Transact (T24), Temenos Infinity digital banking, data migration and choosing a FinTech services provider in the Middle East and North Africa.',
  },
  '/solutions': {
    title: 'Digital Banking Solutions for Banks in the Middle East | Prema Consulting',
    description: 'Digital onboarding, eKYC, biometric and signature verification, loan origination, transaction auditing, content management and other banking solutions for financial institutions in the Middle East.',
  },
  '/approach': {
    title: 'Our Delivery Approach: Time to Market | Prema Consulting',
    description: 'How Prema Consulting shortens time to market on core banking and digital banking projects through people, automation, efficiency, innovation, reusability and quality.',
  },
  '/partners': {
    title: 'Technology Partners | Prema Consulting',
    description: 'Prema Consulting partners with Temenos, Oracle, XPI, KOBIL, 01 Systems, BankCube and other FinTech vendors to deliver banking solutions across the Middle East and North Africa.',
  },
};

export const notFoundMeta = {
  title: 'Page Not Found | Prema Consulting',
  description: 'The page you are looking for does not exist. Prema Consulting provides core banking and digital banking transformation for banks in the Middle East.',
};

export default routeMeta;
