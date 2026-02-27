"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["where", "ideas", "come", "alive."];

export function Preloader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "#0a0a14" }}
                >
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* Purple glow */}
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[100px]" />
                    <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-700/5 blur-[100px]" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Animated words */}
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            {WORDS.map((word, wi) => (
                                <div key={wi} className="flex overflow-hidden">
                                    {word.split("").map((char, ci) => (
                                        <motion.span
                                            key={ci}
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: wi * 0.15 + ci * 0.04,
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className={`text-2xl md:text-3xl font-light tracking-wide ${
                                                word === "alive."
                                                    ? "text-purple-400"
                                                    : "text-white/80"
                                            }`}
                                            style={{ fontFamily: "var(--font-poppins)" }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Thin progress line */}
                        <motion.div
                            className="w-32 h-px bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                                className="h-full bg-gradient-to-r from-purple-700 to-blue-500 rounded-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}