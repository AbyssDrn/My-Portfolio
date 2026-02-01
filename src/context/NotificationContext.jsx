import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, PartyPopper } from 'lucide-react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        // Auto dismiss after 4 seconds
        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    // Dynamic heading based on notification type
    const getHeading = () => {
        if (!notification) return '';
        if (notification.type === 'cv') return '🎭 Awesome Choice!';
        if (notification.type === 'resume') return '🚀 Great Decision!';
        return '✨ Thank You!';
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="fixed bottom-6 left-6 z-[100] flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white pl-4 pr-6 py-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md"
                    >
                        <motion.div
                            className="bg-white/20 p-2 rounded-full"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, repeat: 2 }}
                        >
                            {notification.type === 'cv' ? (
                                <PartyPopper size={24} className="text-white" />
                            ) : (
                                <CheckCircle size={24} className="text-white" />
                            )}
                        </motion.div>
                        <div>
                            <h4 className="font-bold text-lg">{getHeading()}</h4>
                            <p className="text-sm text-green-50 font-medium">{notification.message}</p>
                        </div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -skew-x-12 group-hover:animate-shine overflow-hidden rounded-2xl pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </NotificationContext.Provider>
    );
};
