import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Typewriter = ({ text, delay = 0 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * 0.05,
            delay: delay,
            ease: "linear",
        });
        return controls.stop;
    }, []);

    return (
        <span className="inline-block">
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 inline-block w-2.5 h-5 bg-cyan-500 align-middle"
            />
        </span>
    );
};

export default Typewriter;
