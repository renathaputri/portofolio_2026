"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCheckSquare, FiZap, FiGitPullRequest } from "react-icons/fi";

const workflows = [
    {
        icon: <FiBookOpen size={22} className="text-brand-500" />,
        title: "Research Acceleration",
        desc: "AI streamlines documentation analysis and technical exploration, allowing me to focus more on execution and problem solving rather than manual searching.",
    },
    {
        icon: <FiGitPullRequest size={22} className="text-brand-500" />,
        title: "Code Refinement",
        desc: "I leverage AI as an intelligent reviewer to identify edge cases, suggest architectural improvements, and strengthen logic before deployment.",
    },
    {
        icon: <FiCheckSquare size={22} className="text-brand-500" />,
        title: "Testing Support",
        desc: "AI assists in generating structured test scenarios and uncovering overlooked edge cases, enhancing reliability without slowing development momentum.",
    },
    {
        icon: <FiZap size={22} className="text-brand-500" />,
        title: "Productivity Optimization",
        desc: "By accelerating repetitive setup tasks and initial drafts, AI enables me to dedicate deeper focus to complex decisions that require critical thinking.",
    },
];

export function AIIntegrationSection() {
    return (
        <section id="ai" className="py-24 section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-14"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-3">
                        AI-Aware Developer
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight font-outfit">
                        AI in My Workflow
                    </h2>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        I use AI strategically, not as a substitute for engineering judgment, but as a tool to enhance both quality and efficiency. The real value lies in understanding when and how to apply it effectively.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {workflows.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group p-8 rounded-3xl glass hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 cursor-pointer"
                        >
                            <span className="mb-4 block transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}