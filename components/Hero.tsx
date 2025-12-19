import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  lang: 'en' | 'ar';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    en: {
      openToWork: 'Open to Work',
      role: 'Professor of English Literature, Translation Specialist, and Editor at Misr University for Science and Technology. Dedicated to bridging cultures through the power of language.',
      theBook: 'The Book',
      contact: 'Contact Me',
      phd: 'PhD',
      distinction: 'Distinction',
      yearsExp: 'Years Exp.',
      quote: '"Alls well that ends well."'
    },
    ar: {
      openToWork: 'متاح للعمل',
      role: 'أستاذ الأدب الإنجليزي،  بجامعة مصر للعلوم والتكنولوجيا. متخصصة بالترجمة من الانجليزية واليها, و مهتمه بالعمل الاجتماعي وبتنمية القدرات الاكاديمية والمهارية للطلاب ذوي الهمم.',
      theBook: 'الكتاب',
      contact: 'تواصل معي',
      phd: 'استاذ',
      distinction: 'مع مرتبة الشرف',
      yearsExp: 'سنوات خبرة',
      quote: '" كل ما ينتهي بخير.. فهو خير"'
    }
  };

  const t = content[lang];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-paper pt-24 pb-12">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#F2EFE9] to-transparent hidden md:block -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-7 space-y-8 text-center md:text-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/40 rounded-full bg-white shadow-sm mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className={`text-xs font-bold tracking-widest uppercase text-gold-dark ${lang === 'ar' ? 'font-arabic text-base' : ''}`}>{t.openToWork}</span>
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-ink ${lang === 'ar' ? 'text-6xl sm:text-7xl' : ''}`}>
              Prof. Fatma <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold italic ${lang === 'ar' ? 'not-italic' : ''}`}>El-Diwany</span>
            </h1>

            <p
              className={`text-lg text-charcoal/80 max-w-xl leading-relaxed font-light mx-auto md:mx-0 ${lang === 'ar' ? 'text-2xl' : ''}`}
            >
              {t.role}
            </p>

            <div className={`flex flex-wrap gap-4 pt-2 justify-center md:justify-start`}>
              <a
                href="#book"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm uppercase tracking-wider font-bold text-white bg-ink rounded-sm hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${lang === 'ar' ? 'text-lg' : ''}`}
              >
                <BookOpen className="h-4 w-4" />
                {t.theBook}
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm uppercase tracking-wider font-bold text-ink border border-ink rounded-sm hover:bg-ink hover:text-white transition-all duration-300 ${lang === 'ar' ? 'text-lg' : ''}`}
              >
                {t.contact}
                <ArrowRight className={`h-4 w-4 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 border-t border-gray-200 mt-8 max-w-md mx-auto md:mx-0">
              <div className="flex flex-col">
                <span className={`text-3xl font-serif text-ink ${lang === 'ar' ? 'font-bold' : ''}`}>{t.phd}</span>
                <span className={`text-xs uppercase tracking-wider text-gray-500 ${lang === 'ar' ? 'text-sm' : ''}`}>{t.distinction}</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-ink">25+</span>
                <span className={`text-xs uppercase tracking-wider text-gray-500 ${lang === 'ar' ? 'text-sm' : ''}`}>{t.yearsExp}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative flex justify-center mt-12 md:mt-0"
          >
            <div className="relative w-full max-w-[320px] aspect-[3/4]">
              {/* Frame Decoration */}
              <div className="absolute inset-0 border border-gold/20 translate-x-3 translate-y-3 z-0 rounded-sm"></div>
              <div className="absolute inset-0 border border-ink/5 -translate-x-3 -translate-y-3 z-0 rounded-sm"></div>

              {/* Main Image Container */}
              <div className="absolute inset-0 bg-white p-2 shadow-2xl z-10 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out rounded-sm">
                <div className="w-full h-full relative overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src="./images/profile-headshot.png"
                    alt="Prof. Fatma El-Diwany"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay for elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-paper px-6 py-4 shadow-xl border border-gold/20 max-w-[200px]">
                <p className={`font-serif italic text-ink text-sm leading-tight ${lang === 'ar' ? 'font-arabic text-lg not-italic text-center' : ''}`}>{t.quote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;