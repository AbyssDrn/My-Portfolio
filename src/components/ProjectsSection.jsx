import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, Car, Droplet, Cpu, Globe, Bot, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
    title,
    subtitle,
    dates,
    description,
    icon: Icon,
    techStack,
    impact,
    learned,
    links,
    color
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-8 overflow-hidden relative group cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-20 blur-[50px] rounded-full`} />

            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <motion.div
                        className={`w-14 h-14 rounded-xl ${color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}
                        whileHover={{
                            scale: 1.2,
                            rotateY: 180,
                            transition: { duration: 0.6 }
                        }}
                        animate={{
                            rotateZ: [0, 5, -5, 0],
                        }}
                        transition={{
                            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        >
                            <Icon size={28} />
                        </motion.div>
                    </motion.div>
                    <div>
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="text-sm text-gray-400 font-mono">{subtitle}</p>
                        <p className="text-xs text-gray-500 mt-1">{dates}</p>
                    </div>
                </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, i) => (
                    <motion.span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-400 border border-cyan-500/30"
                        whileHover={{ scale: 1.1, borderColor: 'rgba(6, 182, 212, 0.6)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* Expanded Content */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                className="overflow-hidden"
            >
                <div className="pt-4 border-t border-white/10 space-y-4">
                    {impact && (
                        <div>
                            <h4 className="text-sm font-bold text-purple-400 mb-2">Impact</h4>
                            <p className="text-sm text-gray-300">{impact}</p>
                        </div>
                    )}

                    {learned && (
                        <div>
                            <h4 className="text-sm font-bold text-green-400 mb-2">What I Learned</h4>
                            <p className="text-sm text-gray-300">{learned}</p>
                        </div>
                    )}

                    {links && (
                        <div className="flex gap-3">
                            {links.github && (
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-xs glass-btn px-4 py-2 rounded-lg flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <Github size={14} />
                                    GitHub
                                </a>
                            )}
                            {links.demo && (
                                <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-xs glass-btn px-4 py-2 rounded-lg flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <ExternalLink size={14} />
                                    Demo
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>

            <div className="text-xs text-gray-500 mt-4 text-center">
                {isExpanded ? 'Click to collapse' : 'Click to expand details'}
            </div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    const projects = [
        {
            title: "UNet Underwater Image Analysis (BlueDepth-Crescent)",
            subtitle: "SIH Hackathon @ Bengaluru Nagarjuna College",
            dates: "2025-2026 (Ongoing)",
            description: "Award-winning maritime security project using UNet architecture (light/attention/standard variants) for haze and turbidity removal in underwater environments. Custom dataset training with epoch tracking on HP Victus GPU.",
            icon: Waves,
            color: "bg-blue-500",
            techStack: ["PyTorch", "UNet Variants", "GPU Training (HP Victus)", "Video Processing", "Maritime CV", "Custom Datasets"],
            impact: "SIH Participation Award (Bengaluru Nagarjuna College of Management & Engineering). Currently adding personal data for model retraining. Focused on maritime security with checkpoint/epoch optimization.",
            learned: "CNN Optimization, UNet Model Variants (Light/Attention/Standard), Maritime Computer Vision Metrics, GPU acceleration, video codec processing, and custom dataset management.",
            links: {
                github: "https://github.com/AbyssDrn"
            }
        },
        {
            title: "Accident Detection & Alerting System",
            subtitle: "B.Tech IoT Project", dates: "2020-2024",
            description: "Real-time accident detection using accelerometer, GPS, and GSM modules to alert victim's family and nearby registered hospitals for emergency treatment. Future enhancement planned for edge computing spectrum to improve delivery accuracy.",
            icon: Car,
            color: "bg-red-500",
            techStack: ["IoT Sensors", "Accelerometer", "GPS", "GSM", "Embedded Systems", "Real-time Alerts"],
            impact: "Live accident detection with instant notifications to family and hospitals. Will be modified for edge computing devices for enhanced accuracy and faster response.",
            learned: "Embedded programming, sensor integration (accelerometer/GPS/GSM), real-time data processing, alert mechanisms, and emergency system design."
        },
        {
            title: "Water Quality Monitoring System",
            subtitle: "B.Tech Environmental IoT",
            dates: "2020-2024",
            description: "Automated water quality monitoring with LCD 16x2 display, pH sensors, turbidity sensors, TDS sensors, and gas sensors. Designed for industrial automation, analysis, and monitoring. Future enhancement for edge computing devices spectrum.",
            icon: Droplet,
            color: "bg-cyan-500",
            techStack: ["pH Sensors", "Turbidity Sensor", "TDS Sensor", "Gas Sensors", "LCD 16x2", "Embedded Systems"],
            impact: "Real-time parameter tracking for water quality assessment. Can be incorporated in industries for automation, analysis, and monitoring. Later will be modified to edge computing devices spectrum.",
            learned: "Sensor calibration (pH/turbidity/TDS/gas), data analytics, LCD interfacing, environmental monitoring protocols, and industrial automation design."
        },
        {
            title: "VLSI Gate Designs from Scratch",
            subtitle: "M.Tech Analog/Digital Fundamentals",
            dates: "2025-2026 (Until March 2026)",
            description: "Building fundamentals of analog and digital electronics to set foundation for mixed-signal engineer career. Learning to find loopholes in current technology and develop energy/time-efficient, low-heat nanoscale systems with smart troubleshooting and mild vapor cooling. Inspired by biological systems (mimicking brain analog advantages in artificial hardware).",
            icon: Cpu,
            color: "bg-purple-500",
            techStack: ["Verilog", "SystemVerilog", "Ubuntu", "Analog Fundamentals", "Digital Design", "Nanoscale"],
            impact: "Solidifying basics until March 2026 to find revolutionary energy-efficient technologies. Long-term vision: bio-inspired neuromorphic systems at micro/nanoscale with self-diagnostic capabilities.",
            learned: "Low-level hardware design, simulation, verification methodologies, analog/digital workflows, and mimicking biological anatomy in electronics (focusing on brain-like analog processing)."
        },
        {
            title: "Personal Portfolio Website",
            subtitle: "Full-Stack Web Project",
            dates: "2025",
            description: "Modern portfolio website with CRUD admin dashboard, blog system, and analytics.",
            icon: Globe,
            color: "bg-emerald-500",
            techStack: ["React", "Node.js", "CRUD", "Blog System", "Analytics"],
            impact: "Professional web presence with dynamic content management.",
            learned: "Full-stack development, React state management, modern web design patterns.",
            links: {
                demo: "#"
            }
        },
        {
            title: "Mini LLM Chatbot",
            subtitle: "Research Project (Planned)",
            dates: "2026 (Research Phase)",
            description: "Developer-focused chatbot assistant with Claude Sonnet-level capabilities for coding assistance.",
            icon: Bot,
            color: "bg-pink-500",
            techStack: ["LLM", "AI", "Developer Tools"],
            impact: "Exploring AI-powered development assistance.",
            learned: "Currently in research/planning phase - exploring state-of-the-art language models."
        }
    ];

    return (
        <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-24">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-bold mb-16"
            >
                Featured <span className="text-gradient-6">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
};
