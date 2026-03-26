"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data/projects";
import { personalData } from "@/lib/data/personal";

export function ProjectsContent() {
    return (
        <div className="min-h-screen py-10 md:py-16 section-padding">
            <div className="max-w-5xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                        All Work
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Projects
                    </h1>
                    <p className="mt-2 text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                        A complete showcase of my work, spanning mobile apps, web platforms,
                        SaaS products, and internal business tools.
                    </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-wrap gap-5 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800"
                >
                    {[
                        { value: "27+", label: "Total Projects" },
                        { value: "24+", label: "Open Source" },
                        { value: "11+", label: "Tech Stacks" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <span className="text-lg font-bold gradient-text">{stat.value}</span>
                            <span className="text-[10px] text-gray-400 mt-0.5">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Project list — alternating layout */}
                <div className="flex flex-col gap-12">
                    {projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                            >
                                {/* Image — 45% */}
                                <div className="w-full lg:w-[45%] shrink-0">
                                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 group">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 30vw"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </div>
                                </div>

                                {/* Text — 55% */}
                                <div className={`w-full lg:w-[55%] flex flex-col gap-3 ${!isEven ? "lg:items-end lg:text-right" : ""}`}>
                                    <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
                                        Project {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <h2 className="text-[15px] sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        {project.title}
                                    </h2>

                                    <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>

                                    <div className={`flex flex-wrap gap-1.5 ${!isEven ? "lg:justify-end" : ""}`}>
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium border border-brand-500/20 text-brand-600 dark:text-brand-400 bg-brand-500/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex items-center gap-2.5 pt-1 ${!isEven ? "lg:justify-end" : ""}`}>
                                        {project.available ? (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-semibold bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/25 transition-all"
                                            >
                                                <FiGithub size={12} />
                                                Available on GitHub
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed select-none">
                                                <FiGithub size={12} />
                                                Private Repo
                                            </span>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
                                            >
                                                <FiExternalLink size={12} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 flex flex-col items-center gap-4 text-center"
                >
                    <a
                        href={personalData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-[11px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
                    >
                        <FiGithub size={14} />
                        See All on GitHub
                    </a>
                </motion.div>
            </div>
        </div>
    );
}