"use client";

import { motion } from "framer-motion";
import { FiLayout, FiZap, FiTarget } from "react-icons/fi";

const approaches = [
    {
        icon: <FiTarget size={24} className="text-brand-500" />,
        title: "User-Centric Design",
        desc: "Every line of code and design decision is made with the end-user in mind, ensuring an intuitive and seamless experience.",
    },
    {
        icon: <FiLayout size={24} className="text-brand-500" />,
        title: "Pixel-Perfect Development",
        desc: "Bridging the gap between design and engineering to deliver interfaces that are visually stunning and functionally robust.",
    },
    {
        icon: <FiZap size={24} className="text-brand-500" />,
        title: "Optimized Performance",
        desc: "Building lightweight, fast, and scalable applications that don't compromise on quality or speed.",
    },
];

export function ApproachSection() {
    return (
        <section className="py-24 section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-3">
                        How I Work
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight font-outfit">
                        The Core Principles
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {approaches.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="flex flex-col items-center text-center gap-4 group"
                        >
                            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-sm text-gray-800 dark:text-gray-200">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
