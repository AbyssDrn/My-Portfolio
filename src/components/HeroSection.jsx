import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FileText, Github, Sparkles } from 'lucide-react';
// Import image directly to ensure Vite handles the path correctly
import profileImg from '../../public/Amal.png';

export const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20">
            {/* Background Gradient Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-5xl"
            >
                {/* Circular Animated Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                    className="mb-12 relative group"
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Rotating gradient ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-75 blur-lg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Main circular container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Pulsing outer ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-cyan-500/30"
                            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Glass circular card with image */}
                        <div className="relative w-full h-full glass-panel rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Amal Madhu - Mixed-Signal Electronics Engineer"
                                className="w-full h-full object-cover scale-100"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://ui-avatars.com/api/?name=Amal+Madhu&background=667eea&color=fff&size=512&bold=true";
                                }}
                            />
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating particles */}
                        <motion.div
                            className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full"
                            animate={{
                                y: [-10, -20, -10],
                                x: [-5, 5, -5],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full"
                            animate={{
                                y: [10, 20, 10],
                                x: [5, -5, 5],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                    </div>

                    {/* Floating badge - SOLID BACKGROUND (No Haze) */}
                    <motion.div
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full border border-white/20 shadow-xl z-20 whitespace-nowrap"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundColor: '#000000' }} // Force solid black by default
                    >
                        {/* Light mode specific background via CSS override to be SOLID WHITE */}
                        <span className="text-sm font-bold text-gradient-6">Polymath • VLSI Engineer</span>
                    </motion.div>
                </motion.div>


                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                >
                    Amal <span className="text-gradient-6">Madhu</span>
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl text-gray-300 mb-3 font-light"
                >
                    Mixed-Signal Electronics Engineer
                </motion.h2>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="flex items-center gap-2 mb-4"
                >
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="text-sm text-cyan-400 font-medium">Perpetual Learner • Polymath • Multidisciplinary Explorer</span>
                    <Sparkles size={16} className="text-purple-400" />
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl"
                >
                    Bridging Analog/Digital Worlds with AI | M.Tech VLSI (Neuromorphic & Quantum Focus)
                </motion.p>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="text-base text-gray-500 mb-4 max-w-3xl italic"
                >
                    From underwater vision systems to neuromorphic circuits—building intelligent hardware at Digital University Kerala
                </motion.p>

                {/* Philosophy */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="glass-panel px-6 py-4 rounded-2xl mb-6 max-w-3xl border border-purple-500/20"
                >
                    <p className="text-sm text-gray-300 leading-relaxed">
                        <span className="text-gradient-6 font-bold">"I don't believe in impossibility."</span> Every field, every domain holds potential waiting to be discovered. With resolve, patience, discipline, and an adaptive will, I explore every avenue of knowledge—from electronics to AI, quantum to biology—seeking connections, recognizing natural talents, and integrating them into revolutionary innovations. Learning is not a phase; it's my <span className="text-cyan-400 font-semibold">eternal passion</span>.
                    </p>
                </motion.div>

                {/* Family Pride */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.75 }}
                    className="text-sm text-gray-400 mb-6"
                >
                    <p>
                        <span className="font-semibold text-emerald-400">Proud son</span> of an <span className="text-orange-400 font-bold">Indian Army Soldier</span> 🇮🇳 |
                        Grateful for my loving mother & brother—my best friends who truly know me
                    </p>
                </motion.div>

                {/* Values & Relationships Quote */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.78 }}
                    className="glass-panel px-6 py-4 rounded-2xl mb-6 max-w-3xl border border-cyan-500/20"
                >
                    <p className="text-sm text-gray-300 leading-relaxed">
                        <span className="text-cyan-400 font-bold">My Circle:</span> I choose individuals, mentors, friends, and close people based on <span className="text-yellow-400 font-semibold">trust</span>, <span className="text-emerald-400 font-semibold">honesty</span>, and a little bit of <span className="text-purple-400 font-semibold">stupidity and humor</span>. Most importantly, I <span className="text-gradient-6 font-bold">give respect</span> to others as individuals and fellow human beings, and expect to be <span className="text-gradient-6 font-bold">respected back</span>—because it's not a hard thing. Not necessarily need to be introvert, extrovert, or a bit of both.
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-10"
                >
                    <span>📍 Thiruvananthapuram, Kerala</span>
                    <span>📧 amalmadhu04022001@gmail.com</span>
                    <span>📱 +91-8921470483</span>
                    <span>🎂 Age 24</span>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a href="/resume.pdf" download className="glass-btn px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium group">
                        <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        Download Resume
                    </a>
                    <a href="/cv.pdf" download className="glass-btn px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium group">
                        <FileText size={18} className="group-hover:-translate-y-1 transition-transform" />
                        Download CV
                    </a>
                    <a href="https://github.com/AbyssDrn" target="_blank" rel="noopener noreferrer" className="glass-btn px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium group">
                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/amal-madhu-48042a20a" target="_blank" rel="noopener noreferrer" className="glass-btn px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium group">
                        <svg className="group-hover:scale-110 transition-transform w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                </motion.div>
            </motion.div >

            {/* Scroll Indicator */}
            < motion.div
                className="absolute bottom-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="text-white/30" />
            </motion.div >
        </section >
    );
};
