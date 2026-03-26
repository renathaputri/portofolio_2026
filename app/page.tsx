import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { VisualDesignSection } from "@/components/sections/VisualDesignSection";
import { AIIntegrationSection } from "@/components/sections/AIIntegrationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
    title: "Renatha Putri | Frontend Developer",
    description:
        "Frontend Developer specializing in React and Next.js. Building clean, intuitive products for startups and modern businesses.",
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ApproachSection />
            <FeaturedProjectsSection />
            <VisualDesignSection />
            <AIIntegrationSection />
            <FinalCTASection />
        </>
    );
}
