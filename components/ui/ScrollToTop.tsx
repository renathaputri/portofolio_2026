"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-[96px] right-6 md:bottom-8 md:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-pill bg-bg-inverse text-text-inverse opacity-90 transition-opacity hover:opacity-100 focus:outline-none focus:ring-[3px] focus:ring-border-inverse"
        >
            <FiArrowUp size={20} />
        </button>
    );
}
