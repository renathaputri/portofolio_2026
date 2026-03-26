"use client";

import { motion } from "framer-motion";

export function BackgroundElements() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Primary Window Light Gradient */}
            <div className="window-light" />
            
            {/* Directed Light Beam */}
            <div className="light-beam" />
            
            {/* Soft modern accent gradients (Structured) */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full"
            />
            
            {/* Design platform subtle dot grid (More visible but smooth) */}
            <div className="absolute inset-0" 
                 style={{ 
                    backgroundImage: "radial-gradient(#2196f3 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.25,
                    maskImage: "radial-gradient(circle at 40% 40%, black, transparent 90%)",
                    WebkitMaskImage: "radial-gradient(circle at 40% 40%, black, transparent 90%)"
                 }} 
            />
            
            {/* Subtle noise for organic feel */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>
    );
}
