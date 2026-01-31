import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

export const DarkModeExtensionDetector = () => {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        // Detect if a dark mode extension is active
        const checkDarkModeExtension = () => {
            // Check for common dark mode extension indicators
            const html = document.documentElement;
            const body = document.body;

            // Check for injected styles or classes from extensions
            const hasDarkReaderClass = html.classList.contains('darkreader') ||
                body.classList.contains('darkreader') ||
                html.hasAttribute('data-darkreader-scheme');

            const hasNightEyeClass = html.classList.contains('nighteye') ||
                body.classList.contains('nighteye');

            const hasDarkModeExtension = hasDarkReaderClass || hasNightEyeClass;

            if (hasDarkModeExtension) {
                setShowWarning(true);
            }
        };

        // Check on mount and after a delay to catch lazy-loading extensions
        checkDarkModeExtension();
        const timer = setTimeout(checkDarkModeExtension, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showWarning && (
                <motion.div
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -400, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed bottom-6 left-6 z-50 max-w-sm"
                >
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-2xl border border-emerald-400/50 overflow-hidden">
                        {/* Header */}
                        <div className="bg-black/20 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <AlertCircle size={20} className="text-white" />
                                <span className="font-bold text-white text-sm">Dark Mode Extension Detected</span>
                            </div>
                            <button
                                onClick={() => setShowWarning(false)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 py-4 text-white">
                            <p className="text-sm leading-relaxed mb-3">
                                We've detected a browser dark mode extension (like Dark Reader).
                                For the <span className="font-bold">best experience</span>, please disable it on this site!
                            </p>
                            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                <p className="text-xs font-semibold mb-2">✨ This website has:</p>
                                <ul className="text-xs space-y-1">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300">•</span>
                                        <span>Built-in Dark/Light mode toggle</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300">•</span>
                                        <span>Optimized glassmorphism design</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300">•</span>
                                        <span>Smooth animations & transitions</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-xs mt-3 text-center text-white/80">
                                Use the <span className="font-bold">Sun/Moon</span> icon in the navigation bar above! 🌙☀️
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
