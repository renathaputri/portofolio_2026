"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function VisualDesignSection() {
    return (
        <section id="design" className="py-24 section-padding bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-purple-700 dark:text-purple-400 mb-3">
                            Design × Development
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                            Visual Design{" "}
                            <span className="gradient-text">Capability</span>
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-purple-700/50 hover:text-purple-700 dark:hover:text-purple-400 transition-all w-fit group"
                    >
                        <FiExternalLink size={15} />
                        View Graphic Design Portfolio (PDF)
                        <span className="text-[10px] text-gray-400 font-normal ml-1">↗ Google Drive</span>
                    </a>
                </motion.div>

                {/* Visual accent */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        {
                            label: "Brand Identity",
                            desc: "Logo systems, visual guidelines, and cohesive brand assets",
                            color: "from-purple-700/10 to-purple-700/5",
                            border: "border-purple-700/20",
                        },
                        {
                            label: "Creative Direction",
                            desc: "Consistent visual storytelling across digital platforms",
                            color: "from-blue-500/10 to-blue-500/5",
                            border: "border-blue-500/20",
                        },
                        {
                            label: "User Experience",
                            desc: "Intuitive flows designed to solve real user problems",
                            color: "from-purple-700/10 to-blue-500/5",
                            border: "border-purple-700/20",
                        },
                        {
                            label: "Interface Design",
                            desc: "Clean, functional UI with strong usability principles",
                            color: "from-blue-500/10 to-purple-700/5",
                            border: "border-blue-500/20",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            className={`p-5 rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} flex flex-col gap-2`}
                        >
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {item.label}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
