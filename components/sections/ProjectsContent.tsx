"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/lib/data/projects";
import { personalData } from "@/lib/data/personal";

export function ProjectsContent() {
    return (
        <div className="min-h-screen py-16 md:py-24 section-padding">
            <div className="max-w-5xl mx-auto">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-purple-700 dark:text-purple-400 mb-3">
                        All Work
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Projects
                    </h1>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                        A complete showcase of my work, spanning mobile apps, web platforms,
                        SaaS products, and internal business tools.
                    </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-wrap gap-6 mb-14 pb-14 border-b border-gray-100 dark:border-gray-800"
                >
                    {[
                        { value: "27+", label: "Total Projects" },
                        { value: "24+", label: "Open Source" },
                        { value: "11+", label: "Tech Stacks" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                            <span className="text-xs text-gray-400 mt-0.5">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Project list — alternating layout */}
                <div className="flex flex-col gap-16">
                    {projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                            >
                                {/* Image — 30% */}
                                <div className="w-full lg:w-[30%] shrink-0">
                                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 group">
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

                                {/* Text — 70% */}
                                <div className={`w-full lg:w-[70%] flex flex-col gap-4 ${!isEven ? "lg:items-end lg:text-right" : ""}`}>
                                    <span className="text-xs font-semibold tracking-widest uppercase text-purple-700 dark:text-purple-400">
                                        Project {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                        {project.title}
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                                        {project.description}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 ${!isEven ? "lg:justify-end" : ""}`}>
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-medium border border-purple-700/20 text-purple-700 dark:text-purple-400 bg-purple-700/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex items-center gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
                                        {project.available ? (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-700 text-white hover:bg-purple-600 hover:shadow-md hover:shadow-purple-700/30 transition-all"
                                            >
                                                <FiGithub size={13} />
                                                Available on GitHub
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed select-none">
                                                <FiGithub size={13} />
                                                Private Repo
                                            </span>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-purple-700/50 hover:text-purple-700 dark:hover:text-purple-400 transition-all"
                                            >
                                                <FiExternalLink size={13} />
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
                    className="mt-20 flex flex-col items-center gap-4 text-center"
                >
                    <p className="text-sm text-gray-400">
                        Want to see more? All public repos are on my GitHub.
                    </p>
                    <a
                        href={personalData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-purple-700/50 hover:text-purple-700 dark:hover:text-purple-400 transition-all"
                    >
                        <FiGithub size={16} />
                        View all on GitHub
                        <FiArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}