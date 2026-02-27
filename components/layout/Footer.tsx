import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 dark:border-gray-800 py-8">
            <div className="section-padding mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © {year} {personalData.fullName}.
                    </span>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    <a
                        href={personalData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                    >
                        <FiGithub size={17} />
                    </a>
                    <a
                        href={personalData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                    >
                        <FiLinkedin size={17} />
                    </a>
                    <a
                        href={`mailto:${personalData.email}`}
                        aria-label="Email"
                        className="text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                    >
                        <FiMail size={17} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
