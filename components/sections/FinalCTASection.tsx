"use client";

import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { personalData } from "@/lib/data/personal";

export function FinalCTASection() {
    return (
        <section id="cta" className="py-12 md:py-24">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-tertiary">
                        Available for work
                    </p>
                    <h2 className="text-[24px] md:text-[36px] font-semibold tracking-tight leading-[1.2] text-text-primary">
                        Need a developer?
                    </h2>

                    <a
                        href={`mailto:${personalData.email}`}
                        className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 border border-border-default rounded-pill text-[13px] font-medium text-text-primary hover:border-border-strong transition-colors"
                    >
                    <MdOutlineEmail className="text-[16px]" />
                    {personalData.email}
                </a>
            </motion.div>
        </div>
        </section >
    );
}