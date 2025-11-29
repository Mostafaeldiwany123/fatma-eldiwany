import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceTimelineProps {
    lang: 'en' | 'ar';
}

const experiencesData = {
  en: [
    {
        id: '1',
        role: 'Professor of English Literature',
        institution: 'Misr University for Science and Technology',
        duration: 'Dec 2022 — Present',
        location: 'Cairo, Egypt',
        description: 'Leading the English Literature department with a focus on post-colonial narratives and advanced translation studies.'
    },
    {
        id: '2',
        role: 'Head of English Department',
        institution: 'Misr University for Science and Technology',
        duration: 'Feb 2022 — Present',
        location: 'Cairo, Egypt',
        description: 'Providing strategic leadership, managing faculty staff, and ensuring academic excellence across the department.'
    },
    {
        id: '3',
        role: 'Vice Dean of Graduate Studies',
        institution: 'Misr University for Science and Technology',
        duration: 'Sep 2017 — May 2021',
        location: 'Cairo, Egypt',
        description: 'Oversaw the expansion of graduate programs and fostered international research partnerships.'
    },
    {
        id: '4',
        role: 'Associate Professor',
        institution: 'Misr University for Science and Technology',
        duration: '2015 — 2022',
        location: 'Cairo, Egypt',
        description: 'Specialized in Victorian literature and literary criticism.'
    },
    {
        id: '5',
        role: 'Lecturer of English Literature',
        institution: 'Misr University for Science and Technology',
        duration: '2006 — 2014',
        location: 'Cairo, Egypt',
        description: 'Delivered comprehensive lectures on English poetry, drama, and linguistics.'
    },
  ],
  ar: [
    {
        id: '1',
        role: 'أستاذة الأدب الإنجليزي',
        institution: 'Misr University for Science and Technology',
        duration: 'ديسمبر 2022 — الآن',
        location: 'Cairo, Egypt',
        description: 'قيادة قسم الأدب الإنجليزي مع التركيز على سرديات ما بعد الاستعمار ودراسات الترجمة المتقدمة.'
    },
    {
        id: '2',
        role: 'رئيسة قسم اللغة الإنجليزية',
        institution: 'Misr University for Science and Technology',
        duration: 'فبراير 2022 — الآن',
        location: 'Cairo, Egypt',
        description: 'توفير القيادة الاستراتيجية، وإدارة أعضاء هيئة التدريس، وضمان التميز الأكاديمي عبر القسم.'
    },
    {
        id: '3',
        role: 'وكيل الدراسات العليا',
        institution: 'Misr University for Science and Technology',
        duration: 'سبتمبر 2017 — مايو 2021',
        location: 'Cairo, Egypt',
        description: 'الإشراف على توسيع برامج الدراسات العليا وتعزيز شراكات البحث الدولية.'
    },
    {
        id: '4',
        role: 'أستاذ مشارك',
        institution: 'Misr University for Science and Technology',
        duration: '2015 — 2022',
        location: 'Cairo, Egypt',
        description: 'تخصص في الأدب الفيكتوري والنقد الأدبي.'
    },
    {
        id: '5',
        role: 'محاضر في الأدب الإنجليزي',
        institution: 'Misr University for Science and Technology',
        duration: '2006 — 2014',
        location: 'Cairo, Egypt',
        description: 'تقديم محاضرات شاملة عن الشعر الإنجليزي، الدراما، واللغويات.'
    },
  ]
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const experiences = experiencesData[lang];
  const t = {
      en: {
          history: 'Professional History',
          career: 'Academic Career',
          linkedin: 'LinkedIn Profile'
      },
      ar: {
          history: 'التاريخ المهني',
          career: 'المسيرة الأكاديمية',
          linkedin: 'LinkedIn Profile'
      }
  }[lang];

  return (
    <section id="experience" className="py-24 bg-paper relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6`}>
            <div className={'text-start'}>
                <span className={`text-gold-dark font-bold tracking-widest uppercase text-xs mb-3 block ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.history}</span>
                <h2 className={`text-4xl md:text-5xl font-serif text-ink ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.career}</h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 mx-12 mb-4"></div>
            <a 
                href="https://www.linkedin.com/in/prof-fatma-el-diwany-baa735282/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink hover:text-gold transition-colors`}
            >
                <span>{t.linkedin}</span>
                <ArrowUpRight size={16} className={`group-hover:-translate-y-0.5 transition-transform ${lang === 'ar' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
            </a>
        </div>

        <div className="border-t border-ink/10">
            {experiences.map((exp) => (
              <div key={exp.id} className="group border-b border-ink/10 transition-colors duration-500 hover:bg-white/50">
                  <div className={`py-12 grid md:grid-cols-12 gap-6 items-start text-start`}>
                      
                      {/* Date - Left Column (Right in RTL) */}
                      <div className={`md:col-span-3`}>
                          <span className={`font-serif text-xl italic text-gold-dark/80 block mb-1 ${lang === 'ar' ? 'font-arabic text-2xl not-italic' : ''}`}>{exp.duration}</span>
                          <span className="text-xs uppercase tracking-wider text-gray-400">{exp.location}</span>
                      </div>

                      {/* Role & Institution - Middle Column */}
                      <div className={`md:col-span-5`}>
                          <h3 className={`text-3xl font-serif text-ink mb-2 group-hover:text-gold-dark transition-colors duration-300 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>
                              {exp.role}
                          </h3>
                          <div className="text-sm font-bold uppercase tracking-widest text-charcoal/60">
                              {exp.institution}
                          </div>
                      </div>

                      {/* Description - Right Column (Left in RTL) */}
                      <div className={`md:col-span-4 pt-2 md:pt-0`}>
                          <p 
                            className={`text-charcoal/70 font-light leading-relaxed text-sm ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}
                          >
                              {exp.description}
                          </p>
                      </div>

                  </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;