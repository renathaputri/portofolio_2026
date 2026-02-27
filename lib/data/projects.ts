export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
    featured: boolean;
    available: boolean;
}

export const projects: Project[] = [
    {
        id: "reign-app",
        title: "Reign - Developer Productivity",
        description:
            "A mobile app for developers to track projects, tasks, and timed work sessions. Each session is recorded into a timeline and contribution grid to measure consistency.",
        stack: ["React Native", "NativeWind", "SQLite", "Expo"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/reign.webp",
        featured: true,
        available: true,
    },
    {
        id: "school-inventory-loan-system",
        title: "SMK Surabaya Inventory System",
        description:
            "A web application that manages asset borrowing, returns, and usage reports through a centralized dashboard. It improves tracking accuracy and accountability.",
        stack: ["Laravel", "PHP", "MySQL", "Blade"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/school-inventory.webp",
        featured: true,
        available: true,
    },
    {
        id: "scalesense-umkm",
        title: "ScaleSense - UMKM Growth Platform",
        description:
            "A web platform that manages customer orders and analyzes product performance. AI provides recommendations to improve, maintain, or discontinue products.",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Gemini API"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/scalesense.webp",
        featured: true,
        available: false,
    },
    {
        id: "labuan-bajo-ticketing-pos",
        title: "Labuan Bajo Ticketing POS",
        description:
            "A desktop point of sale system that manages ticket stock, transactions, and revenue reports through a centralized dashboard.",
        stack: ["Java", "JavaFX", "MySQL"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/labuan-bajo-pos.webp",
        featured: false,
        available: true,
    },
    {
        id: "saas-project-management",
        title: "Project Management SaaS Platform",
        description:
            "A collaborative platform with workspaces, task boards, and team roles. Built with type safe APIs and a structured PostgreSQL data model.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/saas-pm.webp",
        featured: false,
        available: false,
    },
    {
        id: "analytics-dashboard",
        title: "Business Analytics Dashboard",
        description:
            "A dashboard that visualizes key business metrics using interactive charts with structured Supabase data integration.",
        stack: ["Vue.js", "Vite", "Tailwind CSS", "Supabase"],
        githubUrl: "https://github.com/renathaputri",
        image: "/images/projects/analytics.webp",
        featured: false,
        available: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);