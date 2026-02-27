"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiMail } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function FinalCTASection() {
    return (
        <section id="cta" className="py-24 section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 right-8 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
                            Let&apos;s Work Together
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                            Ready to build{" "}
                            <span className="gradient-text">something great?</span>
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
                            I&apos;m open to full-time roles, internships, and freelance projects.
                            If you&apos;re looking for a developer who ships clean, thoughtful work
                            let&apos;s connect.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <a
                                href={personalData.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-700 text-white text-sm font-semibold hover:bg-purple-600 transition-all hover:shadow-xl hover:shadow-purple-700/40 hover:-translate-y-0.5"
                            >
                                Hire Me
                                <FiMessageCircle size={16} />
                            </a>
                            <a
                                href={`mailto:${personalData.email}`}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-gray-700 dark:text-gray-200 bg-white/10 text-sm font-semibold hover:bg-white/20 transition-all hover:-translate-y-0.5"
                            >
                                <FiMail size={15} />
                                Send Email
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
