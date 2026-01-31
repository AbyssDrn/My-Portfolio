import React, { useState } from 'react';
import { useIDE } from '../context/IDEContext';
import { ChevronRight, ChevronDown, FileCode, FileJson, FileTerminal, Folder, MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

const FileIcon = ({ name }) => {
    if (name.endsWith('.jsx')) return <FileCode size={16} className="text-syntax-cyan" />;
    if (name.endsWith('.py')) return <FileCode size={16} className="text-syntax-yellow" />; // Python usually blue/yellow, using yellow to pop
    if (name.endsWith('.json')) return <FileJson size={16} className="text-syntax-orange" />;
    if (name.endsWith('.sh')) return <FileTerminal size={16} className="text-syntax-green" />;
    return <FileCode size={16} className="text-fg-secondary" />;
}

export const Sidebar = () => {
    const { files, activeFileId, openFile } = useIDE();
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

    return (
        <div className="flex flex-col h-full text-sm select-none">
            <div className="p-2 text-xs font-bold text-fg-secondary flex justify-between items-center group">
                <span>EXPLORER</span>
                <MoreHorizontal size={14} className="opacity-0 group-hover:opacity-100 cursor-pointer" />
            </div>

            <div className="flex-1 overflow-y-auto">
                {/* Project Folder */}
                <div
                    className="flex items-center cursor-pointer px-1 py-1 hover:bg-white/5 text-fg-primary font-bold"
                    onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                >
                    {isPortfolioOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <span className="ml-1">AMAL-MADHU-PORTFOLIO</span>
                </div>

                {/* File List */}
                {isPortfolioOpen && (
                    <div className="flex flex-col">
                        {/* Src folder decoration could be added here, but flat list for now or wrapped */}
                        <div className="flex items-center px-1 py-1 hover:bg-white/5 ml-4 text-fg-secondary">
                            <ChevronDown size={14} />
                            <Folder size={14} className="mr-1 text-syntax-purple" />
                            <span>src</span>
                        </div>

                        {files.map((file) => (
                            <div
                                key={file.id}
                                onClick={() => openFile(file.id)}
                                className={clsx(
                                    "flex items-center px-8 py-1 cursor-pointer hover:bg-white/5",
                                    activeFileId === file.id ? "bg-white/10 text-fg-primary" : "text-fg-secondary"
                                )}
                            >
                                <span className="mr-2"><FileIcon name={file.name} /></span>
                                <span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
