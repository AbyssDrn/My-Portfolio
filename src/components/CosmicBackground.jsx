import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const CosmicBackground = () => {
    const { theme } = useTheme();
    const { scrollY } = useScroll();

    return <SpaceBackground scrollY={scrollY} isLightMode={theme === 'light'} />;
};

// Optimized Space Background
const SpaceBackground = ({ scrollY, isLightMode }) => {
    // Generate static star positions once - PERFORMANCE OPTIMIZATION
    // Re-generate if mode changes to switch colors effectively
    const stars = useMemo(() => {
        const count = 50;

        // Dark Mode Colors (Bright Pastels)
        const darkColors = ['#ff6496', '#6496ff', '#ffc864', '#96ff96', '#c864ff', '#64ffff', '#ffffff'];

        // Light Mode Colors (High Contrast vs Pink: Teal, Deep Blue, Purple, Gold, Emerald)
        const lightColors = [
            '#0891b2', // Cyan-600 (Teal/Dark Cyan)
            '#4f46e5', // Indigo-600
            '#059669', // Emerald-600
            '#d97706', // Amber-600 (Gold)
            '#7c3aed', // Violet-600
            '#1e40af', // Blue-800
            '#be185d', // Pink-700 (Darker Pink)
        ];

        const colors = isLightMode ? lightColors : darkColors;

        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1.5, // Slightly larger for better visibility
            delay: Math.random() * 10,
            shouldBlink: Math.random() > 0.5, // 50% of stars blink
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
    }, [isLightMode]); // Re-run when light mode changes

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Render stars */}
            {stars.map(star => (
                <Star key={star.id} {...star} isLightMode={isLightMode} />
            ))}

            {/* Shooting Star Groups - Rare, 1-2 at a time */}
            <ShootingStarGroup scrollY={scrollY} isLightMode={isLightMode} groupId={0} startDelay={0} />
            <ShootingStarGroup scrollY={scrollY} isLightMode={isLightMode} groupId={1} startDelay={15} />
            <ShootingStarGroup scrollY={scrollY} isLightMode={isLightMode} groupId={2} startDelay={30} />
        </div>
    );
};

// Optimized Star Component
const Star = React.memo(({ x, y, size, delay, shouldBlink, color, isLightMode }) => {
    // Adjust opacity for light mode
    const baseOpacity = isLightMode ? 0.8 : 0.6;
    const peakOpacity = isLightMode ? 1 : 1;

    if (shouldBlink) {
        // Blinking star - slower animation
        return (
            <motion.div
                className="absolute rounded-full"
                style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    boxShadow: `0 0 ${size * 2}px ${color}`,
                    willChange: 'opacity, transform',
                }}
                animate={{
                    opacity: [0, 0.3, peakOpacity, 0.3, 0], // Fully disappears
                    scale: [0, 0.8, 1.3, 0.8, 0],
                }}
                transition={{
                    duration: 6 + Math.random() * 4, // 6-10s random duration
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut",
                }}
            />
        );
    } else {
        // Static star - no animation for performance
        return (
            <div
                className="absolute rounded-full"
                style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    boxShadow: `0 0 ${size * 2}px ${color}`,
                    opacity: baseOpacity,
                }}
            />
        );
    }
});

// Shooting Star Group - 1 or 2 shooting stars at random intervals
const ShootingStarGroup = ({ scrollY, isLightMode, groupId, startDelay }) => {
    const [shootingStars, setShootingStars] = useState([]);

    useEffect(() => {
        const createGroup = () => {
            // Random: 1 or 2 shooting stars
            const count = Math.random() > 0.5 ? 2 : 1;

            const darkColors = ['#ff6496', '#6496ff', '#ffc864', '#96ff96', '#c864ff', '#64ffff'];
            const lightColors = ['#0891b2', '#4f46e5', '#059669', '#d97706', '#7c3aed']; // High contrast shooting stars
            const colors = isLightMode ? lightColors : darkColors;

            const stars = Array.from({ length: count }, (_, i) => ({
                id: `${groupId}-${Date.now()}-${i}`,
                color: colors[Math.floor(Math.random() * colors.length)],
                startX: -10 + Math.random() * 30, // Start more to the left
                startY: 5 + Math.random() * 70,    // Random height
                delay: i * 0.8, // Delay between stars in group
            }));

            setShootingStars(stars);
        };

        // Initial creation
        const initialTimeout = setTimeout(createGroup, startDelay * 1000);

        // Repeat every 20-35 seconds (rare)
        const interval = setInterval(createGroup, (20 + Math.random() * 15) * 1000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [groupId, startDelay, isLightMode]);

    return (
        <>
            {shootingStars.map(star => (
                <ShootingStar key={star.id} {...star} isLightMode={isLightMode} />
            ))}
        </>
    );
};

// Optimized Shooting Star
const ShootingStar = React.memo(({ color, startX, startY, delay, isLightMode }) => {
    return (
        <motion.div
            className="absolute"
            style={{
                left: `${startX}%`,
                top: `${startY}%`,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
                x: [0, 1500],
                y: [0, 650], // Angle down
                opacity: [0, 0.5, 1, 0.5, 0],
            }}
            transition={{
                duration: 4, // Slower
                delay,
                ease: "easeInOut", // Smoother
            }}
        >
            <div
                className="relative"
                style={{
                    width: '180px',
                    height: '2px', // Thinner line
                    background: `linear-gradient(to right, transparent 0%, ${color} 20%, ${color} 60%, transparent 100%)`, // Better trail
                    transformOrigin: 'left center',
                    transform: 'rotate(25deg)', // Angle
                    boxShadow: `0 0 10px ${color}`,
                    filter: 'blur(0.5px)',
                    willChange: 'transform',
                }}
            >
                {/* Head */}
                <div
                    className="absolute right-[40%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{
                        background: color,
                        boxShadow: `0 0 15px ${color}`,
                    }}
                />
            </div>
        </motion.div>
    );
});
