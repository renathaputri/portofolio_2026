"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCheckSquare, FiZap, FiGitPullRequest } from "react-icons/fi";

const workflows = [
    {
        icon: <FiBookOpen size={20} className="text-text-primary" />,
        title: "Rapid Research",
        desc: "Accelerating documentation analysis to focus purely on high value execution and problem solving.",
    },
    {
        icon: <FiGitPullRequest size={20} className="text-text-primary" />,
        title: "Intelligent Code Review",
        desc: "Using AI to spot edge cases, optimize algorithms, and ensure robust architecture before deployment.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-text-primary" />,
        title: "Automated Testing",
        desc: "Generating comprehensive test scenarios instantly to guarantee software reliability and stability.",
    },
    {
        icon: <FiZap size={20} className="text-text-primary" />,
        title: "Workflow Automation",
        desc: "Eliminating repetitive setup tasks so I can dedicate all energy to critical engineering decisions.",
    },
];

export function AIIntegrationSection() {
    return (
        <section id="ai" className="py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-12"
                >
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                        Modern Engineering
                    </p>
                    <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                        AI Empowered Workflow
                    </h2>
                    <p className="mt-4 text-[16px] text-text-secondary leading-[1.6]">
                        I utilize AI as a strategic asset to multiply productivity and raise code quality. This allows me to deliver polished, scalable products faster without compromising core engineering standards.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workflows.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group p-6 rounded-default bg-bg-primary border border-border-default hover:border-border-strong shadow-l1 hover:shadow-l2 transition-all duration-300 cursor-pointer"
                        >
                            <span className="mb-4 inline-flex origin-left transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </span>
                            <h3 className="text-[16px] font-medium text-text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-text-secondary leading-[1.6]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}