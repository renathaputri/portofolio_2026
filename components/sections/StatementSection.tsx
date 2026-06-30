"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const sentences: { text: string; accent?: boolean }[][] = [
    [{ text: "I build web products" }],
    [
        { text: " that people " },
        { text: "actually enjoy using", accent: true },
        { text: "." },
    ],
    [
        { text: "With " },
        { text: "AI in my workflow", accent: true },
        { text: "," },
    ],
    [
        {
            text: "I ship faster and iterate smarter.",
        },
    ],
];

function WordReveal({
    word,
    accent,
    scrollYProgress,
    range,
}: {
    word: string;
    accent?: boolean;
    scrollYProgress: MotionValue<number>;
    range: [number, number];
}) {
    const y = useTransform(scrollYProgress, range, ["100%", "0%"]);
    const opacity = useTransform(scrollYProgress, range, [0, 1]);

    return (
        <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
            <motion.span
                style={{ y, opacity, display: "inline-block" }}
                className={accent ? "text-accent-primary" : ""}
            >
                {word}
            </motion.span>
        </span>
    );
}

export function StatementSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Flatten semua kata + info accent & index global
    const allWords: { word: string; accent?: boolean; sentenceIdx: number }[] = [];
    sentences.forEach((chunks, sIdx) => {
        chunks.forEach((chunk) => {
            chunk.text.split(/(\s+)/).forEach((w) => {
                if (w.trim()) allWords.push({ word: w, accent: chunk.accent, sentenceIdx: sIdx });
                else if (w) allWords.push({ word: w, accent: false, sentenceIdx: sIdx }); // preserve spaces
            });
        });
    });

    const totalWords = allWords.filter((w) => w.word.trim()).length;
    let wordIndex = 0;

    return (
        <section
            aria-label="Developer Statement"
            ref={containerRef}
            className="relative w-full bg-bg-primary text-text-primary"
            style={{ minHeight: "400vh" }}
        >
            <div className="sticky top-[80px] h-[calc(100svh-176px)] md:h-[calc(100svh-80px)] flex items-center justify-center px-6 lg:px-16">
                <p className="max-w-[820px] text-[22px] md:text-[32px] lg:text-[38px] font-bold tracking-tight leading-[1.8] text-center">
                    {allWords.map((item, i) => {
                        if (!item.word.trim()) {
                            return <span key={i}> </span>;
                        }

                        const idx = wordIndex++;
                        const stagger = 0.06;
                        const windowSize = 0.18;
                        const start = (idx / totalWords) * (1 - windowSize);
                        const end = start + windowSize;
                        const range: [number, number] = [
                            Math.max(0, start - stagger),
                            Math.min(1, end),
                        ];

                        return (
                            <WordReveal
                                key={i}
                                word={item.word}
                                accent={item.accent}
                                scrollYProgress={scrollYProgress}
                                range={range}
                            />
                        );
                    })}
                </p>
            </div>
        </section>
    );
}