"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const previewStack = [
    "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma", "Git"
];

export function MiniAboutStackSection() {
    return (
        <section id="about-stack" className="py-8 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center gap-6"
                >
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary">
                        Design & Dev
                    </p>

                    <div className="flex flex-col gap-0">
                        {[
                            "Design that thinks.",
                            "Code that lasts.",
                            "Every detail matters.",
                            "Built with intention.",
                        ].map((line, i) => (
                            <motion.p
                                key={line}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
                                className="text-[32px] md:text-[42px] font-bold text-text-primary leading-[1.15] tracking-[-0.02em]"
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <h4 className="text-[13px] font-semibold text-text-primary mb-3">
                            Core Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {previewStack.map((item, i) => (
                                <motion.span
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                                    className="px-3 py-1 rounded-full text-[12px] font-medium border border-border-default text-text-primary bg-bg-primary"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/about"
                        className="group p-4 rounded-default bg-bg-secondary border border-border-default flex cursor-pointer transition-all hover:shadow-l2 hover:border-border-strong relative overflow-hidden"
                    >
                        <div className="flex justify-between items-center gap-4 w-full">
                            <div className="flex flex-col gap-1">
                                <div className="text-[11px] font-semibold tracking-widest uppercase text-text-tertiary">
                                    Discover More
                                </div>
                                <h4 className="text-[15px] font-semibold text-text-primary">
                                    View Full Profile & Tech Stack
                                </h4>
                                <p className="text-[12px] text-text-secondary leading-[1.5]">
                                    My professional journey, background, and complete list of tools.
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center shrink-0 group-hover:border-border-strong transition-all bg-bg-primary group-hover:bg-bg-tertiary">
                                <FiArrowRight size={14} className="text-text-primary group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}