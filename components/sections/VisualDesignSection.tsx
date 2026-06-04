"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function VisualDesignSection() {
    return (
        <section id="design" className="py-10 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-end">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                            Design × Development
                        </p>
                        <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                            Visual Design Capability
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-[16px] text-text-secondary leading-[1.6]">
                        <p>
                            In addition to frontend development, I bring hands-on experience in graphic design and UI UX. I design interfaces with strong visual hierarchy, balanced spacing, and thoughtful interaction patterns that support both aesthetics and usability.
                        </p>
                        <p>
                            This combination allows me to build products that are not only functional but also visually cohesive and user centered. Design is not separate from my development process, it strengthens the clarity and impact of every interface I ship.
                        </p>
                    </div>
                </motion.div>

                {/* Visual accent — grid cards */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {[
                        {
                            label: "Brand Identity",
                            desc: "Logo systems, visual guidelines, and cohesive brand assets",
                        },
                        {
                            label: "Creative Direction",
                            desc: "Consistent visual storytelling across digital platforms",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-default bg-bg-primary border border-border-default flex flex-col gap-2 transition-all shadow-sm"
                        >
                            <h4 className="text-[16px] font-medium text-text-primary">
                                {item.label}
                            </h4>
                            <p className="text-[14px] text-text-secondary leading-[1.6]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                    {/* Combined UX/UI Card acting as a link */}
                    <motion.a
                        href={personalData.graphicPortfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileHover={{ y: -4 }}
                        className="group sm:col-span-2 p-6 rounded-default bg-bg-secondary border border-border-default flex flex-col justify-center cursor-pointer transition-all hover:shadow-l2 hover:border-border-strong relative overflow-hidden"
                    >
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="text-[11px] font-semibold tracking-widest uppercase text-text-tertiary mb-1">
                                    Portfolio
                                </div>
                                <h4 className="text-[18px] font-semibold text-text-primary">
                                    View Graphic Design Portfolio
                                </h4>
                                <p className="text-[14px] text-text-secondary leading-[1.6]">
                                    A collection of brand identities, UI designs, and creative direction projects.
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center shrink-0 group-hover:border-border-strong transition-all bg-bg-primary group-hover:bg-bg-tertiary">
                                <FiExternalLink size={16} className="text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}