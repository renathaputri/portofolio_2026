"use client";

import { useState, useEffect, useCallback } from "react";
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

    return (
        <div className="fixed top-0 left-0 right-0 z-[100]">
            {/* ── Header ── */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`transition-all duration-300 ${scrolled
                    ? "bg-bg-primary/92 backdrop-blur-[12px] border-b border-border-default"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <nav className="mx-auto w-full max-w-[1200px] px-6 lg:px-8 flex items-center justify-between h-[60px]">
                    {/* LEFT: Brand + nav links */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="font-semibold text-[16px] text-text-primary tracking-tight focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm" aria-label="Home">
                            {personalData.fullName}
                        </Link>

                        {/* Desktop nav links */}
                        <ul className="hidden md:flex items-center gap-2">
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
                                            className={`px-3 py-2 rounded-small text-[14px] font-normal transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse ${isActive
                                                ? "text-text-primary font-medium border-b-[1.5px] border-text-primary rounded-none"
                                                : "text-text-secondary hover:bg-overlay-subtle hover:text-text-primary"
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
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="flex items-center gap-2 px-3 py-2 rounded-small text-[14px] font-normal text-text-secondary hover:text-text-primary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            <FiGithub size={16} />
                            <span>GitHub</span>
                        </a>

                        <a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-pill text-[14px] font-medium bg-bg-inverse text-text-inverse hover:opacity-85 active:opacity-75 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            Contact Me
                        </a>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-10 h-10 flex items-center justify-center rounded-default text-text-secondary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            {mounted && (isDark ? <FiSun size={18} /> : <FiMoon size={18} />)}
                        </button>
                    </div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-10 h-10 flex items-center justify-center rounded-small text-text-secondary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            {mounted && (isDark ? <FiSun size={18} /> : <FiMoon size={18} />)}
                        </button>
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            className="w-10 h-10 flex items-center justify-center rounded-small text-text-primary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                        >
                            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* ── Mobile dropdown ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 top-[60px] bg-overlay-strong z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-[60px] left-0 right-0 z-50 md:hidden bg-bg-primary border-b border-border-default shadow-l3"
                        >
                            <nav className="flex flex-col p-4 gap-1">
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
                                            className={`px-4 py-3 rounded-default text-[14px] transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse ${isActive
                                                ? "text-text-primary font-medium bg-overlay-subtle"
                                                : "text-text-secondary font-normal hover:text-text-primary hover:bg-overlay-subtle"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mx-4 border-t border-border-default" />

                            <div className="flex gap-2 p-4">
                                <a
                                    href={personalData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-default border border-border-default text-[14px] font-medium text-text-primary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                                >
                                    <FiGithub size={16} />
                                    GitHub
                                </a>
                                <a
                                    href={personalData.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center py-3 rounded-pill bg-bg-inverse text-text-inverse text-[14px] font-medium hover:opacity-85 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}