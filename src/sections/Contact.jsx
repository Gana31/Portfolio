import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, viewportConfig } from "../animations/variants";
import SectionHeader from "../components/SectionHeader";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ganesh-ronghe-857131235/", color: "#0077b5", label: "LinkedIn" },
    { icon: FaGithubSquare, href: "https://github.com/Gana31", color: "var(--text-primary)", label: "GitHub" },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 md:py-32 bg-[var(--surface)]">
            <div className="container-narrow">
                <SectionHeader
                    badge="Contact"
                    title="Get in"
                    highlight="Touch"
                    subtitle="Feel free to reach out if you're looking for a developer, have a query, or simply want to connect."
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="flex flex-col md:flex-row gap-10 md:gap-16"
                >
                    {/* Contact Info */}
                    <motion.div variants={fadeInLeft} custom={0} className="flex-1 flex flex-col gap-5">
                        <a href="mailto:ganeshronghe2@gmail.com" className="glass-card flex items-center gap-4 no-underline">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                <HiOutlineMail className="w-6 h-6 text-[var(--accent)]" />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] font-inter">Email</p>
                                <p className="text-base font-semibold text-[var(--text-primary)] font-inter">ganeshronghe2@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:+919096528473" className="glass-card flex items-center gap-4 no-underline">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                <HiOutlinePhone className="w-6 h-6 text-[var(--accent)]" />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-muted)] font-inter">Phone</p>
                                <p className="text-base font-semibold text-[var(--text-primary)] font-inter">+91 9096528473</p>
                            </div>
                        </a>

                        <div className="flex gap-3 mt-2">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center hover:border-[var(--border-hover)] transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={20} style={{ color: social.color }} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form variants={fadeInRight} custom={0.1} className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="text-xs font-medium text-[var(--text-muted)] font-inter mb-1.5 block">Name</label>
                            <input type="text" placeholder="Your name" className="form-input" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-[var(--text-muted)] font-inter mb-1.5 block">Email</label>
                            <input type="email" placeholder="your@email.com" className="form-input" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-[var(--text-muted)] font-inter mb-1.5 block">Message</label>
                            <textarea rows={4} placeholder="Your message..." className="form-input" />
                        </div>
                        <motion.button
                            type="submit"
                            className="btn-primary w-full justify-center"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}
