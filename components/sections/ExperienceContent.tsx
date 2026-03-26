"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data/personal";

export function ExperienceContent() {
    return (
        <div className="min-h-screen py-10 md:py-16 section-padding">
            <div className="max-w-3xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                        Career Path
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Work <span className="gradient-text">Experience</span>
                    </h1>
                    <p className="mt-2 text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
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
                            className="relative flex gap-4 sm:gap-6"
                        >
                            <div className="flex flex-col items-center w-4 shrink-0">
                                <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-brand-500/20 shrink-0" />
                                {i < personalData.experience.length - 1 && (
                                    <div className="flex-1 w-px bg-gray-200 dark:bg-gray-800 mt-2" />
                                )}
                            </div>

                            <div className={`flex-1 ${i === personalData.experience.length - 1 ? "pb-0" : "pb-6 sm:pb-8"}`}>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-[10px] font-semibold text-brand-600 dark:text-brand-400">
                                        {exp.company}
                                    </p>
                                    <span className="text-[10px] text-gray-400 font-medium">
                                        · {exp.yearRange}
                                    </span>
                                </div>
                                <h2 className="text-[13px] sm:text-[15px] font-bold text-gray-900 dark:text-white mb-2.5">
                                    {exp.position}
                                </h2>
                                <ul className="flex flex-col gap-2">
                                    {exp.responsibilities.map((item, j) => (
                                        <li
                                            key={j}
                                            className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[95%]"
                                        >
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500/50 shrink-0" />
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