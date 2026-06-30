"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuemin={0}
            aria-valuemax={100}
            className="fixed top-0 left-0 right-0 h-[2px] bg-text-primary z-[9999] origin-left"
            style={{ scaleX }}
        />
    );
}
