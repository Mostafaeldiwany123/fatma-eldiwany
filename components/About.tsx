import React from 'react';
import { Quote, Briefcase, GraduationCap, Globe, PenTool } from 'lucide-react';

interface AboutProps {
    lang: 'en' | 'ar';
}

const About: React.FC<AboutProps> = ({ lang }) => {
    const content = {
        en: {
            coreCompetencies: 'Core Competencies',
            lit: 'University Teaching',
            trans: 'Inclusive Education',
            edit: 'Cultural & Media Work',
            pr: 'Academic Leadership',
            aboutHeader: 'About Me',
            title: 'A lifetime dedicated to',
            subtitle: 'academic excellence.',
            p1: 'I am an academic, storyteller, and educator with a deep belief in the power of words to heal, inspire, and connect. With years of experience in teaching English literature and leading academic initiatives, my work bridges scholarship and humanity—combining rigorous thinking with empathy and creativity.',
            p2: 'I am deeply committed to social service, particularly to supporting students with special needs, and I believe that education becomes truly meaningful when it is inclusive, compassionate, and accessible to all. Beyond the classroom, I explore storytelling, voice, and reflection through audio and visual projects that speak to the quiet truths of everyday life.',
            p3: 'Whether I am mentoring students, designing curricula, or sharing stories, my purpose remains the same: to create meaningful spaces for learning, expression, and growth.',
            openWork: 'Open to Opportunities',
            seeking: 'Potential Roles & Career Opportunities',
            seekingDesc: [
                'University teaching in English language and literature',
                'Academic leadership and departmental roles',
                'Curriculum and program development',
                'Academic and student advising',
                'Inclusive education initiatives and support for students with special needs',
                'Design and delivery of training and capacity-building programs',
                'Cultural and media work (content creation, podcasting, storytelling)',
                'Community-based and non-profit initiatives',
                'Academic and educational consultancy',
                'Management of educational and cultural projects'
            ],
            contactBtn: 'Contact for Roles',
            phd: 'PhD',
            distinction: 'Distinction Grade',
            yearsMust: 'Years at MUST',
            based: 'Based in Egypt',
            cairo: 'Cairo'
        },
        ar: {
            coreCompetencies: 'المهارات الأساسية',
            lit: 'التدريس الجامعي',
            trans: 'التعليم الدامج',
            edit: 'العمل الثقافي والإعلامي',
            pr: 'القيادة الأكاديمية',
            aboutHeader: 'نبذة تعريفية',
            title: '',
            subtitle: 'التميز الأكاديمي.',
            p1: 'اعمل بالمجال الأكاديمي واعتبره مساحة للمعرفة والإنسانية معًا. وبحكم عملي في تدريس الأدب الإنجليزي والبحث العلمي، أؤمن بأن اللغة ليست أداة للتعبير فقط، بل وسيلة للفهم والتغيير.',
            p2: 'يتقاطع عملي الأكاديمي مع شغفي بالسرد القصصي والمشروعات الإبداعية، كما يمتد إلى العمل المجتمعي ودعم الطلاب من ذوي الاحتياجات الخاصة، إيمانًا بأهمية التعليم الدامج الذي يراعي الفروق الفردية ويمنح الجميع فرصًا متكافئة للتعلّم والنمو.',
            p3: 'وإلى جانب ذلك، أقدم محتوى صوتيًا وبصريًا يلتقط التفاصيل الإنسانية الهادئة، ويسعى إلى خلق مساحات للتأمل والحوار. وفي جوهر جميع هذه المسارات، يظل هدفي هو الإسهام في بناء تجربة تعليمية وإنسانية أكثر وعيًا وعمقًا.',
            openWork: 'متاح للفرص',
            seeking: 'الفرص والمسارات المهنية المحتملة',
            seekingDesc: [
                'التدريس الجامعي في الأدب الإنجليزي واللغة الإنجليزية',
                'رئاسة الأقسام الأكاديمية أو المناصب القيادية التعليمية',
                'تطوير المناهج والبرامج التعليمية',
                'الإرشاد الأكاديمي والطلابي',
                'العمل في مشروعات التعليم الدامج ودعم الطلاب من ذوي الاحتياجات الخاصة',
                'تصميم وتنفيذ البرامج التدريبية وبناء القدرات',
                'العمل الثقافي والإعلامي (كتابة محتوى، بودكاست، سرد قصصي)',
                'المبادرات المجتمعية والتنموية غير الربحية',
                'الاستشارات الأكاديمية والتربوية',
                'إدارة المشروعات التعليمية والثقافية'
            ],
            contactBtn: 'تواصل للفرص',
            phd: 'استاذ',
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
                                    src="/images/about-photo.png"
                                    alt="Professor in Lecture"
                                    className="w-full h-full object-cover transition-all duration-700"
                                />
                                <div className="absolute inset-0 border-[12px] border-white/90"></div>
                            </div>

                            <div className="bg-paper p-8 border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-6">
                                    <h4 className={`font-serif text-xl font-bold text-ink ${lang === 'ar' ? 'text-2xl' : ''}`}>{t.coreCompetencies}</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-charcoal">
                                        <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><GraduationCap size={18} /></span>
                                        <span className={`font-medium ${lang === 'ar' ? 'text-lg' : ''}`}>{t.lit}</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-charcoal">
                                        <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><Globe size={18} /></span>
                                        <span className={`font-medium ${lang === 'ar' ? 'text-lg' : ''}`}>{t.trans}</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-charcoal">
                                        <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><PenTool size={18} /></span>
                                        <span className={`font-medium ${lang === 'ar' ? 'text-lg' : ''}`}>{t.edit}</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-charcoal">
                                        <span className="p-2 bg-gold/10 text-gold-dark rounded-full"><Briefcase size={18} /></span>
                                        <span className={`font-medium ${lang === 'ar' ? 'text-lg' : ''}`}>{t.pr}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Naturally becomes Left in RTL): Narrative */}
                    <div className="lg:col-span-7 space-y-10">
                        <div>
                            <span className={`text-gold font-bold tracking-widest uppercase text-sm mb-2 block ${lang === 'ar' ? 'text-lg' : ''}`}>{t.aboutHeader}</span>
                            <h2 className={`text-4xl md:text-5xl font-serif font-medium text-ink mb-8 leading-tight ${lang === 'ar' ? 'font-bold' : ''}`}>
                                {t.title} <br />
                                <span className={`${lang === 'ar' ? 'text-gold-dark' : 'italic text-gold-dark'}`}>{t.subtitle}</span>
                            </h2>
                            <div className="w-20 h-1 bg-gold mb-8"></div>
                        </div>

                        <div
                            className={`prose prose-lg text-charcoal/80 font-light leading-relaxed ${lang === 'ar' ? 'text-2xl' : ''}`}
                        >
                            <p className={`${lang === 'en' ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:text-gold' : ''}`}>
                                {t.p1}
                            </p>
                            <p>
                                {t.p2}
                            </p>
                            <p>
                                {t.p3}
                            </p>
                        </div>

                        {/* Open To Work Block */}
                        <div className="bg-ink text-paper p-8 rounded-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4 text-gold">
                                    <Quote size={24} />
                                    <span className={`font-bold tracking-widest text-xs uppercase ${lang === 'ar' ? 'text-base' : ''}`}>{t.openWork}</span>
                                </div>
                                <h3 className={`text-2xl font-serif mb-4 ${lang === 'ar' ? 'font-bold' : ''}`}>{t.seeking}</h3>
                                <ul className={`text-white/70 mb-6 leading-relaxed space-y-2 list-disc list-inside ${lang === 'ar' ? 'text-xl' : ''}`}>
                                    {(Array.isArray(t.seekingDesc) ? t.seekingDesc : []).map((role, idx) => (
                                        <li key={idx}>{role}</li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`inline-block border border-gold text-gold px-6 py-2 hover:bg-gold hover:text-ink transition-colors uppercase text-xs font-bold tracking-wider ${lang === 'ar' ? 'text-base' : ''}`}>
                                    {t.contactBtn}
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                            <div className="text-center md:text-start">
                                <span className={`block text-3xl font-serif text-ink mb-1 ${lang === 'ar' ? 'font-bold' : ''}`}>{t.phd}</span>
                                <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'text-sm' : ''}`}>{t.distinction}</span>
                            </div>
                            <div className="text-center md:text-start">
                                <span className="block text-3xl font-serif text-ink mb-1">25+</span>
                                <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'text-sm' : ''}`}>{t.yearsMust}</span>
                            </div>
                            <div className="text-center md:text-start">
                                <span className="block text-3xl font-serif text-ink mb-1">{t.cairo}</span>
                                <span className={`text-xs uppercase text-gray-500 tracking-wide ${lang === 'ar' ? 'text-sm' : ''}`}>{t.based}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;