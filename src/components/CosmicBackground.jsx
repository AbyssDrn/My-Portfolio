import React from 'react';
import { motion } from 'framer-motion';

export const CosmicBackground = () => {
    // Generate colorful stars with variety
    const starColors = [
        'rgb(255, 200, 100)', // warm yellow
        'rgb(100, 200, 255)', // cool blue
        'rgb(255, 150, 200)', // pink
        'rgb(200, 150, 255)', // purple
        'rgb(150, 255, 200)', // cyan
        'rgb(255, 255, 255)', // white
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200/10 via-indigo-100/5 to-transparent dark:from-black dark:via-purple-950/20 dark:to-black dark:opacity-40" />

            {/* Large Twinkling Cosmic Orbs - Replace black holes with colorful glowing orbs */}
            {[...Array(6)].map((_, i) => {
                const colors = [
                    { from: 'rgba(168, 85, 247, 0.4)', to: 'rgba(168, 85, 247, 0.1)' }, // purple
                    { from: 'rgba(6, 182, 212, 0.4)', to: 'rgba(6, 182, 212, 0.1)' },   // cyan
                    { from: 'rgba(236, 72, 153, 0.4)', to: 'rgba(236, 72, 153, 0.1)' }, // pink
                    { from: 'rgba(251, 191, 36, 0.4)', to: 'rgba(251, 191, 36, 0.1)' }, // amber
                    { from: 'rgba(139, 92, 246, 0.4)', to: 'rgba(139, 92, 246, 0.1)' }, // violet
                    { from: 'rgba(20, 184, 166, 0.4)', to: 'rgba(20, 184, 166, 0.1)' }, // teal
                ];
                const color = colors[i];

                return (
                    <motion.div
                        key={`orb-${i}`}
                        className="absolute"
                        style={{
                            left: `${10 + i * 16}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            scale: [1, 1.3, 0.9, 1.2, 1],
                            opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
                            x: [0, 20, -10, 15, 0],
                            y: [0, -15, 10, -5, 0],
                        }}
                        transition={{
                            duration: 8 + i * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    >
                        <div
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
                            style={{
                                background: `radial-gradient(circle, ${color.from} 0%, ${color.to} 70%, transparent 100%)`,
                                filter: 'blur(8px)',
                                boxShadow: `0 0 40px ${color.from}`,
                            }}
                        />
                    </motion.div>
                );
            })}

            {/* Colorful Twinkling Stars - appearing at random locations */}
            {[...Array(200)].map((_, i) => {
                const size = Math.random() * 3 + 1;
                const duration = Math.random() * 4 + 3;
                const delay = Math.random() * 8;
                const color = starColors[Math.floor(Math.random() * starColors.length)];

                return (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: color,
                            boxShadow: `0 0 ${size * 3}px ${color}`,
                        }}
                        animate={{
                            opacity: [0, 0.3, 1, 0.4, 0],
                            scale: [0.5, 1, 1.8, 1.2, 0.5],
                            x: [0, Math.random() * 30 - 15],
                            y: [0, Math.random() * 30 - 15],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay,
                            times: [0, 0.2, 0.5, 0.8, 1],
                        }}
                    />
                );
            })}

            {/* Realistic Slow Shooting Stars - with trails */}
            {[...Array(5)].map((_, i) => {
                const shootingColors = [
                    'rgba(255, 200, 100, 0.8)', // warm
                    'rgba(100, 200, 255, 0.7)', // cool
                    'rgba(255, 150, 200, 0.7)', // pink
                    'rgba(200, 150, 255, 0.8)', // purple
                    'rgba(150, 255, 200, 0.7)', // cyan
                ];
                const color = shootingColors[i];

                return (
                    <motion.div
                        key={`shooting-${i}`}
                        className="absolute"
                        style={{
                            left: `${-10 + Math.random() * 50}%`,
                            top: `${Math.random() * 80}%`,
                        }}
                        animate={{
                            x: [0, 800],
                            y: [0, 300],
                            opacity: [0, 0.3, 0.8, 1, 0.6, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.2, 0.65, 0.3, 0.9], // Smooth easing for realistic motion
                            delay: i * 6,
                            repeatDelay: 15,
                            times: [0, 0.1, 0.3, 0.5, 0.8, 1],
                        }}
                    >
                        {/* Main shooting star body */}
                        <div
                            className="relative"
                            style={{
                                width: '150px',
                                height: '2px',
                                background: `linear-gradient(to right, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`,
                                transformOrigin: 'left center',
                                rotate: '30deg',
                                boxShadow: `0 0 12px ${color}, 0 0 20px ${color}`,
                                filter: 'blur(0.5px)',
                            }}
                        >
                            {/* Glowing head */}
                            <div
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                                style={{
                                    background: color,
                                    boxShadow: `0 0 15px ${color}, 0 0 25px ${color}`,
                                }}
                            />
                        </div>
                    </motion.div>
                );
            })}

            {/* Soft Nebula Clouds - subtle and beautiful */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.12) 40%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full opacity-25 dark:opacity-45"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full opacity-30 dark:opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(249, 115, 22, 0.08) 40%, transparent 70%)',
                    filter: 'blur(65px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
            />
        </div>
    );
};
