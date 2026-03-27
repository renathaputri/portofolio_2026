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
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    const isDark = resolvedTheme === "dark";
    const nameParts = personalData.fullName.trim().split(" ");
    const lastWord = nameParts.pop();
    const firstWords = nameParts.join(" ");

    return (
        <div className="fixed top-0 left-0 right-0 z-[100]">

            {/* ── Header ── */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`transition-all duration-500 ${mounted && scrolled
                    ? "glass-light border-b border-black/5 dark:border-white/10 shadow-sm"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <nav className="section-padding mx-auto w-full max-w-7xl flex items-center justify-between h-12 lg:h-14">

                    {/* LEFT: Brand + nav links */}
                    <div className="flex items-center gap-5">
                        <Link href="/" className="flex items-center gap-1.5 group outline-none" aria-label="Home">
                            {mounted && (
                                <Image
                                    src={isDark ? "/logowhite.svg" : "/logo.svg"}
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-none outline-none ring-0"
                                    unoptimized
                                />
                            )}
                            <span className="font-bold text-[11px] tracking-tight">
                                <span className="text-gray-900 dark:text-white">{firstWords} </span>
                                <span className="text-blue-600 dark:text-blue-400">{lastWord}</span>
                            </span>
                        </Link>

                        {/* Desktop nav links */}
                        <ul className="hidden md:flex items-center gap-0.5">
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
                                            className={`relative px-2.5 py-1 rounded-lg text-[10px] font-medium tracking-wide transition-all duration-200 ${isActive
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
                    <div className="hidden md:flex items-center gap-1.5">
                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all"
                        >
                            <FiGithub size={12} />
                            <span>GitHub</span>
                        </a>

                        <a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all hover:shadow-md hover:shadow-blue-600/20"
                        >
                            Contact Me
                        </a>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300"
                        >
                            {mounted && (isDark ? <FiSun size={12} /> : <FiMoon size={12} />)}
                        </button>
                    </div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-1">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
                        >
                            {mounted && (isDark ? <FiSun size={12} /> : <FiMoon size={12} />)}
                        </button>
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
                        >
                            {mobileOpen ? <FiX size={15} /> : <FiMenu size={15} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* ── Mobile dropdown — full width ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 top-12 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu — full width, no margin */}
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-12 lg:top-14 left-0 right-0 z-50 md:hidden"
                        >
                            <div className="overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200/70 dark:border-white/[0.08] shadow-lg shadow-black/10 dark:shadow-black/40">

                                {/* Nav links — rata kiri */}
                                <nav className="flex flex-col px-4 pt-2 pb-1">
                                    {navLinks.map((link) => {
                                        const sectionKey = link.href.replace("/#", "").replace("/", "");
                                        const isActive =
                                            activeSection === sectionKey ||
                                            (link.href === "/about" && activeSection === "about") ||
                                            (link.href === "/experience" && activeSection === "experience");
                                        return (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className={`px-2 py-2.5 rounded-lg text-[11px] font-medium transition-all ${isActive
                                                    ? "text-blue-600 dark:text-blue-400"
                                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                {/* Divider */}
                                <div className="mx-4 border-t border-gray-100 dark:border-white/[0.06]" />

                                {/* Action buttons */}
                                <div className="flex gap-2 px-4 py-3">
                                    <a
                                        href={personalData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-all"
                                    >
                                        <FiGithub size={12} />
                                        GitHub
                                    </a>
                                    <a
                                        href={personalData.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center py-2 rounded-lg bg-blue-600 text-white text-[11px] font-semibold hover:bg-blue-500 transition-all"
                                    >
                                        Contact Me
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}