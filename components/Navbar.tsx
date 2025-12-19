import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ar';
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      home: 'Home',
      about: 'About',
      book: 'The Book',
      experience: 'Experience',
      gallery: 'Gallery',
      contact: 'Contact',
      cta: 'Get the Book'
    },
    ar: {
      home: 'الرئيسية',
      about: 'عن البروفيسورة',
      book: 'الكتاب',
      experience: 'الخبرات',
      gallery: 'المعرض',
      contact: 'تواصل',
      cta: 'احصل على الكتاب'
    }
  };

  const t = content[lang];

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.book, href: '#book' },
    { name: t.experience, href: '#experience' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${isScrolled ? 'border-ink text-ink' : 'border-ink/50 text-ink bg-white/50 backdrop-blur-sm'}`}>
              <span className="font-serif font-bold text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg font-bold tracking-tight leading-none ${isScrolled ? 'text-ink' : 'text-ink'}`}>
                Prof. Fatma
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-dark font-medium">El-Diwany</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-pointer ${isScrolled ? 'text-charcoal' : 'text-ink'} ${lang === 'ar' ? 'text-lg' : ''}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm font-bold hover:text-gold transition-colors px-2 uppercase"
            >
              <Globe size={16} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <a
              href="#book"
              onClick={(e) => handleNavClick(e, '#book')}
              className={`bg-ink hover:bg-gold text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer ${lang === 'ar' ? 'text-lg' : ''}`}
            >
              {t.cta}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm font-bold hover:text-gold transition-colors uppercase"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-ink' : 'text-ink'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-paper/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block w-full text-center py-3 text-lg font-serif text-ink hover:text-gold transition-colors border-b border-gray-100 last:border-0 ${lang === 'ar' ? 'text-xl' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, '#book')}
            className={`mt-4 bg-ink text-white px-8 py-3 rounded-sm text-base font-medium w-full text-center ${lang === 'ar' ? 'text-xl' : ''}`}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;