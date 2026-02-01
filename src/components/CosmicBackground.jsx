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
            {/* Deep space gradient - adapts to theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-indigo-950/20 to-black/10 dark:from-black dark:via-purple-950/20 dark:to-black dark:opacity-40" />

            {/* Distant black holes - MORE VISIBLE */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`blackhole-${i}`}
                    className="absolute"
                    style={{
                        left: `${15 + i * 25}%`,
                        top: `${15 + i * 20}%`,
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="relative w-24 h-24">
                        {/* Black core - more visible */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 dark:bg-black/95"
                            style={{
                                boxShadow: '0 0 30px 12px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 1)'
                            }}
                        />
                        {/* Colorful accretion ring */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                            style={{
                                background: `radial-gradient(ellipse at center, transparent 30%, rgba(${i === 0 ? '168, 85, 247' :
                                        i === 1 ? '6, 182, 212' :
                                            i === 2 ? '236, 72, 153' :
                                                '251, 191, 36'
                                    }, 0.25) 50%, transparent 70%)`,
                                filter: 'blur(2px)'
                            }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 10 + i * 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Colorful Twinkling Stars - 150 stars */}
            {[...Array(150)].map((_, i) => {
                const size = Math.random() * 3 + 1;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;
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
                            boxShadow: `0 0 ${size * 2}px ${color}`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay,
                        }}
                    />
                );
            })}

            {/* Shooting stars - MORE VISIBLE and COLORFUL */}
            {[...Array(8)].map((_, i) => {
                const shootingColor = starColors[i % starColors.length];
                return (
                    <motion.div
                        key={`shooting-${i}`}
                        className="absolute h-0.5"
                        style={{
                            left: `${Math.random() * 60}%`,
                            top: `${Math.random() * 100}%`,
                            width: '120px',
                            background: `linear-gradient(to right, transparent, ${shootingColor}, transparent)`,
                            transformOrigin: 'left center',
                            rotate: '45deg',
                            boxShadow: `0 0 8px ${shootingColor}`,
                        }}
                        animate={{
                            x: [0, 400],
                            opacity: [0, 1, 0.8, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeIn",
                            delay: i * 3,
                            repeatDelay: 8,
                        }}
                    />
                );
            })}

            {/* Nebula clouds - colorful and visible in both modes */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.06) 40%, transparent 70%)',
                    filter: 'blur(55px)',
                }}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
            />
        </div>
    );
};
