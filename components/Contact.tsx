import React from 'react';
import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface ContactProps {
    lang: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = {
      en: {
          desc: 'Bridging cultures through language. Professor, Translator, Editor, and Public Relations Specialist.',
          nav: 'Navigation',
          about: 'About',
          pubs: 'Publications',
          cv: 'CV / Resume',
          gallery: 'Gallery',
          expertise: 'Expertise',
          lit: 'English Literature',
          trans: 'Translation (EN/AR)',
          edit: 'Academic Editing',
          pr: 'Public Relations',
          connect: 'Connect',
          connectWith: 'Connect with Prof. Fatma',
          location: '6th of October, Cairo, Egypt',
          privacy: 'Privacy',
          terms: 'Terms'
      },
      ar: {
          desc: 'ربط الثقافات من خلال اللغة. أستاذة، مترجمة، ومحررة.',
          nav: 'التنقل',
          about: 'عن البروفيسورة',
          pubs: 'المنشورات',
          cv: 'السيرة الذاتية',
          gallery: 'المعرض',
          expertise: 'الخبرات',
          lit: 'الأدب الإنجليزي',
          trans: 'الترجمة',
          edit: 'التحرير الأكاديمي',
          pr: 'العلاقات العامة',
          connect: 'تواصل',
          connectWith: 'تواصل مع Prof. Fatma',
          location: 'السادس من أكتوبر، القاهرة، مصر',
          privacy: 'الخصوصية',
          terms: 'الشروط'
      }
  };

  const t = content[lang];

  return (
    <footer id="contact" className="bg-ink text-paper border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-start`}>
                
                {/* Brand Column */}
                <div className={`lg:col-span-1 space-y-6`}>
                    <div className="flex flex-col">
                        <span className="font-serif text-3xl font-bold tracking-tight text-white">
                        Prof. Fatma
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">El-Diwany</span>
                    </div>
                    <p 
                        className={`text-sm leading-relaxed text-gray-400 max-w-xs ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}
                    >
                        {t.desc}
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className={`font-serif text-xl text-white mb-6 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.nav}</h4>
                    <ul className={`space-y-4 text-sm text-gray-400 ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>
                        <li><a href="#about" className={`hover:text-gold transition-colors block w-fit`}>{t.about}</a></li>
                        <li><a href="#book" className={`hover:text-gold transition-colors block w-fit`}>{t.pubs}</a></li>
                        <li><a href="#experience" className={`hover:text-gold transition-colors block w-fit`}>{t.cv}</a></li>
                        <li><a href="#gallery" className={`hover:text-gold transition-colors block w-fit`}>{t.gallery}</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className={`font-serif text-xl text-white mb-6 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.expertise}</h4>
                     <ul className={`space-y-4 text-sm text-gray-400 ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>
                        <li>{t.lit}</li>
                        <li>{t.trans}</li>
                        <li>{t.edit}</li>
                        <li>{t.pr}</li>
                    </ul>
                </div>

                {/* Contact CTA */}
                <div>
                    <h4 className={`font-serif text-xl text-white mb-6 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.connect}</h4>
                    <a 
                        href="https://www.linkedin.com/in/prof-fatma-el-diwany-4b35832a/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 bg-white/5 hover:bg-gold hover:text-ink p-4 rounded-sm border border-white/10 transition-all duration-300 mb-4`}
                    >
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider opacity-70">LinkedIn</span>
                            <span className={`font-bold ${lang === 'ar' ? 'font-arabic' : ''}`}>{t.connectWith}</span>
                        </div>
                        <ArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-opacity ms-auto`} />
                    </a>
                     
                     <div className={`flex items-center gap-3 text-gray-400 text-sm mt-6`}>
                        <MapPin size={16} className="text-gold" />
                        <span>{t.location}</span>
                     </div>
                </div>
            </div>

            <div className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono uppercase tracking-widest`}>
                <p>&copy; {new Date().getFullYear()} Prof. Fatma El-Diwany.</p>
                <div className={`flex gap-8 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Contact;