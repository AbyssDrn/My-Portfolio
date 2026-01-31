import React, { useState, useEffect, useRef } from 'react';
import { useIDE } from '../context/IDEContext';
import { X, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';

export const Terminal = () => {
    const { setTerminalOpen } = useIDE();
    const [history, setHistory] = useState([
        "Welcome to Anti-Gravity Shell v1.0.0",
        "Type 'help' to see available commands."
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim();
        let response = null;

        switch (trimmed.toLowerCase()) {
            case 'help':
                response = "Available commands: help, clear, contact, about, projects, whoami";
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'whoami':
                response = "User: guest@anti-gravity-ide";
                break;
            case 'contact':
                response = "Opening contact details...";
                // logic to open contact tab
                break;
            case '':
                response = null;
                break;
            default:
                response = `Command not found: ${trimmed}`;
        }

        const newHistory = [...history, `> ${cmd}`];
        if (response) newHistory.push(response);
        setHistory(newHistory);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <div className="flex flex-col h-full font-mono text-sm">
            <div className="flex justify-between items-center px-4 py-2 border-b border-border-dark bg-[#1e1e1e]">
                <div className="flex gap-4 text-xs font-bold text-fg-secondary uppercase">
                    <span className="text-fg-primary border-b border-fg-primary cursor-pointer">Terminal</span>
                    <span className="cursor-pointer hover:text-fg-primary">Output</span>
                    <span className="cursor-pointer hover:text-fg-primary">Debug Console</span>
                    <span className="cursor-pointer hover:text-fg-primary">Problems</span>
                </div>
                <div className="flex items-center gap-2 text-fg-secondary">
                    <Trash2 size={14} className="cursor-pointer hover:text-fg-primary" onClick={() => setHistory([])} />
                    <ChevronDown size={14} className="cursor-pointer hover:text-fg-primary" />
                    <X size={14} className="cursor-pointer hover:text-fg-primary" onClick={() => setTerminalOpen(false)} />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-[#1e1e1e]">
                {history.map((line, i) => (
                    <div key={i} className="mb-1 text-fg-primary">{line}</div>
                ))}
                <div className="flex items-center text-fg-primary mt-2">
                    <span className="text-syntax-green mr-2">➜</span>
                    <span className="text-syntax-cyan mr-2">~</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="bg-transparent border-none outline-none flex-1 font-mono text-fg-primary"
                        autoFocus
                    />
                </div>
                <div ref={endRef} />
            </div>
        </div>
    );
};
