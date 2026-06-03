"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function FinalCTASection() {
    return (
        <section id="cta" className="py-16">
            <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-large p-8 sm:p-12 text-center bg-bg-inverse text-text-inverse overflow-hidden"
                >
                    <div className="relative flex flex-col items-center gap-6">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[12px] font-medium tracking-[0.08em] uppercase opacity-70"
                        >
                            Let&apos;s Work Together
                        </motion.p>

                        <h2 className="text-[22px] md:text-[32px] font-semibold tracking-[-0.02em] leading-[1.2]">
                            Ready to build something great?
                        </h2>

                        <p className="text-[16px] max-w-xl leading-[1.6] opacity-80">
                            I&apos;m open to full-time roles, internships, and freelance projects.
                            If you&apos;re looking for a developer who ships clean, thoughtful work —
                            let&apos;s connect.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <a
                                href={personalData.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 h-[44px] rounded-pill bg-bg-primary text-text-primary text-[14px] font-medium hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                            >
                                Hire Me
                                <FiArrowRight size={16} />
                            </a>
                            <a
                                href={`mailto:${personalData.email}`}
                                className="flex items-center gap-2 px-6 py-3 h-[44px] rounded-pill bg-transparent text-text-inverse border border-border-inverse text-[14px] font-medium hover:bg-overlay-subtle active:bg-overlay-medium transition-all focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                            >
                                <FiMail size={16} />
                                Send Email
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
