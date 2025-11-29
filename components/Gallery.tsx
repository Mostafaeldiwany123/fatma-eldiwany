import React from 'react';
import { Camera } from 'lucide-react';

interface GalleryProps {
    lang: 'en' | 'ar';
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
    // Gallery with varied aspect ratios mockup
    const imagesData = {
        en: [
            { id: 1, src: "https://picsum.photos/id/24/800/600", aspect: "aspect-[4/3]", label: "Conference 2023" },
            { id: 2, src: "https://picsum.photos/id/42/600/800", aspect: "aspect-[3/4]", label: "Book Signing" },
            { id: 3, src: "https://picsum.photos/id/1/800/800", aspect: "aspect-square", label: "University Lecture" },
            { id: 4, src: "https://picsum.photos/id/60/800/500", aspect: "aspect-[16/9]", label: "Department Meeting" },
            { id: 5, src: "https://picsum.photos/id/180/600/800", aspect: "aspect-[3/4]", label: "Award Ceremony" },
            { id: 6, src: "https://picsum.photos/id/20/800/600", aspect: "aspect-[4/3]", label: "Student Supervision" },
        ],
        ar: [
            { id: 1, src: "https://picsum.photos/id/24/800/600", aspect: "aspect-[4/3]", label: "مؤتمر 2023" },
            { id: 2, src: "https://picsum.photos/id/42/600/800", aspect: "aspect-[3/4]", label: "توقيع الكتاب" },
            { id: 3, src: "https://picsum.photos/id/1/800/800", aspect: "aspect-square", label: "محاضرة جامعية" },
            { id: 4, src: "https://picsum.photos/id/60/800/500", aspect: "aspect-[16/9]", label: "اجتماع القسم" },
            { id: 5, src: "https://picsum.photos/id/180/600/800", aspect: "aspect-[3/4]", label: "حفل تكريم" },
            { id: 6, src: "https://picsum.photos/id/20/800/600", aspect: "aspect-[4/3]", label: "إشراف طلابي" },
        ]
    };

    const images = imagesData[lang];
    const t = {
        en: {
            showcase: 'Media Showcase',
            moments: 'Moments in Academia',
            caption: 'Captured memories from conferences & events'
        },
        ar: {
            showcase: 'معرض الوسائط',
            moments: 'لحظات في الأكاديميا',
            caption: 'ذكريات ملتقطة من المؤتمرات والفعاليات'
        }
    }[lang];

  return (
    <section id="gallery" className="py-24 bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                 <span className={`text-gold font-bold tracking-widest uppercase text-sm ${lang === 'ar' ? 'font-arabic text-base' : ''}`}>{t.showcase}</span>
                <h2 className={`text-4xl md:text-5xl font-serif text-ink mt-2 ${lang === 'ar' ? 'font-arabic font-bold' : ''}`}>{t.moments}</h2>
            </div>
            <div className={`flex items-center gap-2 text-charcoal/60 text-sm ${lang === 'ar' ? 'font-arabic text-lg' : ''}`}>
                <Camera size={16} />
                <span>{t.caption}</span>
            </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img) => (
                <div key={img.id} className="break-inside-avoid relative group cursor-pointer">
                    {/* Photo Frame Effect */}
                    <div className="bg-white p-3 pb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out transform rotate-0 group-hover:rotate-1">
                        <div className="relative overflow-hidden bg-gray-100">
                             <img 
                                src={img.src} 
                                alt={img.label} 
                                className="w-full h-auto object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="mt-4 px-2">
                             <p className={`font-serif text-ink italic text-lg ${lang === 'ar' ? 'font-arabic not-italic font-bold' : ''}`}>{img.label}</p>
                             <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Cairo, Egypt</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;