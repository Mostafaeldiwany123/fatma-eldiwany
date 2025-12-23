import React, { useState, useRef, useEffect, forwardRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Menu, ZoomIn, ZoomOut, Home, List, BookOpen, Palette, Maximize, Minimize, Settings } from 'lucide-react';
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';
import { bookContent, Chapter } from '../data/bookContent';
// @ts-ignore
const bookCover = "/images/book-cover.png";

interface BookReaderProps {
    lang?: 'ar'; // Arabic only
}

// --- CONSTANTS ---
const PAGE_WIDTH = 500;
const PAGE_HEIGHT = 720;
const CONTENT_HEIGHT_LIMIT = 570; // 720 - padding - header/footer buffers ~ 570px safe zone

// --- COMPONENTS ---

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; header?: string; isHard?: boolean; themeStyles?: any; fontSize?: string }>(
    (props, ref) => {
        return (
            <div
                className={`page w-full h-full shadow-inner ${props.themeStyles?.border || ''} ${props.themeStyles?.bg || 'bg-[#fbf0d9]'}`}
                ref={ref}
                data-density={props.isHard ? "hard" : "soft"}
            >
                <div className={`w-full h-full relative flex flex-col pt-12 px-8 pb-16 ${props.themeStyles?.text || 'text-gray-800'}`}>
                    {/* Header */}
                    {props.header && (
                        <div className="absolute top-4 left-0 right-0 text-center">
                            <span className="text-[10px] text-[#8b8b8b] font-serif">
                                {props.header}
                            </span>
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="flex-1 overflow-hidden font-serif text-justify transition-all duration-300"
                        style={{ fontSize: props.fontSize || '1rem', lineHeight: 1.8 }}
                    >
                        {props.children}
                    </div>

                    {/* Footer */}
                    {props.number && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                            <span className="text-[10px] font-serif text-[#8b8b8b] tracking-widest decoration-1 decoration-[#8b8b8b]/30">
                                — {props.number} —
                            </span>
                        </div>
                    )}

                    {/* Texture */}
                    <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-30 mix-blend-multiply"></div>
                </div>
            </div>
        );
    }
);
Page.displayName = 'Page';

const PageCover = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    (props, ref) => {
        return (
            <div
                className="page page-cover w-full h-full custom-book-shadow bg-[#1a1a1a]"
                ref={ref}
                data-density="hard"
            >
                <div className="w-full h-full relative">
                    {props.children}
                    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none opacity-20"></div>
                    <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 to-transparent pointer-events-none opacity-50"></div>
                </div>
            </div>
        );
    }
);
PageCover.displayName = 'PageCover';

const BookReader: React.FC<BookReaderProps> = () => {
    const book = useRef<any>(null);
    const content = bookContent['ar']; // Always Arabic
    const measureRef = useRef<HTMLDivElement>(null);

    // --- UTILITIES STATE ---
    const [theme, setTheme] = useState<'sepia' | 'light' | 'dark'>('sepia');
    const [isFullscreen, setIsFullscreen] = useState(false);

    const themeStyles = useMemo(() => {
        switch (theme) {
            case 'light': return { bg: 'bg-white', text: 'text-gray-900', outer: 'bg-gray-100', border: 'border-l border-gray-200' };
            case 'dark': return { bg: 'bg-[#1a1a1a]', text: 'text-gray-200', outer: 'bg-[#0f0f0f]', border: 'border-l border-white/10' };
            case 'sepia': default: return { bg: 'bg-[#fbf0d9]', text: 'text-gray-800', outer: 'bg-[#F2EFE9]', border: 'border-l border-black/5' };
        }
    }, [theme]);

    // PAGINATION STATE
    const [storyPages, setStoryPages] = useState<{ content: string; chapterTitle: string; pageNumberInChapter: number }[]>([]);
    const [toc, setToc] = useState<{ title: string; pageNumber: number }[]>([]);
    const [isPaginated, setIsPaginated] = useState(false);

    // Calculate initial scale synchronously to prevent flash
    const calculateScale = useCallback(() => {
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const mobile = screenW < 1000;
        const margin = mobile ? 10 : 40;
        const availableW = screenW - margin;
        const availableH = screenH - 80;
        const targetW = mobile ? PAGE_WIDTH : PAGE_WIDTH * 2;
        const targetH = PAGE_HEIGHT;
        const scaleW = availableW / targetW;
        const scaleH = availableH / targetH;
        let newScale = Math.min(scaleW, scaleH);
        if (newScale > 1.4) newScale = 1.4;
        return { scale: newScale, mobile };
    }, []);

    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1000);
    const [scale, setScale] = useState(() => calculateScale().scale);
    const [startPage, setStartPage] = useState(0);
    const [remountKey, setRemountKey] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isReady, setIsReady] = useState(false);

    // Height-based Pagination Effect
    useEffect(() => {
        if (!measureRef.current) return;

        console.log("Starting pagination...");
        const measureDiv = measureRef.current;
        const pages: { content: string; chapterTitle: string; pageNumberInChapter: number }[] = [];
        const newToc: { title: string; pageNumber: number }[] = [];
        let globalPageCounter = 3; // Starts after Cover (0), Title (1), TOC (2)

        content.chapters.forEach((chapter) => {
            newToc.push({ title: chapter.title, pageNumber: globalPageCounter });

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = chapter.content;
            const nodes = Array.from(tempDiv.children);

            let currentPageContent = "";
            let pageInChapter = 1;

            const flushPage = () => {
                if (currentPageContent) {
                    pages.push({
                        content: currentPageContent,
                        chapterTitle: chapter.title,
                        pageNumberInChapter: pageInChapter
                    });
                    globalPageCounter++;
                    pageInChapter++;
                    currentPageContent = "";
                    measureDiv.innerHTML = "";
                }
            };

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const nodeHTML = node.outerHTML;

                // Try adding to current
                const testContent = currentPageContent + nodeHTML;
                measureDiv.innerHTML = testContent;

                if (measureDiv.offsetHeight <= CONTENT_HEIGHT_LIMIT) {
                    currentPageContent = testContent;
                } else {
                    // Overflow
                    if (currentPageContent === "") {
                        // Current node alone is too big? Split it.
                        // We split by sentences or fragments
                        const text = node.textContent || "";
                        // Split by full stops, commas, etc but keep delimiter. Matches arabic comma too.
                        const sentences = text.split(/([.،!?] )/g);

                        const tagName = node.tagName.toLowerCase();
                        const startTag = `<${tagName}>`;
                        const endTag = `</${tagName}>`;

                        let tempBuffer = "";

                        for (let j = 0; j < sentences.length; j++) {
                            const s = sentences[j];
                            // Try adding s to tempBuffer
                            const testP = `${startTag}${tempBuffer}${s}${endTag}`;
                            // Measure ONLY this current splitting node + whatever was already on page (which is empty here)
                            measureDiv.innerHTML = testP;

                            if (measureDiv.offsetHeight <= CONTENT_HEIGHT_LIMIT) {
                                tempBuffer += s;
                            } else {
                                // Flush tempBuffer to a page
                                if (tempBuffer) {
                                    pages.push({
                                        content: `${startTag}${tempBuffer}${endTag}`,
                                        chapterTitle: chapter.title,
                                        pageNumberInChapter: pageInChapter
                                    });
                                    globalPageCounter++;
                                    pageInChapter++;
                                    measureDiv.innerHTML = "";
                                }
                                tempBuffer = s;
                            }
                        }

                        if (tempBuffer) {
                            currentPageContent = `${startTag}${tempBuffer}${endTag}`;
                        }

                    } else {
                        // Page full, but node fits on next page?
                        flushPage();
                        // Retry this node
                        i--;
                    }
                }
            }
            flushPage();
        });

        setStoryPages(pages);
        setToc(newToc);
        setIsPaginated(true);
        console.log("Pagination complete. Total pages:", pages.length);

    }, [content]);

    // Mark as ready after initial render and set up resize listener
    useEffect(() => {
        const handleResize = () => {
            const { scale: newScale, mobile } = calculateScale();
            setScale(newScale);
            setIsMobile(mobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [calculateScale]);

    const prevPage = () => book.current?.pageFlip().flipPrev();
    const nextPage = () => book.current?.pageFlip().flipNext();
    const goToPage = (p: number) => {
        setIsReady(false);
        setStartPage(p);
        setRemountKey(prev => prev + 1);
    };

    const onFlip = useCallback((e: any) => {
        setCurrentPage(e.data);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const h = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextPage();
            else if (e.key === 'ArrowLeft') prevPage();
        };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, []);

    // Centering cover logic
    const transformStyle = useMemo(() => {
        if (!isMobile && currentPage === 0) {
            return { transform: `scale(${scale}) translateX(-25%)` };
        }
        return { transform: `scale(${scale})` };
    }, [scale, isMobile, currentPage]);


    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const toggleTheme = () => {
        setTheme(prev => {
            if (prev === 'sepia') return 'light';
            if (prev === 'light') return 'dark';
            return 'sepia';
        });
    };

    return (
        <div className={`fixed inset-0 flex flex-col overflow-hidden transition-colors duration-300 ${themeStyles.outer}`} dir="rtl" lang="ar">

            {/* Hidden Measure Div */}
            <div
                ref={measureRef}
                style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    width: '436px', // 500 - 32 - 32
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    fontFamily: 'serif',
                    textAlign: 'justify',
                    padding: 0,
                    margin: 0,
                    zIndex: -100
                }}
            />

            {/* Header */}
            <header className={`h-14 flex items-center justify-between px-4 sm:px-6 backdrop-blur-md border-b text-[#1a1a1a] shadow-sm z-50 shrink-0 ${theme === 'dark' ? 'bg-[#1a1a1a]/90 text-white border-white/10' : 'bg-white/80 border-[#D4AF37]/20'}`}>

                {/* Left: Home */}
                <Link to="/" className={`flex items-center gap-2 hover:text-[#D4AF37] transition-colors font-serif ${theme === 'dark' ? 'text-white hover:text-gold' : 'text-[#1a1a1a]'}`}>
                    <Home size={18} />
                    <span className="text-xs hidden sm:inline font-bold">رجوع</span>
                </Link>

                {/* Center: Title */}
                <div className="absolute left-1/2 -translate-x-1/2 text-center hidden md:block">
                    <h1 className={`font-serif font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{content.title}</h1>
                    <span className="text-[10px] opacity-70 block -mt-1">{content.author}</span>
                </div>

                {/* Right: Utilities */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Theme */}
                    <button onClick={toggleTheme} title="تغيير المظهر" className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <Palette size={18} />
                    </button>

                    {/* Zoom */}
                    <div className="hidden sm:flex items-center bg-black/5 dark:bg-white/10 rounded-full px-1">
                        <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))} title="تصغير" className="p-1.5 rounded-full hover:text-[#D4AF37]">
                            <ZoomOut size={16} />
                        </button>
                        <button onClick={() => setScale(s => Math.min(1.5, s + 0.1))} title="تكبير" className="p-1.5 rounded-full hover:text-[#D4AF37]">
                            <ZoomIn size={16} />
                        </button>
                    </div>

                    {/* Fullscreen */}
                    <button onClick={toggleFullscreen} title="ملء الشاشة" className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors hidden sm:block">
                        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                    </button>

                    {/* TOC */}
                    <button onClick={() => goToPage(2)} className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2 font-serif ml-2">
                        <List size={18} />
                    </button>
                </div>
            </header>

            {/* Reading Area */}
            <div className={`flex-1 relative flex items-center justify-center overflow-hidden no-scrollbar transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'} ${themeStyles.outer}`}>


                {/* Navigation Arrows - Spatial (Right = Next, Left = Prev) */}
                <button onClick={prevPage} className="hidden md:block absolute left-2 md:left-8 z-40 p-3 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/50 hover:bg-[#1a1a1a]/10 hover:text-[#1a1a1a] transition-all">
                    <ChevronLeft size={32} />
                </button>
                <button onClick={nextPage} className="hidden md:block absolute right-2 md:right-8 z-40 p-3 rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]/50 hover:bg-[#1a1a1a]/10 hover:text-[#1a1a1a] transition-all">
                    <ChevronRight size={32} />
                </button>

                {/* Scalable Container */}
                {isPaginated && (
                    <div
                        style={{
                            ...transformStyle,
                            width: isMobile ? PAGE_WIDTH : PAGE_WIDTH * 2,
                            height: PAGE_HEIGHT
                        }}
                        className={`transition-all duration-500 ease-in-out origin-center ${(!isMobile && currentPage === 0) ? '' : 'custom-book-shadow'}`}
                    >
                        <HTMLFlipBook
                            key={`${isMobile ? 'mobile' : 'desktop'}-${remountKey}`}
                            width={PAGE_WIDTH}
                            height={PAGE_HEIGHT}
                            size="fixed"
                            minWidth={PAGE_WIDTH}
                            maxWidth={PAGE_WIDTH}
                            minHeight={PAGE_HEIGHT}
                            maxHeight={PAGE_HEIGHT}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            usePortrait={isMobile}
                            startPage={startPage}
                            drawShadow={!isMobile}
                            flippingTime={1000}
                            useMouseEvents={true}
                            onFlip={onFlip}
                            onInit={() => setIsReady(true)}
                            className="book-flip"
                            ref={book}
                            clickEventForward={true}
                        >
                            {/* 0: Cover */}
                            <PageCover>
                                <img src={bookCover} alt="Cover" className="w-full h-full object-cover" />
                            </PageCover>

                            {/* 1: Title */}
                            <Page number={1} isHard={true} themeStyles={themeStyles} fontSize="1rem">
                                <div className={`h-full flex flex-col justify-center items-center text-center ${themeStyles.text}`}>
                                    <h1 className="text-4xl px-8 leading-tight font-serif mb-8">{content.title}</h1>
                                    <div className={`w-24 h-[2px] mb-8 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
                                    <p className="text-xl opacity-80 font-serif italic">{content.author}</p>
                                </div>
                            </Page>

                            {/* 2: TOC */}
                            <Page number={2} header="الفهرس" themeStyles={themeStyles} fontSize="1rem">
                                <div className="h-full flex flex-col">
                                    <h2 className={`text-2xl font-serif text-center mb-8 pb-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>فهرس المحتويات</h2>
                                    <div className="space-y-4 pr-2 overflow-y-auto custom-scrollbar flex-1">
                                        {toc.map((item, idx) => (
                                            <div
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    console.log(`Clicking TOC item "${item.title}" - navigating to page ${item.pageNumber}`);
                                                    goToPage(item.pageNumber);
                                                }}
                                                className={`cursor-pointer group flex items-baseline justify-between p-1 rounded transition-colors ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
                                            >
                                                <span className={`font-serif text-sm ${themeStyles.text}`}>{item.title}</span>
                                                <span className="text-xs opacity-50 font-mono group-hover:opacity-100">{item.pageNumber}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Page>

                            {/* Story Pages */}
                            {storyPages.map((page, idx) => (
                                <Page key={idx} number={idx + 3} header={page.chapterTitle} isHard={false} themeStyles={themeStyles} fontSize="1rem">
                                    {page.pageNumberInChapter === 1 && (
                                        <h3 className={`text-2xl font-bold mb-6 font-serif text-center mt-2 ${themeStyles.text}`}>
                                            {page.chapterTitle}
                                        </h3>
                                    )}
                                    <div
                                        dangerouslySetInnerHTML={{ __html: page.content }}
                                        style={{ direction: 'rtl' }}
                                    />
                                </Page>
                            ))}

                            {/* End Page */}
                            <Page themeStyles={themeStyles}>
                                <div className="h-full flex items-center justify-center opacity-40">
                                    <div className="text-center">
                                        <div className={`w-4 h-4 rounded-full mx-auto mb-4 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
                                        <p className={`font-serif italic text-sm ${themeStyles.text}`}>نهاية الكتاب</p>
                                    </div>
                                </div>
                            </Page>

                        </HTMLFlipBook>
                    </div>
                )}
            </div>

            <style>{`
                .custom-book-shadow {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
export default BookReader;
