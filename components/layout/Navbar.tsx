"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiGithub, FiSun, FiMoon } from "react-icons/fi";
import { LuHouse, LuUser, LuFolder, LuBriefcase } from "react-icons/lu";
import { personalData } from "@/lib/data/personal";

const navLinks = [
    { label: "Home", href: "/", icon: LuHouse },
    { label: "About", href: "/about", icon: LuUser },
    { label: "Projects", href: "/projects", icon: LuFolder },
    { label: "Experience", href: "/experience", icon: LuBriefcase },
];

export function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Only run section intersection observer on the home page
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }
        const sectionIds = ["hero", "statement", "projects", "design", "blog", "cta"];
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
    }, [pathname]);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    const isDark = resolvedTheme === "dark";

    const getIsActive = (href: string) => {
        if (pathname !== "/") {
            return pathname === href;
        }
        if (href === "/") return activeSection === "hero" || activeSection === "";
        if (href === "/about") return activeSection === "statement";
        if (href === "/projects") return activeSection === "projects";
        return false;
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[100]">
                {/* ── Header ── */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="transition-all duration-300 bg-bg-primary/80 backdrop-blur-md border-b border-border-default"
                >
                    <nav className="mx-auto w-full max-w-[1200px] px-6 lg:px-8 flex items-center justify-between h-[80px]">
                        {/* LEFT: Brand + nav links */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className="font-semibold text-[16px] text-text-primary tracking-tight focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm" aria-label="Home">
                                {personalData.fullName}
                            </Link>

                            {/* Desktop nav links */}
                            <ul className="hidden md:flex items-center gap-2">
                                {navLinks.map((link) => {
                                    const isActive = getIsActive(link.href);
                                    return (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className={`relative px-3 py-2 rounded-small text-[14px] font-normal transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse group ${isActive
                                                    ? "text-text-primary font-medium"
                                                    : "text-text-secondary hover:text-text-primary"
                                                    }`}
                                            >
                                                {link.label}
                                                <span className={`absolute left-0 bottom-0 h-[1.5px] bg-text-primary transition-all duration-300 ${isActive ? "w-[calc(100%-24px)] ml-[12px]" : "w-0 group-hover:w-[calc(100%-24px)] group-hover:ml-[12px]"}`} />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* RIGHT: GitHub + Contact + Theme toggle */}
                        <div className="flex items-center gap-4">
                            <a
                                href={personalData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-small text-[14px] font-normal text-text-secondary hover:text-text-primary hover:bg-overlay-subtle transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
                            >
                                <FiGithub size={16} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href={personalData.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex px-6 py-3 rounded-pill text-[14px] font-medium bg-bg-inverse text-text-inverse hover:opacity-85 active:opacity-75 transition-opacity focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
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
                    </nav>
                </motion.header>
            </div>

            {/* Mobile Bottom Nav */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 z-[100]">
                <nav className="flex items-center justify-around bg-bg-primary/80 backdrop-blur-md border border-border-default rounded-full p-2 shadow-l3">
                    {navLinks.map((link) => {
                        const isActive = getIsActive(link.href);
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`flex flex-col items-center justify-center w-14 h-12 rounded-full transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse ${isActive
                                    ? "text-text-primary bg-overlay-subtle"
                                    : "text-text-secondary hover:text-text-primary hover:bg-overlay-subtle"
                                    }`}
                            >
                                <Icon size={20} className="mb-0.5" />
                                <span className="text-[10px] font-medium">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}