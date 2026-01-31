import React, { createContext, useContext, useState } from 'react';

const IDEContext = createContext();

export const useIDE = () => {
    const context = useContext(IDEContext);
    if (!context) {
        throw new Error('useIDE must be used within an IDEProvider');
    }
    return context;
};

export const IDEProvider = ({ children }) => {
    // Initial file list - mapped to specific components later
    const [files] = useState([
        { id: 'home', name: 'home.jsx', language: 'javascript', icon: 'react' },
        { id: 'about', name: 'about.py', language: 'python', icon: 'python' },
        { id: 'projects', name: 'projects.jsx', language: 'javascript', icon: 'react' },
        { id: 'skills', name: 'skills.json', language: 'json', icon: 'json' },
        { id: 'contact', name: 'contact.sh', language: 'shell', icon: 'terminal' },
    ]);

    const [activeFileId, setActiveFileId] = useState('home');
    const [openFiles, setOpenFiles] = useState(['home']); // Files currently open in tabs
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [terminalOpen, setTerminalOpen] = useState(true);

    const openFile = (fileId) => {
        if (!openFiles.includes(fileId)) {
            setOpenFiles([...openFiles, fileId]);
        }
        setActiveFileId(fileId);
    };

    const closeFile = (fileId) => {
        const newOpenFiles = openFiles.filter(id => id !== fileId);
        setOpenFiles(newOpenFiles);

        if (activeFileId === fileId) {
            if (newOpenFiles.length > 0) {
                setActiveFileId(newOpenFiles[newOpenFiles.length - 1]);
            } else {
                setActiveFileId(null);
            }
        }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleTerminal = () => setTerminalOpen(!terminalOpen);

    const activeFile = files.find(f => f.id === activeFileId);

    return (
        <IDEContext.Provider value={{
            files,
            activeFileId,
            activeFile,
            openFiles,
            openFile,
            closeFile,
            isSidebarOpen,
            toggleSidebar,
            terminalOpen,
            toggleTerminal,
            setTerminalOpen
        }}>
            {children}
        </IDEContext.Provider>
    );
};
