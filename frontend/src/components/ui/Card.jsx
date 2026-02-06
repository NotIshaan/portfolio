import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
