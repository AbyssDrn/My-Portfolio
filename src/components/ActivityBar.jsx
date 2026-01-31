import React from 'react';
import { Files, Search, GitGraph, Bug, Blocks, User, Settings } from 'lucide-react';

const ActivityIcon = ({ icon: Icon, active = false }) => (
    <div className={`p-3 cursor-pointer transition-colors relative ${active ? 'text-fg-primary' : 'text-fg-secondary hover:text-fg-primary'}`}>
        <Icon size={24} strokeWidth={1.5} />
        {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-syntax-pink" />}
    </div>
);

export const ActivityBar = () => {
    return (
        <div className="w-12 bg-bg-activity-bar flex flex-col items-center py-2 justify-between border-r border-border-dark">
            <div className="flex flex-col gap-2">
                <ActivityIcon icon={Files} active />
                <ActivityIcon icon={Search} />
                <ActivityIcon icon={GitGraph} />
                <ActivityIcon icon={Bug} />
                <ActivityIcon icon={Blocks} />
            </div>
            <div className="flex flex-col gap-4 mb-2">
                <ActivityIcon icon={User} />
                <ActivityIcon icon={Settings} />
            </div>
        </div>
    );
};
