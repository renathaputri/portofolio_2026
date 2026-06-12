export interface ProjectChallenge {
    title: string;
    description: string;
}

export interface ProjectDetail {
    problemAndObjective: string[];
    challengesAndSolutions: ProjectChallenge[];
    resultsAndImpact: string[];
    specificRole: string;
    roleDescription: string;
    timeline: string;
}

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
    details?: ProjectDetail;
}

export const projects: Project[] = [
    {
        id: "reign-app",
        title: "Reign - Developer Productivity",
        description:
            "A mobile app for developers to track projects, tasks, and timed work sessions. Each session is recorded into a timeline and contribution grid to measure consistency.",
        stack: ["React Native", "NativeWind", "SQLite", "Expo"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://reign-app-dev.vercel.app",
        image: "/images/projects/reign.webp",
        featured: true,
        available: true,
        details: {
            problemAndObjective: [
                "Developers often struggle to maintain consistency in their daily work habits. Existing productivity tools are either too generic or too complex, failing to address the specific needs of software developers who work across multiple projects simultaneously.",
                "Reign was built to give developers a personal productivity companion that tracks not just tasks, but actual work sessions tied to specific projects. The goal was to make consistency visible through a contribution grid similar to GitHub's, motivating developers to maintain streaks and reflect on their output."
            ],
            challengesAndSolutions: [
                {
                    title: "Offline-First Data Persistence",
                    description: "Since developers often work in environments with unstable internet, the app needed to function fully offline. I implemented SQLite with Expo's local storage APIs to ensure all session data is stored locally first, with a sync layer prepared for future cloud backup."
                },
                {
                    title: "Contribution Grid Rendering Performance",
                    description: "Rendering a full year of daily contribution data (365 cells) caused noticeable lag on lower-end Android devices. I optimized this by virtualizing the grid rendering and memoizing cell components, reducing render time significantly."
                },
                {
                    title: "Cross-Platform UI Consistency",
                    description: "Achieving consistent UI between iOS and Android with NativeWind required careful handling of platform-specific spacing and shadow behaviors. I created a set of shared utility components with platform-aware style overrides."
                }
            ],
            resultsAndImpact: [
                "Delivered a fully functional mobile MVP with offline support across iOS and Android.",
                "The contribution grid feature received strong positive feedback from early testers for making work habits tangible and motivating.",
                "Session tracking accurately reflects time spent per project, helping developers identify where their time actually goes.",
                "Established a clean modular codebase that makes adding features like cloud sync and team sharing straightforward in future iterations."
            ],
            specificRole: "Full Stack Mobile Developer",
            roleDescription: "Solely responsible for the entire product, starting from UI/UX design in Figma to React Native implementation, local database modeling with SQLite, and Expo build configuration for both platforms.",
            timeline: "2025"
        }
    },
    {
        id: "bikinkarya",
        title: "BikinKarya - AI Work Experience Simulator",
        description:
            "An AI-powered platform that helps fresh graduates and final-year students build real work experience through simulated project briefs, kanban task management, and a recruiter-ready portfolio.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "NextAuth.js", "Gemini API", "Docker"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://bikinkarya.vercel.app",
        image: "/images/projects/bikinkarya.webp",
        featured: true,
        available: true,
        details: {
            problemAndObjective: [
                "Indonesia faces a growing employment paradox: thousands of educated graduates remain unemployed while job vacancies go unfilled due to skill mismatch. Fresh graduates have no real work experience to show, portfolios filled with academic assignments are ignored by HRD, and the gap between university curricula and industry expectations continues to widen.",
                "BikinKarya was built to close that gap by simulating an actual work experience from start to finish. Users receive AI-generated project briefs that feel like real client work, manage their tasks on a kanban board, and build a public portfolio from their completed outputs, giving them something concrete to show recruiters without waiting for an internship opportunity."
            ],
            challengesAndSolutions: [
                {
                    title: "Generating Briefs That Feel Like Real Client Work",
                    description: "Generic AI prompts produced briefs that felt academic and unrealistic. I engineered domain-specific prompt templates for UI/UX Design, Graphic Design, and Digital Marketing, each structured with client background, business goals, constraints, and deliverables, calibrated per difficulty level so Junior briefs are execution-focused while Senior briefs introduce strategic ambiguity and stakeholder complexity."
                },
                {
                    title: "Deploying to Google Cloud Run with Docker",
                    description: "The competition required deployment to Google Cloud Run, which meant containerizing a Next.js app with Supabase Storage and external API dependencies. I configured a multi-stage Dockerfile to keep the image lean, handled environment variable injection at runtime, and resolved cold start latency by tuning the minimum instance count."
                },
                {
                    title: "Portfolio Upload Flow After Task Completion",
                    description: "The transition from marking a task done to uploading portfolio items needed to feel seamless without interrupting the user's focus. I designed a modal-based upload flow triggered automatically when a card moves to Done, with Supabase Storage handling thumbnail uploads and URL validation ensuring result links are properly formatted before saving."
                }
            ],
            resultsAndImpact: [
                "Delivered a complete MVP with Study Case Generator, Kanban Board, Portfolio Builder, and Interview Simulator within the competition timeline.",
                "Each completed brief produces a public portfolio item shareable directly to recruiters via a unique URL.",
                "The difficulty-tiered brief system covers Junior through Senior complexity, making the platform useful across different readiness levels.",
                "Successfully containerized and deployed to Google Cloud Run as required by the competition, with Supabase handling both database and file storage."
            ],
            specificRole: "Full Stack Developer & Product Designer",
            roleDescription: "Owned the entire product from PRD to deployment. Designed the system architecture, built the Next.js frontend and API routes, engineered the Gemini prompt templates, set up Prisma with Supabase PostgreSQL, configured Docker and Google Cloud Run deployment, and designed the UI from scratch.",
            timeline: "2026"
        }
    },
    {
        id: "jualoka",
        title: "Jualoka - UMKM E-Commerce Platform",
        description:
            "A lightweight e-commerce platform for Indonesian UMKM to create online stores and receive orders directly via WhatsApp. Includes AI-powered product analytics and a real-time order notification system.",
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Better-Auth", "Vercel Blob", "Gemini API", "Recharts"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://jualoka.vercel.app",
        image: "/images/projects/jualoka.webp",
        featured: true,
        available: true,
        details: {
            problemAndObjective: [
                "Most Indonesian UMKM sellers rely on informal channels like WhatsApp broadcasts and Instagram DMs to take orders, leading to missed messages, stock confusion, and no visibility into which products actually sell well. Existing e-commerce platforms are too complex and charge fees that eat into already-thin margins.",
                "Jualoka was built to give small business owners a store presence they can set up in minutes, with orders flowing directly into their WhatsApp without any new app for customers to download. The platform also analyzes sales data automatically so sellers know which products to produce more of and which to cut."
            ],
            challengesAndSolutions: [
                {
                    title: "Real-Time Order Notifications Without a Third-Party Service",
                    description: "Sellers needed to know the moment an order arrived without relying on push notification services. I implemented Server-Sent Events (SSE) on the API layer so the admin dashboard maintains a live connection to the server and receives instant order alerts the moment a customer submits a cart, without polling or external dependencies."
                },
                {
                    title: "WhatsApp Checkout Without an API or Integration",
                    description: "Integrating a formal WhatsApp Business API would require approval and add cost. Instead, I engineered a checkout flow that composes a fully formatted order message from the cart state and opens it directly in WhatsApp via the wa.me deep link. Customers need no app install, no login, and sellers receive orders in their existing WhatsApp number."
                },
                {
                    title: "AI Product Performance Classification",
                    description: "Sellers needed actionable insight on their product catalog without understanding data. I built an analytics module that calculates revenue, volume, and profitability per product, then uses Gemini to classify each product as Laris, Kurang Laku, or Rugi with a plain-language recommendation on what to do next, making data accessible to non-technical business owners."
                }
            ],
            resultsAndImpact: [
                "Sellers can create a fully functional online store with a unique public URL in under five minutes.",
                "The WhatsApp checkout flow eliminates friction for buyers while keeping the entire order process within tools sellers already use daily.",
                "Real-time SSE notifications mean sellers never miss an order even when the dashboard tab is open in the background.",
                "AI product classification gives UMKM owners data-driven production decisions that previously required a business analyst to produce."
            ],
            specificRole: "Full Stack Developer",
            roleDescription: "Built the complete platform including the public storefront, seller dashboard, product and order management system, SSE notification layer, WhatsApp checkout flow, Vercel Blob image storage integration, and Gemini-powered analytics module.",
            timeline: "2025"
        }
    },
    {
        id: "labuan-bajo-ticketing-pos",
        title: "Labuan Bajo Ticketing POS",
        description:
            "A desktop point of sale system that manages ticket stock, transactions, and revenue reports through a centralized dashboard.",
        stack: ["Java", "JavaFX", "MySQL"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://labuan-bajo-ticketing.vercel.app",
        image: "/images/projects/labuan-bajo-pos.webp",
        featured: false,
        available: false,
        details: {
            problemAndObjective: [
                "A tourism ticketing operator in the Labuan Bajo area was managing ticket sales through manual cashier sheets, making it difficult to reconcile daily revenue, track remaining ticket stock, and prevent overselling during peak tourist season.",
                "The goal was to build a desktop POS system that handles ticket transactions in real-time, maintains accurate stock counts, and provides daily and monthly revenue summaries from a single operator-facing interface designed for non-technical staff."
            ],
            challengesAndSolutions: [
                {
                    title: "Real-Time Stock Decrement on Transactions",
                    description: "Ticket overselling was a critical concern during high-traffic periods. I implemented transactional MySQL queries with row-level locking to ensure stock decrements and transaction records are committed atomically, preventing race conditions when multiple operators process tickets simultaneously."
                },
                {
                    title: "Offline Operation Requirement",
                    description: "The ticketing location had unreliable internet connectivity. The system needed to operate fully offline with a local MySQL instance. I designed the architecture around a local-first database setup, with a simple export mechanism for syncing revenue reports when connectivity was available."
                },
                {
                    title: "Intuitive UI for Non-Technical Operators",
                    description: "Cashier staff had no technical background and needed to learn the system quickly. I designed the JavaFX interface with large touch-friendly elements, clear visual feedback for each transaction step, and confirmation dialogs to prevent accidental transactions."
                }
            ],
            resultsAndImpact: [
                "Replaced manual cashier sheets with a real-time digital POS system, eliminating reconciliation errors at end-of-day.",
                "Ticket overselling incidents dropped to zero after deployment, resolving a recurring operational problem during peak season.",
                "Staff onboarding time reduced significantly. Operators were comfortable using the system independently within one training session.",
                "Revenue reports that previously took an hour to compile manually are now generated instantly from the dashboard."
            ],
            specificRole: "Desktop Application Developer",
            roleDescription: "Designed and developed the complete desktop application covering JavaFX UI design, business logic implementation, MySQL schema design, on-site deployment, and staff training.",
            timeline: "2024"
        }
    },
    {
        id: "saas-project-management",
        title: "Project Management SaaS Platform",
        description:
            "A collaborative platform with workspaces, task boards, and team roles. Built with type safe APIs and a structured PostgreSQL data model.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://saas-project-management-app.vercel.app",
        image: "/images/projects/saas-pm.webp",
        featured: false,
        available: false,
        details: {
            problemAndObjective: [
                "Most project management tools are either too heavyweight for small teams or too simplified for teams managing multiple concurrent projects with different permission structures. This project was built as a learning ground for architecting a multi-tenant SaaS product from scratch.",
                "The objective was to implement core SaaS fundamentals including workspace isolation, role-based permissions, task boards, and team collaboration, with a focus on getting the data model and API architecture right before scaling features."
            ],
            challengesAndSolutions: [
                {
                    title: "Multi-Tenant Data Isolation",
                    description: "Ensuring complete data separation between workspaces was the foundational challenge. I implemented workspace-scoped queries at the Prisma middleware level, so every database operation is automatically filtered by the authenticated user's workspace context, preventing cross-tenant data leaks by design."
                },
                {
                    title: "Flexible Role and Permission System",
                    description: "Workspaces needed Owner, Admin, and Member roles with granular action permissions. I modeled permissions as a matrix in the database rather than hardcoded checks, making it easy to adjust what each role can do without code changes."
                },
                {
                    title: "Real-Time Board State Synchronization",
                    description: "Task boards needed to reflect changes from other team members without requiring a page refresh. I implemented optimistic UI updates on the frontend paired with server-sent events for real-time state propagation, keeping the board in sync across multiple active sessions."
                }
            ],
            resultsAndImpact: [
                "Built a fully functional multi-tenant SaaS core with workspace isolation, task boards, and team roles working end-to-end.",
                "The permission system is flexible enough to support new role types without schema migrations or code changes.",
                "Served as a strong architectural reference for understanding how production SaaS products structure their data and API layers.",
                "Reinforced deep understanding of Prisma, PostgreSQL relational modeling, and type-safe full-stack development patterns."
            ],
            specificRole: "Full Stack Developer",
            roleDescription: "Solo project focused on SaaS architecture. Designed the multi-tenant data model, built type-safe Next.js API routes, implemented the permission system, and developed the collaborative task board UI.",
            timeline: "2025"
        }
    },
    {
        id: "analytics-dashboard",
        title: "Business Analytics Dashboard",
        description:
            "A dashboard that visualizes key business metrics using interactive charts with structured Supabase data integration.",
        stack: ["Vue.js", "Vite", "Tailwind CSS", "Supabase"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://business-analytics-dash.vercel.app",
        image: "/images/projects/analytics.webp",
        featured: false,
        available: false,
        details: {
            problemAndObjective: [
                "Business stakeholders often need quick visibility into key metrics like revenue trends, customer growth, and product performance, but existing tools either require expensive subscriptions or significant setup effort. This project was built to explore building a clean, performant analytics dashboard from scratch.",
                "The objective was to create a dashboard that pulls structured data from Supabase in real-time and presents it through interactive, easy-to-read visualizations designed for business users who need insights at a glance without navigating complex BI tools."
            ],
            challengesAndSolutions: [
                {
                    title: "Real-Time Data Updates Without Performance Degradation",
                    description: "Supabase's real-time subscriptions pushed frequent updates that caused unnecessary chart re-renders. I implemented a debounced update strategy and used Vue's computed properties to batch state changes, keeping the UI responsive even during high-frequency data updates."
                },
                {
                    title: "Responsive Chart Layouts Across Screen Sizes",
                    description: "Charts that looked great on desktop became cramped and unreadable on tablet and mobile viewports. I built a responsive chart wrapper system that dynamically adjusts chart dimensions and legend positions based on container width, ensuring readability across all devices."
                },
                {
                    title: "Efficient Supabase Query Design",
                    description: "Fetching aggregated metrics (monthly revenue totals, customer counts by segment) with naive queries was slow. I leveraged Supabase's PostgreSQL functions and views to push aggregation logic to the database layer, reducing payload sizes and drastically improving load times."
                }
            ],
            resultsAndImpact: [
                "Delivered an interactive dashboard with real-time data updates, responsive charts, and clean metric cards across all device sizes.",
                "Database-side aggregation reduced initial dashboard load time compared to client-side data processing.",
                "Deepened practical understanding of Vue.js reactivity system and Supabase's real-time capabilities.",
                "Clean component architecture makes adding new chart types or data sources straightforward without refactoring existing components."
            ],
            specificRole: "Frontend Developer",
            roleDescription: "Handled the complete frontend implementation including Vue.js component architecture, chart integration and customization, Supabase real-time subscription setup, and responsive layout design with Tailwind CSS.",
            timeline: "2024"
        }
    },
];

export const featuredProjects = projects.filter((p) => p.featured);