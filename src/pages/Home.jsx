import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Binary, Globe, Database, Terminal } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, duration, x, y }) => (
    <motion.div
        className="absolute text-fg-secondary opacity-20 hover:opacity-40 hover:text-syntax-cyan transition-colors"
        initial={{ x, y }}
        animate={{
            y: [y, y - 30, y],
            x: [x, x + 20, x],
            rotate: [0, 10, -10, 0]
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        <Icon size={64} />
    </motion.div>
);

export const Home = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center relative overflow-hidden p-8 select-none">
            {/* Background Floating Elements (Anti-Gravity) */}
            <FloatingIcon icon={Cpu} delay={0} duration={6} x={-200} y={-100} />
            <FloatingIcon icon={Zap} delay={1} duration={7} x={250} y={-150} />
            <FloatingIcon icon={Binary} delay={2} duration={8} x={-300} y={150} />
            <FloatingIcon icon={Globe} delay={0.5} duration={9} x={350} y={100} />
            <FloatingIcon icon={Database} delay={1.5} duration={10} x={0} y={-250} />
            <FloatingIcon icon={Terminal} delay={2.5} duration={7.5} x={0} y={250} />

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative group"
                >
                    <div className="w-48 h-48 rounded-full border-4 border-syntax-cyan overflow-hidden shadow-[0_0_20px_rgba(139,233,253,0.3)] group-hover:shadow-[0_0_30px_rgba(139,233,253,0.6)] transition-shadow">
                        {/* User Image */}
                        <img src="/profile.jpg" alt="Amal Madhu" className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://ui-avatars.com/api/?name=Amal+Madhu&background=0D8ABC&color=fff&size=256";
                            }}
                        />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syntax-cyan via-syntax-purple to-syntax-pink mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Amal Madhu
                </motion.h1>

                <motion.div
                    className="text-xl text-fg-primary mb-6 text-center font-mono"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    M.Tech VLSI Scholar | Neuromorphic Researcher
                </motion.div>

                <motion.p
                    className="text-fg-secondary italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    "Mimicking the Brain in Silicon."
                </motion.p>

                <motion.div
                    className="mt-12 flex gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <a
                        href="/resume.pdf"
                        download="Amal_Madhu_Resume.pdf"
                        className="px-6 py-2 border border-syntax-cyan text-syntax-cyan hover:bg-syntax-cyan/10 rounded transition-colors font-mono flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        Resume
                    </a>
                    <a
                        href="/cv.pdf"
                        download="Amal_Madhu_CV.pdf"
                        className="px-6 py-2 border border-syntax-pink text-syntax-pink hover:bg-syntax-pink/10 rounded transition-colors font-mono flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        CV
                    </a>
                </motion.div>
            </div>
        </div>
    );
};
