import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const rotatingWords = [
    "Full Stack Developer",
    "MERN Engineer",
    "Building Scalable Systems",
];

export default function Hero() {
    const sectionRef = useRef(null);
    const [wordIndex, setWordIndex] = useState(0);

    // Raw mouse values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring-based mouse tracking
    const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Different scroll speeds for each layer
    const bgScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const charScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const textScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const bigNameScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse move handler
    const handleMouseMove = useCallback(
        (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 2;
            const y = (clientY / window.innerHeight - 0.5) * 2;
            mouseX.set(x);
            mouseY.set(y);
        },
        [mouseX, mouseY]
    );

    // Rotating words
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#080b16] max-md:h-[100svh]"
            onMouseMove={handleMouseMove}
        >
            {/* ═══ LAYER 1: Sky Background (moves slowest) ═══ */}
            <motion.div
                className="absolute flex items-center justify-center pointer-events-none will-change-transform transform-gpu z-[1] -inset-[8%]"
                style={{
                    y: bgScrollY,
                    x: useTransform(smoothX, [-1, 1], [15, -15]),
                }}
            >
                <img
                    src="/Photos/background.png"
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                />
                {/* Color grading overlays for vibrancy */}
                <div className="absolute inset-0 mix-blend-normal bg-[linear-gradient(135deg,rgba(99,102,241,0.25)_0%,rgba(139,92,246,0.15)_30%,transparent_60%),linear-gradient(to_bottom,rgba(8,11,22,0.1)_0%,rgba(8,11,22,0.3)_60%,rgba(8,11,22,0.7)_100%)]" />
            </motion.div>

            {/* ═══ Animated floating glow orbs ═══ */}
            <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden will-change-transform transform-gpu">
                <motion.div
                    className="absolute rounded-full blur-[80px] w-[400px] h-[400px] top-[5%] -left-[5%] bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_70%)] max-md:w-[250px] max-md:h-[250px] will-change-transform transform-gpu"
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute rounded-full blur-[80px] w-[350px] h-[350px] bottom-[15%] right-[10%] bg-[radial-gradient(circle,rgba(168,85,247,0.3),transparent_70%)] max-md:w-[200px] max-md:h-[200px] will-change-transform transform-gpu"
                    animate={{
                        x: [0, -40, 30, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 0.8, 1.3, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute rounded-full blur-[80px] w-[250px] h-[250px] top-[40%] left-[35%] bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_70%)] max-md:w-[150px] max-md:h-[150px] will-change-transform transform-gpu"
                    animate={{
                        x: [0, 20, -30, 0],
                        y: [0, -20, 40, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* ═══ LAYER 2: Large name text BEHIND the character ═══ */}
            <motion.div
                className="absolute inset-0 flex pointer-events-none will-change-transform transform-gpu z-[3] items-center justify-center"
                style={{
                    y: bigNameScrollY,
                    x: useTransform(smoothX, [-1, 1], [10, -10]),
                    opacity: fadeOut,
                }}
            >
                <motion.div
                    className="flex flex-col items-center leading-[0.85] select-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="font-poppins font-black tracking-[-0.03em] uppercase text-[clamp(4rem,14vw,14rem)] text-white/5 [-webkit-text-stroke:2px_rgba(255,255,255,0.12)] max-lg:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] max-md:[-webkit-text-stroke:1px_rgba(255,255,255,0.12)] max-md:text-[clamp(3rem,18vw,6rem)] [text-shadow:0_0_80px_rgba(99,102,241,0.15),0_0_160px_rgba(139,92,246,0.08)]">GANESH</span>
                    <span className="font-poppins font-black tracking-[-0.03em] uppercase text-[clamp(4rem,14vw,14rem)] text-[#8b5cf608] [-webkit-text-stroke:2px_rgba(139,92,246,0.18)] max-lg:[-webkit-text-stroke:1.5px_rgba(139,92,246,0.18)] max-md:[-webkit-text-stroke:1px_rgba(139,92,246,0.18)] max-md:text-[clamp(3rem,18vw,6rem)] [text-shadow:0_0_80px_rgba(99,102,241,0.15),0_0_160px_rgba(139,92,246,0.08)]">RONGHE</span>
                </motion.div>
            </motion.div>

            {/* ═══ LAYER 3: Character portrait (mid-depth) ═══ */}
            <motion.div
                className="absolute inset-0 flex pointer-events-none will-change-transform transform-gpu z-[4] items-end justify-center perspective-[1000px]"
                style={{
                    y: charScrollY,
                    x: useTransform(smoothX, [-1, 1], [25, -25]),
                    rotateY: useTransform(smoothX, [-1, 1], [-3, 3]),
                    rotateX: useTransform(smoothY, [-1, 1], [2, -2]),
                }}
            >
                {/* Glowing spotlight behind character */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none blur-[40px] w-[500px] h-[600px] max-lg:w-[350px] max-lg:h-[450px] max-md:w-[250px] max-md:h-[350px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.2)_0%,rgba(139,92,246,0.12)_30%,rgba(56,189,248,0.06)_60%,transparent_80%)] will-change-[filter,transform] transform-gpu" />
                <motion.img
                    src="/Photos/character.png"
                    alt="Ganesh Ronghe"
                    className="relative w-auto h-[85vh] max-h-[85vh] min-h-[400px] object-contain object-bottom pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] drop-shadow-[0_0_80px_rgba(99,102,241,0.15)] max-lg:h-[70vh] max-md:h-[55vh] max-md:min-h-[300px] will-change-[transform,filter] transform-gpu"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom right, black 75%, transparent 95%)', maskImage: 'linear-gradient(to bottom right, black 75%, transparent 95%)' }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </motion.div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-[5] pointer-events-none bg-[linear-gradient(to_right,rgba(8,11,22,0.82)_0%,rgba(8,11,22,0.35)_40%,transparent_65%),linear-gradient(to_top,rgba(8,11,22,0.9)_0%,rgba(8,11,22,0.2)_35%,transparent_65%)] max-md:bg-[linear-gradient(to_top,rgba(8,11,22,0.95)_0%,rgba(8,11,22,0.65)_35%,rgba(8,11,22,0.15)_65%,transparent_100%)]" />

            {/* ═══ LAYER 4: Foreground content (moves fastest) ═══ */}
            <motion.div
                className="absolute inset-0 flex pointer-events-auto will-change-transform transform-gpu z-[6] items-center"
                style={{
                    y: textScrollY,
                    opacity: fadeOut,
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center h-screen min-h-[600px] max-md:h-[100svh] max-md:items-end max-md:pb-20">
                    <div className="flex flex-col gap-[1.1rem] max-w-[520px] pt-8 max-md:max-w-full max-md:text-center max-md:items-center max-md:pt-0">
                        <motion.span
                            className="inline-flex items-center gap-[0.6rem] font-inter text-sm font-semibold tracking-[0.25em] uppercase text-[#c4b5fd]"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                        >
                            <span className="inline-block w-10 h-0.5 rounded-[1px] bg-gradient-to-r from-indigo-500 to-purple-400 max-md:hidden" />
                            Hello, I'm
                        </motion.span>

                        <motion.h1
                            className="font-poppins text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.1] text-slate-50 m-0 [text-shadow:0_2px_30px_rgba(99,102,241,0.15)]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Ganesh{" "}
                            <span className="bg-gradient-to-br from-[#818cf8] via-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent [text-shadow:none]">Ronghe</span>
                        </motion.h1>

                        {/* Rotating subtitle */}
                        <motion.div
                            className="flex items-center gap-2 h-8 relative max-md:justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                        >
                            <span className="text-[1.1rem] shrink-0">⚡</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={wordIndex}
                                    className="font-inter text-[1.05rem] font-semibold tracking-[0.02em] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap"
                                    initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                                    transition={{ duration: 0.45, ease: "easeInOut" }}
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p
                            className="font-inter text-[0.95rem] leading-[1.75] text-slate-300/85 max-w-[430px] m-0 max-md:text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.5 }}
                        >
                            I build scalable web applications, microservices, and modern UI
                            experiences.
                        </motion.p>

                        <motion.div
                            className="flex items-center gap-4 mt-3 max-md:justify-center max-md:flex-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.7 }}
                        >
                            <a href="#projects" className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-inter text-white no-underline bg-gradient-to-br from-indigo-500 to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.35),_0_0_50px_rgba(99,102,241,0.12),_inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.45),_0_0_80px_rgba(99,102,241,0.18)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-[100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
                                <span className="relative z-10">View Projects</span>
                                <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold font-inter text-slate-200 no-underline bg-indigo-500/5 border border-indigo-500/25 backdrop-blur-md transition-all duration-300 hover:bg-indigo-500/10 hover:border-purple-500/50 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
                                <span>Contact Me</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#030712] to-transparent z-[7] pointer-events-none" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 max-md:bottom-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-[1.375rem] h-[2.25rem] rounded-xl border-[1.5px] border-indigo-500/25 flex justify-center pt-1.5">
                        <div className="w-[3px] h-[7px] rounded-sm bg-gradient-to-b from-indigo-400 to-purple-400 animate-[hero-scroll-pulse_2s_ease-in-out_infinite]" />
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes hero-scroll-pulse {
                    0%, 100% { opacity: 1; transform: translateY(0); }
                    50% { opacity: 0.2; transform: translateY(6px); }
                }
            `}</style>
        </section>
    );
}
