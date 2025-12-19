import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BookShowcase from './components/BookShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    const savedLang = localStorage.getItem('language');
    if (!savedLang) {
      localStorage.setItem('language', 'ar');
      return 'ar';
    }
    return savedLang as 'en' | 'ar';
  });

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-paper text-ink selection:bg-gold/30 selection:text-ink ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
    >
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <BookShowcase lang={lang} />
        <ExperienceTimeline lang={lang} />
        <Gallery lang={lang} />
      </main>
      <Contact lang={lang} />
    </div>
  );
}

export default App;