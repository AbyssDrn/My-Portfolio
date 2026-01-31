import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, layers, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2d2d2d] border border-border-dark p-6 rounded-lg hover:border-syntax-pink transition-colors group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-fg-secondary hover:text-fg-primary cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 mb-4 text-syntax-purple">
                <FolderGit2 size={20} />
                <span className="text-xs font-mono border border-syntax-purple/30 px-2 py-0.5 rounded-full bg-syntax-purple/10">
                    {project.type}
                </span>
            </div>

            <h3 className="text-xl font-bold text-fg-primary mb-2 group-hover:text-syntax-cyan transition-colors">
                {project.name}
            </h3>

            <p className="text-fg-secondary text-sm mb-4 leading-relaxed">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-syntax-cyan">
                        #{tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const projectsData = [
        {
            name: "UNet Underwater Image Analysis",
            type: "SIH Hackathon Research",
            stack: ["Python", "PyTorch", "AI/ML"],
            desc: "Researching methods to clear haze and turbidity in maritime security footage. Developing custom UNet architectures (Light/Attention variants) trained on personal datasets. Awarded participation at Bengaluru Nagarrojuna College."
        },
        {
            name: "Accident Detection System",
            type: "IoT Hardware",
            stack: ["Embedded C", "Sensors", "GSM"],
            desc: "A DIY real-time monitoring system. Integrated vibration sensors and GPS to detect collisions and trigger automated emergency SMS alerts."
        },
        {
            name: "Water Quality Monitor",
            type: "Embedded System",
            stack: ["Sensors", "Hardware Design"],
            desc: "Portable sensor unit for analyzing water parameters like pH and turbidity."
        }
    ];

    return (
        <div className="p-8 h-full overflow-y-auto">
            <div className="mb-6 font-mono text-sm text-fg-secondary">
                <span className="text-syntax-pink">const</span> <span className="text-syntax-yellow">MyProjects</span> = () ={'>'} (
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="mt-6 font-mono text-sm text-fg-secondary">
                );
            </div>
        </div>
    );
};
