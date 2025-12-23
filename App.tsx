import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookReader from './components/BookReader';
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
    <BrowserRouter>
      <div
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className={`min-h-screen bg-paper text-ink selection:bg-gold/30 selection:text-ink ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
      >
        <Routes>
          <Route path="/" element={
            <>
              <Navbar lang={lang} toggleLang={toggleLang} />
              <Home lang={lang} />
              <Contact lang={lang} />
            </>
          } />
          <Route path="/read" element={<BookReader lang={lang} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;