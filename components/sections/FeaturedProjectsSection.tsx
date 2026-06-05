"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjectsSection() {
    return (
        <section id="projects" className="py-10 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
                >
                    <div>
                        <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                            Selected projects
                        </p>
                        <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                            Featured Projects
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1.5 text-[14px] font-medium text-text-primary underline underline-offset-4 decoration-border-strong hover:decoration-text-primary focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm transition-all group"
                    >
                        View all projects
                        <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* List */}
                <div className="flex flex-col">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.id ?? i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-bg-primary border-border-default hover:bg-bg-secondary transition-all duration-300 ${i === 0 ? "border-y" : "border-b"}`}
                        >
                            <div className="flex flex-col gap-1.5 mb-4 sm:mb-0 max-w-3xl">
                                <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-text-tertiary">
                                    {project.stack?.join(" • ") ?? "Project"}
                                </p>
                                <h3 className="text-[18px] font-semibold text-text-primary">
                                    {project.title}
                                </h3>
                                <p className="text-[14px] text-text-secondary">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center">
                                {project.available && (
                                    <a
                                        href={project.liveUrl || project.githubUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-bg-inverse text-text-inverse text-[13px] font-medium hover:opacity-85 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                                    >
                                        Visit Site
                                        <FiArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}