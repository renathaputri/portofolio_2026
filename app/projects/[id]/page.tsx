import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project || !project.details) {
        notFound();
    }

    const { details } = project;

    return (
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-16 md:py-24">
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary mb-12"
            >
                <FiArrowLeft /> Back to Projects
            </Link>

            <div className="flex flex-col gap-10">
                {/* Header Section */}
                <div className="flex flex-col gap-8 border-b border-border-default pb-10">
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
                            {project.title}
                        </h1>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">
                        {project.available ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-bg-secondary border border-border-strong text-text-primary text-sm font-medium hover:bg-bg-inverse hover:text-text-inverse transition-colors w-full sm:w-auto"
                            >
                                <FiGithub size={16} />
                                Available on GitHub
                            </a>
                        ) : (
                            <span className="flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-bg-secondary text-text-disabled text-sm font-medium cursor-not-allowed border border-border-default w-full sm:w-auto">
                                <FiGithub size={16} />
                                Private Repo
                            </span>
                        )}
                        
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-bg-inverse text-text-inverse text-sm font-medium hover:opacity-85 transition-opacity w-full sm:w-auto"
                            >
                                <FiExternalLink size={16} />
                                Visit Site
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4">
                    <div className="md:col-span-2 flex flex-col gap-10">
                        
                        {/* Problem & Objective */}
                        <section>
                            <h2 className="text-xl font-bold text-text-primary mb-4">Problem & Objective</h2>
                            {details.problemAndObjective.map((paragraph, idx) => (
                                <p key={idx} className="text-text-secondary leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </section>

                        {/* Challenges & Solutions */}
                        <section>
                            <h2 className="text-xl font-bold text-text-primary mb-4">Challenges & Solutions</h2>
                            <div className="flex flex-col gap-4">
                                {details.challengesAndSolutions.map((item, idx) => (
                                    <div key={idx} className="p-5 rounded-2xl bg-bg-secondary border border-border-default">
                                        <h3 className="font-bold text-text-primary mb-2">{idx + 1}. {item.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Results / Impact */}
                        <section>
                            <h2 className="text-xl font-bold text-text-primary mb-4">Results & Impact</h2>
                            <ul className="list-disc list-outside ml-5 text-text-secondary space-y-3 leading-relaxed">
                                {details.resultsAndImpact.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* Sidebar Information */}
                    <div className="flex flex-col gap-6">
                        <div className="p-6 rounded-2xl bg-bg-secondary border border-border-default">
                            <h3 className="text-sm font-bold tracking-widest uppercase text-text-tertiary mb-2">
                                Specific Role
                            </h3>
                            <p className="text-text-primary font-medium leading-relaxed">
                                {details.specificRole}
                            </p>
                            <p className="text-text-secondary text-sm mt-2">
                                {details.roleDescription}
                            </p>

                            <hr className="my-6 border-border-default" />

                            <h3 className="text-sm font-bold tracking-widest uppercase text-text-tertiary mb-4">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-md text-xs font-medium border border-border-strong text-text-primary bg-bg-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <hr className="my-6 border-border-default" />

                            <h3 className="text-sm font-bold tracking-widest uppercase text-text-tertiary mb-2">
                                Status
                            </h3>
                            <p className="text-text-primary font-medium">
                                {project.available ? "Completed / Active" : "In Development"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
