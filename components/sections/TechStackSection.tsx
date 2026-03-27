"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "Front-end",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Svelte", "Angular", "Alpine.js", "jQuery", "Tailwind CSS", "Bootstrap", "Vite", "WordPress"],
    },
    {
        title: "Back-end",
        items: ["Node.js", "Express", "NestJS", "PHP", "Laravel", "Python", "Django", "Java"],
    },
    {
        title: "Databases",
        items: ["MongoDB", "PostgreSQL", "SQLite", "Prisma", "Supabase"],
    },
    {
        title: "Design",
        items: ["Figma", "Photoshop", "Illustrator", "SketchUp"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "npm", "pnpm", "Postman", "Nginx", "Netlify", "Vercel", "VS Code", "Sublime Text", "Notion", "Discord", "Anaconda", "Bash", "PowerShell"],
    },
];

export function TechStackSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
        >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-10">
                Tech Stack
            </h2>

            <div className="flex flex-col gap-0">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: ci * 0.1 }}
                        className="relative flex gap-8"
                    >
                        {/* Left: dot + line */}
                        <div className="flex flex-col items-center w-4 shrink-0">
                            <div className="mt-2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20 shrink-0" />
                            {ci < categories.length - 1 && (
                                <div className="flex-1 w-px bg-gray-200 dark:bg-gray-800 mt-2" />
                            )}
                        </div>

                        {/* Right: content */}
                        <div className={`flex-1 ${ci === categories.length - 1 ? "pb-0" : "pb-8"}`}>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-brand-500/15 text-brand-700 dark:text-brand-300 bg-brand-500/5 dark:bg-brand-400/5 hover:bg-brand-500/10 dark:hover:bg-brand-400/10 hover:border-brand-500/30 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
