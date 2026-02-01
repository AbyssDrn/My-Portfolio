import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Eye, Brain, FolderGit2, GraduationCap, Heart, BookOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'vision', icon: Eye, label: 'Vision' },
    { id: 'skills', icon: Brain, label: 'Skills' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'interests', icon: Heart, label: 'Interests' },
    { id: 'blog', icon: BookOpen, label: 'Blog' },
    { id: 'contact', icon: Mail, label: 'Contact' },
];

export const FloatingDock = () => {
    const { isDark, toggleTheme } = useTheme();
    const [showTooltips, setShowTooltips] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                const isInHomeSection = rect.top < window.innerHeight && rect.bottom > 0;
                setShowTooltips(isInHomeSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 glass-dock rounded-full px-3 md:px-4 py-2 md:py-3 flex items-center justify-between md:justify-center gap-1 md:gap-3 z-50 w-[95vw] md:w-auto max-w-fit overflow-x-auto hide-scrollbar touch-pan-x"
        >
            <div className="flex items-center gap-1 md:gap-3">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="group relative flex flex-col items-center flex-shrink-0"
                    >
                        <div className="p-1.5 md:p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white">
                            <item.icon size={16} className="md:w-[18px] md:h-[18px]" />
                        </div>

                        {/* Tooltip - Only visible in home section */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showTooltips ? 0 : 0 }}
                            className="hidden md:block absolute -bottom-8 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none"
                            style={{
                                opacity: showTooltips ? undefined : 0,
                                pointerEvents: 'none'
                            }}
                        >
                            {item.label}
                        </motion.span>
                    </button>
                ))}
            </div>

            {/* Theme Toggle Section - Fixed to right on mobile if possible, or just part of flow */}
            <div className="flex items-center flex-shrink-0 pl-1 md:pl-0 border-l border-white/10 ml-1 md:ml-0 md:border-l-0">
                <div className="hidden md:block h-6 w-px bg-white/10 mx-1" /> {/* Desktop Divider */}
                <button
                    onClick={toggleTheme}
                    className="group relative flex flex-col items-center flex-shrink-0"
                    aria-label="Toggle theme"
                >
                    <div className="p-1.5 md:p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white">
                        {isDark ? <Sun size={16} className="md:w-[18px] md:h-[18px]" /> : <Moon size={16} className="md:w-[18px] md:h-[18px]" />}
                    </div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showTooltips ? 0 : 0 }}
                        className="hidden md:block absolute -bottom-8 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none"
                        style={{
                            opacity: showTooltips ? undefined : 0,
                            pointerEvents: 'none'
                        }}
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </motion.span>
                </button>
            </div>
        </motion.div>
    );
};
