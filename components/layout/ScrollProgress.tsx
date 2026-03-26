"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            setProgress(maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Full-width horizontal progress bar — fixed at top */}
            <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent">
                <motion.div
                    className="h-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-300 rounded-r-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                />
                {/* Glow on the leading edge */}
                <div
                    className="absolute top-0 h-[3px] w-16 rounded-full blur-sm bg-brand-400/60"
                    style={{ left: `calc(${progress}% - 32px)`, display: progress < 1 ? "none" : "block" }}
                />
            </div>

            {/* Desktop side indicator (percentage) */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
                <span className="text-[10px] text-gray-400/60 font-poppins tabular-nums">
                    {Math.round(progress)}%
                </span>
            </div>
        </>
    );
}
