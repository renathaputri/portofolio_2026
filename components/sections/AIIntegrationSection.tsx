"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCode, FiCheckCircle, FiZap, FiCpu } from "react-icons/fi";

const features = [
    { icon: FiCode, label: "AI Code Review" },
    { icon: FiCheckCircle, label: "Automated Testing" },
    { icon: FiZap, label: "Rapid Prototyping" },
    { icon: FiCpu, label: "Smart Debugging" }
];

export function AIIntegrationSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="ai" className="py-20 md:py-32 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-16"
                >
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                        Modern Engineering
                    </p>
                    <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                        AI Empowered Workflow
                    </h2>
                    <p className="mt-4 text-[16px] text-text-secondary leading-[1.6]">
                        I integrate AI tools into my workflow — from code review to testing — to ship faster without cutting corners.
                    </p>
                </motion.div>

                <motion.div 
                    style={{ y: yParallax }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center justify-center p-8 bg-bg-secondary border border-border-default rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Icon className="text-3xl text-text-primary mb-4" />
                                <span className="text-[14px] font-medium text-text-secondary text-center">{feature.label}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}