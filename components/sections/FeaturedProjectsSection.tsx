"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjectsSection() {
    return (
        <section id="projects" className="py-16 lg:py-20 section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
                >
                    <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                            Selected Work
                        </p>
                        <h2 className="text-xl md:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight font-outfit">
                            Featured Projects
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-brand-600 dark:text-brand-400 hover:gap-2.5 transition-all group"
                    >
                        View all projects
                        <FiArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.id ?? i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden glass card-hover cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <Link
                                        href="/projects"
                                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold hover:bg-white/25 transition-all border border-white/10"
                                    >
                                        View Project
                                        <FiArrowUpRight size={11} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-4 sm:p-5">
                                <p className="text-[9px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                                    {project.stack?.[0] ?? "Project"}
                                </p>
                                <h3 className="text-[13px] font-bold text-gray-900 dark:text-white leading-snug mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
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