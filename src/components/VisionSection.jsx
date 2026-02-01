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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-l-purple-500">
                        <h3 className="text-xl font-bold mb-2">Ambition</h3>
                        <p className="text-gray-400">To lead the transition to localized, privacy-first intelligence.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl border-l-4 border-l-cyan-500">
                        <h3 className="text-xl font-bold mb-2">Philosophy</h3>
                        <p className="text-gray-400">Complex systems built on simple, robust foundations.</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500/50" />
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Data Sovereignty</h3>
                        <p className="text-lg text-gray-300 leading-relaxed italic">
                            "True AI sovereignty lies in cultivating our own varied datasets—tailored to our unique geological and commercial landscapes—rather than depending solely on generalized internet repositories. We must train models on <span className="text-white font-semibold">ground-truth reality</span>, not just digital echoes."
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500/50" />
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Education as a Human Right</h3>
                        <p className="text-lg text-gray-300 leading-relaxed italic">
                            "Education is not an asset to be hoarded, but a fundamental right for every living human—free for all to ignite innovation and solve the real-world problems we face daily. It matters not who you are or where you come from; ask only <span className="text-white font-semibold">what you can do</span> to drive drastic, positive change for society, the economy, and the world. Knowledge is a torch to guide and empower others to move forward, never a weapon to wield against those without access."
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
