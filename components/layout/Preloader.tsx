"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cube = {
    x: number;
    y: number;
    delay: number;
};

const CUBES: Cube[] = [
    { x: 0, y: -80, delay: 0 },
    { x: -60, y: -40, delay: 0.2 },
    { x: 60, y: -40, delay: 0.4 },
    { x: -120, y: 0, delay: 0.1 },
    { x: 0, y: 0, delay: 0.3 },
    { x: 120, y: 0, delay: 0.5 },
    { x: -60, y: 40, delay: 0.2 },
    { x: 60, y: 40, delay: 0.4 },
    { x: 0, y: 80, delay: 0.3 },
];

export function Preloader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f8fafc] dark:bg-[#020617]"
                >
                    <div className="relative w-[300px] h-[300px]">
                        {CUBES.map((cube, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: cube.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute"
                                style={{
                                    transform: `translate(${cube.x + 120}px, ${cube.y + 120}px)`,
                                }}
                            >
                                <Cube />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Cube() {
    return (
        <div className="relative w-[40px] h-[40px]">
            {/* TOP */}
            <div
                className="absolute w-full h-full"
                style={{
                    background: "#42a5f5",
                    clipPath: "polygon(50% 0%, 100% 25%, 50% 50%, 0% 25%)",
                }}
            />

            {/* LEFT */}
            <div
                className="absolute w-full h-full"
                style={{
                    background: "#1565c0",
                    clipPath: "polygon(0% 25%, 50% 50%, 50% 100%, 0% 75%)",
                }}
            />

            {/* RIGHT */}
            <div
                className="absolute w-full h-full"
                style={{
                    background: "#1976d2",
                    clipPath: "polygon(100% 25%, 50% 50%, 50% 100%, 100% 75%)",
                }}
            />
        </div>
    );
}