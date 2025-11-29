import React from 'react';
import { Download, PlayCircle, Star } from 'lucide-react';

interface BookShowcaseProps {
    lang: 'en' | 'ar';
}

const BookShowcase: React.FC<BookShowcaseProps> = ({ lang }) => {
  const content = {
    en: {
        tag: 'Complimentary Digital Edition',
        title: 'The Silent Garden',
        desc: 'An evocative exploration of narrative structure and cultural identity. Prof. Fatma invites you to download her latest work entirely for free.',
        recommended: 'Highly Recommended by Colleagues',
        audio: 'Audio Preview',
        narrated: 'Narrated by Prof. Fatma El-Diwany',
        dl: 'Download E-Book',
        stream: 'Stream Audiobook',
        free: 'Free',
        gift: 'Gift'
    },
    ar: {
        tag: 'نسخة رقمية مجانية',
        title: 'The Silent Garden',
        desc: 'استكشاف مثير لهيكل السرد والهوية الثقافية. تدعوك البروفيسورة لتحميل أحدث أعمالها مجانًا بالكامل.',
        recommended: 'موصى به بشدة من الزملاء',
        audio: 'معاينة صوتية',
        narrated: 'بصوت البروفيسورة فاطمة',
        dl: 'تحميل الكتاب الإلكتروني',
        stream: 'استمع للكتاب الصوتي',
        free: 'هدية',
        gift: 'مجانية'
    }
  };

  const t = content[lang];

  return (
    <section id="book" className="py-24 bg-[#F2EFE9] border-y border-stone-200 overflow-hidden relative">
       {/* Ambient Background */}
       <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #e6c885 0%, transparent 20%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Section */}
            {/* Mobile: Order 1 (Top), Desktop: Order 2 (Right in LTR, Left in RTL) */}
            <div className={`order-1 lg:order-2 space-y-8 text-start`}>
                <div>
                    <span className={`inline-block py-1 px-3 border border-ink/10 rounded-full text-xs font-bold tracking-widest uppercase text-charcoal mb-4 bg-white shadow-sm ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.tag}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">{t.title}</h2>
                    <p 
                        className={`text-xl text-charcoal/70 font-light leading-relaxed ${lang === 'ar' ? 'font-arabic text-2xl' : ''}`}
                    >
                        {t.desc}
                    </p>
                </div>
                
                <div className={`flex gap-3 mb-4 items-center`}>
                    <div className="flex">
                        {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-gold fill-gold" />)}
                    </div>
                    <span className={`text-sm text-charcoal/60 font-medium tracking-wide ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>{t.recommended}</span>
                </div>

                <div className="bg-white p-6 rounded-sm border border-stone-100 shadow-sm relative overflow-hidden">
                    <div className={`absolute top-0 w-20 h-20 bg-gold/5 rounded-full -mt-10 ${lang === 'ar' ? 'left-0 -ml-10' : 'right-0 -mr-10'}`}></div>
                    <h4 className={`font-serif text-lg mb-4 flex items-center gap-2 relative z-10 ${lang === 'ar' ? 'font-arabic font-bold text-xl' : ''}`}>
                        <PlayCircle className="text-gold" />
                        {t.audio}
                    </h4>
                    {/* Fake Audio Player UI */}
                    <div className="flex items-center gap-4 relative z-10">
                         <button className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors shadow-lg">
                            <PlayCircle size={24} fill="currentColor" className={lang === 'ar' ? 'mr-1' : 'ml-1'} />
                         </button>
                         <div className="flex-1">
                             <div className="h-1 bg-gray-100 rounded-full w-full overflow-hidden">
                                 <div className={`h-full bg-gold w-1/3 rounded-full ${lang === 'ar' ? 'float-right' : ''}`}></div>
                             </div>
                             <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
                                 <span>01:23</span>
                                 <span>14:45</span>
                             </div>
                         </div>
                    </div>
                    <p className={`text-xs text-gray-400 mt-4 italic px-1 ${lang === 'ar' ? 'font-arabic text-sm' : ''}`}>{t.narrated}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className={`flex-1 bg-ink text-white px-8 py-4 rounded-sm font-medium hover:bg-charcoal transition-all shadow-lg flex items-center justify-center gap-3 group ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>
                        <Download size={20} />
                        <span className="tracking-wide">{t.dl}</span>
                    </button>
                    <button className={`flex-1 bg-transparent border border-ink text-ink px-8 py-4 rounded-sm font-medium hover:bg-white transition-all flex items-center justify-center gap-3 ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>
                         <span className="tracking-wide">{t.stream}</span>
                    </button>
                </div>
            </div>

            {/* 3D Book Visual */}
             {/* Mobile: Order 2 (Bottom), Desktop: Order 1 (Left in LTR, Right in RTL) */}
            <div className="order-2 lg:order-1 flex justify-center py-8 lg:py-0 relative">
                 {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/20 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="book-container relative">
                    <div className="book w-[320px] h-[480px] relative">
                        {/* Front Cover */}
                        <div className="absolute inset-0 bg-[#141414] z-10 rounded-r-sm rounded-l-md overflow-hidden border-r border-white/10">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-overlay z-20 pointer-events-none"></div>
                            
                            {/* Realistic Lighting Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 z-30 pointer-events-none"></div>
                            
                            {/* Spine Shadow */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 to-transparent z-30"></div>

                            {/* Cover Content / Image Placeholder - NO TEXT OVERLAY */}
                            <div className="w-full h-full relative z-10">
                                <img 
                                    src="./images/book-cover.png" 
                                    alt="The Silent Garden Book Cover" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        
                        {/* Spine */}
                        <div className="book-spine flex items-center justify-center overflow-hidden">
                             <div className="rotate-90 text-gold/60 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap font-medium">The Silent Garden</div>
                        </div>
                        
                    </div>
                    
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-16 left-4 right-4 h-8 bg-black/40 blur-2xl rounded-[100%]"></div>

                     {/* Gold Sticker - Fixed/Static */}
                     <div className="absolute -top-6 -right-6 z-40">
                        <div className="relative w-24 h-24 bg-gradient-to-br from-gold to-[#b08d45] rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/10">
                             <div className={`text-center leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
                                 <span className="block text-white/90 font-bold text-[10px] uppercase tracking-widest mb-1">{t.free}</span>
                                 <span className="block text-white font-serif text-xl italic">{t.gift}</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;