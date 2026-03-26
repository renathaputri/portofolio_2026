"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
];

export function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ["hero", "projects", "design", "ai", "cta"];
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    const isDark = resolvedTheme === "dark";

    const nameParts = personalData.fullName.trim().split(" ");
    const lastWord = nameParts.pop();
    const firstWords = nameParts.join(" ");

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[100]">
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`transition-all duration-500 ${
                        mounted && scrolled
                            ? "glass-light border-b border-black/5 dark:border-white/10 shadow-sm"
                            : "bg-transparent border-transparent"
                    }`}
                >
                    <nav className="section-padding mx-auto w-full max-w-7xl flex items-center justify-between h-16 lg:h-20">
                        {/* LEFT: Brand + nav links */}
                        <div className="flex items-center gap-7">
                            <Link href="/" className="flex items-center gap-2 group outline-none" aria-label="Home">
                                {mounted && (
                                    <Image
                                        src={isDark ? "/logowhite.svg" : "/logo.svg"}
                                        alt="Logo"
                                        width={28}
                                        height={28}
                                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-none outline-none ring-0"
                                        unoptimized
                                    />
                                )}
                                <span className="font-bold text-sm tracking-tight">
                                    <span className="text-gray-900 dark:text-white">{firstWords} </span>
                                    <span className="text-blue-600 dark:text-blue-400">{lastWord}</span>
                                </span>
                            </Link>

                            <ul className="hidden md:flex items-center gap-1">
                                {navLinks.map((link) => {
                                    const sectionKey = link.href.replace("/#", "").replace("/", "");
                                    const isActive =
                                        activeSection === sectionKey ||
                                        (link.href === "/about" && activeSection === "about") ||
                                        (link.href === "/experience" && activeSection === "experience");

                                    return (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                                                    isActive
                                                        ? "text-blue-700 dark:text-blue-300 bg-blue-500/10 dark:bg-blue-400/10"
                                                        : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* RIGHT: GitHub + Contact + Theme toggle */}
                        <div className="hidden md:flex items-center gap-2">
                            <a
                                href={personalData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all"
                            >
                                <FiGithub size={14} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href={personalData.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all hover:shadow-md hover:shadow-blue-600/20"
                            >
                                Contact Me
                            </a>

                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle dark mode"
                                className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300"
                            >
                                {mounted && (isDark ? <FiSun size={14} /> : <FiMoon size={14} />)}
                            </button>
                        </div>

                        {/* Mobile: theme toggle + hamburger */}
                        <div className="flex md:hidden items-center gap-1.5">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle dark mode"
                                className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400"
                            >
                                {mounted && (isDark ? <FiSun size={14} /> : <FiMoon size={14} />)}
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                                className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-700 dark:text-gray-300"
                            >
                                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                            </button>
                        </div>
                    </nav>
                </motion.header>

                {/* Mobile menu */}
                <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6">
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute w-full left-0 top-2 mt-2 rounded-2xl overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border border-gray-200/60 dark:border-white/[0.06] shadow-xl z-50"
                            >
                                <nav className="flex flex-col gap-1 p-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="flex gap-2 mt-2 px-1">
                                    <a
                                        href={personalData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all"
                                    >
                                        <FiGithub size={15} />
                                        GitHub
                                    </a>
                                    <a
                                        href={personalData.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all"
                                    >
                                        Contact Me
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
                </div>
            </div>
        </>
    );
}