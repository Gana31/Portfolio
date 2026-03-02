import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "../animations/variants";
import SectionHeader from "../components/SectionHeader";

import Html from "/logo/html.png";
import Css from "/logo/css.png";
import Js from "/logo/js.png";
import TailWind from "/logo/tailwind.png";
import ReactIcon from "/logo/react.png";
import Node from "/logo/node.png";
import Express from "/logo/express.svg";
import MongoDB from "/logo/mongodb.png";
import Redux from "/logo/redux_white.svg";
import Git from "/logo/git.png";

const skills = [
    { id: 1, icon: Html, name: "HTML" },
    { id: 2, icon: Css, name: "CSS" },
    { id: 3, icon: TailWind, name: "Tailwind CSS" },
    { id: 4, icon: Js, name: "JavaScript" },
    { id: 5, icon: ReactIcon, name: "React JS" },
    { id: 6, icon: Node, name: "Node JS" },
    { id: 7, icon: Express, name: "Express JS" },
    { id: 8, icon: MongoDB, name: "MongoDB" },
    { id: 9, icon: Redux, name: "Redux" },
    { id: 10, icon: Git, name: "Git" },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 md:py-32 bg-[var(--bg-dark)]">
            <div className="container-main">
                <SectionHeader badge="Skills" title="My" highlight="Tech Stack" subtitle="The technologies I work with daily" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div key={skill.id} variants={fadeInUp}>
                            <div className="glass-card flex flex-col items-center gap-3 group cursor-default">
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-sm font-medium font-inter text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-center">
                                    {skill.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
