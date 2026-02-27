"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-purple-700/40 dark:hover:border-purple-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/10"
        >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Availability */}
                <div className="flex items-center gap-2">
                    <span
                        className={`inline-block w-2 h-2 rounded-full ${project.available ? "bg-purple-700" : "bg-gray-400"}`}
                    />
                    <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        {project.available ? "Available" : "Private"}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                    {project.available ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-purple-700 text-white hover:bg-purple-600 hover:shadow-md hover:shadow-purple-700/30 transition-all"
                        >
                            <FiGithub size={13} />
                            GitHub
                        </a>
                    ) : (
                        <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed select-none">
                            <FiGithub size={13} />
                            Private
                        </span>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo of ${project.title}`}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-purple-700/50 hover:text-purple-700 dark:hover:text-purple-400 transition-all"
                        >
                            <FiExternalLink size={13} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}