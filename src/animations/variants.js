// Reusable Framer Motion animation variants

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerFast = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

export const slideInFromBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export const viewportConfig = {
    once: true,
    margin: "-80px",
};
