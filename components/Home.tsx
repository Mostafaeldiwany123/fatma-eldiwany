import React from 'react';
import Hero from './Hero';
import About from './About';
import BookShowcase from './BookShowcase';
import ExperienceTimeline from './ExperienceTimeline';
import Gallery from './Gallery';

interface HomeProps {
    lang: 'en' | 'ar';
}

const Home: React.FC<HomeProps> = ({ lang }) => {
    return (
        <main>
            <Hero lang={lang} />
            <About lang={lang} />
            <BookShowcase lang={lang} />
            <ExperienceTimeline lang={lang} />
            <Gallery lang={lang} />
        </main>
    );
};

export default Home;
