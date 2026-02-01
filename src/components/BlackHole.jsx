import React from 'react';
import { motion } from 'framer-motion';

export const BlackHole = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Black Hole Core */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Event Horizon */}
                <div className="relative w-96 h-96">
                    {/* Innermost dark core */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black"
                        style={{
                            boxShadow: '0 0 60px 30px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(0, 0, 0, 1)'
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Accretion Disk - Ring 1 (Purple) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 35%, rgba(168, 85, 247, 0.3) 45%, rgba(168, 85, 247, 0.1) 65%, transparent 75%)',
                            filter: 'blur(2px)'
                        }}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* Accretion Disk - Ring 2 (Cyan) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(6, 182, 212, 0.4) 50%, rgba(6, 182, 212, 0.15) 70%, transparent 80%)',
                            filter: 'blur(3px)'
                        }}
                        animate={{
                            rotate: -360,
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* Accretion Disk - Ring 3 (Pink/Red) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 45%, rgba(236, 72, 153, 0.25) 55%, rgba(239, 68, 68, 0.1) 75%, transparent 85%)',
                            filter: 'blur(4px)'
                        }}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* Gravitational Lensing Effect */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle at center, transparent 50%, rgba(99, 102, 241, 0.05) 60%, transparent 80%)',
                            filter: 'blur(20px)'
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>

            {/* Floating Particles/Stars being pulled in */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.7 + 0.3
                    }}
                    animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        scale: [1, 0],
                        opacity: [0.7, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeIn",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};
