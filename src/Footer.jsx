import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2 pr-8">
            <div className="mb-5">
              <img
                src="/PremaConsulting-Webaite-Logo-White-2.png"
                alt="Prema Consulting"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-[0.9375rem]">
              A Premier FinTech Services Company empowering digital transformation across the MENA region.
            </p>
            {/* Social proof mini-stats */}
            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">14+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Partners</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-slate-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/#services", label: "Services" },
                { to: "/approach", label: "Our Approach" },
                { to: "/solutions", label: "Solutions" },
                { to: "/partners", label: "Partners" },
                { to: "/#about", label: "About Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-primary transition-colors text-[0.9375rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* White Papers */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-slate-300">White Papers</h4>
            <ul className="space-y-3">
              {[
                { href: "/whitepapers/the-rise-of-digital-banking.pdf", label: "The Rise of Digital Banking" },
                { href: "/whitepapers/empowering-digital-banking-with-rtgs-and-ach.pdf", label: "RTGS & ACH Integration" },
                { href: "/whitepapers/transforming-customer-acquisition-with-digital-onboarding.pdf", label: "Digital Onboarding" },
                { href: "/whitepapers/navigating-the-landscape-of-digital-wallets.pdf", label: "Digital Wallets Landscape" },
              ].map((paper) => (
                <li key={paper.href}>
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors text-[0.9375rem] flex items-start gap-1.5 group"
                  >
                    {paper.label}
                    <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-slate-300">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-300 text-xs uppercase tracking-wider font-semibold">Jordan Office</li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">Abdulla Ghousheh Street, Al-Husseini Complex, 4th Floor, Amman, Jordan</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+96265818929" className="text-slate-400 hover:text-primary transition-colors text-sm">+962 (6) 5 818 929</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@prema-consulting.com" className="text-slate-400 hover:text-primary transition-colors text-sm">info@prema-consulting.com</a>
              </li>

              <li className="border-t border-slate-800/60 pt-3 text-slate-300 text-xs uppercase tracking-wider font-semibold">Iraq Office</li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">Core Business Building, Karrada Near Kahramana Square, Baghdad, Iraq</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+9647857575751" className="text-slate-400 hover:text-primary transition-colors text-sm">+964 (785) 757 5751</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@prema-consulting.com" className="text-slate-400 hover:text-primary transition-colors text-sm">info@prema-consulting.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-8 text-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Prema Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
