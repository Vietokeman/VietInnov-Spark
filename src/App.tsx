import React, { useEffect, useRef } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import HistoryTimeline from './components/sections/HistoryTimeline';
import ReformAnalysis from './components/sections/ReformAnalysis';
import InteractiveQuiz from './components/sections/InteractiveQuiz';
import KeyAchievements from './components/sections/KeyAchievements';
import ModernContext from './components/sections/ModernContext';
import AIUsage from './components/sections/AIUsage';
import CTA from './components/sections/CTA';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ScrollSmoother for buttery smooth scrolling
    let smoother: ScrollSmoother | null = null;
    
    if (smoothWrapper.current && smoothContent.current) {
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapper.current,
        content: smoothContent.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    // Advanced scroll animations with stagger
    const sections = gsap.utils.toArray<HTMLElement>('.animate-section');
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.animate-item');
      
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );
    });

    // Parallax backgrounds
    gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((bg) => {
      gsap.to(bg, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: bg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => {
      smoother?.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={smoothWrapper} id="smooth-wrapper" className="min-h-screen">
      <div ref={smoothContent} id="smooth-content">
        <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-white">
          <Header />
          <main>
            <Hero />
            <HistoryTimeline />
            <ReformAnalysis />
            <KeyAchievements />
            <InteractiveQuiz />
            <ModernContext />
            <AIUsage />
            <CTA />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default App;
