import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Our Approach" },
  { to: "/solutions", label: "Solutions" },
  { to: "/partners", label: "Partners" },
  { to: "/#about", label: "About Us" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track whether the #about section is visible on the homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      setAboutInView(false);
      return;
    }
    const el = document.getElementById('about');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAboutInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Clear #about hash when scrolling away so the URL stays clean
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#about' && !aboutInView) {
      window.history.replaceState(null, '', '/');
    }
  }, [aboutInView, location.pathname, location.hash]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (link) => {
    if (link.to.startsWith('/#')) return location.pathname === '/' && aboutInView;
    return location.pathname === link.to;
  };

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.to.startsWith('/#') && location.pathname === '/') {
      const id = link.to.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Prema Consulting - Go to homepage">
                <img
                  src={isScrolled ? '/PremaConsulting-Webaite-Logo-Black-2.png' : '/PremaConsulting-Webaite-Logo-White-2.png'}
                  alt="Prema Consulting"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link)}
                  className={`nav-link px-4 py-2 rounded-lg font-sans tracking-wide transition-colors ${
                    isActive(link)
                      ? `text-primary font-semibold`
                      : `${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`
                  }`}
                  aria-current={isActive(link) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:info@prema-consulting.com"
                className="ml-4 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold font-sans transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-[0.9375rem]"
              >
                Get in Touch
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl mobile-menu-enter" role="menu">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link)}
                  className={`block px-4 py-3 rounded-xl font-sans tracking-wide transition-colors ${
                    isActive(link)
                      ? 'text-primary font-semibold bg-primary/5'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                  role="menuitem"
                  aria-current={isActive(link) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <a
                  href="mailto:info@prema-consulting.com"
                  className="block py-3 bg-primary text-white text-center rounded-full font-semibold font-sans hover:bg-primary-dark transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
