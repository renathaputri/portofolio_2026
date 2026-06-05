"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

const roleType: Record<string, string> = {
    "Head Of Web Developer": "Web Development",
    "Consultant Graphic Designer": "Brand & Design",
    "Vice Graphic Designer": "Visual Design",
    "Graphic Designer Intern": "Visual Design",
    "QA Documenter": "Quality Assurance",
};

const companyDesc: Record<string, string> = {
    "Ditz Creative Lab": "Creative studio & product house",
    "Growthskill": "Digital growth & marketing platform",
    "Grafologi Indonesia": "Handwriting analysis & education brand",
    "Ceritakan ID": "Storytelling & content platform",
    "Floo ID": "Technology startup",
};

export function ExperiencePreviewSection() {
    const preview = personalData.experience.slice(0, 3);

    return (
        <section id="experience" className="py-8 md:py-16">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
                >
                    <div>
                        <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                            Career Path
                        </p>
                        <h2 className="text-[22px] md:text-[32px] font-semibold text-text-primary tracking-[-0.02em] leading-[1.2]">
                            Experience
                        </h2>
                    </div>
                    <Link
                        href="/experience"
                        className="flex items-center gap-1.5 text-[14px] font-medium text-text-primary underline underline-offset-4 decoration-border-strong hover:decoration-text-primary focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm transition-all group"
                    >
                        See full experience
                        <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* Rows */}
                <div className="flex flex-col">
                    {preview.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 bg-bg-primary border-border-default hover:bg-bg-secondary transition-all duration-300 ${i === 0 ? "border-y" : "border-b"}`}
                        >
                            {/* Left — company name + descriptor + year */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[18px] font-semibold text-text-primary">
                                    {exp.company}
                                </h3>
                                <p className="text-[13px] text-text-secondary">
                                    {companyDesc[exp.company] ?? "Professional experience"}
                                </p>
                                <p className="text-[12px] text-text-tertiary">
                                    {exp.yearRange}
                                </p>
                            </div>

                            {/* Right — Position + Field Badges */}
                            <div className="flex flex-col gap-2 shrink-0 items-start sm:items-end mt-4 sm:mt-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-text-tertiary w-12 sm:w-auto text-left sm:text-right">Role</span>
                                    <span className="px-2.5 py-1 text-[12px] font-medium text-text-primary bg-overlay-subtle border border-border-default rounded-md">
                                        {exp.position}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-text-tertiary w-12 sm:w-auto text-left sm:text-right">Field</span>
                                    <span className="px-2.5 py-1 text-[12px] font-medium text-text-primary bg-overlay-subtle border border-border-default rounded-md">
                                        {roleType[exp.position] ?? "General"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
