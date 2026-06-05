"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
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

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100svh-120px)] md:min-h-[calc(100svh-60px)] flex items-center overflow-hidden py-6 md:py-16"
        >
            <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-16 items-center">
                {/* Left 60% */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-bg-secondary border border-border-default mb-8 w-fit"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-text-primary"></span>
                        </span>
                        <span className="text-[12px] font-medium text-text-secondary">
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.1] text-text-primary tracking-[-0.03em]">
                            Hi, I&apos;m Renatha
                        </h1>
                        <div className="mt-2 h-10 flex items-center">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-[20px] md:text-[32px] font-semibold text-text-secondary tracking-[-0.02em]"
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
                        className="text-[16px] text-text-secondary max-w-xl leading-[1.6]"
                    >
                        {personalData.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap gap-3 pt-2"
                    >
                        <a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 h-[44px] rounded-pill bg-bg-inverse text-text-inverse text-[14px] font-medium hover:opacity-85 active:opacity-75 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            Hire Me
                            <FiArrowRight size={16} />
                        </a>
                        <a
                            href={personalData.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 h-[44px] rounded-pill bg-bg-primary text-text-primary border border-border-default text-[14px] font-medium hover:bg-bg-secondary hover:border-border-strong active:bg-bg-tertiary transition-all focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            <FiDownload size={16} />
                            Download CV
                        </a>
                    </motion.div>

                    {/* Currently into */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex items-center gap-4 pt-4"
                    >
                        <span className="text-[12px] text-text-tertiary font-medium uppercase tracking-[0.08em]">
                            Stack
                        </span>
                        <div className="flex items-center gap-3">
                            {stackIcons.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    title={label}
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right 40% — Code card (desktop only) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:flex lg:col-span-2 justify-center items-center"
                >
                    <div className="relative w-full max-w-sm">
                        <div className="rounded-large border border-border-default bg-bg-secondary overflow-hidden shadow-l2">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-default bg-bg-primary">
                                <span className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em]">
                                    config.ts
                                </span>
                            </div>
                            <div className="p-5 font-mono text-[13px] leading-[1.5] space-y-1 text-text-secondary">
                                <p>
                                    <span className="text-text-primary font-medium">const</span>{" "}
                                    Renatha{" "}
                                    <span className="text-text-primary font-medium">= {"{"}</span>
                                </p>
                                <p className="pl-4">
                                    role: <span className="text-text-primary font-medium">&apos;Web Developer&apos;</span>,
                                </p>
                                <p className="pl-4">
                                    focus: <span className="text-text-primary font-medium">&apos;React + Next.js&apos;</span>,
                                </p>
                                <p className="pl-4">
                                    design: <span className="text-text-primary font-medium">true</span>,
                                </p>
                                <p className="pl-4">
                                    aiAware: <span className="text-text-primary font-medium">true</span>,
                                </p>
                                <p>
                                    <span className="text-text-primary font-medium">{"}"}</span>
                                </p>
                                <p className="pt-2">
                                    <span className="text-text-primary font-medium">export default</span>{" "}
                                    Renatha;
                                </p>
                                <p className="pt-4 flex items-center gap-2 text-[12px] text-text-tertiary">
                                    <span className="inline-block w-2 h-2 rounded-full bg-text-primary" />
                                    Ready for new opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}