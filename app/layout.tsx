import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { BackgroundElements } from "@/components/layout/BackgroundElements";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { personalData } from "@/lib/data/personal";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: {
        default: `${personalData.fullName} — Frontend Developer`,
        template: `%s | ${personalData.fullName}`,
    },
    description:
        "Frontend developer with a designer's eye. Specializing in React, Next.js, and modern frontend frameworks. Building clean, intuitive web products for startups and businesses.",
    keywords: [
        "Frontend Developer",
        "Frontend Engineer",
        "Fullstack Engineer",
        "React Developer",
        "Next.js Developer",
        "Web Developer",
        "UI Developer",
        "TypeScript Developer",
        "Tailwind CSS",
        "Graphic Designer",
        "AI-Aware Developer",
        "Renatha Putri",
        "Renatha Putri S",
        "Portfolio",
        "Web Portfolio",
        "Indonesia",
        "Surabaya",
        "Vue.js",
        "Svelte",
        "Laravel",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Supabase",
    ],
    authors: [{ name: personalData.fullName }],
    creator: personalData.fullName,
    openGraph: {
        type: "website",
        locale: "en_US",
        title: `${personalData.fullName} — Frontend Developer`,
        description:
            "Frontend developer with a designer's eye. Specializing in React, Next.js, and modern frontend frameworks.",
        siteName: personalData.fullName,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: `${personalData.fullName} — Portfolio`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${personalData.fullName} — Frontend Developer`,
        description:
            "Frontend developer with a designer's eye. Specializing in React, Next.js, and modern frontend frameworks.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={poppins.variable}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                var theme = localStorage.getItem('theme');
                                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch(e) {}
                        `,
                    }}
                />
            </head>
            <body className="font-poppins antialiased">
                <ThemeProvider>
                    <Preloader />
                    <ScrollProgress />
                    <CursorGlow />
                    <Navbar />
                    <BackgroundElements />
                    
                    <main className="relative pt-24 min-h-screen">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}