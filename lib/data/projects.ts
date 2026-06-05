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
        id: "school-inventory-loan-system",
        title: "SMK Surabaya Inventory System",
        description:
            "A web application that manages asset borrowing, returns, and usage reports through a centralized dashboard. It improves tracking accuracy and accountability.",
        stack: ["Laravel", "PHP", "MySQL", "Blade"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://smk-inventory-system.vercel.app",
        image: "/images/projects/school-inventory.webp",
        featured: true,
        available: true,
        details: {
            problemAndObjective: [
                "SMK Surabaya managed hundreds of school assets including projectors, laptops, and lab equipment using manual logbooks. This led to frequent miscommunication about item availability, untracked losses, and difficulty generating accurate usage reports for administration.",
                "The objective was to digitize the entire borrowing and return workflow into a centralized web system, giving staff real-time visibility into asset status and enabling administrators to generate reports without manual data consolidation."
            ],
            challengesAndSolutions: [
                {
                    title: "Complex Borrowing State Machine",
                    description: "Each asset loan had multiple states such as requested, approved, borrowed, returned, and damaged, with different user roles having different transition permissions. I modeled this as an explicit state machine in Laravel, with middleware guards to prevent invalid state transitions."
                },
                {
                    title: "Report Generation for Non-Technical Staff",
                    description: "Admin staff needed to export usage reports without any technical knowledge. I built a report generation module with date range filters that exports clean PDF and Excel files using Laravel's DomPDF and Maatwebsite Excel packages."
                },
                {
                    title: "Role-Based Access Control",
                    description: "The system needed three distinct roles (student, staff, and admin) each with different views and permissions. I implemented Laravel's Gate and Policy system to cleanly separate access logic from controller business logic."
                }
            ],
            resultsAndImpact: [
                "Replaced a fully manual logbook process with a digital system, eliminating data entry errors and duplicate records.",
                "Asset availability is now tracked in real-time, reducing borrowing conflicts between departments significantly.",
                "Administration can now generate monthly usage reports in under a minute, compared to hours of manual consolidation before.",
                "Successfully deployed and actively used by school staff for day-to-day asset management operations."
            ],
            specificRole: "Full Stack Web Developer",
            roleDescription: "Led the full development cycle starting from requirements gathering with school staff, database design, Laravel backend development, Blade UI implementation, and deployment to the school's internal server.",
            timeline: "2024"
        }
    },
    {
        id: "scalesense-umkm",
        title: "ScaleSense - UMKM Growth Platform",
        description:
            "A web platform that manages customer orders and analyzes product performance. AI provides recommendations to improve, maintain, or discontinue products.",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Gemini API"],
        githubUrl: "https://github.com/renathaputri",
        liveUrl: "https://scalesense-umkm.vercel.app",
        image: "/images/projects/scalesense.webp",
        featured: true,
        available: false,
        details: {
            problemAndObjective: [
                "Small and medium businesses (UMKM) in Indonesia often make product decisions based on gut feeling rather than data. Without affordable analytics tools, they struggle to identify which products are actually profitable, which are stagnating, and which are quietly draining their resources.",
                "ScaleSense was built to give UMKM owners a simple yet powerful platform to manage orders and get AI-driven product performance insights without needing a data analyst. The AI layer uses Gemini to analyze sales trends and generate actionable recommendations in plain language."
            ],
            challengesAndSolutions: [
                {
                    title: "Making AI Recommendations Actionable and Trustworthy",
                    description: "Early Gemini API outputs were too verbose and generic for business owners to act on. I engineered structured prompts with business context injected dynamically, including product sales history, margins, and trend data, to get concise and specific recommendations that felt relevant to each user's actual situation."
                },
                {
                    title: "Type-Safe API Design at Scale",
                    description: "With multiple entities (orders, products, customers, recommendations) interacting across the app, maintaining type safety was critical. I used Prisma with TypeScript end-to-end, defining strict schemas that prevented runtime data shape mismatches between the database and the frontend."
                },
                {
                    title: "Performance with Complex Aggregation Queries",
                    description: "Product performance analytics required aggregating large order datasets across date ranges. I optimized PostgreSQL queries with proper indexing on frequently filtered columns and implemented server-side pagination to keep dashboard load times fast even as data grew."
                }
            ],
            resultsAndImpact: [
                "Delivered a fully functional platform where business owners can manage orders and receive AI product recommendations from a single dashboard.",
                "AI recommendation feature reduces product review time for business owners from hours of manual spreadsheet work to seconds.",
                "The type-safe architecture significantly reduced bugs during development and made onboarding new features straightforward.",
                "Designed to be scalable for multi-tenant SaaS expansion, with workspace isolation already built into the data model."
            ],
            specificRole: "Full Stack Developer & AI Integration Lead",
            roleDescription: "Owned the complete product including the Next.js frontend, API routes, Prisma database modeling, PostgreSQL schema design, and Gemini API integration with prompt engineering for business-relevant AI outputs.",
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
        available: true,
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