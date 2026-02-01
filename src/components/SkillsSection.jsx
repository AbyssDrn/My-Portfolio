import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Code, Wrench, Globe, Zap, Database, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, color, level }) => (
    <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 rounded-2xl h-full border border-white/5 flex flex-col items-start min-h-[240px] cursor-pointer group"
    >
        <motion.div
            className={`p-3 rounded-xl mb-4 ${color}`}
            whileHover={{
                scale: 1.15,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
            }}
            animate={{
                y: [0, -5, 0],
            }}
            transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <Icon size={32} className="text-white" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400 mb-3">{level}</span>
        <div className="flex flex-wrap gap-2 flex-1">
            {skills.map((skill, i) => (
                <motion.span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/50 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

export const SkillsSection = () => {
    const skillCategories = [
        {
            icon: Cpu,
            title: "Hardware/EDA",
            level: "Cooking 🍳", // Learning phase
            skills: ["Verilog/SystemVerilog", "Cadence", "Synopsys", "Mixed-Signal VLSI", "Neuromorphic Circuits", "Analog/Digital Workflows"],
            color: "bg-blue-500/20 text-blue-400"
        },
        {
            icon: Brain,
            title: "Programming/ML",
            level: "Enhancing ⚡",
            skills: ["Python", "AI/ML Basics", "PyTorch", "Algorithms", "Data Visualization (Pie/Bar)", "Data Analysis"],
            color: "bg-purple-500/20 text-purple-400"
        },
        {
            icon: Code,
            title: "Development Tools",
            level: "Sharpening ⚔️",
            skills: ["VSCode", "LaTeX/Markdown", "Git/GitHub", "GUI Design", "VMware/VMs"],
            color: "bg-emerald-500/20 text-emerald-400"
        },
        {
            icon: Globe,
            title: "Web/UI",
            level: "Crafting 🎨",
            skills: ["HTML/CSS/JS", "React/Node", "Figma", "Blender", "Godot", "Krita"],
            color: "bg-cyan-500/20 text-cyan-400"
        },
        {
            icon: Zap,
            title: "Soft Skills",
            level: "Cultivating 🌱",
            skills: ["Foreign Languages (Learning)", "Emotional Intelligence", "Project Management", "Problem Solving", "Ethical Leadership"],
            color: "bg-yellow-500/20 text-yellow-400"
        },
        {
            icon: Database,
            title: "Current Learning",
            level: "Exploring 🔭",
            skills: ["Quantum Physics Apps", "GPU/CUDA", "Full-Stack Web", "Edge Deployment", "Accessibility Design"],
            color: "bg-pink-500/20 text-pink-400"
        }
    ];

    return (
        <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center p-8 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20%" }}
                className="container mx-auto max-w-6xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="text-gradient-6">Arsenal</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <SkillCard key={idx} {...cat} />
                    ))}
                </div>

                {/* Ethos & Values Box (Start of User Request Integration) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-12 mb-6 glass-panel p-8 rounded-3xl border border-yellow-500/20"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-yellow-400" />
                        Ethos, Mind & Society
                    </h3>
                    <div className="space-y-6 text-gray-300">
                        <p className="leading-relaxed">
                            <span className="text-cyan-400 font-bold">Social Responsibility:</span> I actively volunteer for the wellness of the <span className="text-white font-semibold">differently-abled</span>. Status, pride, and dignity are part of life, but we must never be over-reliant on them. I believe in treating everything as <span className="text-yellow-400 font-semibold">One & Equal</span>.
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-purple-400 font-bold">Mind & Body Mastery:</span> The greatest cure to any ailment is the <span className="text-white font-semibold">Will</span>. I practice building absolute control over thoughts, feelings, and emotions—channeling them to achieve goals rather than being controlled by them.
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-emerald-400 font-bold">Consistent Evolution:</span> Technology never stops, and neither do I. "Advanced" is a stagnant label; I am forever <span className="text-white font-semibold">Cooking, Learning, and Enhancing</span>. My hobby is learning the languages of the countries I admire, not just to speak, but to reach a deeper level of connection.
                        </p>
                    </div>
                </motion.div>

                {/* Certifications Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-6 glass-panel p-8 rounded-3xl border border-purple-500/20"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Terminal className="text-purple-400" />
                        Certifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold">▹</span>
                            <div>
                                <p className="font-semibold">NPTEL</p>
                                <p className="text-sm text-gray-400">Cybersecurity</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold">▹</span>
                            <div>
                                <p className="font-semibold">Udemy - Angela Yu</p>
                                <p className="text-sm text-gray-400">Python & Web Development</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold">▹</span>
                            <div>
                                <p className="font-semibold">Udemy - Imran Afzal</p>
                                <p className="text-sm text-gray-400">Linux for IT</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-cyan-400 font-bold">▹</span>
                            <div>
                                <p className="font-semibold">FreeCodeCamp</p>
                                <p className="text-sm text-gray-400">Web Development Courses</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-500/10 blur-[100px]" />
        </section>
    );
};
