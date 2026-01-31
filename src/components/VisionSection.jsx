import React from 'react';
import { motion } from 'framer-motion';

export const VisionSection = () => {
    return (
        <section id="vision" className="min-h-screen w-full flex items-center justify-center p-8 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, margin: "-20%" }}
                className="max-w-4xl w-full glass-panel rounded-3xl p-12 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

                <h2 className="text-4xl md:text-5xl font-bold mb-8">The <span className="text-gradient-6">Memory Wall</span></h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Data movement is the bottleneck of the modern era. My vision is to eliminate the latency between computation and storage.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    I believe in a future where AI isn't just in the cloud, but intelligently living on the <span className="text-white font-bold">Edge</span>—embedded in the very devices we touch.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-l-purple-500">
                        <h3 className="text-xl font-bold mb-2">Ambition</h3>
                        <p className="text-gray-400">To lead the transition to localized, privacy-first intelligence.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-l-cyan-500">
                        <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                        <p className="text-gray-400">Complex systems built on simple, robust foundations.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
