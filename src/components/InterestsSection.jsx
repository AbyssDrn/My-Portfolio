import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Palette, BookOpen, Gamepad2, Trophy, Languages } from 'lucide-react';

const InterestCard = ({ icon: Icon, title, items, color }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        whileHover={{ scale: 1.05, rotateZ: 2 }}
        className="glass-panel p-6 rounded-2xl cursor-pointer"
    >
        <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center mb-4`}>
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <ul className="space-y-2 text-sm text-gray-300">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export const InterestsSection = () => {
    const interests = [
        {
            icon: Bike,
            title: "Active Lifestyle",
            color: "bg-green-500",
            items: [
                "Daily Cycling (Commute & Fitness)",
                "Bike Maintenance",
                "Cricket, Table Tennis, Badminton",
                "Martial Arts Training",
                "Athletics (1500m, Shotput)"
            ]
        },
        {
            icon: Palette,
            title: "Creative Arts",
            color: "bg-pink-500",
            items: [
                "Digital Drawing & Sketching",
                "Animation (Learning)",
                "Krita & Blender",
                "UI/UX Design Exploration",
                "Visual Storytelling"
            ]
        },
        {
            icon: Gamepad2,
            title: "Gaming & Tech",
            color: "bg-purple-500",
            items: [
                "Game Development (Godot)",
                "Nintendo Switch Emulation",
                "Pokemon Enthusiast",
                "Anime & Manga",
                "Tech Documentaries"
            ]
        },
        {
            icon: BookOpen,
            title: "Learning & Reading",
            color: "bg-blue-500",
            items: [
                "Technical Documentation",
                "Research Papers (VLSI/AI)",
                "Chess Strategy",
                "Tutorials & Courses",
                "Continuous Upskilling"
            ]
        },
        {
            icon: Trophy,
            title: "Tech Passions",
            color: "bg-yellow-500",
            items: [
                "Blockchain Technology",
                "Agri-Tech Solutions",
                "Open-Source Contributions",
                "Hardware Optimization",
                "Embedded Edge AI"
            ]
        },
        {
            icon: Languages,
            title: "Ongoing Learning",
            color: "bg-cyan-500",
            items: [
                "Full-Stack Web Development",
                "Game Engine Programming",
                "3D Modeling & Animation",
                "Audio/Video Production",
                "Design Thinking"
            ]
        }
    ];

    return (
        <section id="interests" className="min-h-screen w-full flex flex-col items-center justify-center p-8 py-24 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20%" }}
                className="max-w-6xl w-full z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Interests & <span className="text-gradient-6">Hobbies</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interests.map((interest, idx) => (
                        <InterestCard key={idx} {...interest} />
                    ))}
                </div>

                {/* Philosophy Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-12 glass-panel p-8 rounded-3xl text-center border border-gradient-6"
                >
                    <p className="text-xl text-gray-300 italic">
                        "Balancing hardware precision with creative exploration—because the best engineers are those who can both <span className="text-gradient-6 font-bold">build circuits</span> and <span className="text-gradient-6 font-bold">imagine worlds</span>."
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};
