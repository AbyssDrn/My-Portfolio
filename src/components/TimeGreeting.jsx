import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, CloudSun } from 'lucide-react';

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
    dusk: [
        { lang: 'Japanese', text: 'お疲れ様です', pronunciation: 'Otsukaresama desu', meaning: 'Thank you for your hard work' },
        { lang: 'Korean', text: '수고하셨습니다', pronunciation: 'Su-go-ha-syeot-seum-ni-da', meaning: 'You worked hard (Evening greeting)' },
        { lang: 'Chinese', text: '傍晚好', pronunciation: 'Bàng wǎn hǎo', meaning: 'Good Evening' }
    ],
    night: [
        { lang: 'Japanese', text: 'こんばんは', pronunciation: 'Konbanwa', meaning: 'Good Evening' },
        { lang: 'Korean', text: '좋은 저녁', pronunciation: 'Jo-eun jeo-nyeok', meaning: 'Good Evening' },
        { lang: 'Chinese', text: '晚上好', pronunciation: 'Wǎn shang hǎo', meaning: 'Good Evening' }
    ],
    tonight: [ // Late night
        { lang: 'Japanese', text: 'おやすみなさい', pronunciation: 'Oyasuminasai', meaning: 'Good Night' },
        { lang: 'Korean', text: '안녕히 주무세요', pronunciation: 'An-nyeong-hi ju-mu-se-yo', meaning: 'Good Night (Sleep well)' },
        { lang: 'Chinese', text: '晚安', pronunciation: 'Wǎn ān', meaning: 'Good Night' }
    ]
};

const getTimePhase = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) return 'dawn';
    if (hour >= 9 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 20) return 'dusk';
    if (hour >= 20 && hour < 23) return 'night';
    return 'tonight'; // 23 - 5
};

export const TimeGreeting = () => {
    const [greeting, setGreeting] = useState(null);
    const [phase, setPhase] = useState('morning');

    useEffect(() => {
        const currentPhase = getTimePhase();
        setPhase(currentPhase);

        // Pick a random language for the detected time phase
        const options = GREETINGS[currentPhase];
        const randomOption = options[Math.floor(Math.random() * options.length)];
        setGreeting(randomOption);
    }, []);

    if (!greeting) return null;

    const Icon = {
        dawn: Sunrise,
        morning: Sun,
        afternoon: CloudSun,
        dusk: Sunset,
        night: Moon,
        tonight: Moon
    }[phase] || Sun;

    return (
        <>
            {/* Top Left Prompt (As requested) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="fixed top-24 left-6 z-40 hidden md:block"
            >
                <div className="glass-panel p-4 rounded-xl border border-white/10 max-w-[200px]">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                        <Icon size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">{phase} Greeting</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">Language: <span className="text-white dark:text-white light:text-gray-900">{greeting.lang}</span></p>
                    <p className="text-xs text-gray-400 mb-1">Pronounce: <span className="text-white/90 dark:text-white/90 light:text-gray-800 italic">{greeting.pronunciation}</span></p>
                    <p className="text-xs text-gray-400">Meaning: <span className="text-white/90 dark:text-white/90 light:text-gray-800">{greeting.meaning}</span></p>
                </div>
            </motion.div>

            {/* Main Greeting Display (Centered/Integrated) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex flex-col items-center"
            >
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-400 mb-2 font-serif tracking-widest">
                    {greeting.text}
                </div>
                <div className="text-sm text-gray-500 font-mono tracking-widest uppercase opacity-70">
                    {greeting.pronunciation}
                </div>
            </motion.div>
        </>
    );
};
