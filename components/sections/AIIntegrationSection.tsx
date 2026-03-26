"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCheckSquare, FiZap, FiGitPullRequest } from "react-icons/fi";

const workflows = [
    {
        icon: <FiBookOpen size={18} className="text-brand-500" />,
        title: "Rapid Research",
        desc: "Accelerating documentation analysis to focus purely on high value execution and problem solving.",
    },
    {
        icon: <FiGitPullRequest size={18} className="text-brand-500" />,
        title: "Intelligent Code Review",
        desc: "Using AI to spot edge cases, optimize algorithms, and ensure robust architecture before deployment.",
    },
    {
        icon: <FiCheckSquare size={18} className="text-brand-500" />,
        title: "Automated Testing",
        desc: "Generating comprehensive test scenarios instantly to guarantee software reliability and stability.",
    },
    {
        icon: <FiZap size={18} className="text-brand-500" />,
        title: "Workflow Automation",
        desc: "Eliminating repetitive setup tasks so I can dedicate all energy to critical engineering decisions.",
    },
];

export function AIIntegrationSection() {
    return (
        <section id="ai" className="py-16 lg:py-20 section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-10"
                >
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-1.5">
                        Modern Engineering
                    </p>
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight font-outfit">
                        AI Empowered Workflow
                    </h2>
                    <p className="mt-2 text-[11px] sm:text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        I utilize AI as a strategic asset to multiply productivity and raise code quality. This allows me to deliver polished, scalable products faster without compromising core engineering standards.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {workflows.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group p-4 sm:p-5 rounded-2xl glass hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 cursor-pointer"
                        >
                            <span className="mb-3 inline-flex origin-left transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">{item.icon}</span>
                            <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}