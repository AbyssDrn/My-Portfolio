import React from 'react';

export const Skills = () => {
    const skillsData = {
        "hardware": ["Verilog", "SystemVerilog", "Neuromorphic Circuits", "Mixed-Signal Design", "IoT"],
        "software": ["Python (PyTorch)", "C/C++", "Linux/Bash", "Algorithms"],
        "tools": ["Cadence", "Synopsys", "VSCode", "LaTeX", "Git"],
        "certifications": [
            "NPTEL Cybersecurity",
            "Udemy: 100 Days of Code (Python)",
            "Udemy: Linux for IT"
        ],
        "interests": [
            "DIY Electronics",
            "Neuromorphic Engineering",
            "Quantum Physics",
            "Chess",
            "Athletics"
        ]
    };

    const renderJson = (data, level = 0) => {
        const indent = "  ".repeat(level);

        if (Array.isArray(data)) {
            return (
                <span>
                    <span className="text-fg-primary">{'['}</span>
                    {data.map((item, i) => (
                        <span key={i}>
                            <br />
                            {indent}  <span className="text-syntax-orange">"{item}"</span>{i < data.length - 1 ? ',' : ''}
                        </span>
                    ))}
                    <br />{indent}<span className="text-fg-primary">{']'}</span>
                </span>
            );
        }

        return (
            <span>
                <span className="text-fg-primary">{'{'}</span>
                {Object.entries(data).map(([key, value], i, arr) => (
                    <div key={key}>
                        <br />
                        {indent}  <span className="text-syntax-cyan">"{key}"</span>: {renderJson(value, level + 1)}{i < arr.length - 1 ? ',' : ''}
                    </div>
                ))}
                <br />{indent}<span className="text-fg-primary">{'}'}</span>
            </span>
        );
    };

    return (
        <div className="p-8 font-mono text-base">
            {renderJson(skillsData)}
        </div>
    );
};
