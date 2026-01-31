import React from 'react';
import { useIDE } from '../context/IDEContext';
import { X, FileCode, FileJson, FileTerminal } from 'lucide-react';
import clsx from 'clsx';

const TabIcon = ({ name }) => {
    if (name.endsWith('.jsx')) return <FileCode size={14} className="text-syntax-cyan" />;
    if (name.endsWith('.py')) return <FileCode size={14} className="text-syntax-yellow" />;
    if (name.endsWith('.json')) return <FileJson size={14} className="text-syntax-orange" />;
    if (name.endsWith('.sh')) return <FileTerminal size={14} className="text-syntax-green" />;
    return <FileCode size={14} className="text-fg-secondary" />;
}

export const TopBar = () => {
    const { openFiles, activeFileId, openFile, closeFile, files } = useIDE();

    return (
        <div className="flex h-full overflow-x-auto no-scrollbar">
            {openFiles.map((fileId) => {
                const file = files.find(f => f.id === fileId);
                if (!file) return null;

                const isActive = activeFileId === fileId;

                return (
                    <div
                        key={fileId}
                        onClick={() => openFile(fileId)}
                        className={clsx(
                            "group flex items-center min-w-[120px] max-w-[200px] border-r border-border-dark px-3 h-full cursor-pointer text-sm select-none",
                            isActive ? "bg-[#1e1e1e] text-fg-primary border-t-2 border-t-syntax-pink" : "bg-[#2d2d2d] text-fg-secondary hover:bg-[#383838]"
                        )}
                    >
                        <span className="mr-2"><TabIcon name={file.name} /></span>
                        <span className="truncate flex-1">{file.name}</span>
                        <button
                            onClick={(e) => { e.stopPropagation(); closeFile(fileId); }}
                            className={clsx("p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-white/10", isActive && "opacity-100")}
                        >
                            <X size={12} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
