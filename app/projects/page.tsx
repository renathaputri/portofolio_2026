import type { Metadata } from "next";
import { ProjectsContent } from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "A showcase of Renatha Putri S's web development projects — spanning React Native, Next.js, Laravel, Vue.js, and more.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
