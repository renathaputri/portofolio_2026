import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { personalData } from "@/lib/data/personal";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border-default pt-12 pb-28 md:pb-12 bg-bg-primary">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-[14px] text-text-secondary font-medium">
                        © {year} {personalData.fullName}.
                    </span>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    <a
                        href={personalData.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm"
                    >
                        <FiInstagram size={20} />
                    </a>
                    <a
                        href={personalData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${personalData.email}`}
                        aria-label="Email"
                        className="text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-[3px] focus:ring-border-inverse rounded-sm"
                    >
                        <FiMail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}