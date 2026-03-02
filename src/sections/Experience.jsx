import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";

const experiences = [
    {
        id: 1,
        date: "Jan 2024 – Jun 2024",
        company: "Alpha Developer Team LLP",
        role: "Developer",
        description: "Built full-stack web applications and collaborated with cross-functional teams to deliver production-ready software.",
        icon: "🚀",
        color: "#818cf8",
    },
    {
        id: 2,
        date: "Oct 2024 – Feb 2025",
        company: "ElementalX",
        role: "Developer",
        description: "Developed scalable solutions and contributed to core platform features, improving user experience and performance.",
        icon: "💻",
        color: "#a78bfa",
    },
    {
        id: 3,
        date: "Mar 2025 – Jun 2025",
        company: "ElementalX",
        role: "Freelancer",
        description: "Continued as a freelance contributor, delivering high-impact projects with flexible engagement.",
        icon: "🎯",
        color: "#c084fc",
    },
    {
        id: 4,
        date: "Aug 2025 – Present",
        company: "Ohana Technology",
        role: "Developer",
        description: "Building innovative solutions and driving product development in a collaborative team environment.",
        icon: "⚡",
        color: "#e879f9",
    },
];

function TimelineItem({ exp, index, isLeft }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div ref={ref} className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Center Dot */}
            <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full border-[3px] border-[var(--bg-dark)]"
                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                />
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 15 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`ml-12 md:ml-0 ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"} md:w-[45%] w-full`}
            >
                <div className="glass-card p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{exp.icon}</span>
                        <span className="text-xs font-semibold tracking-[0.12em] uppercase font-inter" style={{ color: exp.color }}>
                            {exp.date}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-poppins mb-1">{exp.company}</h3>
                    <span
                        className="inline-block px-3 py-0.5 rounded-full text-xs font-medium mb-3 font-inter"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                    >
                        {exp.role}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] font-inter leading-relaxed">{exp.description}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 md:py-32 bg-[var(--surface)]">
            <div className="container-narrow">
                <SectionHeader badge="Experience" title="My" highlight="Journey" subtitle="A timeline of my professional career" />

                <div className="relative">
                    {/* Center Line */}
                    <div
                        className="absolute left-[25px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 10%, rgba(139,92,246,0.4) 50%, rgba(99,102,241,0.3) 90%, transparent)" }}
                    />

                    {experiences.map((exp, i) => (
                        <TimelineItem key={exp.id} exp={exp} index={i} isLeft={i % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}
