"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader() {
    const [show, setShow] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const dismiss = () => {
            // Trigger CSS fade-out first
            setFading(true);
            // After fade completes, remove from DOM
            setTimeout(() => setShow(false), 500);
        };

        // If document already loaded (e.g. fast cached load), dismiss immediately
        if (document.readyState === "complete") {
            const t = setTimeout(dismiss, 400);
            return () => clearTimeout(t);
        }

        // Primary: dismiss once everything (fonts, images) is fully loaded
        window.addEventListener("load", dismiss, { once: true });

        // Hard fallback: max 3s regardless — covers iOS Safari timer throttling
        const maxTimer = setTimeout(dismiss, 3000);

        return () => {
            window.removeEventListener("load", dismiss);
            clearTimeout(maxTimer);
        };
    }, []);

    if (!show) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading page content"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-bg-primary"
            style={{
                opacity: fading ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
                pointerEvents: fading ? "none" : "all",
            }}
        >
            {/* Minimalist block animation */}
            <motion.div
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-10 h-10 bg-bg-inverse"
            />
        </div>
    );
}