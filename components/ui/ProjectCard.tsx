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
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-default overflow-hidden bg-bg-primary border border-border-default hover:border-border-strong transition-all duration-300 hover:shadow-l2 shadow-l1"
        >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] bg-bg-secondary overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
                <div className="absolute inset-0 bg-overlay-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Availability */}
                <div className="flex items-center gap-2">
                    <span
                        className={`inline-block w-2 h-2 rounded-full ${project.available ? "bg-text-primary" : "bg-text-tertiary"}`}
                    />
                    <span className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em]">
                        {project.available ? "Available" : "Private"}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-medium text-text-primary leading-[1.5]">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-text-secondary leading-[1.6] flex-1 line-clamp-3">
                    {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-small text-[12px] font-medium bg-bg-secondary text-text-secondary border border-border-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                    {project.available ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="flex items-center gap-2 px-4 py-2 rounded-small text-[14px] font-medium bg-bg-inverse text-text-inverse hover:opacity-90 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            <FiGithub size={16} />
                            GitHub
                        </a>
                    ) : (
                        <span className="flex items-center gap-2 px-4 py-2 rounded-small text-[14px] font-medium bg-bg-secondary text-text-tertiary cursor-not-allowed select-none border border-border-default">
                            <FiGithub size={16} />
                            Private
                        </span>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo of ${project.title}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-small text-[14px] font-medium border border-border-default text-text-primary hover:bg-bg-secondary hover:border-border-strong transition-all focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            <FiExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}