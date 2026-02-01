import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import { DarkModeExtensionDetector } from './components/DarkModeExtensionDetector';
import { FloatingDock } from './components/FloatingDock';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionSection } from './components/VisionSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { InterestsSection } from './components/InterestsSection';
import { BlogSection } from './components/BlogSection';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <NotificationProvider>
        <div className="relative w-full min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden">
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 origin-left z-50"
            style={{ scaleX }}
          />

          <FloatingDock />

          <main className="flex flex-col w-full">
            <HeroSection />
            <AboutSection />
            <VisionSection />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <InterestsSection />
            <BlogSection />
          </main>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 50 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full glass-panel hover:bg-white/10 transition-colors z-40 group cursor-pointer"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>

          {/* Dark Mode Extension Detector */}
          <DarkModeExtensionDetector />

          {/* Dynamic Background - only show in dark mode */}
          <div className="fixed inset-0 pointer-events-none -z-10 dark-mode-bg" />
        </div>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
