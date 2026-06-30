"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function VisualDesignSection() {
    return (
        <section id="design" className="py-8 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center gap-6 self-center"
                >
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary">
                        Design as a Developer Advantage
                    </p>

                    <div className="flex flex-col gap-0">
                        {[
                            "I don't just code layouts.",
                            "I know why they work.",
                            "Design-trained.",
                            "Developer-built.",
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
                    className="flex flex-col gap-3 self-center w-full"
                >
                    {/* 2 cards atas */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            {
                                label: "UI Design Sensibility",
                                desc: "Building interfaces with trained visual judgment",
                            },
                            {
                                label: "Visual Communication",
                                desc: "Translating ideas into clear digital experiences",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="p-4 rounded-default bg-bg-primary border border-border-default flex flex-col gap-1 transition-all shadow-sm"
                            >
                                <h4 className="text-[14px] font-medium text-text-primary">
                                    {item.label}
                                </h4>
                                <p className="text-[12px] text-text-secondary leading-[1.5]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Link Card bawah */}
                    <motion.a
                        href={personalData.graphicPortfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileHover={{ y: -3 }}
                        className="group p-4 rounded-default bg-bg-secondary border border-border-default flex cursor-pointer transition-all hover:shadow-l2 hover:border-border-strong"
                    >
                        <div className="flex justify-between items-center gap-4 w-full">
                            <div className="flex flex-col gap-1">
                                <div className="text-[11px] font-semibold tracking-widest uppercase text-text-tertiary">
                                    Portfolio
                                </div>
                                <h4 className="text-[15px] font-semibold text-text-primary">
                                    See My Design Background
                                </h4>
                                <p className="text-[12px] text-text-secondary leading-[1.5]">
                                    Past design work that shapes how I approach frontend development.
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center shrink-0 group-hover:border-border-strong transition-all bg-bg-primary group-hover:bg-bg-tertiary">
                                <FiExternalLink size={14} className="text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}