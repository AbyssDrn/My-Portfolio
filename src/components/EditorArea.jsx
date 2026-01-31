import React from 'react';
import { useIDE } from '../context/IDEContext';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';
import { Contact } from '../pages/Contact';

export const EditorArea = () => {
    const { activeFile } = useIDE();

    if (!activeFile) {
        return (
            <div className="h-full w-full flex items-center justify-center text-fg-secondary opacity-50 select-none">
                <div className="flex flex-col items-center">
                    <p className="mb-2">Show All Commands <span className="bg-white/10 px-1 rounded">Ctrl+Shift+P</span></p>
                    <p className="mb-2">Go to File <span className="bg-white/10 px-1 rounded">Ctrl+P</span></p>
                </div>
            </div>
        );
    }

    // Determine which component to render
    const renderContent = () => {
        switch (activeFile.id) {
            case 'home': return <Home />;
            case 'about': return <About />;
            case 'projects': return <Projects />;
            case 'skills': return <Skills />;
            case 'contact': return <Contact />;
            default: return <div className="p-4">File content not found.</div>;
        }
    };

    return (
        <div className="h-full w-full overflow-hidden relative flex">
            {/* Line Numbers Sidebar - Visible only for code-like pages */}
            {['about', 'skills', 'contact', 'projects'].includes(activeFile.id) && (
                <div className="w-12 flex-shrink-0 flex flex-col items-end pr-4 py-8 text-fg-secondary opacity-30 select-none text-sm font-mono border-r border-transparent bg-bg-dark h-full overflow-hidden">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                </div>
            )}

            {/* Content Area */}
            <div className="flex-1 overflow-auto h-full scroll-smooth">
                {renderContent()}
            </div>
        </div>
    );
};
