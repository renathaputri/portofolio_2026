"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiLinkedin } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";
import { TechStackSection } from "@/components/sections/TechStackSection";

export function AboutContent() {
    return (
        <div className="min-h-screen py-10 md:py-16 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-1.5">
                        Who I Am
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        About <span className="gradient-text">Me</span>
                    </h1>
                </motion.div>

                {/* Professional intro */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-10"
                >
                    <div className="flex flex-col gap-2.5 text-[13px] sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[95%]">
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
                    className="mb-12"
                >
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-5">
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
                                className="relative flex gap-6"
                            >
                                {/* Left: dot + line only */}
                                <div className="flex flex-col items-center w-4 shrink-0">
                                    <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-900 dark:bg-white shrink-0" />
                                    {i < personalData.education.length - 1 && (
                                        <div className="flex-1 w-px bg-gray-300 dark:bg-gray-700 mt-1.5" />
                                    )}
                                </div>

                                {/* Right: content */}
                                <div className={`flex-1 ${i === personalData.education.length - 1 ? "pb-0" : "pb-6"}`}>
                                    <h3 className="text-[13px] font-bold text-gray-900 dark:text-white mb-0.5">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                                        {edu.institution}
                                    </p>
                                    <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 font-medium mt-0.5 block">
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
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-6">
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
                                className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
                            >
                                <div>
                                    <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-900 dark:text-white hover:underline shrink-0"
                                >
                                    <FiExternalLink size={11} />
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
                    className="inline-flex items-center gap-1.5 w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
                >
                    <FiLinkedin size={14} />
                    See All on LinkedIn
                </a>
            </div>
                </motion.section >
            </div >
        </div >
    );
}