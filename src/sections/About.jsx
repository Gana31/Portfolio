import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "../animations/variants";
import SectionHeader from "../components/SectionHeader";
import AboutImg from "/gibliart.png";
import Resume from "/GaneshRonghe.pdf";

const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-[var(--surface)]">
            <div className="container-main">
                <SectionHeader badge="About" title="Know" highlight="Me" subtitle="A bit about my journey and what drives me" />

                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                    {/* Image */}
                    <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={0} className="md:w-[38%] flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img src={AboutImg} alt="Ganesh Ronghe" className="relative w-full max-w-[300px] rounded-2xl border border-[var(--glass-border)]" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} className="md:w-[58%] flex flex-col gap-5">
                        <motion.h3 variants={fadeInRight} custom={0} className="text-xl md:text-2xl font-semibold font-poppins text-[var(--text-primary)]">
                            Curious about me? Here you have it:
                        </motion.h3>

                        <motion.p variants={fadeInRight} custom={0.1} className="text-[var(--text-secondary)] font-inter leading-relaxed">
                            Hello there! My name is Ganesh Ronghe, and I am a Full-Stack Developer from Chhatrapati Sambhaji Nagar, Maharashtra. I hold a Master's degree in Computer Applications (MCA) from the Government College of Engineering. During my academic journey, I completed a 6-month internship with the Alpha Developer Team LLP, where I gained valuable hands-on experience.
                        </motion.p>

                        <motion.p variants={fadeInRight} custom={0.15} className="text-[var(--text-secondary)] font-inter leading-relaxed">
                            I am passionate about leveraging my technical skills and creativity to build efficient and innovative digital solutions. Whether it's working on the front-end or the back-end, I am committed to delivering high-quality results.
                        </motion.p>

                        {/* Stats */}
                        <motion.div variants={fadeInRight} custom={0.2} className="grid grid-cols-3 gap-4 mt-2">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                                    <div className="text-2xl md:text-3xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-[var(--text-muted)] font-inter mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Download CV */}
                        <motion.div variants={fadeInRight} custom={0.25} className="mt-2">
                            <a href={Resume} download="GaneshRonghe_Resume" className="btn-primary">
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
