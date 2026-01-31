import React from 'react';
import { GitBranch, Bell, Check } from 'lucide-react';

export const StatusBar = () => {
    return (
        <div className="w-full flex justify-between items-center text-[11px] select-none">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer">
                    <GitBranch size={12} />
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">0</div>
                        <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">0</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="hover:bg-white/10 px-1 cursor-pointer">Ln 12, Col 45</span>
                <span className="hover:bg-white/10 px-1 cursor-pointer">UTF-8</span>
                <span className="hover:bg-white/10 px-1 cursor-pointer">JavaScript React</span>
                <div className="flex items-center gap-2 hover:bg-white/10 px-1 cursor-pointer">
                    <Check size={12} />
                    <span>Prettier</span>
                </div>
                <Bell size={12} className="ml-1 hover:bg-white/10 cursor-pointer" />
            </div>
        </div>
    );
};
