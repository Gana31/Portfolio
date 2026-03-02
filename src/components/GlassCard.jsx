import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function GlassCard({ children, className = "", hoverGlow = true }) {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`
        relative overflow-hidden rounded-2xl
        bg-[var(--glass-bg)] border border-[var(--glass-border)]
        backdrop-blur-xl transition-all duration-500 ${className}
      `}
            whileHover={hoverGlow ? {
                borderColor: "var(--border-hover)",
                y: -4,
                transition: { duration: 0.3 },
            } : {}}
        >
            {/* Radial glow follow cursor */}
            {hoverGlow && (
                <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.08), transparent 50%)`,
                    }}
                />
            )}
            {children}
        </motion.div>
    );
}
