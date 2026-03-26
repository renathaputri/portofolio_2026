"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function FinalCTASection() {
    return (
        <section id="cta" className="py-16 lg:py-20 section-padding relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden glass"
                >
                    {/* Background glow — subtle refinement */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[10px] font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400"
                        >
                            Let&apos;s Work Together
                        </motion.p>

                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight font-outfit">
                            Ready to build something great?
                        </h2>

                        <p className="text-[13px] sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                            I&apos;m open to full-time roles, internships, and freelance projects.
                            If you&apos;re looking for a developer who ships clean, thoughtful work —
                            let&apos;s connect.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                            <motion.a
                                href={personalData.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-fun shadow-blue-500/20"
                            >
                                Hire Me
                                <FiArrowRight size={14} />
                            </motion.a>
                            <motion.a
                                href={`mailto:${personalData.email}`}
                                whileHover={{ y: -4, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-gray-200/50 dark:border-white/10 font-bold text-gray-700 dark:text-gray-200 transition-all hover:shadow-lg text-[11px] sm:text-xs"
                            >
                                <FiMail size={14} />
                                Send Email
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
