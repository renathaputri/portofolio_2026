"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { featuredProjects } from "@/lib/data/projects";

const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0 }),
};

export function FeaturedProjectsSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + featuredProjects.length) % featuredProjects.length);
    };

    const project = featuredProjects[current];

    return (
        <section id="projects" className="py-24 section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-purple-700 dark:text-purple-400 mb-3">
                        Selected Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Featured Projects
                    </h2>
                </motion.div>

                {/* Slider */}
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100 dark:bg-gray-900">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            {/* Gradient — lebih ringan di mobile biar gambar tetap keliatan */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            {/* Overlay content */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-8 flex items-end justify-between gap-2">
                                <div className="min-w-0">
                                    <p className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-2">
                                        Project {String(current + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                                    </p>
                                    <h3 className="text-xs sm:text-3xl font-semibold text-white leading-tight line-clamp-1 sm:line-clamp-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <Link
                                    href="/projects"
                                    className="shrink-0 flex items-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-purple-700 text-white text-[11px] sm:text-sm font-semibold hover:bg-purple-600 transition-all"
                                >
                                    View All
                                    <FiArrowRight size={11} className="sm:hidden" />
                                    <FiArrowRight size={15} className="hidden sm:block" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrow buttons — ukuran konsisten, keduanya sama */}
                    <button
                        onClick={() => paginate(-1)}
                        aria-label="Previous"
                        title="Previous project"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                        <FiArrowLeft size={14} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        aria-label="Next"
                        title="Next project"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all"
                    >
                        <FiArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}