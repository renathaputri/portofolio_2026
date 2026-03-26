"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
                >
                    {/* Modern Light Background */}
                    <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#020617]" />
                    
                    {/* Animated Light Beams */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-transparent skew-y-12 blur-3xl"
                    />

                    {/* Simple Fun Element */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <motion.div
                            animate={{ 
                                rotate: 360,
                                scale: [1, 1.2, 1] 
                            }}
                            transition={{ 
                                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="text-brand-500 text-5xl flex items-center justify-center leading-none"
                        >
                            ✧
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-lg font-bold tracking-tight font-outfit text-gray-900 dark:text-white"
                        >
                            ready in a sec...
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}