import React from 'react';
import { Quote, Briefcase, GraduationCap, Globe, PenTool } from 'lucide-react';

interface AboutProps {
    lang: 'en' | 'ar';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
    en: {
        coreCompetencies: 'Core Competencies',
        lit: 'English Literature',
        trans: 'Translation (EN/AR)',
        edit: 'Academic Editing',
        pr: 'Public Relations',
        aboutHeader: 'About The Professor',
        title: 'A lifetime dedicated to',
        subtitle: 'academic excellence.',
        p1: 'I am currently a Professor of English Literature at Misr University for Science and Technology. My journey in academia has been driven by a relentless passion for unlocking the nuances of language and culture.',
        p2: 'With a PhD in English Literature granted with Distinction from Ain Shams University, I have spent the last two decades not just teaching, but mentoring the next generation of scholars. My roles have evolved from Demonstrator to Head of Department and Vice Dean, giving me a holistic view of the academic landscape.',
        p3: 'Beyond the lecture hall, I am deeply committed to Translation, Editing, and Public Relations. I believe in the power of words to bridge communities and foster understanding.',
        openWork: 'Open to Opportunities',
        seeking: 'Seeking New Challenges',
        seekingDesc: 'I am looking for a job that meets my passion in academia, Translation, Editing, Public Relations and community service. I am open to roles in 6th of October or nearby areas.',
        contactBtn: 'Contact for Roles',
        phd: 'PhD',
        distinction: 'Distinction Grade',
        yearsMust: 'Years at MUST',
        based: 'Based in Egypt',
        cairo: 'Cairo'
    },
    ar: {
        coreCompetencies: 'المهارات الأساسية',
        lit: 'الأدب الإنجليزي',
        trans: 'الترجمة (إنجليزي/عربي)',
        edit: 'التحرير الأكاديمي',
        pr: 'العلاقات العامة',
        aboutHeader: 'عن البروفيسورة',
        title: 'حياة مكرسة لـ',
        subtitle: 'التميز الأكاديمي.',
        p1: 'أعمل حاليًا كأستاذة للأدب الإنجليزي في جامعة مصر للعلوم والتكنولوجيا. رحلتي في الأوساط الأكاديمية كانت مدفوعة بشغف لا هوادة فيه لكشف الفروق الدقيقة في اللغة والثقافة.',
        p2: 'مع حصولي على الدكتوراه في الأدب الإنجليزي بامتياز من جامعة عين شمس، أمضيت العقدين الماضيين ليس فقط في التدريس، بل في توجيه الجيل القادم من الباحثين. تطورت أدواري من معيد إلى رئيس قسم ووكيل كلية، مما منحني نظرة شاملة للمشهد الأكاديمي.',
        p3: 'خارج قاعات المحاضرات، أنا ملتزمة بشدة بالترجمة، التحرير، والعلاقات العامة. أؤمن بقوة الكلمات في ربط المجتمعات وتعزيز التفاهم.',
        openWork: 'متاح للفرص',
        seeking: 'البحث عن تحديات جديدة',
        seekingDesc: 'أبحث عن وظيفة تلبي شغفي في الأوساط الأكاديمية، الترجمة، التحرير، العلاقات العامة وخدمة المجتمع. أنا منفتحة على الأدوار في مدينة السادس من أكتوبر أو المناطق المجاورة.',
        contactBtn: 'تواصل للفرص',
        phd: 'دكتوراه',
        distinction: 'مع مرتبة الشرف',
        yearsMust: 'سنوات في الجامعة',
        based: 'مقرها مصر',
        cairo: 'القاهرة'
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column (Naturally becomes Right in RTL): Image & Quick Stats */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                    <div className="relative aspect-[3/4] mb-8 group overflow-hidden bg-gray-100">
                        <img 
                            src="https://picsum.photos/seed/lecture/800/1200" 
                            alt="Professor in Lecture" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 border-[12px] border-white/90"></div>
                    </div>
                    
                    <div className="bg-paper p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                             <h4 className={`font-serif text-xl font-bold text-ink ${lang === 'ar' ? 'font-arabic text-2xl' : ''}`}>{t.coreCompetencies}</h4>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-charcoal">
                                <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><GraduationCap size={18}/></span>
                                <span className={`font-medium ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.lit}</span>
                            </li>
                            <li className="flex items-center gap-3 text-charcoal">
                                <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><Globe size={18}/></span>
                                <span className={`font-medium ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.trans}</span>
                            </li>
                            <li className="flex items-center gap-3 text-charcoal">
                                <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><PenTool size={18}/></span>
                                <span className={`font-medium ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.edit}</span>
                            </li>
                            <li className="flex items-center gap-3 text-charcoal">
                                <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><Briefcase size={18}/></span>
                                <span className={`font-medium ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.pr}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Column (Naturally becomes Left in RTL): Narrative */}
            <div className="lg:col-span-7 space-y-10">
                <div>
                    <span className={`text-gold font-bold tracking-widest uppercase text-sm mb-2 block ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.aboutHeader}</span>
                    <h2 className={`text-4xl md:text-5xl font-serif font-medium text-ink mb-8 leading-tight ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>
                        {t.title} <br/>
                        <span className="italic text-gold-dark">{t.subtitle}</span>
                    </h2>
                    <div className="w-20 h-1 bg-gold mb-8"></div>
                </div>

                <div 
                    className={`prose prose-lg text-charcoal/80 font-light leading-relaxed ${lang === 'ar' ? 'font-arabic text-2xl' : ''}`}
                >
                    <p className={`${lang === 'en' ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:text-gold' : ''}`}>
                        {t.p1}
                    </p>
                    <p>
                        {t.p2}
                    </p>
                    <p>
                         {lang === 'en' ? 
                            <>Beyond the lecture hall, I am deeply committed to <strong>Translation, Editing, and Public Relations</strong>. I believe in the power of words to bridge communities and foster understanding.</>
                            : t.p3
                         }
                    </p>
                </div>

                {/* Open To Work Block */}
                <div className="bg-ink text-paper p-8 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 text-gold">
                            <Quote size={24} />
                            <span className={`font-bold tracking-widest text-xs uppercase ${lang === 'ar' ? 'font-arabic text-base' : ''}`}>{t.openWork}</span>
                        </div>
                        <h3 className={`text-2xl font-serif mb-4 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.seeking}</h3>
                        <p 
                            className={`text-white/70 mb-6 leading-relaxed ${lang === 'ar' ? 'font-arabic text-xl' : ''}`}
                        >
                            {t.seekingDesc}
                        </p>
                        <a href="#contact" className={`inline-block border border-gold text-gold px-6 py-2 hover:bg-gold hover:text-ink transition-colors uppercase text-xs font-bold tracking-wider ${lang === 'ar' ? 'font-arabic text-base' : ''}`}>
                            {t.contactBtn}
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                     <div className="text-center md:text-start">
                        <span className={`block text-3xl font-serif text-ink mb-1 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.phd}</span>
                        <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.distinction}</span>
                     </div>
                     <div className="text-center md:text-start">
                        <span className="block text-3xl font-serif text-ink mb-1">10+</span>
                        <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.yearsMust}</span>
                     </div>
                     <div className="text-center md:text-start">
                        <span className={`block text-3xl font-serif text-ink mb-1 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t.cairo}</span>
                        <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.based}</span>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;