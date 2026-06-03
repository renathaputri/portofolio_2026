"use client";

import { motion } from "framer-motion";
import { FiLayout, FiZap, FiTarget } from "react-icons/fi";

const approaches = [
    {
        icon: <FiTarget size={20} className="text-text-primary" />,
        title: "User-Centric Design",
        desc: "Every line of code and design decision is made with the end-user in mind, ensuring an intuitive and seamless experience.",
    },
    {
        icon: <FiLayout size={20} className="text-text-primary" />,
        title: "Pixel-Perfect Development",
        desc: "Bridging the gap between design and engineering to deliver interfaces that are visually stunning and functionally robust.",
    },
    {
        icon: <FiZap size={20} className="text-text-primary" />,
        title: "Optimized Performance",
        desc: "Building lightweight, fast, and scalable applications that don't compromise on quality or speed.",
    },
];

export function ApproachSection() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-left md:text-center md:mx-auto mb-12"
                >
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                        How I Work
                    </p>
                    <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                        The Core Principles
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {approaches.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="flex flex-col items-start md:items-center text-left md:text-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-default bg-bg-secondary flex items-center justify-center border border-border-default group-hover:scale-110 transition-transform duration-500 shadow-l1">
                                {item.icon}
                            </div>
                            <h3 className="text-[16px] font-medium text-text-primary">
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-text-secondary leading-[1.6] max-w-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}