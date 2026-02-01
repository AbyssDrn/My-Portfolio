import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

const GREETINGS = {
    dawn: [
        { lang: 'Japanese', text: 'おはよう', pronunciation: 'Ohayou', meaning: 'Good Morning (Casual)' },
        { lang: 'Korean', text: '좋은 아침', pronunciation: 'Jo-eun a-chim', meaning: 'Good Morning' },
        { lang: 'Chinese', text: '早安', pronunciation: 'Zǎo ān', meaning: 'Good Morning' }
    ],
    morning: [
        { lang: 'Japanese', text: 'おはようございます', pronunciation: 'Ohayou Gozaimasu', meaning: 'Good Morning (Polite)' },
        { lang: 'Korean', text: '안녕하세요', pronunciation: 'An-nyeong-ha-se-yo', meaning: 'Hello / Good Morning' },
        { lang: 'Chinese', text: '早上好', pronunciation: 'Zǎo shang hǎo', meaning: 'Good Morning' }
    ],
    afternoon: [
        { lang: 'Japanese', text: 'こんにちは', pronunciation: 'Konnichiwa', meaning: 'Good Afternoon / Hello' },
        { lang: 'Korean', text: '점심 식사 하셨어요?', pronunciation: 'Jeom-sim sik-sa ha-syeo-sseo-yo?', meaning: 'Have you had lunch? (Common Greeting)' },
        { lang: 'Chinese', text: '下午好', pronunciation: 'Xià wǔ hǎo', meaning: 'Good Afternoon' }
    ],
    evening: [
        { lang: 'Japanese', text: 'こんばんは', pronunciation: 'Konbanwa', meaning: 'Good Evening' },
        { lang: 'Korean', text: '좋은 저녁이에요', pronunciation: 'Jo-eun jeo-nyeok-i-e-yo', meaning: 'Good Evening' },
        { lang: 'Chinese', text: '晚上好', pronunciation: 'Wǎn shang hǎo', meaning: 'Good Evening' }
    ],
    night: [
        { lang: 'Japanese', text: 'おやすみなさい', pronunciation: 'Oyasuminasai', meaning: 'Good Night / Sleep Well' },
        { lang: 'Korean', text: '잘자요', pronunciation: 'Jal-ja-yo', meaning: 'Sleep Well (Informal)' },
        { lang: 'Chinese', text: '晚安', pronunciation: 'Wǎn ān', meaning: 'Good Night' }
    ]
};

export const TimeGreeting = () => {
    const [greeting, setGreeting] = useState({ lang: '', text: '', pronunciation: '', meaning: '' });
    const [phase, setPhase] = useState('morning');
    const [isInHomeSection, setIsInHomeSection] = useState(true);

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            let currentPhase;

            if (hour >= 5 && hour < 8) currentPhase = 'dawn';
            else if (hour >= 8 && hour < 12) currentPhase = 'morning';
            else if (hour >= 12 && hour < 17) currentPhase = 'afternoon';
            else if (hour >= 17 && hour < 21) currentPhase = 'evening';
            else currentPhase = 'night';

            setPhase(currentPhase);

            const phaseGreetings = GREETINGS[currentPhase];
            const randomGreeting = phaseGreetings[Math.floor(Math.random() * phaseGreetings.length)];
            setGreeting(randomGreeting);
        };

        updateGreeting();
        const interval = setInterval(updateGreeting, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;
                const isVisible = rect.top < viewportCenter && rect.bottom > viewportCenter;
                setIsInHomeSection(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getIcon = () => {
        if (phase === 'dawn') return Sunrise;
        if (phase === 'morning') return Sun;
        if (phase === 'afternoon') return Sun;
        if (phase === 'evening') return Sunset;
        return Moon;
    };

    const Icon = getIcon();

    return (
        <>
            {/* Top Left Prompt - Only visible in home section */}
            <AnimatePresence>
                {isInHomeSection && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-20 left-4 md:top-24 md:left-6 z-40"
                    >
                        <div className="glass-panel p-3 md:p-4 rounded-xl border border-white/10 max-w-[180px] md:max-w-[200px]">
                            <div className="flex items-center gap-2 mb-2 text-cyan-400">
                                <Icon size={14} className="md:w-4 md:h-4" />
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{phase} Greeting</span>
                            </div>
                            <p className="text-[10px] md:text-xs text-gray-400 mb-1">Language: <span className="text-white dark:text-white light:text-gray-900">{greeting.lang}</span></p>
                            <p className="text-[10px] md:text-xs text-gray-400 mb-1">Pronounce: <span className="text-white/90 dark:text-white/90 light:text-gray-800 italic">{greeting.pronunciation}</span></p>
                            <p className="text-[10px] md:text-xs text-gray-400">Meaning: <span className="text-white/90 dark:text-white/90 light:text-gray-800">{greeting.meaning}</span></p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Greeting Text */}
            <motion.div
                key={greeting.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-gradient-6"
            >
                {greeting.text}
            </motion.div>
        </>
    );
};
