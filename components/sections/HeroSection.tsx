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
            className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden section-padding py-16 md:py-24"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Spotlight */}
                <div
                    className="absolute pointer-events-none rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-[80px]"
                    style={{
                        width: 500,
                        height: 500,
                        left: mouse.x - 250,
                        top: mouse.y - 250,
                        transition: "left 0.08s ease, top 0.08s ease",
                    }}
                />
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-purple-700/5 blur-[100px] dark:bg-purple-700/10" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/10" />
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                {/* Left 60% */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-700/30 bg-purple-700/5 w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-700 animate-pulse" />
                        <span className="text-xs font-medium text-purple-700 dark:text-purple-400">
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight">
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Renatha</span>
                        </h1>
                        <div className="mt-3 h-10 flex items-center">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -8 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl sm:text-3xl font-semibold text-purple-700 dark:text-purple-400"
                            >
                                {rotating[index]}
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed"
                    >
                        {personalData.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-3"
                    >
                        <a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 text-white text-sm font-semibold hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-700/30 hover:-translate-y-0.5"
                        >
                            Hire Me
                            <FiMessageCircle size={16} />
                        </a>
                        <a
                            href={personalData.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-purple-700/50 hover:text-purple-700 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5"
                        >
                            <FiDownload size={15} />
                            Download CV
                        </a>
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
                                <div
                                    key={label}
                                    title={label}
                                    className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-950 text-gray-400"
                                    style={{ marginLeft: i === 0 ? 0 : -10 }}
                                >
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right 40% — Abstract UI mockup card (desktop only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden lg:flex lg:col-span-2 justify-center items-center"
                >
                    <div className="relative w-full max-w-sm">
                        {/* Glow background */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-radial from-purple-700/20 to-transparent blur-2xl" />

                        {/* Main card */}
                        <div className="relative rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-sm overflow-hidden purple-glow-sm">
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
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-blue-400">Renatha</span>{" "}
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
                                    <span className="text-purple-300">true</span>,
                                </p>
                                <p className="pl-4">
                                    <span className="text-green-400">aiAware:</span>{" "}
                                    <span className="text-purple-300">true</span>,
                                </p>
                                <p>
                                    <span className="text-gray-300">{"}"}</span>
                                </p>
                                <p className="pt-2">
                                    <span className="text-purple-400">export default</span>{" "}
                                    <span className="text-blue-400">Renatha</span>
                                    <span className="text-gray-300">;</span>
                                </p>
                                <p className="pt-3 flex items-center gap-1 text-gray-500">
                                    <span className="inline-block w-2 h-4 bg-purple-700 animate-pulse rounded-sm" />
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