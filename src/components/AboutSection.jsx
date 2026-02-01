import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const TimelineItem = ({ year, title, institution, details, side = 'left', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={`flex ${side === 'right' ? 'md:flex-row-reverse' : ''} gap-8 mb-12 relative`}
    >
        {/* Timeline Dot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20" />

        <div className="flex-1 glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-2">
                <Calendar size={16} />
                {year}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-3 flex items-center gap-2">
                <MapPin size={14} />
                {institution}
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
                {details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center p-8 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20%" }}
                className="max-w-5xl w-full"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Journey <span className="text-gradient-6">Timeline</span></h2>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 rounded-3xl mb-16 border border-purple-500/20"
                >
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Dynamic M.Tech VLSI student mastering <span className="text-cyan-400 font-medium">mixed-signal electronics</span> with AI integration (analog + digital workflows). Originally from <span className="text-purple-400">Pathanamthitta</span>, now based in Mangalapuram/Thiruvananthapuram—<span className="text-cyan-400 font-medium">cycling daily</span> on my trusty bicycle between college and projects on my <span className="font-mono text-emerald-400">HP Victus</span> laptop.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Proven track record in <span className="text-yellow-400 font-medium">SIH hackathons</span>, B.Tech IoT systems, and rapid upskilling across Cadence/Synopsys, Verilog, PyTorch. Intensely focused on <span className="text-purple-400 font-medium">neuromorphic VLSI</span>, quantum physics applications in hardware, and open-source innovation. Learning style: <span className="text-cyan-400">1-week intensive upskilling plans</span>, project-driven, leveraging free resources from basic to mastery.
                    </p>
                    <p className="text-xl text-gradient-6 font-bold mt-6 italic text-center">
                        "Hardware eats software for breakfast, but AI makes them dance together."
                    </p>
                    <p className="text-sm text-gray-400 text-center mt-4">
                        <span className="font-bold">Current Focus:</span> Mastering mixed-signal electronics • Neuromorphic circuits • AI-hardware fusion • International opportunities • <span className="text-cyan-400 italic">I love to learn from my failures</span>
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Removed per user request */}

                    <TimelineItem
                        year="2025-Present"
                        title="M.Tech Electronics (VLSI)"
                        institution="School of Electronics & Automation, Digital University Kerala"
                        details={[
                            "1st Year Early 2nd Semester",
                            "Focus: Neuromorphic VLSI + Quantum Applications",
                            "UNet SIH Project Evolution (Underwater Vision)",
                            "Mastering Cadence/Synopsys, Verilog/SystemVerilog"
                        ]}
                        side="left"
                        delay={0.1}
                    />

                    <TimelineItem
                        year="2020-2024"
                        title="B.Tech Electronics & Communication"
                        institution="College of Engineering & Management, Punnapra"
                        details={[
                            "CGPA: 6.66",
                            "Projects: Accident Detection, Water Quality Monitoring",
                            "SIH Hackathon Foundation",
                            "IoT Systems Development"
                        ]}
                        side="right"
                        delay={0.2}
                    />

                    <TimelineItem
                        year="2017-2020"
                        title="11th-12th (Higher Secondary)"
                        institution="Kendriya Vidyalaya, Hyderabad"
                        details={[
                            "CGPA: 7.4",
                            "Athletics: 3rd 1500m/Shotput (intra), 1st 1500m (inter-school)",
                            "Built foundation for engineering passion"
                        ]}
                        side="left"
                        delay={0.3}
                    />

                    <TimelineItem
                        year="2017-2018"
                        title="10th Standard"
                        institution="Kendriya Vidyalaya, Kannur"
                        details={[
                            "CGPA: 8.9",
                            "Maths Club Leader",
                            "1st Place Athletics Awards - Career Foundation"
                        ]}
                        side="right"
                        delay={0.4}
                    />
                </div>

                {/* Future Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-16 glass-panel p-8 rounded-3xl border border-emerald-500/20"
                >
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Award className="text-emerald-400" />
                        2025-2026 Goals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div className="flex items-start gap-2">
                            <span className="text-emerald-400">✓</span>
                            <span>Cadence/Synopsys Mastery</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-emerald-400">✓</span>
                            <span>AI-Hardware Fusion Projects</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-emerald-400">✓</span>
                            <span>Game Dev Side-Projects (Godot)</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-emerald-400">✓</span>
                            <span>Part-time Flexible Roles (7:30AM-12PM)</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
