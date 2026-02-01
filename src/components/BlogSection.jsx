import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import resumePdf from '../../public/resume.pdf';
import cvPdf from '../../public/cv.pdf';
import { useNotification } from '../context/NotificationContext';

export const BlogSection = () => {
    const { showNotification } = useNotification();

    // ... blogPosts array remains the same ...
    const blogPosts = [
        {
            date: "Jan 2026",
            title: "My UNet Evolution",
            category: "AI/ML",
            description: "From SIH to Custom Training - The journey of building underwater vision systems"
        },
        {
            date: "Jan 2026",
            title: "Verilog Gates from Scratch",
            category: "VLSI",
            description: "Ubuntu Setup Guide for hardware design beginners"
        },
        {
            date: "Dec 2025",
            title: "Neuromorphic VLSI Deep Dive",
            category: "Hardware",
            description: "Quantum Applications Explained in modern computing"
        },
        {
            date: "Dec 2025",
            title: "1-Week Upskilling Plan",
            category: "Learning",
            description: "Free Resources Mastery for rapid skill development"
        }
    ];

    return (
        <section id="blog" className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-24 relative">
            <div className="absolute inset- bg-gradient-to-b from-transparent via-black/50 to-black/80 pointer-events-none" />

            <div className="max-w-6xl w-full z-10">
                {/* Blog Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Blog & <span className="text-gradient-6">Journey</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {blogPosts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-panel p-6 rounded-2xl cursor-pointer group"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">{post.category}</span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-6 transition-all">{post.title}</h3>
                                <p className="text-sm text-gray-400">{post.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <div id="contact" className="border-t border-white/10 pt-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-12 text-center"
                    >
                        Get In <span className="text-gradient-6">Touch</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="glass-panel p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <Mail size={18} className="text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a href="mailto:amalmadhu04022001@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                                            amalmadhu04022001@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Phone size={18} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <a href="tel:+918921470483" className="text-white hover:text-purple-400 transition-colors">
                                            +91-8921470483
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <MapPin size={18} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-white">Mangalapuram, Kerala</p>
                                        <p className="text-sm text-gray-500">Thiruvananthapuram Campus</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <a href="https://github.com/AbyssDrn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-btn flex items-center justify-center hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/amal-madhu-48042a20a" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-btn flex items-center justify-center hover:scale-110 transition-transform">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="glass-panel p-8 rounded-3xl flex flex-col justify-center"
                        >
                            <p className="text-2xl font-light text-gray-300 italic mb-6">
                                "Open to part-time roles, collaborative projects, and exciting opportunities in VLSI, AI-hardware fusion, and embedded systems."
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={resumePdf}
                                    download="Amal_Madhu_Resume.pdf"
                                    onClick={() => showNotification("Resume Downloaded! 🚀")}
                                    className="glass-btn px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-center"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href={cvPdf}
                                    download="Amal_Madhu_CV.pdf"
                                    onClick={() => showNotification("CV Downloaded! 🎉")}
                                    className="glass-btn px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-center"
                                >
                                    Download CV
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full text-center text-gray-600 text-sm mt-24 pb-8 font-mono border-t border-white/5 pt-8">
                    <p>© 2026 Amal Madhu | Last Updated: Jan 31, 2026</p>
                </footer>
            </div>
        </section>
    );    
