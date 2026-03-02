export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[var(--bg-dark)]">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />

            <div className="container-main py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[var(--text-muted)] font-inter">
                    © {year} Ganesh Ronghe. Built with ❤️
                </p>
                <div className="flex items-center gap-6">
                    {["Home", "About", "Projects", "Contact"].map((label) => (
                        <a
                            key={label}
                            href={`#${label.toLowerCase()}`}
                            className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] font-inter no-underline transition-colors duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
