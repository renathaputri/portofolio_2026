import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about Renatha Putri, a Frontend Developer with a background in graphic design and a focus on building clean, usable web products.",
};

export default function AboutPage() {
    return <AboutContent />;
}
