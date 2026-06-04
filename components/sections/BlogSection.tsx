"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const posts = [
    {
        title: "The Future of Frontend is AI-Driven",
        excerpt: "How generative AI is reshaping the way we build user interfaces and what it means for developers.",
        readTime: "5 min read",
        date: "Oct 12, 2025"
    },
    {
        title: "Mastering Tailwind CSS for Enterprise Apps",
        excerpt: "A deep dive into organizing and scaling Tailwind CSS in large codebases without losing maintainability.",
        readTime: "8 min read",
        date: "Sep 28, 2025"
    },
    {
        title: "Framer Motion: Beyond the Basics",
        excerpt: "Creating complex, physics-based animations in React with minimal effort.",
        readTime: "6 min read",
        date: "Sep 15, 2025"
    }
];

export function BlogSection() {
    return (
        <section id="blog" className="py-20 md:py-32 bg-bg-primary">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
                >
                    <div>
                        <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                            Latest Writing
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {posts.map((post, idx) => (
                        <motion.a
                            key={idx}
                            href="https://medium.com/@renathaputri"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col justify-between p-8 min-h-[320px] border border-border-default rounded-2xl hover:bg-bg-inverse transition-all duration-300 bg-bg-primary"
                        >
                            <div>
                                <p className="text-[12px] text-text-tertiary group-hover:text-text-inverse/70 mb-4 flex items-center gap-2 transition-colors duration-300">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </p>
                                <h3 className="text-[20px] font-semibold text-text-primary group-hover:text-text-inverse mb-4 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-[14px] text-text-secondary group-hover:text-text-inverse/80 line-clamp-4 transition-colors duration-300">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-[14px] font-medium text-text-primary group-hover:text-text-inverse mt-6 transition-colors duration-300">
                                Read Article <FiArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a
                        href="https://medium.com/@renathaputri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-pill text-[14px] font-medium border border-border-default text-text-primary hover:bg-overlay-subtle transition-colors"
                    >
                        See All Posts <FiArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
