import React from 'react';
import { useIDE } from '../context/IDEContext';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Terminal } from './Terminal';
import { EditorArea } from './EditorArea';
import { ActivityBar } from './ActivityBar';
import { StatusBar } from './StatusBar';

export const Layout = () => {
    const { isSidebarOpen, terminalOpen } = useIDE();

    return (
        <div className="flex h-screen w-screen bg-[#1e1e1e] text-fg-primary overflow-hidden font-sans">
            {/* Activity Bar (Leftmost vertical strip) */}
            <ActivityBar />

            {/* Sidebar (File Explorer) */}
            {isSidebarOpen && (
                <div className="w-64 border-r border-border-dark flex-shrink-0 bg-bg-sidebar">
                    <Sidebar />
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Bar (Tabs) */}
                <div className="h-9 bg-bg-dark border-b border-border-dark flex items-center">
                    <TopBar />
                </div>

                {/* Editor Area */}
                <div className="flex-1 overflow-hidden relative bg-[#1e1e1e]">
                    <EditorArea />
                </div>

                {/* Use a split pane approach or fixed height for terminal for now */}
                {terminalOpen && (
                    <div className="h-48 border-t border-border-dark bg-[#1e1e1e]">
                        <Terminal />
                    </div>
                )}

                {/* Status Bar */}
                <div className="h-6 bg-purple-800 text-white text-xs flex items-center px-4 justify-between z-10">
                    <StatusBar />
                </div>
            </div>
        </div>
    );
};
