import React from 'react';
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
            className="fixed top-6 left-1/2 transform -translate-x-1/2 glass-dock rounded-full px-4 py-3 flex items-center gap-3 z-50 max-w-[95vw] overflow-x-auto hide-scrollbar"
        >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative flex flex-col items-center flex-shrink-0"
                >
                    <div className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white">
                        <item.icon size={18} />
                    </div>

                    {/* Tooltip */}
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                        {item.label}
                    </span>
                </button>
            ))}

            {/* Theme Toggle */}
            <div className="h-6 w-px bg-white/10 mx-1" />
            <button
                onClick={toggleTheme}
                className="group relative flex flex-col items-center flex-shrink-0"
                aria-label="Toggle theme"
            >
                <div className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 group-hover:text-white">
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </div>

                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                    {isDark ? 'Light' : 'Dark'}
                </span>
            </button>
        </motion.div>
    );
};
