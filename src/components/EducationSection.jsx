import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Trophy } from 'lucide-react';

export const EducationSection = () => {
    return (
        <section id="education" className="min-h-screen w-full flex flex-col items-center justify-center p-8 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20%" }}
                className="max-w-5xl w-full"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Education & <span className="text-gradient-6">Achievements</span>
                </h2>

                {/* Education */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="glass-panel p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-cyan-400" size={32} />
                            <div>
                                <h3 className="text-2xl font-bold">M.Tech</h3>
                                <p className="text-sm text-gray-400">2025 - 2027</p>
                            </div>
                        </div>
                        <p className="font-semibold text-lg mb-2">Electronics Engineering (VLSI)</p>
                        <p className="text-gray-400 mb-4">School of Electronics & Automation (SoESA)<br />Digital University Kerala</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Neuromorphic Focus</span>
                            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Quantum Apps</span>
                            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">1st Yr Early 2nd Sem</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="glass-panel p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-emerald-400" size={32} />
                            <div>
                                <h3 className="text-2xl font-bold">B.Tech</h3>
                                <p className="text-sm text-gray-400">2020 - 2024</p>
                            </div>
                        </div>
                        <p className="font-semibold text-lg mb-2">Electronics & Communication</p>
                        <p className="text-gray-400 mb-4">College of Engineering & Management<br />Punnapra</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">CGPA 6.66</span>
                            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">IoT Projects</span>
                        </div>
                    </motion.div>
                </div>

                {/* School Education */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="glass-panel p-6 rounded-2xl"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={20} className="text-yellow-400" />
                            <h4 className="font-bold">12th Standard</h4>
                        </div>
                        <p className="text-2xl font-bold text-yellow-400">CGPA 7.4</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-6 rounded-2xl"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={20} className="text-green-400" />
                            <h4 className="font-bold">10th Standard</h4>
                        </div>
                        <p className="text-2xl font-bold text-green-400">CGPA 8.9</p>
                    </motion.div>
                </div>

                {/* Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="glass-panel p-8 rounded-3xl border border-yellow-500/20"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Trophy className="text-yellow-400" />
                        Achievements & Awards
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-cyan-400 mb-3">🏆 Athletics</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400">🥇</span>
                                    <span>1st Place - 1500m (Inter-School)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">🥉</span>
                                    <span>3rd Place - 1500m (11th Intra-School)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">🥉</span>
                                    <span>3rd Place - Shotput (12th Intra-School)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-purple-400 mb-3">🎯 Leadership & Hackathons</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">★</span>
                                    <span>Maths Club Leader (10th Std)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">★</span>
                                    <span>SIH Hackathon Participation (UNet Project)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">★</span>
                                    <span>Bengaluru Nagarrojuna College</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
