import type { Metadata } from "next";
import { ExperienceContent } from "@/components/sections/ExperienceContent";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Professional experience of Renatha Putri, a Frontend Developer with hands-on experience in freelance development, internships, and academic work.",
};

export default function ExperiencePage() {
    return <ExperienceContent />;
}
