import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { fadeInLeft, fadeInRight, fadeInUp } from "../animations/variants";
import ParticleBackground from "../components/ParticleBackground";
import HeroImage from "/Hero.jpg";
import WorkEmoji from "/Work.webp";

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-dark)]"
        >
            <ParticleBackground />

            {/* Top glow */}
            <div
                className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-25 pointer-events-none"
                style={{ background: "var(--gradient-glow)" }}
            />

            <motion.div style={{ y, opacity }} className="relative z-10 w-full">
                <div className="container-main pt-28 pb-20 flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Text */}
                    <motion.div initial="hidden" animate="visible" className="md:w-[58%] flex flex-col gap-6">
                        <motion.div variants={fadeInLeft} custom={0} className="flex flex-col gap-2">
                            <motion.span variants={fadeInUp} custom={0} className="badge w-fit">
                                Full Stack Developer
                            </motion.span>
                            <motion.h1
                                variants={fadeInLeft}
                                custom={0.1}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight text-[var(--text-primary)] leading-[1.1] mt-3"
                            >
                                Hi, I'm{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                                    Ganesh
                                </span>{" "}
                                <motion.span
                                    className="inline-block"
                                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    👋
                                </motion.span>
                            </motion.h1>
                        </motion.div>

                        <motion.p
                            variants={fadeInLeft}
                            custom={0.2}
                            className="text-base md:text-lg font-inter text-[var(--text-secondary)] leading-relaxed max-w-xl"
                        >
                            I specialize in creating scalable web applications with seamless user experiences. Proficient in both front-end and back-end technologies.
                        </motion.p>

                        <motion.div variants={fadeInLeft} custom={0.3} className="flex flex-col gap-2">
                            <p className="text-sm font-inter text-[var(--text-secondary)] flex items-center gap-2">
                                <FiMapPin className="text-[var(--accent)]" />
                                Chhatrapati Sambhaji Nagar, India
                            </p>
                            <p className="text-sm font-inter text-[var(--text-secondary)] flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                </span>
                                Available for work
                                <img src={WorkEmoji} alt="" className="w-5" />
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInLeft} custom={0.4} className="flex items-center gap-4 mt-2">
                            <a href="#contact" className="btn-primary">Get in Touch</a>
                            <div className="flex gap-3">
                                <a href="https://www.linkedin.com/in/ganesh-ronghe-857131235/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[#0077b5] transition-colors duration-300">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href="https://github.com/Gana31" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300">
                                    <FaGithubSquare size={22} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div variants={fadeInRight} initial="hidden" animate="visible" custom={0.2} className="md:w-[38%] flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl scale-105" />
                            <img src={HeroImage} alt="Ganesh Ronghe" className="relative w-full max-w-[320px] md:max-w-none rounded-2xl border border-[var(--glass-border)]" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-dark)] to-transparent pointer-events-none" />
        </section>
    );
}
