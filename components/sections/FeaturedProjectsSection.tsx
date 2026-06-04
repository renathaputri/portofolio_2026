"use client";

import Image from "next/image";
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
                            Selected Work
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

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.id ?? i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col rounded-default bg-bg-primary border border-border-default hover:border-border-strong shadow-l1 hover:shadow-l2 transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[16/10] bg-bg-secondary overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-overlay-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <Link
                                        href="/projects"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-small bg-bg-primary text-text-primary text-[12px] font-medium border border-border-default hover:bg-bg-secondary focus:outline-none focus:ring-[3px] focus:ring-border-inverse transition-all"
                                    >
                                        View Project
                                        <FiArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className={`inline-block w-2 h-2 rounded-full ${project.available ? "bg-text-primary" : "bg-text-tertiary"}`} />
                                    <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-text-tertiary">
                                        {project.stack?.[0] ?? "Project"}
                                    </p>
                                </div>
                                <h3 className="text-[16px] font-medium text-text-primary leading-[1.5]">
                                    {project.title}
                                </h3>
                                <p className="text-[14px] text-text-secondary line-clamp-2 leading-[1.6]">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}