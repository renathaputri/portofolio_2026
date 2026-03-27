"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function VisualDesignSection() {
    return (
        <section id="design" className="py-10 lg:py-16 section-padding">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                            Design × Development
                        </p>
                        <h2 className="text-xl md:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight font-outfit">
                            Visual Design Capability
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-gray-200/50 dark:border-white/10 font-bold text-gray-700 dark:text-gray-200 transition-all hover:shadow-lg text-[11px] w-fit"
                    >
                        <FiExternalLink size={14} />
                        View Graphic Design Portfolio
                    </a>
                </motion.div>

                {/* Visual accent — grid cards */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                    {[
                        {
                            label: "Brand Identity",
                            desc: "Logo systems, visual guidelines, and cohesive brand assets",
                            color: "from-brand-500/10 to-brand-600/5",
                            border: "border-brand-500/15",
                        },
                        {
                            label: "Creative Direction",
                            desc: "Consistent visual storytelling across digital platforms",
                            color: "from-brand-400/10 to-brand-300/5",
                            border: "border-brand-400/15",
                        },
                        {
                            label: "User Experience",
                            desc: "Intuitive flows designed to solve real user problems",
                            color: "from-brand-600/10 to-brand-400/5",
                            border: "border-brand-600/15",
                        },
                        {
                            label: "Interface Design",
                            desc: "Clean, functional UI with strong usability principles",
                            color: "from-brand-300/10 to-brand-500/5",
                            border: "border-brand-300/15",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className={`p-4 sm:p-5 rounded-2xl glass border ${item.border} bg-gradient-to-br ${item.color} flex flex-col gap-1.5 cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-500/10`}
                        >
                            <h4 className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">
                                {item.label}
                            </h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}