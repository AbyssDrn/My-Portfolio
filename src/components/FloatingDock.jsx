import React, { useState, useEffect } from 'react';
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
    const [isInHomeSection, setIsInHomeSection] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                // Check if viewport center is within home section
                const viewportCenter = window.innerHeight / 2;
                const isVisible = rect.top < viewportCenter && rect.bottom > viewportCenter;
                setIsInHomeSection(isVisible);
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
        <div
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

                        {/* Tooltip - Only rendered when in home section */}
                        {isInHomeSection && (
                            <span className="hidden md:block absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                                {item.label}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center flex-shrink-0 pl-2 md:pl-3 ml-2 md:ml-3">
                {/* Visible divider in both modes */}
                <div
                    className="h-6 w-px mr-2 md:mr-3"
                    style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.4)' : '#000000' }}
                />
                <button
                    onClick={toggleTheme}
                    className="group relative flex flex-col items-center flex-shrink-0"
                    aria-label="Toggle theme"
                >
                    <div className="p-1.5 md:p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white">
                        {isDark ? <Sun size={16} className="md:w-[18px] md:h-[18px]" /> : <Moon size={16} className="md:w-[18px] md:h-[18px]" />}
                    </div>

                    {/* Tooltip - Only rendered when in home section */}
                    {isInHomeSection && (
                        <span className="hidden md:block absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                            {isDark ? 'Light' : 'Dark'}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};
