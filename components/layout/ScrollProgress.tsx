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
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
            {/* Track */}
            <div className="w-0.5 h-32 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-700 to-blue-500 rounded-full"
                    style={{ height: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                />
            </div>
            {/* Percentage tooltip on hover */}
            <span className="text-[10px] text-gray-400 font-poppins tabular-nums">
                {Math.round(progress)}%
            </span>
        </div>
    );
}
