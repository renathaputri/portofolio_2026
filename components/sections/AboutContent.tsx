"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiLinkedin } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";
import { TechStackSection } from "@/components/sections/TechStackSection";

export function AboutContent() {
    return (
        <div className="min-h-screen py-16 md:py-24 section-padding">
            <div className="max-w-4xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-3">
                        Who I Am
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        About <span className="gradient-text">Me</span>
                    </h1>
                </motion.div>

                {/* Professional intro */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    <div className="flex flex-col gap-4 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        {personalData.about.intro.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </motion.section>

                {/* Education — timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-10">
                        Education
                    </h2>

                    <div className="flex flex-col gap-0">
                        {personalData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="relative flex gap-8"
                            >
                                {/* Left: dot + line only */}
                                <div className="flex flex-col items-center w-4 shrink-0">
                                    <div className="mt-2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20 shrink-0" />
                                    {i < personalData.education.length - 1 && (
                                        <div className="flex-1 w-px bg-gray-200 dark:bg-gray-800 mt-2" />
                                    )}
                                </div>

                                {/* Right: content */}
                                <div className={`flex-1 ${i === personalData.education.length - 1 ? "pb-0" : "pb-8"}`}>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {edu.institution}
                                    </p>
                                    <span className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-0.5 block">
                                        {edu.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <TechStackSection />

                {/* Certifications — slim cards */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-10">
                        Certifications
                    </h2>

                    <div className="flex flex-col gap-2 mb-8">
                        {personalData.certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex items-center justify-between gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0"
                            >
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                        {cert.issuer}
                                    </p>
                                </div>
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline shrink-0"
                                >
                                    <FiExternalLink size={12} />
                                    View
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center sm:justify-start">
                        <a
                            href={personalData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <FiLinkedin size={18} />
                            See All on LinkedIn
                        </a>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}