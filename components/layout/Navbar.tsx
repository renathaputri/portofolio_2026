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
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
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
            <header
                className={`fixed top-0 left-0 right-0 z-[100] duration-300 ${
                    mounted && scrolled
                        ? "glass shadow-lg shadow-black/10"
                        : "bg-transparent border-transparent"
                }`}
            >
                <nav className="section-padding mx-auto flex items-center justify-between h-16">
                    {/* LEFT: Brand + nav links */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 group"
                            aria-label="Home"
                        >
                            {mounted && (
                                <Image
                                    src={isDark ? "/logowhite.svg" : "/logo.svg"}
                                    alt="Logo"
                                    width={36}
                                    height={36}
                                    className="transition-transform group-hover:scale-110"
                                />
                            )}
                            <span className="font-bold text-base tracking-tight">
                                <span className="text-gray-900 dark:text-white">{firstWords} </span>
                                <span className="text-purple-700 dark:text-purple-400">{lastWord}</span>
                            </span>
                        </Link>

                        <ul className="hidden md:flex items-center gap-6">
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
                                            className={`text-xs font-medium transition-colors relative py-1 ${
                                                isActive
                                                    ? "text-purple-700 dark:text-purple-400"
                                                    : "text-gray-500 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400"
                                            }`}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-indicator"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-700 dark:bg-purple-400 rounded-full"
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* RIGHT: GitHub + Contact + Theme toggle */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        >
                            <FiGithub size={15} />
                            <span>GitHub</span>
                        </a>

                        <a
                            href={personalData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-purple-700 text-white hover:bg-purple-600 transition-all hover:shadow-md hover:shadow-purple-700/30"
                        >
                            Contact Me
                        </a>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        >
                            {mounted && (isDark ? <FiSun size={15} /> : <FiMoon size={15} />)}
                        </button>
                    </div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300"
                        >
                            {mounted && (isDark ? <FiSun size={15} /> : <FiMoon size={15} />)}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 dark:text-gray-300"
                        >
                            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-[99] glass border-t border-white/10"
                    >
                        <nav className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-700/10 hover:text-purple-700 dark:hover:text-purple-400 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex gap-2 mt-2">
                                <a
                                    href={personalData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    <FiGithub size={15} />
                                    GitHub
                                </a>
                                <a
                                    href={personalData.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg bg-purple-700 text-white text-sm font-semibold"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}