"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data/personal";

export function ExperienceContent() {
    return (
        <div className="min-h-screen py-16 md:py-24 section-padding">
            <div className="max-w-3xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-purple-700 dark:text-purple-400 mb-3">
                        Career Path
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Work <span className="gradient-text">Experience</span>
                    </h1>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                        A record of my professional contributions from freelance projects
                        to collaborative team environments.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="flex flex-col gap-0">
                    {personalData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative flex gap-8"
                        >
                            {/* Left: dot + line only */}
                            <div className="flex flex-col items-center w-4 shrink-0">
                                <div className="mt-2 w-3 h-3 rounded-full bg-purple-700 ring-4 ring-purple-700/20 shrink-0" />
                                {i < personalData.experience.length - 1 && (
                                    <div className="flex-1 w-px bg-gray-200 dark:bg-gray-800 mt-2" />
                                )}
                            </div>

                            {/* Right: content */}
                            <div className={`flex-1 ${i === personalData.experience.length - 1 ? "pb-0" : "pb-12"}`}>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                                        {exp.company}
                                    </p>
                                    <span className="text-xs text-gray-400 font-medium">
                                        · {exp.yearRange}
                                    </span>
                                </div>
                                <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                                    {exp.position}
                                </h2>
                                <ul className="flex flex-col gap-2.5">
                                    {exp.responsibilities.map((item, j) => (
                                        <li
                                            key={j}
                                            className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-700/50 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}