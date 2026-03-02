import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../animations/variants";

export default function SectionHeader({ badge, title, highlight, subtitle }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
        >
            {badge && (
                <motion.span variants={fadeInUp} custom={0} className="badge mb-5">
                    {badge}
                </motion.span>
            )}
            <motion.h2
                variants={fadeInUp}
                custom={0.1}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-[var(--text-primary)] mt-5"
            >
                {title}{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                    {highlight}
                </span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    variants={fadeInUp}
                    custom={0.2}
                    className="text-[var(--text-muted)] mt-4 text-base md:text-lg font-inter max-w-lg mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
}
