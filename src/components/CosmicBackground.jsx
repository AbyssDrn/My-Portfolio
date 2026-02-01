import React from 'react';
import { motion } from 'framer-motion';

export const CosmicBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Deep space gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black opacity-40" />

            {/* Distant small black holes */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`blackhole-${i}`}
                    className="absolute"
                    style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 25}%`,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="relative w-20 h-20">
                        {/* Small black core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/80"
                            style={{
                                boxShadow: '0 0 20px 8px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(0, 0, 0, 1)'
                            }}
                        />
                        {/* Subtle accretion ring */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
                            style={{
                                background: `radial-gradient(ellipse at center, transparent 30%, rgba(${i === 0 ? '168, 85, 247' : i === 1 ? '6, 182, 212' : '236, 72, 153'}, 0.15) 50%, transparent 70%)`,
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

            {/* Moving Stars - Small twinkling stars */}
            {[...Array(100)].map((_, i) => {
                const size = Math.random() * 2 + 1;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;

                return (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
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

            {/* Shooting stars */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                        left: `${Math.random() * 50}%`,
                        top: `${Math.random() * 100}%`,
                        width: '100px',
                        transformOrigin: 'left center',
                        rotate: '45deg',
                    }}
                    animate={{
                        x: [0, 300],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeIn",
                        delay: i * 4,
                        repeatDelay: 10,
                    }}
                />
            ))}

            {/* Nebula clouds */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
};
