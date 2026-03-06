import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none"
        >
            <motion.div
                className="relative flex items-center justify-center border border-transparent backdrop-blur-md pointer-events-auto overflow-hidden"
                animate={{
                    width: scrolled ? "min(920px, 95vw)" : "min(1120px, 95vw)",
                    borderRadius: scrolled ? "9999px" : "16px",
                    padding: scrolled ? "0.45rem 1.25rem" : "0.5rem 1.5rem",
                    backgroundColor: scrolled
                        ? "rgba(10, 14, 26, 0.75)"
                        : "rgba(10, 14, 26, 0.3)",
                    borderColor: scrolled
                        ? "rgba(99, 102, 241, 0.2)"
                        : "rgba(255, 255, 255, 0.06)",
                    boxShadow: scrolled
                        ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(99, 102, 241, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                        : "0 4px 16px rgba(0, 0, 0, 0.1)",
                    y: scrolled ? 0 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                    mass: 0.8,
                }}
            >
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="relative flex items-center group no-underline px-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative flex items-center justify-center w-12 h-10">
                            {/* The 'G' */}
                            <span className="absolute left-0 top-0 font-poppins font-black italic text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-transform duration-300 group-hover:-translate-x-1">
                                G
                            </span>
                            {/* The 'R' */}
                            <span className="absolute right-0 top-0 font-poppins font-black italic text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] opacity-90 mix-blend-plus-lighter transition-transform duration-300 group-hover:translate-x-1">
                                R
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="relative font-inter text-sm font-medium text-slate-300 hover:text-white no-underline py-2 transition-colors duration-300 group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.5, duration: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 rounded-sm group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <motion.a
                        href="#contact"
                        className="hidden lg:flex items-center justify-center px-5 py-2 rounded-full font-inter text-sm font-semibold text-white no-underline bg-gradient-to-br from-indigo-500 to-purple-500 shadow-[0_2px_10px_rgba(99,102,241,0.2)] border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Let's Talk
                    </motion.a>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex lg:hidden items-center justify-center bg-transparent border-none text-slate-50 cursor-pointer p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-[5vw] right-[5vw] mt-4 bg-[#0a0e1a]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] pointer-events-auto lg:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-inter text-base font-medium text-slate-300 no-underline px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/5 hover:text-white"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.04 * i }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="font-inter text-base font-semibold text-white no-underline px-4 py-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-purple-500/30 text-center mt-2"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
