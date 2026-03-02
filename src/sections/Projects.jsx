import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../animations/variants";
import SectionHeader from "../components/SectionHeader";
import { MdArrowOutward } from "react-icons/md";
import StudyNotion from "/StudyNotion.png";

const projects = [
    {
        id: 1,
        title: "StudyNotion",
        description: "A versatile and intuitive ed-tech platform designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise.",
        image: StudyNotion,
        tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS"],
        link: "https://learn-alpha-murex.vercel.app/",
    },
];

function ProjectCard({ project }) {
    return (
        <div className="glass-card !p-0 overflow-hidden group">
            {/* Image */}
            <div className="relative overflow-hidden h-56 md:h-64">
                <div
                    className="w-full h-full bg-cover bg-top transition-[background-position] duration-[6s] ease-in-out group-hover:bg-bottom"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)] to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl font-bold font-poppins text-[var(--text-primary)] no-underline hover:text-[var(--accent)] transition-colors duration-300"
                >
                    {project.title}
                    <MdArrowOutward className="w-5 h-5" />
                </a>

                <p className="mt-3 text-sm text-[var(--text-secondary)] font-inter leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold font-inter text-[var(--accent)] no-underline hover:text-[var(--primary-light)] transition-colors duration-300"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[var(--bg-dark)]">
            <div className="container-main">
                <SectionHeader badge="Portfolio" title="Featured" highlight="Projects" subtitle="Some of the noteworthy projects I have built" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((p) => (
                        <motion.div key={p.id} variants={fadeInUp}>
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
