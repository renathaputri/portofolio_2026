"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle, FiDownload } from "react-icons/fi";
import {
    SiNextdotjs,
    SiTypescript,
    SiFramer,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";
import { personalData } from "@/lib/data/personal";

const rotating = personalData.rotatingTexts;

const stackIcons = [
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiFramer, label: "Framer Motion" },
];

export function HeroSection() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % rotating.length);
                setVisible(true);
            }, 300);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };
        el.addEventListener("mousemove", handleMove);
        return () => el.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-[calc(100vh-96px)] flex items-center overflow-hidden section-padding py-16 md:py-24"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                {/* Interactive Spotlight follows cursor (keeping for premium feel) */}
                <div
                    className="absolute pointer-events-none rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-[120px]"
                    style={{
                        width: 600,
                        height: 600,
                        left: mouse.x - 300,
                        top: mouse.y - 300,
                        transition: "left 0.15s ease-out, top 0.15s ease-out",
                    }}
                />
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                {/* Left 60% */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-400/25 bg-brand-500/5 w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        <span className="text-xs font-medium text-brand-700 dark:text-brand-300">
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-950 dark:text-white tracking-tight font-outfit">
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Renatha</span>
                        </h1>
                        <div className="mt-4 h-12 flex items-center">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9, y: visible ? 0 : -15 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="text-2xl sm:text-4xl font-bold text-blue-500"
                            >
                                {rotating[index]}
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed"
                    >
                        {personalData.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <motion.a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-fun shadow-blue-500/20"
                        >
                            <span className="flex items-center gap-2">
                                Hire Me
                                <FiMessageCircle size={18} />
                            </span>
                        </motion.a>
                        <motion.a
                            href={personalData.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl glass font-bold text-gray-700 dark:text-gray-200 transition-all hover:shadow-lg"
                        >
                            <FiDownload size={18} />
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Currently into */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex items-center gap-3 pt-2"
                    >
                        <span className="text-xs text-gray-400 font-medium">
                            Currently into
                        </span>
                        <div className="flex items-center">
                            {stackIcons.map(({ icon: Icon, label }, i) => (
                                <motion.div
                                    key={label}
                                    title={label}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        delay: 0.5 + i * 0.1, 
                                        type: "spring", 
                                        stiffness: 400, 
                                        damping: 15 
                                    }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-white dark:border-gray-950 text-gray-400 hover:text-blue-500 hover:scale-150 hover:z-20 transition-all duration-300 cursor-default shadow-sm"
                                    style={{ marginLeft: i === 0 ? 0 : -12 }}
                                >
                                    <Icon size={15} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right 40% — Code card (desktop only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 20,
                        delay: 0.2 
                    }}
                    className="hidden lg:flex lg:col-span-2 justify-center items-center"
                >
                    <div className="relative w-full max-w-sm group">
                        {/* Glow background */}
                        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-radial from-blue-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Main card */}
                        <div className="relative rounded-3xl border border-white/10 bg-gray-900/90 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:-rotate-1 group-hover:shadow-blue-500/10">
                            {/* Dot row */}
                            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                <span className="ml-auto text-[10px] text-gray-500 font-mono">
                                    portfolio.tsx
                                </span>
                            </div>

                            {/* Code preview */}
                            <div className="p-4 font-mono text-xs leading-relaxed space-y-1">
                                <p>
                                    <span className="text-brand-400">const</span>{" "}
                                    <span className="text-blue-300">Renatha</span>{" "}
                                    <span className="text-gray-300">= {"{"}</span>
                                </p>
                                <p className="pl-4">
                                    <span className="text-green-400">role:</span>{" "}
                                    <span className="text-yellow-300">&apos;Frontend Dev&apos;</span>,
                                </p>
                                <p className="pl-4">
                                    <span className="text-green-400">focus:</span>{" "}
                                    <span className="text-yellow-300">&apos;React + Next.js&apos;</span>,
                                </p>
                                <p className="pl-4">
                                    <span className="text-green-400">design:</span>{" "}
                                    <span className="text-brand-300">true</span>,
                                </p>
                                <p className="pl-4">
                                    <span className="text-green-400">aiAware:</span>{" "}
                                    <span className="text-brand-300">true</span>,
                                </p>
                                <p>
                                    <span className="text-gray-300">{"}"}</span>
                                </p>
                                <p className="pt-2">
                                    <span className="text-brand-400">export default</span>{" "}
                                    <span className="text-blue-300">Renatha</span>
                                    <span className="text-gray-300">;</span>
                                </p>
                                <p className="pt-3 flex items-center gap-1 text-gray-500">
                                    <span className="inline-block w-2 h-4 bg-brand-500 animate-pulse rounded-sm" />
                                    ready for hire
                                </p>
                            </div>

                            {/* Bottom toolbar */}
                            <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-white/2">
                                <div className="flex gap-3">
                                    {["TypeScript", "React", "Next.js"].map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] text-gray-500 font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[10px] text-green-500 font-mono">
                                    ✓ deployed
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}