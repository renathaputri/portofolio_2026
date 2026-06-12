"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjectsSection() {
    return (
        <section id="projects" className="py-8 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12"
                >
                    <div>
                        <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                            Selected Projects
                        </p>
                        <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                            Featured Projects
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1.5 text-[14px] font-medium text-text-primary underline underline-offset-4 decoration-border-strong hover:decoration-text-primary transition-all group pb-1"
                    >
                        View all projects
                        <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* Project list — List layout */}
                <div className="flex flex-col">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-border-default transition-colors ${i === 0 ? "border-y" : "border-b"}`}
                        >
                            {/* Left Text */}
                            <div className="flex flex-col gap-2.5 max-w-3xl">
                                <span className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-text-tertiary">
                                    {project.stack.join(" • ")}
                                </span>

                                <h3 className="text-lg md:text-[22px] font-semibold text-text-primary leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-[13px] md:text-[14px] text-text-secondary leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Right Action */}
                            <div className="flex items-center md:justify-end shrink-0 mt-2 md:mt-0">
                                {project.available ? (
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[13px] font-medium bg-bg-inverse text-text-inverse hover:opacity-85 transition-all"
                                    >
                                        View Detail
                                        <FiArrowUpRight size={16} />
                                    </Link>
                                ) : (
                                    <button
                                        disabled
                                        className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[13px] font-medium bg-bg-secondary text-text-disabled cursor-not-allowed select-none border border-border-default"
                                    >
                                        View Detail
                                        <FiArrowUpRight size={16} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
