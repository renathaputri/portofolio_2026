import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { MiniAboutStackSection } from "@/components/sections/MiniAboutStackSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ExperiencePreviewSection } from "@/components/sections/ExperiencePreviewSection";
import { VisualDesignSection } from "@/components/sections/VisualDesignSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";


export const metadata: Metadata = {
    title: "Renatha Putri | Web Developer",
    description:
        "Web Developer specializing in React and Next.js. Building clean, intuitive products for startups and modern businesses.",
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatementSection />
            <MiniAboutStackSection />
            <FeaturedProjectsSection />
            <ExperiencePreviewSection />
            <VisualDesignSection />
            <BlogSection />
            <FinalCTASection />
        </>
    );
}
