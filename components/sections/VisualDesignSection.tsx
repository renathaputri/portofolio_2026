"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function VisualDesignSection() {
    return (
        <section id="design" className="py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

                    <a
                        href={personalData.graphicPortfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 h-[44px] rounded-pill bg-bg-secondary text-text-primary border border-border-default text-[14px] font-medium hover:bg-bg-tertiary hover:border-border-strong active:bg-overlay-medium transition-all focus:outline-none focus:ring-[3px] focus:ring-border-inverse w-fit mt-2"
                    >
                        <FiExternalLink size={16} />
                        View Graphic Design Portfolio
                    </a>
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
                        {
                            label: "User Experience",
                            desc: "Intuitive flows designed to solve real user problems",
                        },
                        {
                            label: "Interface Design",
                            desc: "Clean, functional UI with strong usability principles",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-default bg-bg-primary border border-border-default flex flex-col gap-2 cursor-pointer transition-all hover:shadow-l2 hover:border-border-strong"
                        >
                            <h4 className="text-[16px] font-medium text-text-primary">
                                {item.label}
                            </h4>
                            <p className="text-[14px] text-text-secondary leading-[1.6]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}